#!/usr/bin/env node
// System Heartbeat — local Node.js daemon that answers two questions:
//   1. Which registered projects are currently running? (GET /status)
//   2. Wake a project that is powered down.            (POST /wake/:id)
//
// The Launcher UI polls /status every few seconds and lights up the
// glowing neon dot when the project is alive. "Alive" means either:
//   - its dev-server port answers a TCP connect, OR
//   - a matching process name is visible in `ps`.
//
// Usage:  node server/heartbeat.js
// Default port: 4317 (override with HEARTBEAT_PORT env var).

import http from "node:http";
import net from "node:net";
import fs from "node:fs";
import { spawn, exec } from "node:child_process";
import { promisify } from "node:util";
import { PROJECTS } from "../src/registry.js";

const execp = promisify(exec);
const PORT = Number(process.env.HEARTBEAT_PORT || 4317);

// ---- liveness checks --------------------------------------------------------

function pingPortSingle(port, host, timeout = 400) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      socket.destroy();
      resolve(ok);
    };
    socket.setTimeout(timeout);
    socket.once("connect", () => finish(true));
    socket.once("timeout", () => finish(false));
    socket.once("error", () => finish(false));
    socket.connect(port, host);
  });
}

// Try both IPv4 and IPv6 — Vite often binds to ::1 only.
async function pingPort(port) {
  const [v4, v6] = await Promise.all([
    pingPortSingle(port, "127.0.0.1"),
    pingPortSingle(port, "::1"),
  ]);
  return v4 || v6;
}

async function processRunning(hint) {
  if (!hint) return false;
  try {
    // `ps -Ao command` is portable on macOS and gives the full command line.
    const { stdout } = await execp(`ps -Ao command | grep -v grep | grep -i "${hint.replace(/"/g, '')}" | head -n 5`);
    return stdout.trim().length > 0;
  } catch {
    return false;
  }
}

async function checkProject(p) {
  const [portOk, procOk] = await Promise.all([
    p.port ? pingPort(p.port) : Promise.resolve(false),
    processRunning(p.processHint),
  ]);
  return {
    id: p.id,
    live: portOk || procOk,
    via: portOk ? "port" : procOk ? "process" : null,
    checkedAt: Date.now(),
  };
}

async function fullStatus() {
  const results = await Promise.all(PROJECTS.map(checkProject));
  return Object.fromEntries(results.map((r) => [r.id, r]));
}

// ---- wake-up ----------------------------------------------------------------
//
// Port-driven and idempotent: we never trust a cached child-process handle
// (short-lived commands like `open` exit immediately, and the daemon itself
// may have been restarted). Instead, for each thing we're asked to wake:
//   - if a port is defined and already answers → skip, it's alive
//   - otherwise spawn detached, unref, and move on
// Mac .app launches always call `open` — it's idempotent (focuses the app
// if already running, launches it if not).

function spawnDetached(cmd, cwd) {
  const child = spawn(cmd, {
    cwd,
    shell: true,
    detached: true,
    stdio: "ignore",
    env: { ...process.env, FORCE_COLOR: "0" },
  });
  child.unref();
  return child.pid;
}

async function wake(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return { ok: false, error: "unknown project" };

  const actions = [];

  // Main process.
  if (p.type === "mac" && p.appPath) {
    if (fs.existsSync(p.appPath)) {
      const child = spawn("open", [p.appPath], { detached: true, stdio: "ignore" });
      child.unref();
      actions.push({ target: p.id, cmd: `open "${p.appPath}"`, pid: child.pid });
    } else {
      // No bundle — fall back to the dev command.
      if (!(p.port && (await pingPort(p.port)))) {
        const pid = spawnDetached(p.startCmd, p.cwd);
        actions.push({ target: p.id, cmd: p.startCmd, pid });
      } else {
        actions.push({ target: p.id, skipped: "port already live" });
      }
    }
  } else if (p.startCmd) {
    if (p.port && (await pingPort(p.port))) {
      actions.push({ target: p.id, skipped: "port already live" });
    } else {
      const pid = spawnDetached(p.startCmd, p.cwd);
      actions.push({ target: p.id, cmd: p.startCmd, pid });
    }
  }

  // Sidecars (e.g. HomeSprint's Python backend on :8000).
  for (const sc of p.sidecars ?? []) {
    if (sc.port && (await pingPort(sc.port))) {
      actions.push({ target: sc.id, skipped: "port already live" });
      continue;
    }
    const pid = spawnDetached(sc.cmd, sc.cwd);
    actions.push({ target: sc.id, cmd: sc.cmd, pid });
  }

  return { ok: true, actions };
}

// ---- tiny HTTP server -------------------------------------------------------

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, cors);
    return res.end();
  }

  if (req.method === "GET" && req.url === "/status") {
    const data = await fullStatus();
    res.writeHead(200, { "Content-Type": "application/json", ...cors });
    return res.end(JSON.stringify(data));
  }

  const wakeMatch = req.method === "POST" && req.url?.match(/^\/wake\/([\w-]+)$/);
  if (wakeMatch) {
    const result = await wake(wakeMatch[1]);
    res.writeHead(result.ok ? 200 : 404, { "Content-Type": "application/json", ...cors });
    return res.end(JSON.stringify(result));
  }

  res.writeHead(404, cors);
  res.end("not found");
});

server.listen(PORT, () => {
  console.log(`[heartbeat] listening on http://localhost:${PORT}`);
  console.log(`[heartbeat] tracking: ${PROJECTS.map((p) => p.id).join(", ")}`);
});

// Periodic console pulse so you can watch it from the terminal.
setInterval(async () => {
  const s = await fullStatus();
  const live = Object.values(s).filter((x) => x.live).map((x) => x.id);
  console.log(`[heartbeat] ${new Date().toISOString()} live: ${live.join(", ") || "(none)"}`);
}, 10_000);

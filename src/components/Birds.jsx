import React from "react";

// ── Painterly hand-drawn birds ────────────────────────────────────────────
// Two SVG paths per bird (wings up / wings down) crossfaded via keyframes.
// Each bird follows its own slow drifting arc. Kept small + low-opacity so
// they read as environmental motion, not foreground decoration.

function Bird({ className = "", style = {}, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 24"
      fill="none"
      className={`bird-wing ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Wings UP — visible most of the flap cycle */}
      <path
        className="bird-wing-up"
        d="M2 14 Q 10 2 20 10 Q 30 2 38 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Wings DOWN — shows for a beat each cycle */}
      <path
        className="bird-wing-down"
        d="M2 10 Q 10 20 20 14 Q 30 20 38 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Birds() {
  // Each bird: position, size, flap delay, flight-arc delay
  const flock = [
    { top: "18%", left: "14%", size: 16, flapDelay: "0s", driftDelay: "0s", drift: "drift-a" },
    { top: "10%", left: "26%", size: 14, flapDelay: "0.4s", driftDelay: "2s", drift: "drift-b" },
    { top: "24%", left: "78%", size: 17, flapDelay: "0.2s", driftDelay: "1s", drift: "drift-c" },
    { top: "14%", left: "86%", size: 13, flapDelay: "0.6s", driftDelay: "3s", drift: "drift-a" },
    { top: "30%", left: "8%", size: 12, flapDelay: "0.1s", driftDelay: "1.5s", drift: "drift-b" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {flock.map((b, i) => (
        <div
          key={i}
          className={`absolute text-zinc-700/55 bird-drift-${b.drift.split("-")[1]}`}
          style={{
            top: b.top,
            left: b.left,
            animationDelay: b.driftDelay,
          }}
        >
          <Bird
            size={b.size}
            style={{
              animationDelay: b.flapDelay,
              filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.06))",
            }}
          />
        </div>
      ))}
    </div>
  );
}

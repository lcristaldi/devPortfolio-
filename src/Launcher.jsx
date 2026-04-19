import React, { useEffect, useState, useRef } from "react";
import { PROJECTS } from "./registry.js";
import avatarSrc from "./assets/danny.png";
import dannyIllustratedSrc from "./assets/danny-illustrated.png";
import deskSrc from "./assets/desk.png";
import { SparklesCore } from "./components/Sparkles.jsx";
import TechCarousel from "./components/TechCarousel.jsx";
import Typewriter from "./components/Typewriter.jsx";
import { FileTree } from "./components/FileTree.jsx";
import { BehindTheCodeSection } from "./components/BehindTheCodeSection.jsx";
import { BlogMagazineSection } from "./components/BlogMagazineSection.jsx";
import { BLOGS } from "./blogs.js";
import BrushStrokes from "./components/BrushStrokes.jsx";
import Birds from "./components/Birds.jsx";
import ContactIcons from "./components/ContactIcons.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";

// ── File-tree navigation data ─────────────────────────────────────────────

const NAV_TREE = [
  { name: "home.jsx", type: "file", extension: "jsx", sectionId: "hero" },
  { name: "about.md", type: "file", extension: "md", sectionId: "about" },
  {
    name: "skills",
    type: "folder",
    children: [
      { name: "toolkit.jsx", type: "file", extension: "jsx", sectionId: "skills" },
    ],
  },
  {
    name: "projects",
    type: "folder",
    children: [
      { name: "homesprint.jsx", type: "file", extension: "jsx", sectionId: "projects", projectIdx: 0 },
      { name: "sam-intel.jsx", type: "file", extension: "jsx", sectionId: "projects", projectIdx: 1 },
      { name: "mom-beading-page.jsx", type: "file", extension: "jsx", sectionId: "projects", projectIdx: 2 },
      { name: "shirtfilah.swift", type: "file", extension: "swift", sectionId: "projects", projectIdx: 3 },
      { name: "vinylsheetz.jsx", type: "file", extension: "jsx", sectionId: "projects", projectIdx: 4 },
    ],
  },
  { name: "experience.md", type: "file", extension: "md", sectionId: "experience" },
  {
    name: "behind-the-code",
    type: "folder",
    children: [
      { name: "playlist.spotify", type: "file", extension: "spotify", sectionId: "behind-the-code" },
    ],
  },
  {
    name: "blog",
    type: "folder",
    children: BLOGS.map((b, i) => ({
      name: `${b.slug}.md`,
      type: "file",
      extension: "md",
      sectionId: "blog",
      blogIdx: i,
    })),
  },
  { name: "contact.jsx", type: "file", extension: "jsx", sectionId: "contact" },
];

// ── Placeholder portfolio sections ────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-8 py-20 scroll-mt-8 overflow-hidden">
      <BrushStrokes palette="warm" variant={1} seed={2} />
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">About</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
            A few words
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: paragraph */}
          <div className="space-y-5 text-lg text-zinc-600 leading-relaxed">
            <p>
              Full-Stack Engineer by day, Data Architect by night, and{" "}
              <span className="font-semibold" style={{ color: "#991b1b" }}>
                Hokie for life
              </span>
              . With a Master&apos;s degree and a deep focus on{" "}
              <span className="font-semibold" style={{ color: "#4338ca" }}>
                AI-driven UI/UX
              </span>
              , I specialize in modernizing the way we interact with massive datasets.
              My current work revolves around overhauling federal targeting systems —
              merging server-side logic with sleek, docked-menu interfaces to make AI
              insights move at the speed of thought.
            </p>
            <p>
              I believe the best way to predict the future is to build a dashboard for it.
              That&apos;s why I launched{" "}
              <span className="font-semibold" style={{ color: "#6b21a8" }}>
                Sam Intel
              </span>
              , a specialized intel tool that uses OpenAI embeddings and pgvector to
              map the federal landscape. I don&apos;t just &ldquo;write code&rdquo;;
              I build autonomous systems that solve real-world leverage problems.
              If it involves{" "}
              <span className="font-semibold" style={{ color: "#065f46" }}>
                React, Python, or Large Language Models
              </span>
              , I&apos;m in my element.
            </p>
          </div>

          {/* Right: desk with person floating in front, pointing left */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-square">
              <img
                src={deskSrc}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src={dannyIllustratedSrc}
                alt="Illustration of Danny"
                className="absolute z-10 h-[115%] w-auto -bottom-[8%] -left-[14%] drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)] animate-float-slow"
              />
            </div>
          </div>
        </div>

        {/* Quote block — bottom, centered */}
        <figure className="mt-20 max-w-3xl mx-auto text-center">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-auto h-8 w-8 text-zinc-400"
            fill="currentColor"
          >
            <path d="M7.17 4A5.17 5.17 0 0 0 2 9.17V20h8V10H5.83A1.83 1.83 0 0 1 7.66 8.17H9V4H7.17zm10 0A5.17 5.17 0 0 0 12 9.17V20h8V10h-4.17A1.83 1.83 0 0 1 17.66 8.17H19V4h-1.83z" />
          </svg>
          <blockquote className="mt-5 font-editorial italic text-xl md:text-2xl text-zinc-700 leading-relaxed">
            &ldquo;Somewhere, something incredible is waiting to be known.&rdquo;
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-8 py-20 scroll-mt-8 overflow-hidden">
      <BrushStrokes palette="quiet" variant={2} seed={3} />
      <div className="relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Experience</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
            Where I&apos;ve been
          </h2>
          <p className="mt-3 text-base text-zinc-500">
            From Blacksburg classrooms to shipping real software.
          </p>
        </div>
        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-8 py-20 scroll-mt-8 overflow-hidden">
      <BrushStrokes palette="cool" variant={0} seed={4} />
      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Contact</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
          Let&apos;s build something
        </h2>
        <p className="mt-5 text-lg text-zinc-500">
          Reach out — always up for a good collab.
        </p>
        <div className="mt-12">
          <ContactIcons />
        </div>
      </div>
    </section>
  );
}

const HEARTBEAT_URL = "http://localhost:4317/status";
const POLL_MS = 4000;
// The local heartbeat daemon only exists on my dev machine; in production
// the polling would just spam mixed-content errors, so gate it on DEV.
const HAS_LOCAL_HEARTBEAT = import.meta.env.DEV;

// ── Heartbeat hook ────────────────────────────────────────────────────────

function useHeartbeat() {
  const [status, setStatus] = useState({});
  useEffect(() => {
    if (!HAS_LOCAL_HEARTBEAT) return;
    let alive = true;
    const tick = async () => {
      try {
        const res = await fetch(HEARTBEAT_URL, { cache: "no-store" });
        const json = await res.json();
        if (alive) setStatus(json);
      } catch {
        if (alive) setStatus({});
      }
    };
    tick();
    const id = setInterval(tick, POLL_MS);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);
  return status;
}

async function wakeUp(id) {
  if (!HAS_LOCAL_HEARTBEAT) return;
  await fetch(`http://localhost:4317/wake/${id}`, { method: "POST" });
}

// ── Scroll progress hook ─────────────────────────────────────────────────

function useScrollProgress(threshold = 300) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setProgress(Math.min(y / threshold, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return progress;
}

// ── Icons (inline SVG to avoid a dependency) ──────────────────────────────

const icons = {
  home: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  radar: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5M20.25 16.5V18a2.25 2.25 0 01-2.25 2.25h-1.5M3.75 16.5V18A2.25 2.25 0 006 20.25h1.5M12 12l3-3m0 0a4.5 4.5 0 10-6.364 6.364" />
    </svg>
  ),
  disc: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><line x1="12" y1="3" x2="12" y2="9" />
    </svg>
  ),
  beads: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M3.5 10.5c2 0 2.5 3.5 4.8 3.5s2.4-3.5 4.7-3.5 2.4 3.5 4.7 3.5 2.3-3.5 2.8-3.5" />
      <circle cx="8.3" cy="13.2" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13" cy="10.6" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17.7" cy="13.2" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  dumbbell: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5l11 11" />
      <rect x="1.5" y="8" width="4" height="8" rx="1" transform="rotate(-45 3.5 12)" />
      <rect x="18.5" y="8" width="4" height="8" rx="1" transform="rotate(-45 20.5 12)" />
      <rect x="5" y="10" width="2" height="4" rx="0.5" transform="rotate(-45 6 12)" />
      <rect x="17" y="10" width="2" height="4" rx="0.5" transform="rotate(-45 18 12)" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  apple: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  ),
  external: (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5L10.5 13.5" />
    </svg>
  ),
  zap: (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  chevronDown: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  ),
  sparkle: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
      <path d="M19 14l.9 2.7L22 18l-2.1.3L19 21l-.9-2.7L16 18l2.1-1.3L19 14z" opacity="0.6" />
    </svg>
  ),
};

// ── Status pill ───────────────────────────────────────────────────────────

function StatusPill({ live, remote, iosDemo }) {
  if (iosDemo) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700 ring-1 ring-amber-200/60">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
        iOS Demo
      </span>
    );
  }
  if (remote) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200/60">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
        Deployed
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ${
        live
          ? "bg-emerald-50 text-emerald-700 ring-emerald-200/60"
          : "bg-zinc-100 text-zinc-500 ring-zinc-200/60"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"
        }`}
      />
      {live ? "Live" : "Offline"}
    </span>
  );
}

// ── Hero Avatar (in-page, large) ─────────────────────────────────────────

function HeroAvatar({ progress }) {
  // Fade out the hero avatar as we scroll — the floating one takes over
  const opacity = 1 - progress;
  const scale = 1 - progress * 0.3;

  return (
    <div
      className="transition-none"
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-md" />
        <img
          src={avatarSrc}
          alt="Danny"
          className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-[3px] border-white shadow-xl"
          style={{ objectPosition: "center 28%" }}
        />
      </div>
    </div>
  );
}

// ── Floating mini-avatar (fixed corner) ──────────────────────────────────

function FloatingAvatar({ visible }) {
  return (
    <div className="avatar-float" data-visible={visible ? "true" : "false"}>
      <img src={avatarSrc} alt="Danny" />
      <span>Danny</span>
    </div>
  );
}

// ── Ghibli-style illustrated scene (per project theme) ──────────────────

const NOISE_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")";

function ProjectScene({ project }) {
  const { icon } = project;

  // HomeSprint — Golden-hour cottage on emerald hills
  if (icon === "home") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Ghibli golden-hour sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #fde68a 0%, #fbbf24 22%, #fb923c 52%, #f472b6 78%, #a78bfa 100%)",
          }}
        />
        {/* Watercolor noise */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG }}
        />

        {/* Golden sun */}
        <div className="absolute top-[18%] left-[60%] h-36 w-36 rounded-full bg-yellow-100 opacity-70 blur-2xl" />
        <div className="absolute top-[20%] left-[62%] h-24 w-24 rounded-full bg-yellow-50 opacity-90 blur-md" />
        <div className="absolute top-[22%] left-[64%] h-16 w-16 rounded-full bg-white/95 blur-sm" />

        {/* God rays — soft light beams */}
        <div
          className="absolute top-[20%] left-[64%] h-80 w-32 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(255,255,220,0.9), transparent 70%)",
            transform: "rotate(12deg)",
            transformOrigin: "top",
          }}
        />

        {/* Puffy ghibli clouds */}
        <svg viewBox="0 0 400 100" className="absolute top-[10%] left-[3%] w-[55%] h-24">
          <ellipse cx="60" cy="55" rx="55" ry="20" fill="rgba(255,255,255,0.85)" />
          <ellipse cx="110" cy="42" rx="40" ry="22" fill="rgba(255,255,255,0.9)" />
          <ellipse cx="160" cy="58" rx="48" ry="18" fill="rgba(255,255,255,0.8)" />
          <ellipse cx="200" cy="45" rx="30" ry="18" fill="rgba(255,255,255,0.75)" />
        </svg>
        <svg viewBox="0 0 300 80" className="absolute top-[28%] left-[8%] w-[40%] h-16">
          <ellipse cx="50" cy="40" rx="45" ry="14" fill="rgba(255,244,230,0.7)" />
          <ellipse cx="95" cy="32" rx="30" ry="16" fill="rgba(255,244,230,0.8)" />
          <ellipse cx="130" cy="45" rx="35" ry="13" fill="rgba(255,244,230,0.7)" />
        </svg>

        {/* Mountain + hill layers — atmospheric perspective */}
        <svg
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[60%]"
        >
          {/* Far mountains — lavender */}
          <path
            d="M0,400 L0,180 Q120,110 240,140 Q360,90 480,130 Q600,80 720,120 L800,110 L800,400 Z"
            fill="#8b7fd6"
            opacity="0.55"
          />
          {/* Mid hills — teal green */}
          <path
            d="M0,400 L0,240 Q160,180 320,210 Q480,170 640,200 L800,190 L800,400 Z"
            fill="#0d9488"
            opacity="0.75"
          />
          {/* Front hills — rich Ghibli emerald */}
          <path
            d="M0,400 L0,320 Q200,250 400,290 Q600,250 800,290 L800,400 Z"
            fill="#047857"
          />
          {/* Grass tuft highlights */}
          <path
            d="M0,400 L0,340 Q200,280 400,315 Q600,280 800,315 L800,400 Z"
            fill="#059669"
            opacity="0.6"
          />
        </svg>

        {/* Pine tree cluster — silhouetted */}
        <svg
          viewBox="0 0 120 160"
          className="absolute bottom-[28%] left-[12%] h-20 w-14"
        >
          <polygon points="60,10 40,55 80,55" fill="#052e16" />
          <polygon points="60,35 32,80 88,80" fill="#052e16" />
          <polygon points="60,60 25,110 95,110" fill="#052e16" />
          <rect x="55" y="105" width="10" height="20" fill="#3c2a1e" />
        </svg>
        <svg
          viewBox="0 0 120 160"
          className="absolute bottom-[30%] left-[22%] h-14 w-10"
        >
          <polygon points="60,20 35,65 85,65" fill="#064e3b" />
          <polygon points="60,50 28,95 92,95" fill="#064e3b" />
          <rect x="55" y="90" width="10" height="18" fill="#3c2a1e" />
        </svg>

        {/* Cozy cottage with glowing windows */}
        <svg
          viewBox="0 0 140 110"
          className="absolute bottom-[26%] left-[56%] h-20 w-24"
        >
          {/* Chimney smoke */}
          <ellipse cx="100" cy="18" rx="8" ry="5" fill="rgba(255,255,255,0.5)" />
          <ellipse cx="106" cy="10" rx="6" ry="4" fill="rgba(255,255,255,0.4)" />
          {/* Chimney */}
          <rect x="95" y="28" width="10" height="18" fill="#7f1d1d" />
          {/* Roof */}
          <polygon points="10,58 70,22 130,58" fill="#991b1b" />
          <polygon points="10,58 70,22 130,58" fill="#7f1d1d" opacity="0.3" />
          <line x1="10" y1="58" x2="130" y2="58" stroke="#450a0a" strokeWidth="1.5" />
          {/* Walls — cream */}
          <rect x="20" y="58" width="100" height="45" fill="#fef3c7" />
          {/* Wood trim */}
          <rect x="20" y="58" width="100" height="3" fill="#7c2d12" />
          <line x1="20" y1="80" x2="120" y2="80" stroke="#78350f" strokeWidth="1" opacity="0.4" />
          {/* Door */}
          <rect x="63" y="78" width="16" height="25" fill="#7c2d12" />
          <circle cx="75" cy="91" r="1.2" fill="#fbbf24" />
          {/* Glowing windows */}
          <rect x="28" y="68" width="14" height="12" fill="#fde047" />
          <rect x="28" y="68" width="14" height="12" fill="url(#glow)" opacity="0.8" />
          <line x1="35" y1="68" x2="35" y2="80" stroke="#7c2d12" strokeWidth="1" />
          <line x1="28" y1="74" x2="42" y2="74" stroke="#7c2d12" strokeWidth="1" />
          <rect x="98" y="68" width="14" height="12" fill="#fde047" />
          <line x1="105" y1="68" x2="105" y2="80" stroke="#7c2d12" strokeWidth="1" />
          <line x1="98" y1="74" x2="112" y2="74" stroke="#7c2d12" strokeWidth="1" />
        </svg>

        {/* Fireflies */}
        {[
          { top: "54%", left: "36%", delay: "0s" },
          { top: "62%", left: "30%", delay: "0.7s" },
          { top: "58%", left: "48%", delay: "1.3s" },
          { top: "68%", left: "75%", delay: "0.3s" },
          { top: "55%", left: "85%", delay: "1.1s" },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-yellow-200 animate-pulse"
            style={{
              top: f.top,
              left: f.left,
              boxShadow: "0 0 12px 2px rgba(253,224,71,0.9)",
              animationDelay: f.delay,
              animationDuration: "2.2s",
            }}
          />
        ))}

        {/* Birds in distance */}
        <svg viewBox="0 0 200 40" className="absolute top-[22%] left-[18%] w-20 h-5 opacity-70">
          <path d="M 20 20 Q 25 10 30 20 Q 35 10 40 20" stroke="#1e1b4b" strokeWidth="1.5" fill="none" />
          <path d="M 55 15 Q 60 5 65 15 Q 70 5 75 15" stroke="#1e1b4b" strokeWidth="1.5" fill="none" />
          <path d="M 90 25 Q 95 15 100 25 Q 105 15 110 25" stroke="#1e1b4b" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    );
  }

  // Sam Intel — Starry observatory over a sleeping town
  if (icon === "radar") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep twilight sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #1e1b4b 0%, #3730a3 35%, #4338ca 60%, #7c3aed 85%, #db2777 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG }}
        />

        {/* Milky way band */}
        <div
          className="absolute top-[10%] left-0 right-0 h-40 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(244,114,182,0.3), rgba(147,197,253,0.2) 40%, transparent 70%)",
            transform: "rotate(-15deg)",
          }}
        />

        {/* Stars — many varied sizes */}
        {[
          { top: "5%", left: "10%", s: 2 },
          { top: "12%", left: "30%", s: 3 },
          { top: "8%", left: "55%", s: 2 },
          { top: "15%", left: "78%", s: 4 },
          { top: "22%", left: "20%", s: 2 },
          { top: "25%", left: "45%", s: 3 },
          { top: "20%", left: "88%", s: 2 },
          { top: "32%", left: "8%", s: 3 },
          { top: "35%", left: "60%", s: 2 },
          { top: "38%", left: "85%", s: 3 },
          { top: "10%", left: "70%", s: 2 },
          { top: "28%", left: "35%", s: 1 },
          { top: "42%", left: "15%", s: 2 },
          { top: "45%", left: "50%", s: 2 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: p.top,
              left: p.left,
              height: `${p.s}px`,
              width: `${p.s}px`,
              boxShadow: `0 0 ${p.s * 3}px rgba(255,255,255,0.95)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: "2.8s",
            }}
          />
        ))}

        {/* Crescent moon */}
        <div className="absolute top-[12%] right-[18%]">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 rounded-full bg-yellow-50 shadow-[0_0_50px_rgba(254,240,138,0.6)]" />
            <div className="absolute top-0 left-2 h-20 w-20 rounded-full bg-indigo-950" />
            {/* Moon craters */}
            <div className="absolute top-8 left-12 h-1.5 w-1.5 rounded-full bg-yellow-100/40" />
            <div className="absolute top-12 left-14 h-1 w-1 rounded-full bg-yellow-100/30" />
          </div>
        </div>

        {/* Shooting star */}
        <svg viewBox="0 0 200 60" className="absolute top-[18%] left-[30%] w-32 h-10">
          <line x1="180" y1="10" x2="100" y2="40" stroke="url(#streak)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="100" cy="40" r="2" fill="white" />
          <defs>
            <linearGradient id="streak" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mountain ridges — layered */}
        <svg
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[55%]"
        >
          {/* Far ridge */}
          <polygon
            points="0,400 0,240 120,140 220,210 360,100 500,200 660,130 800,200 800,400"
            fill="#1e1b4b"
            opacity="0.6"
          />
          {/* Mid ridge */}
          <polygon
            points="0,400 0,290 130,210 260,280 400,200 540,270 680,220 800,260 800,400"
            fill="#0f172a"
            opacity="0.85"
          />
          {/* Front ridge */}
          <polygon
            points="0,400 0,340 140,290 290,330 440,280 600,330 760,300 800,320 800,400"
            fill="#020617"
          />
        </svg>

        {/* Pine forest on front ridge */}
        <svg viewBox="0 0 400 60" className="absolute bottom-[12%] left-[15%] w-64 h-10 opacity-90">
          {[30, 70, 120, 170, 220, 270, 320].map((x, i) => (
            <g key={i}>
              <polygon
                points={`${x},50 ${x - 8},25 ${x + 8},25`}
                fill="#020617"
              />
              <polygon
                points={`${x},40 ${x - 10},15 ${x + 10},15`}
                fill="#020617"
              />
            </g>
          ))}
        </svg>

        {/* Warm window glow from sleeping town */}
        <div className="absolute bottom-[8%] left-[45%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_12px_3px_rgba(254,240,138,0.7)]" />
        <div className="absolute bottom-[7%] left-[52%] h-2 w-2 rounded-full bg-orange-200 shadow-[0_0_10px_2px_rgba(253,186,116,0.6)]" />
        <div className="absolute bottom-[10%] left-[65%] h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_10px_2px_rgba(254,240,138,0.7)]" />
      </div>
    );
  }

  // VinylSheetz — Magical sunset over a small town
  if (icon === "disc") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Dramatic sunset sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #fbbf24 0%, #f97316 20%, #ea580c 40%, #db2777 65%, #7e22ce 90%, #3b0764 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG }}
        />

        {/* Huge setting sun */}
        <div className="absolute top-[30%] left-[58%] h-44 w-44 rounded-full bg-yellow-100 opacity-50 blur-3xl" />
        <div className="absolute top-[33%] left-[61%] h-32 w-32 rounded-full bg-orange-100 opacity-70 blur-xl" />
        <div className="absolute top-[36%] left-[64%] h-20 w-20 rounded-full bg-yellow-50 opacity-95" />

        {/* Horizontal light bands across sun */}
        <div className="absolute top-[40%] left-[60%] h-1 w-28 bg-orange-400 opacity-60 rounded-full" />
        <div className="absolute top-[43%] left-[58%] h-1 w-32 bg-pink-400 opacity-50 rounded-full" />

        {/* Wispy cloud streaks */}
        <svg viewBox="0 0 400 60" className="absolute top-[20%] left-[5%] w-[70%] h-10">
          <ellipse cx="60" cy="30" rx="55" ry="6" fill="rgba(251,207,232,0.6)" />
          <ellipse cx="150" cy="35" rx="45" ry="5" fill="rgba(253,186,116,0.5)" />
          <ellipse cx="240" cy="28" rx="40" ry="6" fill="rgba(251,207,232,0.55)" />
        </svg>
        <svg viewBox="0 0 400 60" className="absolute top-[28%] left-[10%] w-[60%] h-8">
          <ellipse cx="80" cy="20" rx="60" ry="4" fill="rgba(254,215,170,0.5)" />
          <ellipse cx="200" cy="25" rx="50" ry="4" fill="rgba(254,215,170,0.6)" />
        </svg>

        {/* Birds flying across sun */}
        <svg viewBox="0 0 200 40" className="absolute top-[32%] left-[35%] w-28 h-6 opacity-80">
          <path d="M 20 20 Q 25 10 30 20 Q 35 10 40 20" stroke="#3b0764" strokeWidth="2" fill="none" />
          <path d="M 60 15 Q 65 5 70 15 Q 75 5 80 15" stroke="#3b0764" strokeWidth="2" fill="none" />
          <path d="M 100 25 Q 105 15 110 25 Q 115 15 120 25" stroke="#3b0764" strokeWidth="2" fill="none" />
        </svg>

        {/* Distant mountain */}
        <svg
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          className="absolute bottom-[25%] w-full h-[30%]"
        >
          <polygon
            points="0,400 0,250 150,180 320,240 500,160 680,230 800,210 800,400"
            fill="#7e22ce"
            opacity="0.5"
          />
        </svg>

        {/* Front hills / town silhouette */}
        <svg
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[30%]"
        >
          <path
            d="M0,200 L0,130 Q100,100 200,115 L240,90 L280,115 L340,100 Q400,80 460,115 L500,95 L540,115 Q620,100 720,120 L800,110 L800,200 Z"
            fill="#1e1b4b"
          />
          {/* Little houses on the ridge */}
          <rect x="210" y="95" width="16" height="20" fill="#0f172a" />
          <polygon points="208,95 218,82 228,95" fill="#0f172a" />
          <rect x="460" y="100" width="14" height="15" fill="#0f172a" />
          <polygon points="458,100 467,88 476,100" fill="#0f172a" />
          {/* Warm window glows */}
          <rect x="214" y="102" width="3" height="4" fill="#fde047" />
          <rect x="463" y="106" width="3" height="3" fill="#fde047" />
        </svg>

        {/* Floating vinyl records — with grooves */}
        <div className="absolute top-[18%] left-[10%] h-20 w-20 rounded-full bg-black shadow-[0_8px_30px_rgba(0,0,0,0.5)] rotate-[15deg]">
          <div className="absolute inset-1 rounded-full border border-white/10" />
          <div className="absolute inset-3 rounded-full border border-white/10" />
          <div className="absolute inset-[28%] rounded-full bg-orange-300" />
          <div className="absolute inset-[42%] rounded-full bg-black" />
          <div className="absolute inset-[48%] rounded-full bg-white/20" />
        </div>
        <div className="absolute bottom-[38%] right-[8%] h-24 w-24 rounded-full bg-black shadow-[0_8px_30px_rgba(0,0,0,0.5)] -rotate-12">
          <div className="absolute inset-1 rounded-full border border-white/10" />
          <div className="absolute inset-3 rounded-full border border-white/10" />
          <div className="absolute inset-5 rounded-full border border-white/10" />
          <div className="absolute inset-[28%] rounded-full bg-pink-300" />
          <div className="absolute inset-[42%] rounded-full bg-black" />
          <div className="absolute inset-[48%] rounded-full bg-white/20" />
        </div>

        {/* Magic sparkles floating */}
        {[
          { top: "22%", left: "45%", delay: "0s" },
          { top: "45%", left: "30%", delay: "0.6s" },
          { top: "38%", left: "80%", delay: "1.1s" },
          { top: "55%", left: "50%", delay: "0.3s" },
          { top: "28%", left: "70%", delay: "1.5s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
            style={{
              top: p.top,
              left: p.left,
              boxShadow: "0 0 10px 2px rgba(255,255,255,0.9)",
              animationDelay: p.delay,
              animationDuration: "2.5s",
            }}
          />
        ))}
      </div>
    );
  }

  // ShirtFilah — dawn run over a quiet lake
  if (icon === "dumbbell") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Cool dawn sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #1e3a8a 0%, #3b5998 25%, #60a5fa 50%, #fbbf24 78%, #fb923c 92%, #fde68a 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG }}
        />

        {/* Rising sun */}
        <div className="absolute top-[52%] left-[52%] h-28 w-28 rounded-full bg-yellow-100 opacity-60 blur-2xl" />
        <div className="absolute top-[56%] left-[56%] h-16 w-16 rounded-full bg-yellow-50 opacity-95 blur-sm" />
        <div className="absolute top-[58%] left-[58%] h-10 w-10 rounded-full bg-white/95" />

        {/* Soft dawn clouds */}
        <svg viewBox="0 0 400 60" className="absolute top-[16%] left-[6%] w-[65%] h-10">
          <ellipse cx="70" cy="30" rx="60" ry="6" fill="rgba(224,242,254,0.5)" />
          <ellipse cx="170" cy="25" rx="45" ry="5" fill="rgba(224,242,254,0.55)" />
          <ellipse cx="260" cy="32" rx="38" ry="5" fill="rgba(224,242,254,0.45)" />
        </svg>

        {/* Distant mountain silhouette */}
        <svg
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          className="absolute top-[48%] w-full h-[22%]"
        >
          <polygon
            points="0,200 0,120 120,70 260,110 420,50 580,100 720,80 800,90 800,200"
            fill="#1e293b"
            opacity="0.7"
          />
        </svg>

        {/* Lake line + soft reflection band */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "68%",
            height: "1px",
            background: "rgba(255,255,255,0.4)",
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: "68%",
            bottom: "22%",
            background:
              "linear-gradient(to bottom, rgba(59,130,246,0.35), rgba(30,58,138,0.55))",
          }}
        />
        {/* Reflection shimmer lines */}
        <div className="absolute top-[72%] left-[44%] h-[2px] w-20 bg-yellow-100/50 rounded-full blur-[1px]" />
        <div className="absolute top-[76%] left-[50%] h-[2px] w-14 bg-yellow-100/40 rounded-full blur-[1px]" />
        <div className="absolute top-[80%] left-[48%] h-[2px] w-24 bg-yellow-100/30 rounded-full blur-[1px]" />

        {/* Shoreline foreground */}
        <svg
          viewBox="0 0 800 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[22%]"
        >
          <path
            d="M0,100 L0,50 Q200,35 400,45 Q600,30 800,40 L800,100 Z"
            fill="#0f172a"
          />
          <path
            d="M0,100 L0,60 Q200,50 400,55 Q600,45 800,52 L800,100 Z"
            fill="#1e293b"
            opacity="0.85"
          />
        </svg>

        {/* Runner silhouette on shoreline */}
        <svg
          viewBox="0 0 40 60"
          className="absolute bottom-[18%] left-[30%] w-6 h-10 opacity-95"
        >
          {/* Head */}
          <circle cx="20" cy="8" r="4" fill="#0f172a" />
          {/* Body leaning forward */}
          <path
            d="M20,12 L17,28 L22,32 L24,46 L28,52 M20,12 L22,26 L14,34 L10,42"
            stroke="#0f172a"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Arms in motion */}
          <path
            d="M20,16 L12,22 M20,16 L30,14"
            stroke="#0f172a"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Morning birds */}
        <svg viewBox="0 0 200 40" className="absolute top-[30%] left-[12%] w-20 h-5 opacity-80">
          <path d="M 20 20 Q 25 12 30 20 Q 35 12 40 20" stroke="#0f172a" strokeWidth="1.5" fill="none" />
          <path d="M 55 15 Q 60 7 65 15 Q 70 7 75 15" stroke="#0f172a" strokeWidth="1.5" fill="none" />
          <path d="M 95 22 Q 100 14 105 22 Q 110 14 115 22" stroke="#0f172a" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Gentle sparkles on water */}
        {[
          { top: "70%", left: "20%", delay: "0s" },
          { top: "74%", left: "38%", delay: "0.6s" },
          { top: "73%", left: "62%", delay: "1.2s" },
          { top: "77%", left: "80%", delay: "0.3s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
            style={{
              top: p.top,
              left: p.left,
              boxShadow: "0 0 8px 2px rgba(255,255,255,0.9)",
              animationDelay: p.delay,
              animationDuration: "2.8s",
            }}
          />
        ))}
      </div>
    );
  }

  return <div className="absolute inset-0 bg-zinc-200" />;
}

// ── Card ──────────────────────────────────────────────────────────────────

function Card({ project, live, expanded, onHover, onLaunch, onWake, onIOSLaunch }) {
  const isRemote = project.type === "web-remote";
  const isIOS = project.type === "ios-appetize";
  const isLive = isRemote || live;

  return (
    <div
      onMouseEnter={onHover}
      className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
        expanded ? "rounded-3xl" : "rounded-t-[10px] rounded-b-[3px]"
      }`}
      style={{
        width: expanded ? "24rem" : "7rem",
        height: "42rem",
        boxShadow: expanded
          ? "0 25px 60px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.04)"
          : "0 30px 40px -16px rgba(25,15,6,0.7), 0 10px 16px -4px rgba(25,15,6,0.45), 0 3px 6px -1px rgba(25,15,6,0.35)",
      }}
    >
      {/* ── Closed: painterly book spine (Ghibli / clothbound) ──────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          expanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Base pigment wash */}
        <div
          className="absolute inset-0 transition-[filter] duration-500 group-hover:brightness-[0.92] group-hover:saturate-[1.1]"
          style={{ background: project.color }}
        />

        {/* Painterly color variation — off-center brush pools, no center gloss */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-90"
          style={{
            background: `
              radial-gradient(ellipse 55% 26% at 28% 22%, ${project.spineHighlight || "#ffffff"}60 0%, transparent 70%),
              radial-gradient(ellipse 45% 30% at 72% 56%, ${project.spineShadow || "#000000"}85 0%, transparent 75%),
              radial-gradient(ellipse 60% 22% at 38% 82%, ${project.spineHighlight || "#ffffff"}40 0%, transparent 80%),
              radial-gradient(ellipse 35% 35% at 68% 30%, ${project.spineShadow || "#000000"}55 0%, transparent 70%),
              radial-gradient(ellipse 30% 18% at 22% 65%, ${project.spineHighlight || "#ffffff"}30 0%, transparent 75%)
            `,
          }}
        />

        {/* Vertical brush streaks — hand-painted directionality */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.22]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='600'><filter id='v'><feTurbulence type='fractalNoise' baseFrequency='0.35 0.018' numOctaves='2' seed='11'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23v)'/></svg>\")",
            backgroundSize: "100% 100%",
          }}
        />

        {/* Watercolor pigment pooling — large soft blotches */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.32]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='600'><filter id='w'><feTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='2' seed='7'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23w)'/></svg>\")",
            backgroundSize: "100% 100%",
          }}
        />

        {/* Paper / cloth grain — fine texture */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.22]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)' opacity='0.9'/></svg>\")",
          }}
        />

        {/* Natural top + bottom darkening — painterly vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,8,4,0.28) 0%, transparent 14%, transparent 86%, rgba(15,8,4,0.32) 100%)",
          }}
        />

        {/* Watercolor wash — gentle lighter passage through the middle,
            like the brush had a bit more water when crossing the spine */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.35]"
          style={{
            background: `
              radial-gradient(ellipse 70% 22% at 50% 34%, rgba(255,248,226,0.55), transparent 75%),
              radial-gradient(ellipse 40% 12% at 42% 60%, rgba(255,248,226,0.35), transparent 80%)
            `,
          }}
        />

        {/* ── Top of book: cover wrap + page block + ditch shadow ───── */}
        {/* Page block — cream pages, flush to the very top so there's no
            colored band across the middle of the top edge, but inset wider
            on the sides so the cover boards wrap up the left and right
            as taller "ear" caps, the way the cover wraps a real bound book. */}
        <div
          className="absolute top-0 left-[7px] right-[7px] h-[10px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #ebd5a1 0%, #d1af70 55%, #a68044 100%)",
          }}
        />

        {/* Fine horizontal lines — individual page edges */}
        <div
          className="absolute top-0 left-[7px] right-[7px] h-[10px] pointer-events-none opacity-55 mix-blend-multiply"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(80,50,22,0) 0px, rgba(80,50,22,0) 0.7px, rgba(80,50,22,0.35) 0.7px, rgba(80,50,22,0.35) 1.5px)",
          }}
        />

        {/* Inner shadows on each side of the page block — sells the
            "cover board wraps up the sides taller than the pages" read */}
        <div
          className="absolute top-0 left-[7px] w-[1.5px] h-[10px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(15,8,4,0.55), transparent)",
          }}
        />
        <div
          className="absolute top-0 right-[7px] w-[1.5px] h-[10px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(15,8,4,0.55), transparent)",
          }}
        />

        {/* Ditch shadow — deep line where page block meets the cover body */}
        <div
          className="absolute top-[10px] left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,8,4,0.75) 0%, rgba(15,8,4,0.15) 100%)",
          }}
        />

        {/* Top gilt treatment — thin line + embossed bar + hand-stitched dashes */}
        <div
          className="absolute top-[6%] left-2 right-2 pointer-events-none"
          style={{ filter: "blur(0.15px)" }}
        >
          {/* Thin outer line */}
          <div className="h-px" style={{ background: "rgba(236, 218, 167, 0.6)" }} />

          <div className="h-[4px]" />

          {/* Embossed thicker bar — highlight on top, shadow on bottom */}
          <div className="relative h-[3px]">
            <div
              className="absolute inset-x-0 top-0 h-[1px]"
              style={{ background: "rgba(255, 240, 190, 0.78)" }}
            />
            <div
              className="absolute inset-x-0 top-[1px] h-[1.25px]"
              style={{ background: "rgba(210, 175, 115, 0.62)" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[0.75px]"
              style={{ background: "rgba(70, 42, 18, 0.58)" }}
            />
          </div>

          <div className="h-[6px]" />

          {/* Hand-stitched dashes */}
          <div
            className="h-[1.5px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(236,218,167,0.58) 0px, rgba(236,218,167,0.58) 3px, transparent 3px, transparent 7px)",
            }}
          />

          {/* Tiny centered diamond flourish */}
          <div className="relative mt-[5px] flex justify-center">
            <div
              className="h-[3.5px] w-[3.5px] rotate-45"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,240,190,0.75) 0%, rgba(180,135,75,0.55) 100%)",
                boxShadow: "0 0.5px 0 rgba(70,42,18,0.55)",
              }}
            />
          </div>
        </div>

        {/* Bottom gilt treatment — mirror, light still from above */}
        <div
          className="absolute bottom-[5%] left-2 right-2 pointer-events-none"
          style={{ filter: "blur(0.15px)" }}
        >
          {/* Tiny centered diamond flourish */}
          <div className="relative mb-[5px] flex justify-center">
            <div
              className="h-[3.5px] w-[3.5px] rotate-45"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,240,190,0.75) 0%, rgba(180,135,75,0.55) 100%)",
                boxShadow: "0 0.5px 0 rgba(70,42,18,0.55)",
              }}
            />
          </div>

          {/* Hand-stitched dashes */}
          <div
            className="h-[1.5px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(236,218,167,0.58) 0px, rgba(236,218,167,0.58) 3px, transparent 3px, transparent 7px)",
            }}
          />

          <div className="h-[6px]" />

          {/* Embossed thicker bar — same light direction as top */}
          <div className="relative h-[3px]">
            <div
              className="absolute inset-x-0 top-0 h-[1px]"
              style={{ background: "rgba(255, 240, 190, 0.78)" }}
            />
            <div
              className="absolute inset-x-0 top-[1px] h-[1.25px]"
              style={{ background: "rgba(210, 175, 115, 0.62)" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[0.75px]"
              style={{ background: "rgba(70, 42, 18, 0.58)" }}
            />
          </div>

          <div className="h-[4px]" />

          {/* Thin outer line */}
          <div className="h-px" style={{ background: "rgba(236, 218, 167, 0.6)" }} />
        </div>

        {/* Soft left-edge binding highlight */}
        <div
          className="absolute left-0 top-[14px] bottom-[8px] w-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,245,215,0.13) 30%, rgba(255,245,215,0.15) 70%, transparent 100%)",
          }}
        />

        {/* Left-edge receiving shadow from neighbor — deep seam */}
        <div
          className="absolute left-0 top-[12px] bottom-[4px] w-[11px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(5,3,1,0.78) 0%, rgba(5,3,1,0.35) 35%, rgba(5,3,1,0.10) 70%, transparent 100%)",
          }}
        />
        {/* Hard hairline at the very left edge */}
        <div
          className="absolute left-0 top-[12px] bottom-[4px] w-[1.5px] pointer-events-none"
          style={{ background: "rgba(2,1,0,0.55)" }}
        />

        {/* Right-edge deeper shadow to neighbor — painterly seam */}
        <div
          className="absolute right-0 top-[12px] bottom-[4px] w-[14px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(3,2,1,0.88) 0%, rgba(3,2,1,0.45) 30%, rgba(3,2,1,0.14) 65%, transparent 100%)",
          }}
        />
        {/* Hard hairline at the very right edge */}
        <div
          className="absolute right-0 top-[12px] bottom-[4px] w-[1.5px] pointer-events-none"
          style={{ background: "rgba(2,1,0,0.65)" }}
        />

        {/* Content — emblem, vertical title, status */}
        <div className="relative h-full flex flex-col items-center justify-between pt-[4.5rem] pb-20">
          {/* Hand-drawn emblem — engraved into cover */}
          <div
            className="flex items-center justify-center w-11 h-11 rounded-full"
            style={{
              border: "1.25px solid rgba(236, 218, 167, 0.58)",
              background: "rgba(236, 218, 167, 0.04)",
              color: "rgba(243, 230, 198, 0.82)",
              boxShadow:
                "inset 0 1px 0 rgba(15,8,4,0.35), 0 1px 0 rgba(255,245,215,0.08)",
              filter: "blur(0.15px)",
            }}
          >
            {icons[project.icon]}
          </div>

          {/* Vertical title — engraved gilt stamping */}
          <span
            className="font-editorial uppercase"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              fontSize: "0.95rem",
              color: "rgba(243, 230, 198, 0.82)",
              letterSpacing: "0.32em",
              textShadow:
                "0 1px 0 rgba(15,8,4,0.6), 0 -0.5px 0 rgba(255,245,215,0.1), 0 0 2px rgba(15,8,4,0.3)",
              filter: "blur(0.15px)",
            }}
          >
            {project.name}
          </span>

          <StatusPill live={live} remote={isRemote} iosDemo={isIOS} />
        </div>
      </div>

      {/* ── Expanded: painted scene — full card background ──────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          expanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* SVG fallback scene (behind image) */}
        <ProjectScene project={project} />

        {/* Watercolor illustration — covers SVG if image loads */}
        {project.scene && (
          <img
            src={project.scene}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: project.scenePosition || "center 55%" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}

        {/* Top dark vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />

        {/* Watercolor paper edge — subtle inset */}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/20 rounded-3xl pointer-events-none" />
      </div>

      {/* ── Expanded content ───────────────────────────────────────── */}
      <div
        className={`relative flex h-full flex-col justify-between p-6 transition-all duration-500 ${
          expanded ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center">
          {/* Title */}
          <h2 className="font-editorial text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {project.name}
          </h2>

          {/* Tagline with decorative dashes */}
          <div className="mt-1 flex items-center justify-center gap-2 font-editorial italic text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            <span className="h-px w-6 bg-white/70" />
            <span className="text-sm">{project.tagline}</span>
            <span className="h-px w-6 bg-white/70" />
          </div>

          {/* Description */}
          <p className="mt-5 font-editorial text-[15px] leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            {project.description}
          </p>

          {/* Tech stack pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-amber-50/95 backdrop-blur px-2.5 py-0.5 text-[11px] font-medium text-zinc-800 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Status pill — top right corner */}
          <div className="absolute top-4 right-4">
            <StatusPill live={live} remote={isRemote} iosDemo={isIOS} />
          </div>
        </div>

        {/* Actions — bottom */}
        {isIOS ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onIOSLaunch?.(project);
              }}
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-xl ring-1 ring-black/5 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-900 before:transition-transform before:duration-700 before:content-[''] hover:-translate-y-0.5 hover:text-white hover:shadow-2xl hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.97]"
            >
              Launch Demo
              {icons.arrow}
            </button>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group/gh inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
                >
                  <span className="inline-flex transition-transform duration-500 group-hover/gh:rotate-[360deg] group-hover/gh:scale-110">
                    {icons.github}
                  </span>
                  GitHub
                </a>
              )}
              {project.testflightUrl && project.testflightUrl !== "#" && (
                <a
                  href={project.testflightUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-zinc-900 ring-1 ring-black/5 hover:bg-white transition-colors"
                >
                  {icons.apple}
                  TestFlight
                </a>
              )}
            </div>
          </div>
        ) : (
        <div className="flex items-center justify-center gap-3">
          {project.prodUrl ? (
            <a
              href={project.prodUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-xl ring-1 ring-black/5 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-900 before:transition-transform before:duration-700 before:content-[''] hover:-translate-y-0.5 hover:text-white hover:shadow-2xl hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.97]"
            >
              Visit Site
              {icons.arrow}
            </a>
          ) : isLive ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLaunch(project);
              }}
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-xl ring-1 ring-black/5 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-900 before:transition-transform before:duration-700 before:content-[''] hover:-translate-y-0.5 hover:text-white hover:shadow-2xl hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.97]"
            >
              Launch Demo
              {icons.arrow}
            </button>
          ) : (
            <button
              onClick={async (e) => {
                e.stopPropagation();
                onWake(project);
              }}
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full bg-amber-100 px-6 py-3 text-base font-semibold text-amber-900 shadow-xl ring-1 ring-amber-300 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-amber-900 before:transition-transform before:duration-700 before:content-[''] hover:-translate-y-0.5 hover:text-amber-50 hover:shadow-2xl hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.97]"
            >
              {icons.zap}
              Wake Up
            </button>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/gh inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-2xl active:scale-[0.97]"
            >
              <span className="inline-flex transition-transform duration-500 group-hover/gh:rotate-[360deg] group-hover/gh:scale-110">
                {icons.github}
              </span>
              GitHub
            </a>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

// ── Main Launcher ─────────────────────────────────────────────────────────

export default function Launcher() {
  const status = useHeartbeat();
  const [expanded, setExpanded] = useState(0);
  const scrollProgress = useScrollProgress(400);
  const projectsRef = useRef(null);

  const launch = (p) => {
    const target = p.prodUrl ?? p.url;
    if (target) window.open(target, "_blank", "noopener");
  };

  const openIOSDemo = (p) => {
    if (p.appetizeUrl) window.open(p.appetizeUrl, "_blank", "noopener");
  };

  const wake = async (p) => {
    await wakeUp(p.id);
  };

  const liveCount =
    PROJECTS.filter((p) => p.type === "web-remote").length +
    Object.values(status).filter((s) => s?.live).length;

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const blogMagazineRef = useRef(null);

  const handleNavSelect = (node) => {
    if (node.sectionId) {
      const el = document.getElementById(node.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    if (typeof node.projectIdx === "number") {
      setExpanded(node.projectIdx);
    }
    if (typeof node.blogIdx === "number") {
      // Cover is page 0, so blog 0 lives on page 1.
      setTimeout(() => {
        blogMagazineRef.current?.flipTo(node.blogIdx + 1);
      }, 450);
    }
  };

  return (
    <div className="min-h-screen lg:pl-[22rem]">
      {/* ── Fixed sparkles background — covers full viewport at all scroll positions ──── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.2}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#a855f7"
          speed={1}
        />
      </div>

      {/* ── File-tree sidebar navigation ──────────────────────────── */}
      <aside className="hidden lg:block fixed top-0 left-0 h-screen w-[22rem] z-20 p-4 overflow-y-auto">
        {/* Profile header */}
        <div className="mb-4 flex items-center gap-3 px-1">
          <div className="relative shrink-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-70 blur-[3px]" />
            <img
              src={avatarSrc}
              alt="Danny"
              className="relative h-11 w-11 rounded-full object-cover border-2 border-white shadow-md"
              style={{ objectPosition: "center 28%" }}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-900">Danny</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              portfolio
            </span>
          </div>
        </div>
        <FileTree data={NAV_TREE} onSelect={handleNavSelect} />
      </aside>

      {/* ── Floating mini-avatar (appears on scroll) ──────────────── */}
      <FloatingAvatar visible={scrollProgress > 0.8} />

      {/* ── Hero / Landing ────────────────────────────────────────── */}
      <section id="hero" className="hero-gradient relative flex min-h-screen flex-col items-center justify-center px-8 overflow-hidden scroll-mt-0">
        {/* Painterly brush strokes behind content */}
        <BrushStrokes palette="hero" variant={0} seed={1} />

        {/* Painterly birds drifting around the hero */}
        <Birds />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-2xl animate-fade-in-up">
          <HeroAvatar progress={scrollProgress} />

          <div
            className="mt-8"
            style={{
              opacity: 1 - scrollProgress * 1.5,
              transform: `translateY(${scrollProgress * -30}px)`,
            }}
          >
            <h1 className="font-display uppercase text-[#1b4b75] leading-[1.1] tracking-[-0.02em] text-4xl md:text-5xl lg:text-[5.25rem]">
              <span className="block">Danny</span>
              <span className="block">Montoya</span>
            </h1>

            <p className="mt-6 font-display uppercase tracking-[0.02em] text-[#1b4b75] text-xs md:text-sm">
              Full-Stack <span className="mx-2 text-[#1b4b75]/60">|</span> AI Agents <span className="mx-2 text-[#1b4b75]/60">|</span> Product Engineering
            </p>

            {/* Typewriter tagline */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-sm ring-1 ring-zinc-200/80">
              <span className="text-sm font-medium text-zinc-700 min-h-[1.25em]">
                <Typewriter
                  phrases={[
                    "Building with AI agents",
                    "Shipping full-stack products",
                    "Building what couldn't exist last year",
                    "Integrating tools end-to-end",
                    "Chasing the bleeding edge",
                  ]}
                />
              </span>
              <span className="text-indigo-500">{icons.sparkle}</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProjects}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-600 transition-colors scroll-hint"
          style={{ opacity: 1 - scrollProgress * 3 }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
            Explore
          </span>
          {icons.chevronDown}
        </button>
      </section>

      {/* ── About ─────────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Tech carousel ─────────────────────────────────────────── */}
      <TechCarousel />

      {/* ── Projects section ──────────────────────────────────────── */}
      <div id="projects" ref={projectsRef} className="relative z-10 overflow-hidden scroll-mt-8">
        <BrushStrokes palette="triad" variant={1} seed={5} />

        {/* Header */}
        <header className="relative max-w-7xl mx-auto px-8 pt-20 pb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Projects
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
            What I&apos;ve Built
          </h2>
          <p className="mt-3 text-base text-zinc-500 max-w-lg mx-auto">
            Hover to explore, click to launch.
          </p>
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm ring-1 ring-zinc-200/80">
            <span
              className={`h-2 w-2 rounded-full ${
                liveCount > 0 ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"
              }`}
            />
            {liveCount}/{PROJECTS.length} systems online
          </div>
        </header>

        {/* Cards */}
        <main className="relative mx-auto max-w-7xl px-8 pb-20">
          <div className="flex w-full items-stretch justify-center gap-0">
            {PROJECTS.map((p, idx) => (
              <Card
                key={p.id}
                project={p}
                live={
                  p.type === "web-remote" || p.type === "ios-appetize"
                    ? true
                    : !!status[p.id]?.live
                }
                expanded={expanded === idx}
                onHover={() => setExpanded(idx)}
                onLaunch={launch}
                onWake={wake}
                onIOSLaunch={openIOSDemo}
              />
            ))}
          </div>
        </main>

      </div>

      {/* ── Experience ────────────────────────────────────────────── */}
      <ExperienceSection />

      {/* ── Behind the Code (Spotify) ─────────────────────────────── */}
      <BehindTheCodeSection />

      {/* ── Reading List (Blog magazine flip-book) ────────────────── */}
      <BlogMagazineSection ref={blogMagazineRef} />

      {/* ── Contact ───────────────────────────────────────────────── */}
      <ContactSection />

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="relative z-10 mx-auto max-w-7xl border-t border-zinc-200 px-8 py-6">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>Built with React + Vite</span>
          <span>Heartbeat on :4317</span>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import BrushStrokes from "./BrushStrokes.jsx";
import { useIsMobile } from "../hooks/useLowPower.js";

// Skillicons.dev — vibrant, consistent cartoony tech icons
const icon = (name) => `https://skillicons.dev/icons?i=${name}`;

const ROW_1 = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "TypeScript", slug: "ts" },
  { name: "JavaScript", slug: "js" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "HTML", slug: "html" },
  { name: "CSS", slug: "css" },
  { name: "Vite", slug: "vite" },
];

const ROW_2 = [
  { name: "Python", slug: "python" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Rust", slug: "rust" },
  { name: "Tauri", slug: "tauri" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Git", slug: "git" },
  { name: "Vercel", slug: "vercel" },
];

const repeat = (arr, n = 3) => Array.from({ length: n }).flatMap(() => arr);

function IconPill({ item, compact = false }) {
  return (
    <div className="group flex-shrink-0 flex flex-col items-center gap-2">
      <div
        className={`${
          compact ? "h-14 w-14 rounded-xl" : "h-20 w-20 rounded-2xl"
        } bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200/70 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)]`}
      >
        <img
          src={icon(item.slug)}
          alt={item.name}
          className={compact ? "h-9 w-9 object-contain" : "h-12 w-12 object-contain"}
          loading="lazy"
        />
      </div>
      <span className={`${compact ? "text-[11px]" : "text-xs"} font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors`}>
        {item.name}
      </span>
    </div>
  );
}

export default function TechCarousel() {
  const isMobile = useIsMobile();
  const row1 = repeat(ROW_1, 3);
  const row2 = repeat(ROW_2, 3);
  // On mobile we show every icon once, wrapped — no marquee animation,
  // no overflow clipping.
  const allIcons = [...ROW_1, ...ROW_2];

  return (
    <section id="skills" className="relative z-10 py-24 overflow-hidden scroll-mt-8">
      {/* Painterly brush strokes */}
      <BrushStrokes palette="cool" variant={2} seed={6} />

      {/* Soft grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Technical skills
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
          My toolkit
        </h2>
        <p className="mt-3 text-base text-zinc-500 max-w-lg mx-auto">
          The stack I reach for when shipping products end-to-end.
        </p>

        {isMobile ? (
          /* Mobile: wrapped grid, every icon visible, no animation */
          <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-5">
            {allIcons.map((item) => (
              <IconPill key={item.slug} item={item} compact />
            ))}
          </div>
        ) : (
          /* Desktop: dual marquees */
          <div className="mt-14 overflow-hidden relative">
            <div className="flex gap-8 w-max animate-scroll-left">
              {row1.map((item, i) => (
                <IconPill key={`r1-${i}`} item={item} />
              ))}
            </div>
            <div className="mt-10 flex gap-8 w-max animate-scroll-right">
              {row2.map((item, i) => (
                <IconPill key={`r2-${i}`} item={item} />
              ))}
            </div>
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none" />
          </div>
        )}
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";

// ── Painterly brush-stroke background ─────────────────────────────────────
// Uses layered SVG paths with turbulence+displacement filters to mimic
// watercolor / gouache. Scroll-triggered reveal + gentle idle drift.

const PALETTES = {
  // Rich painterly red, warm gold, deep artist blue (plus muted support tones)
  hero: [
    { fill: "#c9302c", opacity: 0.12, blur: 3 },   // painterly red
    { fill: "#d4a017", opacity: 0.15, blur: 4 },   // warm gold
    { fill: "#1e3a8a", opacity: 0.10, blur: 3 },   // deep blue
  ],
  warm: [
    { fill: "#b54418", opacity: 0.14, blur: 3 },
    { fill: "#e0a93a", opacity: 0.13, blur: 4 },
    { fill: "#7c2d12", opacity: 0.08, blur: 5 },
  ],
  cool: [
    { fill: "#1e3a8a", opacity: 0.13, blur: 3 },
    { fill: "#0f766e", opacity: 0.10, blur: 4 },
    { fill: "#d4a017", opacity: 0.11, blur: 3 },
  ],
  triad: [
    { fill: "#c9302c", opacity: 0.13, blur: 3 },
    { fill: "#d4a017", opacity: 0.13, blur: 4 },
    { fill: "#1e3a8a", opacity: 0.12, blur: 3 },
  ],
  quiet: [
    { fill: "#7c2d12", opacity: 0.09, blur: 4 },
    { fill: "#1e3a8a", opacity: 0.08, blur: 5 },
    { fill: "#d4a017", opacity: 0.10, blur: 4 },
  ],
};

// Three stroke "shapes" drawn in a 1000x600 viewBox. `object-fit` stretches
// them to fill the parent, which at varying aspect ratios gives each section
// a slightly different composition.
const STROKES = [
  // A: a wide sweeping arc top-left → bottom-right
  [
    "M -80 120 C 180 40 420 60 620 160 S 950 280 1120 240 L 1120 360 C 860 420 520 380 300 420 S 20 440 -80 400 Z",
    "M 40 280 C 260 220 500 260 740 300 S 980 360 1080 340 L 1080 440 C 820 500 540 440 300 480 S 60 440 40 420 Z",
    "M -60 440 C 200 380 480 440 700 460 S 960 500 1080 480 L 1080 560 C 780 600 520 560 260 580 S 20 560 -60 540 Z",
  ],
  // B: diagonal band + secondary highlight
  [
    "M 1060 80 C 780 180 480 120 220 240 S -40 380 -80 440 L -80 540 C 240 520 520 460 760 420 S 1060 340 1080 300 Z",
    "M -40 160 C 220 100 480 180 720 140 S 980 200 1080 180 L 1080 300 C 820 320 540 280 300 300 S 20 340 -40 300 Z",
    "M 120 520 C 380 460 640 500 880 480 S 1060 460 1080 440 L 1080 560 C 820 580 540 560 300 560 S 120 540 120 520 Z",
  ],
  // C: vertical-ish smear + horizon wash
  [
    "M -40 60 C 140 140 340 100 520 220 S 760 420 760 520 L 640 540 C 600 440 540 300 420 220 S 160 120 -40 160 Z",
    "M 500 40 C 640 160 820 220 980 360 S 1080 540 1060 580 L 940 580 C 900 480 800 340 700 260 S 560 140 500 80 Z",
    "M -60 380 C 240 360 560 420 840 400 S 1080 380 1100 360 L 1100 460 C 820 500 540 460 260 480 S 0 460 -60 440 Z",
  ],
];

function BrushSvg({ paths, palette, filterId, reveal, drift }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Watercolor edge — turbulence-driven displacement */}
        <filter
          id={`wc-${filterId}`}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed={filterId}
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="45"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="2.5" />
        </filter>

        {/* Paper grain — high-frequency turbulence overlaid via multiply */}
        <filter id={`paper-${filterId}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="1" seed={filterId + 3} />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55" intercept="0" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      <g
        style={{
          mixBlendMode: "multiply",
          opacity: reveal,
          transform: `translate3d(${drift.x}px, ${drift.y}px, 0)`,
          transition: "opacity 1.4s ease-out",
          willChange: "transform, opacity",
        }}
        filter={`url(#wc-${filterId})`}
      >
        {paths.map((d, i) => {
          const layer = palette[i % palette.length];
          return (
            <path
              key={i}
              d={d}
              fill={layer.fill}
              opacity={layer.opacity}
              style={{
                filter: `blur(${layer.blur}px)`,
              }}
            />
          );
        })}
      </g>

      {/* Second pass — dry-brush paper texture on top of the same shapes */}
      <g
        style={{
          mixBlendMode: "multiply",
          opacity: reveal * 0.55,
          transform: `translate3d(${drift.x * 0.6}px, ${drift.y * 0.6}px, 0)`,
          transition: "opacity 1.4s ease-out",
        }}
        filter={`url(#paper-${filterId})`}
      >
        {paths.slice(0, 2).map((d, i) => {
          const layer = palette[i % palette.length];
          return (
            <path
              key={`p-${i}`}
              d={d}
              fill={layer.fill}
              opacity={layer.opacity * 0.7}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default function BrushStrokes({
  palette = "triad",
  variant = 0,
  seed = 1,
  className = "",
}) {
  const hostRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Reveal on viewport entry
  useEffect(() => {
    if (!hostRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setRevealed(true);
        });
      },
      { threshold: 0.08 }
    );
    obs.observe(hostRef.current);
    return () => obs.disconnect();
  }, []);

  // Gentle parallax drift — decoupled from section entry so it keeps moving
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const paths = STROKES[variant % STROKES.length];
  const colors = PALETTES[palette] || PALETTES.triad;

  // parallax offsets — small and asymmetric per seed so layers feel alive
  const drift = {
    x: Math.sin((scrollY + seed * 80) / 180) * 14,
    y: (scrollY * 0.04 - seed * 6) % 40,
  };

  return (
    <div
      ref={hostRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        maskImage:
          "radial-gradient(ellipse 108% 105% at 50% 45%, black 58%, transparent 96%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 108% 105% at 50% 45%, black 58%, transparent 96%)",
      }}
      aria-hidden="true"
    >
      <BrushSvg
        paths={paths}
        palette={colors}
        filterId={seed}
        reveal={revealed ? 1 : 0}
        drift={drift}
      />
    </div>
  );
}

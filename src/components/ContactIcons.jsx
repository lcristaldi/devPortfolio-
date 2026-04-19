import React, { useState } from "react";

// ── Isometric 3D "app-icon" cubes ─────────────────────────────────────────
// Three boxy tiles (GitHub / LinkedIn / Email) in a straight horizontal row.
// Lift + glow on hover. Brand color washes over the cube on hover.

function IsoCube({ href, label, brand, iconType, external = true }) {
  const [hov, setHov] = useState(false);

  // Cube geometry (80×96 viewBox):
  //   top-left of top rhombus at (9.5, 32)
  //   rhombus is 31×31 in local, skewed via matrix(0.866 -0.5 0.866 0.5 …)
  const faceRight = hov ? brand : "#3F454E";
  const faceLeft = hov ? shade(brand, 0.72) : "#3F454E";
  const faceTop = hov ? shade(brand, 1.1) : "#414750";
  const plateStroke = hov ? "#ffffff" : "#6B727C";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group flex flex-col items-center gap-2"
    >
      <svg
        width="96"
        height="72"
        viewBox="0 10 80 60"
        fill="none"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
        style={{ filter: hov ? `drop-shadow(0 12px 18px ${brand}40)` : "drop-shadow(0 4px 10px rgba(0,0,0,0.08))", transition: "filter 300ms" }}
      >
        {/* Right face (lighter shade) */}
        <rect
          fill={faceRight}
          transform="matrix(0.866025 0.5 0 1 9.5 32)"
          width="31"
          height="17"
          style={{ transition: "fill 300ms" }}
        />
        {/* Left face (darker shade) — tx aligned to rhombus right vertex (63.2) */}
        <rect
          fill={faceLeft}
          transform="matrix(-0.866025 0.5 0 1 63.2 32)"
          width="31"
          height="17"
          style={{ transition: "fill 300ms" }}
        />
        {/* Top rhombus */}
        <rect
          fill={faceTop}
          transform="matrix(0.866025 -0.5 0.866025 0.5 9.5 32)"
          width="31"
          height="31"
          style={{ transition: "fill 300ms" }}
        />
        <rect
          stroke="#3C4149"
          transform="matrix(0.866025 -0.5 0.866025 0.5 9.5 32)"
          width="31"
          height="31"
        />
        {/* Inner icon plate */}
        <rect
          stroke={plateStroke}
          strokeWidth="0.5"
          transform="matrix(0.866025 -0.5 0.866025 0.5 17 31.7)"
          rx="1.5"
          width="21"
          height="21"
          style={{ transition: "stroke 300ms" }}
        />
        {/* Icon — drawn on the rhombus via the same matrix */}
        <g transform="matrix(0.866025 -0.5 0.866025 0.5 17 31.7)">
          <g transform="translate(10.5 10.5)">
            <IconGlyph type={iconType} color={hov ? "#ffffff" : "#6B727C"} />
          </g>
        </g>
      </svg>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-900 transition-colors">
        {label}
      </span>
    </a>
  );
}

function IconGlyph({ type, color }) {
  const style = { fill: color, transition: "fill 300ms" };
  if (type === "github") {
    return (
      <g transform="translate(-6 -6) scale(0.5)">
        <path
          style={style}
          d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.387-1.336-1.756-1.336-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.808 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.806 5.624-5.48 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.292 0 .32.216.694.824.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
        />
      </g>
    );
  }
  if (type === "linkedin") {
    return (
      <g transform="translate(-6 -6) scale(0.5)">
        <path
          style={style}
          d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.25c0-.97-.78-1.75-1.75-1.75S12.5 12.78 12.5 13.75V19h-3V9h3v1.4c.6-.88 1.62-1.4 2.75-1.4A3.75 3.75 0 0 1 19 12.75V19z"
        />
      </g>
    );
  }
  // email
  return (
    <g transform="translate(-6.5 -5) scale(0.54)">
      <path
        style={style}
        d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L3.8 6.8a.3.3 0 0 0-.3.52L12 13l8.5-5.68a.3.3 0 0 0-.3-.52L12 12.2z"
      />
    </g>
  );
}

// Mix a hex color toward white (t>1) or black (t<1). Crude but fine for tints.
function shade(hex, t) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const mix = (c) => {
    const v = t >= 1 ? c + (255 - c) * (t - 1) : c * t;
    return Math.max(0, Math.min(255, Math.round(v)));
  };
  const toHex = (c) => c.toString(16).padStart(2, "0");
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`;
}

export default function ContactIcons() {
  return (
    <div className="flex items-start justify-center gap-6 md:gap-10">
      <IsoCube
        href="https://github.com/dfmontoya02"
        label="GitHub"
        brand="#6e5494"
        iconType="github"
      />
      <IsoCube
        href="https://www.linkedin.com/in/daniel-montoya-1bba8421b/"
        label="LinkedIn"
        brand="#0a66c2"
        iconType="linkedin"
      />
      <IsoCube
        href="mailto:dfmreyes02@gmail.com"
        label="Email"
        brand="#c9302c"
        iconType="email"
        external={false}
      />
    </div>
  );
}

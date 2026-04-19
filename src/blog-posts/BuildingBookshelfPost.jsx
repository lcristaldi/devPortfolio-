import React from "react";
import BrushStrokes from "../components/BrushStrokes.jsx";
import avatarSrc from "../assets/danny.png";

const goBack = (e) => {
  e.preventDefault();
  window.location.hash = "#blog";
  setTimeout(() => {
    document.getElementById("blog")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 80);
};

function Figure({ src, caption, className = "" }) {
  return (
    <figure className={`my-10 ${className}`}>
      <div
        className="relative overflow-hidden rounded-sm bg-[#f1e9d6]"
        style={{
          boxShadow:
            "0 30px 60px -30px rgba(60,40,20,0.45), 0 0 0 1px rgba(80,50,20,0.08)",
        }}
      >
        {/* Torn tape */}
        <div
          aria-hidden
          className="absolute -top-2 left-8 h-6 w-20 rotate-[-4deg] bg-amber-100/70"
          style={{
            boxShadow: "inset 0 0 12px rgba(160,110,50,0.25)",
            clipPath:
              "polygon(2% 10%, 98% 0%, 100% 78%, 96% 100%, 4% 92%, 0% 30%)",
          }}
        />
        <img src={src} alt="" className="block w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-editorial italic text-[13px] text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function CodeBlock({ title, children, lang }) {
  return (
    <div className="my-8">
      {title && (
        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          <span className="h-px flex-1 bg-zinc-300/70" />
          <span>{title}</span>
          {lang && (
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-zinc-500 ring-1 ring-zinc-200/80">
              {lang}
            </span>
          )}
          <span className="h-px flex-1 bg-zinc-300/70" />
        </div>
      )}
      <pre
        className="relative overflow-x-auto rounded-md bg-[#2b261f] p-5 text-[12.5px] leading-relaxed text-amber-50 shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,230,180,0.04), transparent 30%)",
          boxShadow:
            "0 24px 48px -24px rgba(40,30,20,0.5), inset 0 0 0 1px rgba(255,220,160,0.08)",
        }}
      >
        <code className="font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

function Aside({ title, children }) {
  return (
    <aside
      className="my-10 rounded-sm border border-amber-900/15 bg-[#f6ecd4]/70 p-6 text-zinc-700 shadow-inner"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.02), transparent 30%)" }}
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900/70">
        {title}
      </p>
      <div className="font-editorial text-[15px] leading-relaxed italic text-zinc-700">
        {children}
      </div>
    </aside>
  );
}

function PaletteSwatches() {
  const swatches = [
    { name: "Moss", hex: "#6b8258" },
    { name: "Twilight", hex: "#546988" },
    { name: "Terracotta", hex: "#b87a3d" },
    { name: "Plum", hex: "#9a5555" },
    { name: "Cognac", hex: "#7d4a2a" },
  ];
  return (
    <div className="my-10">
      <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
        Final painterly palette
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {swatches.map((s) => (
          <div key={s.hex} className="flex flex-col items-center">
            <div
              className="h-16 w-16 rounded-full ring-4 ring-[#fbf6ec]"
              style={{
                background: s.hex,
                boxShadow: `0 8px 20px -6px ${s.hex}aa, inset 0 0 18px rgba(0,0,0,0.15)`,
              }}
            />
            <span className="mt-2 text-[11px] font-semibold text-zinc-700">
              {s.name}
            </span>
            <span className="font-mono text-[10px] text-zinc-400">{s.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BuildingBookshelfPost() {
  return (
    <div className="relative min-h-screen bg-[#fbf6ec] text-zinc-800">
      {/* Paper grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.22] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>\")",
        }}
      />

      {/* Painterly background washes */}
      <div className="pointer-events-none fixed inset-0">
        <BrushStrokes palette="warm" variant={0} seed={2} />
      </div>

      {/* Back link — floats, always visible */}
      <a
        href="#"
        onClick={goBack}
        className="group fixed left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[12px] font-semibold text-zinc-700 shadow-md ring-1 ring-zinc-200/80 backdrop-blur-md transition-all hover:-translate-x-0.5 hover:bg-white hover:text-zinc-900 hover:shadow-lg md:left-8 md:top-6"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to the shelf
      </a>

      <article className="relative z-10 mx-auto max-w-[44rem] px-6 pb-28 pt-20 md:px-0">
        {/* Eyebrow */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8258]">
            Build Log · Vol. 01
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-zinc-900 md:text-6xl">
            Building a Painterly Bookshelf
          </h1>
          <p className="mt-5 mx-auto max-w-xl font-editorial text-[17px] italic leading-relaxed text-zinc-600">
            How a flat grid of project cards became a Studio Ghibli–inspired
            bookshelf — watercolor turbulence, gilt bands, and the long search
            for matte-not-glossy.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-[12px] text-zinc-500">
            <img
              src={avatarSrc}
              alt="Danny"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-white shadow"
              style={{ objectPosition: "center 28%" }}
            />
            <span className="font-semibold text-zinc-700">Danny</span>
            <span className="text-zinc-300">·</span>
            <span>Apr 16, 2026</span>
            <span className="text-zinc-300">·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400/60 to-transparent" />

        {/* The concept image */}
        <Figure
          src="/assets/blog/bookshelf-concept.jpg"
          caption="The pinboard image that started it all — painterly fantasy book spines, matte not glossy."
        />

        {/* Body */}
        <div className="font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            <span
              className="float-left mr-3 mt-1 font-display text-[72px] leading-[0.85] text-[#6b8258]"
              style={{ textShadow: "0 2px 0 rgba(107,130,88,0.15)" }}
            >
              T
            </span>
            he portfolio started the way most portfolios do: a grid of cards
            with rounded corners, a subtle drop shadow, and a hover state that
            lifts them half a millimeter. It was fine. It was{" "}
            <em>completely forgettable.</em> Five projects, five cards, one
            mood — and the mood was <span className="font-mono not-italic text-[14px]">npx create-next-app</span>.
          </p>

          <p className="mt-6">
            Then I saved the image above to a scratch folder and couldn&apos;t
            stop looking at it. Four worn hardcovers standing on a painted
            shelf, each one a different pigment, each one clearly{" "}
            <em>a thing someone cared about.</em> I wanted the projects to feel
            like that — not tiles in a gallery, but volumes on a shelf.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.08em] text-zinc-900 md:text-3xl">
          The first attempt was too shiny
        </h2>

        <div className="mt-5 font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            Version one was a straight cosmetic pass: tall cards, a glossy
            gradient down each spine, a center-light highlight to suggest
            curvature. It read as &quot;book&quot;, technically. It also read
            as a CSS-tricks tutorial from 2014. The shiny texture was doing
            all the wrong work — it said <em>software chrome</em> when I
            wanted <em>painted cloth</em>.
          </p>
          <p className="mt-6">
            The fix wasn&apos;t more gradient stops; it was removing the
            gradient entirely and replacing the light model with something
            that behaves like pigment on paper. That meant committing to SVG
            filters.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.08em] text-zinc-900 md:text-3xl">
          Pigment, with turbulence
        </h2>

        <div className="mt-5 font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            Watercolor has two readable qualities: edges that wander
            (displacement) and pigment that pools unevenly (low-frequency
            noise). Both fall out of <span className="font-mono not-italic text-[14px]">feTurbulence</span>{" "}
            if you tune the frequencies right. One layer for the soft brush
            stroke, a second for the paper grain on top.
          </p>
        </div>

        <CodeBlock title="The watercolor filter" lang="svg">{`<filter id="wc">
  <feTurbulence
    type="fractalNoise"
    baseFrequency="0.012"   /* low freq → soft wandering edge */
    numOctaves="2"
    seed={seed}
  />
  <feDisplacementMap
    in="SourceGraphic"
    scale="45"              /* how far the edge wanders  */
    xChannelSelector="R"
    yChannelSelector="G"
  />
  <feGaussianBlur stdDeviation="2.5" />
</filter>

<filter id="paper">
  <feTurbulence baseFrequency="1.6" numOctaves="1" />
  <feColorMatrix type="saturate" values="0" />
  /* multiply this over the stroke → paper grain */
</filter>`}</CodeBlock>

        <div className="font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            The trick I kept coming back to: layer the same stroke{" "}
            <em>twice</em>. Once with <span className="font-mono not-italic text-[14px]">mix-blend-multiply</span>{" "}
            for the pigment body, once with the paper filter on top at reduced
            opacity. The second pass is what sells it. Without it, you&apos;ve
            got a blurred blob. With it, you&apos;ve got something that looks
            like it was laid down by a wet brush on cold-press.
          </p>
        </div>

        <PaletteSwatches />

        <Aside title="A note on color">
          Every color on the shelf is <em>dusty</em>. The jump from{" "}
          <span className="font-mono not-italic text-[13px]">#16a34a</span>{" "}
          (Tailwind&apos;s emerald) to{" "}
          <span className="font-mono not-italic text-[13px]">#6b8258</span>{" "}
          (moss) is the difference between a Slack notification and a
          hand-painted book cover. Saturation is the tax vibrancy pays to
          ride along.
        </Aside>

        <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.08em] text-zinc-900 md:text-3xl">
          Anatomy of a book
        </h2>

        <div className="mt-5 font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            Once the surface felt right, the books themselves needed actual
            <em> anatomy</em> — the thing that makes a stack of rectangles read
            as bound volumes instead of bookmark bars.
          </p>

          <ul className="mt-6 space-y-3 pl-6">
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#6b8258]" />
              <strong>Gilt bands</strong> at top and bottom — thin amber lines
              with a stitched dash row below. This is the single highest
              signal-to-noise detail on the whole card.
            </li>
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#546988]" />
              <strong>Cover-to-pages ditch</strong> at the top edge — a
              hairline, then a cream block for pages, then a shadow where the
              cover overhangs. Four stacked absolutes, each one almost
              invisible alone.
            </li>
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#b87a3d]" />
              <strong>Inter-book seam</strong> — a 6px soft shadow on the left
              of every spine and a 9px one on the right. When the books sit at{" "}
              <span className="font-mono not-italic text-[14px]">gap-0</span>,
              those shadows overlap into a seam that looks drawn, not
              computed.
            </li>
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#9a5555]" />
              <strong>Engraved, not perfect</strong> — the title text and the
              emblem get a <span className="font-mono not-italic text-[14px]">filter: blur(0.15px)</span>.
              Not enough to read as blurry. Just enough that it stops looking
              like Helvetica stamped by a laser.
            </li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.08em] text-zinc-900 md:text-3xl">
          The unperfectness pass
        </h2>

        <div className="mt-5 font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            This was the pass that took the longest and looks the least like
            anything. The books were already painterly, but they were{" "}
            <em>evenly</em> painterly. Every spine had the same lighting, the
            same stroke direction, the same pool of pigment in the same spot.
            The eye clocks that instantly and reads it as a texture, not a
            painting.
          </p>
        </div>

        <CodeBlock title="Off-center pigment pools" lang="jsx">{`// Not a center highlight — two off-axis radial pools,
// at different sizes, with soft-light blending.
<div style={{
  background: \`
    radial-gradient(ellipse 60% 40% at 30% 20%,
      \${spineHighlight}33, transparent 70%),
    radial-gradient(ellipse 40% 60% at 75% 75%,
      \${spineShadow}55, transparent 60%)
  \`,
  mixBlendMode: "soft-light",
}} />`}</CodeBlock>

        <Aside title="Brainstorm scrap">
          glossy = uniform highlight → matte = irregular pooling<br />
          perfect stamp = laser engraved → engraved = 0.15px blur<br />
          flat shelf = no wood grain → wood = two brown tints + noise<br />
          <span className="not-italic text-[12px] text-zinc-500">
            (the whole notes file was lines like this — three words, an arrow,
            a hex code)
          </span>
        </Aside>

        <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.08em] text-zinc-900 md:text-3xl">
          Small things that mattered
        </h2>

        <div className="mt-5 font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            There was a round of polish that felt microscopic at the time and
            made a disproportionate difference:
          </p>
          <ul className="mt-6 space-y-3 pl-6">
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#7d4a2a]" />
              The status pill was <em>touching the top gilt band.</em> Moved
              it up 8px. Immediately looked like a real book.
            </li>
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#7d4a2a]" />
              The project emblem was <em>touching the bottom gilt band.</em>{" "}
              Same fix, opposite direction.
            </li>
            <li className="relative">
              <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-[#7d4a2a]" />
              &ldquo;Mom&apos;s Beadwork&rdquo; had a vinyl record icon, because
              Lucide&apos;s <span className="font-mono not-italic text-[14px]">disc</span>{" "}
              was the first circular thing I grabbed. Swapped for a custom
              arc-with-three-beads SVG. My mom noticed.
            </li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.08em] text-zinc-900 md:text-3xl">
          What I&apos;d change next
        </h2>

        <div className="mt-5 font-editorial text-[18px] leading-[1.75] text-zinc-800">
          <p>
            The shelf is load-bearing now, which means I can&apos;t quietly
            rewrite it on a whim. But if I were starting over I&apos;d bake
            the turbulence into a static image per spine at build time — the
            SVG filter stack is beautiful in Chrome and slightly apologetic
            in Safari. The matte look doesn&apos;t need to be live; it just
            needs to <em>feel</em> live.
          </p>
          <p className="mt-6">
            The other thing: I&apos;d lean harder into the unperfectness. More
            asymmetry between spines. A book that leans. A spine with its
            title scuffed off where a thumb would sit. Right now every book
            is worn the same amount. Real shelves never are.
          </p>
        </div>

        <div className="mx-auto my-16 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400/60 to-transparent" />

        <p className="text-center font-editorial text-[15px] italic text-zinc-500">
          Thanks for reading. If a spine catches your eye, pull it off the
          shelf — the books open.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            onClick={goBack}
            className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-xl ring-1 ring-black/5 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-900 before:transition-transform before:duration-700 before:content-[''] hover:-translate-y-0.5 hover:text-white hover:shadow-2xl hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.97]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to the shelf
          </a>
        </div>
      </article>
    </div>
  );
}

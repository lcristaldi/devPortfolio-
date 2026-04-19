import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { BLOGS } from "../blogs.js";
import avatarSrc from "../assets/danny.png";

const COVER_SRC = "/assets/blog-cover.jpg";

const Cover = forwardRef(function Cover(_, ref) {
  return (
    <div ref={ref} className="page" data-density="hard">
      <div
        className="relative h-full w-full overflow-hidden rounded-r-md"
        style={{
          backgroundImage: `url(${COVER_SRC})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow:
            "inset -4px 0 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Subtle gilt edge on the right binding */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-l from-amber-200/40 to-transparent" />
      </div>
    </div>
  );
});

const BackCover = forwardRef(function BackCover(_, ref) {
  return (
    <div ref={ref} className="page" data-density="hard">
      <div className="relative h-full w-full bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-l-md flex items-center justify-center p-10 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
            Piece of Mind
          </p>
          <p className="mt-3 font-display text-2xl text-zinc-700">
            Vol. 01
          </p>
          <p className="mt-6 text-xs text-zinc-500 leading-relaxed max-w-[16rem] mx-auto">
            More entries arriving as I write them. Reach me at{" "}
            <a
              href="mailto:dfmreyes02@gmail.com"
              className="font-mono text-zinc-700 underline decoration-zinc-300 decoration-1 underline-offset-2 transition-colors hover:text-zinc-900 hover:decoration-zinc-500"
            >
              dfmreyes02@gmail.com
            </a>{" "}
            if a piece sparks something.
          </p>
        </div>
      </div>
    </div>
  );
});

const BlogPage = forwardRef(function BlogPage({ blog, pageNumber, total }, ref) {
  const isExternal = blog.author === "external";

  return (
    <div ref={ref} className="page">
      <div className="relative h-full w-full bg-[#fbf6ec] rounded-sm overflow-hidden flex flex-col">
        {/* Paper grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>\")",
          }}
        />

        {/* Header image */}
        <div className="relative h-[42%] overflow-hidden">
          <img
            src={blog.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf6ec] via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center rounded-full bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-700 ring-1 ring-zinc-200"
              style={{ color: blog.accent }}
            >
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col px-6 pt-4 pb-10">
          <h3 className="font-editorial text-[1.45rem] leading-[1.15] text-zinc-900">
            {blog.title}
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-zinc-600 line-clamp-5">
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-zinc-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isExternal ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 ring-1 ring-zinc-200 text-base">
                  📖
                </div>
              ) : (
                <img
                  src={avatarSrc}
                  alt="Danny"
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  style={{ objectPosition: "center 28%" }}
                />
              )}
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold text-zinc-800">
                  {isExternal ? blog.externalAuthor : "Danny"}
                </span>
                <span className="text-[10px] text-zinc-400">{blog.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-500">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {blog.readTime}
            </div>
          </div>

          <a
            href={blog.url}
            target={isExternal ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: blog.accent }}
          >
            {isExternal ? "Read on the original site" : "Read full piece"}
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          {/* Page number */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/10 text-[10px] uppercase tracking-[0.22em] font-semibold text-zinc-600">
            {pageNumber} / {total}
          </div>
        </div>
      </div>
    </div>
  );
});

export const BlogMagazineSection = forwardRef(function BlogMagazineSection(
  _,
  ref
) {
  const flipBookRef = useRef(null);

  useImperativeHandle(ref, () => ({
    flipTo: (pageIdx) => {
      const api = flipBookRef.current?.pageFlip?.();
      if (!api) return;
      try {
        api.flip(pageIdx);
      } catch (e) {
        // pageflip throws if not yet mounted; swallow.
      }
    },
  }));

  return (
    <section
      id="blog"
      className="relative z-10 px-8 py-20 scroll-mt-8 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Reading list
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
            Piece of mind
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-zinc-500 leading-relaxed">
            A small magazine of things I've written and pieces by others I keep
            coming back to. Drag a corner to turn the page.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="magazine-shadow">
            <HTMLFlipBook
              ref={flipBookRef}
              width={400}
              height={560}
              size="fixed"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={700}
              maxShadowOpacity={0.45}
              drawShadow
              showCover
              flippingTime={700}
              usePortrait={false}
              mobileScrollSupport
              className="magazine-flipbook"
              style={{ background: "transparent" }}
            >
              <Cover />
              {BLOGS.map((blog, i) => (
                <BlogPage
                  key={blog.id}
                  blog={blog}
                  pageNumber={i + 1}
                  total={BLOGS.length}
                />
              ))}
              <BackCover />
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </section>
  );
});

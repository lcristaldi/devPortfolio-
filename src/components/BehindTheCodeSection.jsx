import React from "react";

const PLAYLIST_EMBED =
  "https://open.spotify.com/embed/playlist/2xWsevx8q44uHiCWd5Tync?utm_source=generator";
const PLAYLIST_URL =
  "https://open.spotify.com/playlist/2xWsevx8q44uHiCWd5Tync";

export function BehindTheCodeSection() {
  return (
    <section
      id="behind-the-code"
      className="relative z-10 px-8 py-20 scroll-mt-8 overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Behind the code
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase tracking-[0.02em] text-zinc-900 leading-[1.05]">
            What I'm coding to
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500 leading-relaxed">
            The playlist that runs in the background while I ship — heavy on
            atmosphere, light on lyrics. Hit play, or open it in Spotify for
            the full mix.
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden p-4 md:p-5"
          style={{
            background:
              "linear-gradient(135deg, #8a3d12 0%, #6e2d0a 60%, #4a1d05 100%)",
            boxShadow:
              "0 25px 50px -18px rgba(60,25,8,0.5), 0 0 0 1px rgba(255,180,120,0.08)",
          }}
        >
          {/* Soft warm glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100/15 ring-1 ring-amber-200/30">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-amber-100"
                >
                  <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 17.3a.75.75 0 01-1.03.25c-2.83-1.73-6.4-2.12-10.59-1.16a.75.75 0 11-.34-1.46c4.59-1.05 8.55-.6 11.71 1.34.36.22.47.69.25 1.03zm1.47-3.27a.94.94 0 01-1.29.31c-3.24-1.99-8.18-2.57-12.01-1.4a.94.94 0 11-.55-1.8c4.39-1.34 9.84-.7 13.55 1.6.45.27.59.86.3 1.29zm.13-3.4C15.42 8.4 8.62 8.18 4.96 9.31a1.13 1.13 0 11-.66-2.16c4.21-1.29 11.71-1.04 16.32 1.71a1.13 1.13 0 01-1.16 1.94z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-amber-200/70">
                  Now playing — coding session
                </p>
                <p className="text-sm font-semibold text-amber-50">
                  Behind the Code · curated by Danny
                </p>
              </div>
            </div>

            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-amber-200 px-3.5 py-1.5 text-[11px] font-semibold text-[#5a2a0d] shadow-md hover:bg-amber-100 transition-colors"
            >
              Open in Spotify
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
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <div className="relative overflow-hidden rounded-xl ring-1 ring-amber-100/10">
            <iframe
              title="Behind the Code playlist"
              src={PLAYLIST_EMBED}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import avatarSrc from "../assets/danny.png";

const ORANGE = "#e0531c";        // vivid pulp orange
const ORANGE_DEEP = "#b53b14";   // deeper red-orange for borders / shadows
const INK = "#181210";           // warm near-black body text
const INK_DIM = "#6b5a4a";       // muted brown for secondary text
const CREAM = "#f6ead0";         // warm cream page
const CREAM_DEEP = "#ecdcb1";    // slightly deeper cream for cards / blocks

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

/* ── Chapter card — big bold Tarantino-style title block ── */
function Chapter({ num, title }) {
  return (
    <div className="my-16 text-center">
      <p
        className="font-mono text-[12px] font-bold uppercase tracking-[0.32em]"
        style={{ color: ORANGE_DEEP }}
      >
        chapter {num}
      </p>
      <h2
        className="mt-3 font-serif text-[44px] font-black uppercase leading-[0.92] tracking-[-0.01em] md:text-[56px]"
        style={{ color: INK }}
      >
        {title}
      </h2>
      <div className="mx-auto mt-5 h-1 w-16" style={{ background: ORANGE }} />
    </div>
  );
}

/* ── Channel card — clapperboard slate ── */
function SlateCard({ num, name, format, hypothesis }) {
  return (
    <div
      className="relative overflow-hidden rounded-[2px] p-6"
      style={{
        background: CREAM_DEEP,
        border: `1.5px solid ${INK}`,
        boxShadow: `4px 4px 0 0 ${ORANGE}`,
      }}
    >
      {/* Top clapperboard stripes */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-2.5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            ${INK} 0 10px,
            ${CREAM} 10px 20px
          )`,
        }}
      />

      <div className="mt-4 flex items-baseline justify-between">
        <p
          className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: ORANGE_DEEP }}
        >
          channel · {num}
        </p>
        <p
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: INK_DIM }}
        >
          take 01
        </p>
      </div>

      <h3
        className="mt-3 font-serif text-[26px] font-black uppercase leading-[1] tracking-[-0.005em]"
        style={{ color: INK }}
      >
        {name}
      </h3>

      <div className="mt-5 space-y-3 text-[14.5px] leading-[1.55]">
        <div>
          <p
            className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE_DEEP }}
          >
            format
          </p>
          <p className="mt-1" style={{ color: INK }}>
            {format}
          </p>
        </div>
        <div>
          <p
            className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ORANGE_DEEP }}
          >
            hypothesis
          </p>
          <p className="mt-1" style={{ color: INK }}>
            {hypothesis}
          </p>
        </div>
      </div>
    </div>
  );
}

function PullQuote({ children }) {
  return (
    <blockquote
      className="my-12 text-center font-serif text-[28px] font-bold italic leading-[1.25] md:text-[34px]"
      style={{ color: INK }}
    >
      <span style={{ color: ORANGE }}>&ldquo;</span>
      {children}
      <span style={{ color: ORANGE }}>&rdquo;</span>
    </blockquote>
  );
}

export default function TestFootagePost() {
  return (
    <div className="min-h-screen" style={{ background: CREAM, color: INK }}>
      {/* Top bar */}
      <header
        className="sticky top-0 z-30 border-b backdrop-blur"
        style={{
          background: `${CREAM}e6`,
          borderColor: `${INK}33`,
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a
            href="#"
            onClick={goBack}
            className="group inline-flex items-center gap-2 font-mono text-[12px] font-semibold transition-colors"
            style={{ color: INK_DIM }}
            onMouseEnter={(e) => (e.currentTarget.style.color = INK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = INK_DIM)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to the shelf
          </a>
          <div
            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em]"
            style={{ color: INK_DIM }}
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: ORANGE, boxShadow: `0 0 6px ${ORANGE}` }}
            />
            REC · dispatch · 5 min
          </div>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-2xl px-6 pb-32 pt-16">
        {/* Eyebrow */}
        <p
          className="font-mono text-[11px] font-bold uppercase tracking-[0.3em]"
          style={{ color: ORANGE_DEEP }}
        >
          dispatch · roll 04 · 04.18.26
        </p>

        {/* Pulp-style title block */}
        <h1
          className="mt-4 font-serif font-black uppercase leading-[0.86] tracking-[-0.02em]"
          style={{
            color: INK,
            fontSize: "clamp(64px, 12vw, 120px)",
          }}
        >
          Test
          <br />
          <span style={{ color: ORANGE }}>Footage.</span>
        </h1>

        <p
          className="mt-8 max-w-xl font-serif text-[22px] italic leading-[1.45]"
          style={{ color: INK_DIM }}
        >
          Four YouTube channels. One prize. Four friends in their early
          twenties trying to remember what doing something on purpose
          feels like.
        </p>

        {/* Byline */}
        <div
          className="mt-10 flex items-center gap-4 border-y py-5"
          style={{ borderColor: `${INK}66` }}
        >
          <img
            src={avatarSrc}
            alt="Danny"
            className="h-11 w-11 rounded-full object-cover"
            style={{
              objectPosition: "center 28%",
              boxShadow: `0 0 0 1.5px ${INK}`,
            }}
          />
          <div className="flex-1 leading-tight">
            <p
              className="font-mono text-[12px] font-bold uppercase tracking-[0.22em]"
              style={{ color: INK }}
            >
              dir. Danny
            </p>
            <p
              className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: INK_DIM }}
            >
              <span>04 · 18 · 26</span>
              <span className="mx-2">·</span>
              <span>5 min read</span>
            </p>
          </div>
          <span
            className="hidden rounded-[2px] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] sm:inline-block"
            style={{ background: ORANGE, color: CREAM }}
          >
            16mm
          </span>
        </div>

        {/* Hero — letterboxed */}
        <figure className="my-12 -mx-6 lg:-mx-20">
          <div
            className="relative overflow-hidden"
            style={{
              background: INK,
              aspectRatio: "2.39 / 1",
              border: `2px solid ${INK}`,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80"
              alt=""
              className="block h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 28%, transparent 70%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.28em]"
              style={{ color: CREAM }}
            >
              <span>scene 01 · int. nick&apos;s apartment</span>
              <span>roll 04 / take 01</span>
            </div>
          </div>
        </figure>

        {/* CHAPTER 1 */}
        <Chapter num="One" title="The Bet" />

        <div
          className="font-serif text-[19px] leading-[1.78]"
          style={{ color: INK }}
        >
          <p>
            <span
              className="float-left mr-3 mt-1 font-serif text-[80px] font-black leading-[0.78] tracking-tight"
              style={{ color: ORANGE }}
            >
              W
            </span>
            e&apos;ve been doing this for years, the four of us. When one
            of us gets quiet — quieter than the regular adult-with-a-job
            kind of quiet, the kind that means something is sitting wrong
            — the other three propose a stupid competition. Whoever can
            hold a plank longest. Whoever can grow the worst mustache by
            month end. Whoever can find the strangest sandwich in a
            five-mile radius and document it.
          </p>

          <p className="mt-6">
            They sound like jokes. They are not jokes. The competitions
            are scaffolding. They give us a reason to text each other
            every day, an excuse to leave the apartment, a way to lose at
            something with low stakes so we remember what trying feels
            like.
          </p>

          <p className="mt-6">
            The latest one is YouTube. First to{" "}
            <strong style={{ color: INK }}>1,000 subscribers</strong>{" "}
            wins. Prize: TBD, which somehow feels right — the prize was
            never the point. Last place across the finish line does
            something outside their comfort zone — a punishment voted on
            by the other three.
          </p>

          <p className="mt-6">
            Standing punishment options include: amateur night at a comedy
            club, attending a single CrossFit class, learning the
            choreography to <em>Single Ladies</em> and performing it
            uninvited at the next wedding any of us attend. The threat is
            both real and an act of love.
          </p>
        </div>

        <PullQuote>
          The competitions are scaffolding. We lose at low-stakes things
          so we remember what trying feels like.
        </PullQuote>

        {/* CHAPTER 2 */}
        <Chapter num="Two" title="The Problem" />

        <div
          className="font-serif text-[19px] leading-[1.78]"
          style={{ color: INK }}
        >
          <p>I have no idea what to do with a YouTube channel.</p>

          <p className="mt-6">
            Most people start with a niche. They like swords, or
            skincare, or one extremely specific kind of saltwater
            fishing. They show up every week, in the same chair, on the
            same topic, and the algorithm rewards them for it.
          </p>

          <p className="mt-6">
            I like too many things. I love playing music and singing. I
            love filming, the slow kind, the kind where nothing happens
            and the light is good. I love tech. I&apos;m morbidly
            curious about the AI slop economy and what it&apos;s doing
            to the feed. None of those is a niche. <em>Pick one and
            grind</em>, the playbook says, and you will hit a thousand
            subscribers and possibly a small revenue stream.
          </p>

          <p className="mt-6">
            The honest answer is I don&apos;t know which one I&apos;d
            still be making in six months. I don&apos;t know which one a
            stranger would actually share. So instead of picking,
            I&apos;m running an experiment. Four channels. Same hands.
            Different hypotheses. I want to find out, with as little
            theory as possible, what gains traction — and what I&apos;m
            still excited to film on a Sunday afternoon when nobody&apos;s
            watching.
          </p>
        </div>

        {/* CHAPTER 3 — PRODUCTION SLATE */}
        <Chapter num="Three" title="The Production Slate" />

        <div
          className="font-serif text-[19px] leading-[1.78]"
          style={{ color: INK }}
        >
          <p>
            Four channels, four hypotheses, one me. Here is what
            I&apos;m about to spend the next ninety days finding out.
          </p>
        </div>

        <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SlateCard
            num="01"
            name="The Music Channel"
            format="One mic. One take. One song I love. No tutorials, no thumbnails with my mouth open, no &quot;what I learned from singing for a year.&quot; Just a song, the way I&apos;d sing it for someone in a kitchen at 1 AM."
            hypothesis="Cover videos still pull, even from no-name accounts, if the take is honest and the song choice surprises."
          />
          <SlateCard
            num="02"
            name="Comfort Film"
            format="Quiet, slow, beautifully shot. Coffee being made. Snow on a windshield. Walking home in a city you&apos;ve walked home in a thousand times. Lo-fi study playlist as moving image."
            hypothesis="There&apos;s a real, hungry audience for ambient film that doesn&apos;t ask anything of you — the visual equivalent of leaving a candle on."
          />
          <SlateCard
            num="03"
            name="Building Things"
            format="The thing I do for work, made watchable. Less &ldquo;here&apos;s how to do X,&rdquo; more &ldquo;watch me figure something out, out loud, with the wrong answer first.&rdquo;"
            hypothesis="Tech audiences reward thinking, not credentials. Show your work; the thumbnail can stay quiet."
          />
          <SlateCard
            num="04"
            name="The AI Slop Channel"
            format="The control. Generated faces, generated scripts, generated thumbnails, optimized titles. Content shaped entirely by what the algorithm rewards, made by a person who knows it&apos;s slop and is filming it anyway."
            hypothesis="The one I want to be wrong about: the slop wins. If it does, that&apos;s the most interesting result of the four."
          />
        </div>

        {/* CHAPTER 4 */}
        <Chapter num="Four" title="What I'm Actually Measuring" />

        <div
          className="font-serif text-[19px] leading-[1.78]"
          style={{ color: INK }}
        >
          <p>
            The bet is 1,000 subscribers. The experiment is bigger than
            that. Three things I want to come out of this with:
          </p>

          <ul className="mt-6 space-y-4 pl-0 list-none">
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-0 font-serif text-[28px] font-black"
                style={{ color: ORANGE }}
              >
                01
              </span>
              <span style={{ color: INK }}>
                <strong>Which one I keep reaching for.</strong> Not which
                one performs — which one I open the camera for on a slow
                Sunday afternoon when the post-rate has dropped and
                nobody&apos;s watching. That&apos;s the one I should
                actually be making.
              </span>
            </li>
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-0 font-serif text-[28px] font-black"
                style={{ color: ORANGE }}
              >
                02
              </span>
              <span style={{ color: INK }}>
                <strong>Which one strangers actually share.</strong> Likes
                are noise. Watch time is noise. The signal is whether
                somebody, somewhere, sends one of these to a friend with
                the message <em>you have to see this</em>.
              </span>
            </li>
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-0 font-serif text-[28px] font-black"
                style={{ color: ORANGE }}
              >
                03
              </span>
              <span style={{ color: INK }}>
                <strong>What it means if the slop wins.</strong> I
                can&apos;t tell yet whether I&apos;d laugh, file it as
                field research, or quietly delete the channel. All three
                reactions are worth knowing about.
              </span>
            </li>
          </ul>
        </div>

        <PullQuote>
          The whole point of a quarter-life-crisis bet is that the prize
          is just the thing that gets you to start. The actual win is
          finding out you can still try.
        </PullQuote>

        {/* CHAPTER 5 */}
        <Chapter num="Five" title="Exit Interview, In Advance" />

        <div
          className="font-serif text-[19px] leading-[1.78]"
          style={{ color: INK }}
        >
          <p>
            I&apos;m not going to lose. I am almost certainly going to
            lose. Both of those are true, in the way most things are true
            in your early twenties.
          </p>

          <p className="mt-6">
            If I do lose, the front-runner punishment among the group is
            open-mic stand-up: five minutes of original material at a bar
            none of us have been to before, with the other three in the
            crowd, on purpose, refusing to laugh. I&apos;d rather lose at
            YouTube than do that — which is exactly why it&apos;s the
            right punishment.
          </p>

          <p className="mt-6">
            What I think this experiment is really for, though, isn&apos;t
            the prize or the punishment. It&apos;s the thing the bet
            keeps quietly forcing: pick up a camera tonight. Sing the
            song you&apos;ve been singing in the car. Build the thing
            you keep talking about building. Film the boring walk. Try
            the slop. See what happens. Most of the people I know in
            their early twenties have stopped trying things they might be
            bad at. We&apos;re counter-programming.
          </p>

          <p className="mt-6">
            I&apos;ll post the channel links once they&apos;re alive. If
            you want to be subscriber number one through whatever-
            thousand, I won&apos;t stop you.
          </p>
        </div>

        {/* FADE OUT */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <div className="h-[2px] w-16" style={{ background: INK }} />
          <p
            className="font-serif text-[20px] font-black uppercase tracking-[0.42em]"
            style={{ color: ORANGE }}
          >
            fade out.
          </p>
          <div className="h-[2px] w-16" style={{ background: INK }} />
        </div>

        {/* End slate / footer */}
        <div
          className="mt-20 border-t pt-10"
          style={{ borderColor: `${INK}66` }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Personal",
              "YouTube",
              "Quarter-Life",
              "Music",
              "Film",
              "Experiments",
            ].map((t) => (
              <span
                key={t}
                className="rounded-[2px] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
                style={{
                  background: CREAM_DEEP,
                  color: INK,
                  border: `1px solid ${INK}66`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={avatarSrc}
              alt="Danny"
              className="h-14 w-14 rounded-full object-cover"
              style={{
                objectPosition: "center 28%",
                boxShadow: `0 0 0 1.5px ${INK}`,
              }}
            />
            <div className="flex-1 leading-tight">
              <p
                className="text-[15px] font-semibold"
                style={{ color: INK }}
              >
                Written by Danny
              </p>
              <p className="mt-1 text-[13px]" style={{ color: INK_DIM }}>
                Full-stack developer, sometimes-singer, currently
                co-conspirator in a stupid YouTube competition with
                three of my favorite people.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#"
              onClick={goBack}
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-[2px] px-6 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.22em] transition-all duration-500 active:scale-[0.98]"
              style={{
                background: ORANGE,
                color: CREAM,
                border: `1.5px solid ${INK}`,
                boxShadow: `4px 4px 0 0 ${INK}`,
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 translate-x-[150%] translate-y-[150%] scale-[2.5] rounded-[100%] transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ background: INK }}
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to the shelf
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

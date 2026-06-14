import React from "react";
import avatarSrc from "../assets/danny.png";

const ACCENT = "#546988";

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

function Figure({ src, caption, wide = false }) {
  return (
    <figure className={`my-10 ${wide ? "lg:-mx-20" : ""}`}>
      <div className="overflow-hidden rounded-lg bg-zinc-100 ring-1 ring-zinc-200/70">
        <img src={src} alt="" className="block w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PullQuote({ children }) {
  return (
    <blockquote
      className="my-10 border-l-2 pl-6 py-1 text-[22px] leading-[1.45] font-light italic text-zinc-800"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </blockquote>
  );
}

function CodeBlock({ children, lang }) {
  return (
    <div className="my-8 overflow-hidden rounded-md ring-1 ring-zinc-200/70">
      {lang && (
        <div className="bg-zinc-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 ring-1 ring-inset ring-zinc-200/70">
          {lang}
        </div>
      )}
      <pre className="overflow-x-auto bg-zinc-900 p-5 text-[13px] leading-relaxed text-zinc-100">
        <code className="font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

export default function AIDrivenUIUXPost() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a
            href="#"
            onClick={goBack}
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to the shelf
          </a>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Essay · 8 min
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 pb-28 pt-16">
        {/* Kicker */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: ACCENT }}>
          Essay
        </p>

        <h1 className="mt-3 font-serif text-[44px] leading-[1.08] tracking-[-0.01em] text-zinc-900 md:text-[56px]">
          AI-Driven UI/UX Isn&apos;t a Chatbox
        </h1>

        <p className="mt-6 text-[21px] leading-[1.5] text-zinc-600">
          The federal targeting work that made me stop putting LLMs behind a
          text input — and start letting them re-shape the dashboard itself.
        </p>

        {/* Byline */}
        <div className="mt-10 flex items-center gap-4 border-y border-zinc-200/80 py-5">
          <img
            src={avatarSrc}
            alt="Danny"
            className="h-11 w-11 rounded-full object-cover"
            style={{ objectPosition: "center 28%" }}
          />
          <div className="flex-1 leading-tight">
            <p className="text-[14px] font-semibold text-zinc-900">Danny</p>
            <p className="text-[13px] text-zinc-500">
              <span>Mar 29, 2026</span>
              <span className="mx-2 text-zinc-300">·</span>
              <span>8 min read</span>
            </p>
          </div>
          <span
            className="hidden rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.05em] text-white sm:inline-block"
            style={{ background: ACCENT }}
          >
            Sam Intel
          </span>
        </div>

        {/* Hero image */}
        <Figure
          src="/assets/blog/sam-intel-17.jpg"
          caption="Sam Intel — a federal recompete intelligence tool I built on top of SAM.gov data."
          wide
        />

        {/* Body */}
        <div className="font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            When the AI wave hit product teams, almost every company did the
            same thing: they added a little floating chat icon in the bottom
            right. Click it and a panel slid up. Type a question. Wait.
            Read a paragraph. Copy something into the actual app. Close the
            panel. Keep working.
          </p>

          <p className="mt-6">
            The chatbox is the{" "}
            <em>lowest-effort, highest-visibility</em> way to ship &ldquo;we
            use AI now.&rdquo; It&apos;s also, in most B2B products, the
            single place the intelligence never actually belongs.
          </p>

          <p className="mt-6">
            I learned this building{" "}
            <a
              href="https://sam-intel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:text-zinc-900"
              style={{ textDecorationColor: ACCENT }}
            >
              Sam Intel
            </a>
            , a federal contract recompete platform. The job was to help
            analysts find the handful of contracts — out of roughly eight
            thousand active federal solicitations — worth bidding on in the
            next ninety days. It was the perfect shape for an LLM. It also
            made very clear why a chatbox was the wrong answer.
          </p>
        </div>

        {/* H2 */}
        <h2 className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-900">
          What a chatbox actually asks of a user
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            A chatbox says: <em>tell me what you&apos;re looking for and
            I&apos;ll go find it.</em> That sentence sounds helpful. In
            practice, on a data tool, it means:
          </p>

          <ul className="mt-6 space-y-3 pl-6 marker:text-zinc-400 list-disc">
            <li>
              The user has to know what to ask — which is the hard part of
              the job.
            </li>
            <li>
              The user has to re-type the filters they already set three
              screens ago.
            </li>
            <li>
              The model&apos;s answer arrives as prose, not as a row in the
              table they were just looking at.
            </li>
            <li>
              Every meaningful action now costs a full round trip — prompt,
              tokens, read, context-switch.
            </li>
          </ul>

          <p className="mt-6">
            For Sam Intel, an analyst&apos;s real question is
            repeated: <em>of the hundreds of recompetes hitting in the next
            six months, which ones are my firm actually positioned to win?</em>{" "}
            If I answer that with a chatbox, the analyst types variations of
            the same question, dozens of times a week, across every subset
            of the data. That&apos;s not intelligence. That&apos;s
            transcription.
          </p>
        </div>

        <PullQuote>
          If your LLM feature only shows up when the user invokes it, the
          model is an employee waiting to be paged — not a teammate reading
          over your shoulder.
        </PullQuote>

        {/* H2 */}
        <h2 className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-900">
          Treat the model like a writer on the product team
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            The move that changed the product was this: instead of asking
            Claude a question when a user asked, I asked Claude a batch of
            questions nightly, and used the answers to{" "}
            <strong>author UI</strong>.
          </p>

          <p className="mt-6">
            Every contract in the pipeline gets the same structured prompt.
            Claude Haiku reads the metadata — incumbent, agency, dollar
            value, expiration window, scope — and returns a severity, a
            category, a one-line title, and a two-sentence rationale. That
            quartet is a component. It slots into a card with a colored
            chip, a timestamp, and a link back to the underlying contract.
          </p>
        </div>

        <Figure
          src="/assets/blog/sam-intel-21.jpg"
          caption="The AI Insights feed. Fifty signals, each one pre-generated, filterable by severity. No text input."
          wide
        />

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            Notice what the user does not do on this screen: type. The model
            has already produced its opinions, and those opinions are now
            browsable the same way an analyst browses any other table —
            sort, filter, skim, click in.
          </p>

          <p className="mt-6">
            The prompt that generates all of this fits in a paragraph:
          </p>
        </div>

        <CodeBlock lang="prompt">{`You are a federal contract recompete analyst.

Given this contract metadata:
{contract_json}

Return a JSON object with:
  severity: one of [critical, high, medium, low]
  category: one of [recompete, market-entry, incumbent-risk, ...]
  title:    <= 70 chars, title-cased, specific
  rationale: 2 sentences, concrete, no hedging

Never invent facts. If a field is missing, say so.`}</CodeBlock>

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            The output isn&apos;t a conversation. It&apos;s a row in a
            database. The UI is what happens when you style a row in a
            database well.
          </p>
        </div>

        {/* H2 */}
        <h2 className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-900">
          Put the signal next to the data it&apos;s about
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            The second design decision was geographic. A chatbox lives in a
            corner. A good signal lives next to the thing it comments on.
          </p>

          <p className="mt-6">
            On the Recompete Radar — a heatmap of agencies against
            expiration windows — the same AI signals sit in a rail to the
            right. When an analyst hovers a hot cell on the heatmap, the
            cards they see aren&apos;t random. They&apos;re the ones that
            pertain to the cell they&apos;re looking at.
          </p>
        </div>

        <Figure
          src="/assets/blog/sam-intel-18.jpg"
          caption="Recompete Radar. The heatmap is the data. The cards on the right are the model's annotation of the data — adjacent, not modal."
          wide
        />

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            That adjacency is the whole game. Prose next to a number is
            analysis. Prose in a separate panel is a ticket you opened on
            yourself.
          </p>
        </div>

        {/* H2 */}
        <h2 className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-900">
          Three rules I ended up writing for myself
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-800">
          <ol className="mt-2 space-y-6 pl-0 list-none">
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                style={{ background: ACCENT }}
              >
                1
              </span>
              <strong className="text-zinc-900">
                LLM output should be typed like UI.
              </strong>{" "}
              If the model can&apos;t return fields that fit a component, it
              shouldn&apos;t return anything. Severity, category, entity,
              timestamp — not a paragraph.
            </li>
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                style={{ background: ACCENT }}
              >
                2
              </span>
              <strong className="text-zinc-900">
                Generate ahead of the user, not in front of them.
              </strong>{" "}
              Batch nightly. Cache. The user&apos;s perception of AI
              &ldquo;speed&rdquo; is set by whether the output was already
              on the page when they arrived.
            </li>
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                style={{ background: ACCENT }}
              >
                3
              </span>
              <strong className="text-zinc-900">
                Let the signal sit next to the data.
              </strong>{" "}
              A panel is where features go to be ignored. If the model has
              an opinion about row 47, put the opinion in row 47.
            </li>
          </ol>
        </div>

        {/* H2 */}
        <h2 className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-900">
          So where does the conversation go?
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-800">
          <p>
            I&apos;m not against chat, exactly. I&apos;m against chat as a{" "}
            <em>product surface</em>. The direction I&apos;m pulling Sam
            Intel next is tool-use-driven filtering: one line of input,
            the model calls into the existing filter controls, and the
            output <em>is the filtered dashboard</em>. Same screen. Same
            charts. New state.
          </p>

          <p className="mt-6">
            That still isn&apos;t a chatbox. It&apos;s a command bar that
            happens to take natural language. The answer is the screen
            changing, not a paragraph appearing in a sidebar.
          </p>

          <p className="mt-6">
            The chatbox feels like progress because it&apos;s the shape of
            the demo everyone saw first. But most of the actual leverage
            from large models — the thing that makes analysts say{" "}
            <em>I don&apos;t want to go back</em> — comes from letting the
            model reshape the page you were already looking at. Let the
            dashboard be the answer.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-zinc-200/80 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            {["AI", "Design", "Product", "Federal", "Claude"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-100 px-3 py-1 text-[12px] font-medium text-zinc-600"
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
              style={{ objectPosition: "center 28%" }}
            />
            <div className="flex-1 leading-tight">
              <p className="text-[15px] font-semibold text-zinc-900">
                Written by Danny
              </p>
              <p className="mt-1 text-[13px] text-zinc-500">
                Full-stack developer. I build calm, opinionated software —
                federal data, fitness tools, and the occasional painted
                bookshelf.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#"
              onClick={goBack}
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-6 py-3 text-[14px] font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-700 before:content-[''] hover:text-zinc-900 hover:ring-1 hover:ring-zinc-200 hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.98]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

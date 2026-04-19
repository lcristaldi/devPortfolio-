import React from "react";
import avatarSrc from "../assets/danny.png";

const ACCENT = "#f0a868";       // warm amber for the dark theme
const ACCENT_DIM = "#b87a3d";   // deeper amber for chips / borders
const GRID = "rgba(240, 168, 104, 0.08)";

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
      <div className="overflow-hidden rounded-lg bg-zinc-950 ring-1 ring-zinc-800/80">
        <img src={src} alt="" className="block w-full opacity-95" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[12px] leading-relaxed text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PullQuote({ children }) {
  return (
    <blockquote
      className="my-10 border-l-2 pl-6 py-1 text-[22px] leading-[1.45] font-light italic text-zinc-200"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </blockquote>
  );
}

function CodeBlock({ children, lang }) {
  return (
    <div className="my-8 overflow-hidden rounded-md ring-1 ring-zinc-800">
      {lang && (
        <div className="flex items-center justify-between bg-zinc-900/80 px-4 py-1.5 ring-1 ring-inset ring-zinc-800">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {lang}
          </span>
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-black p-5 text-[13px] leading-relaxed text-zinc-200">
        <code className="font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

function StatGrid({ stats }) {
  return (
    <div className="my-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-zinc-800 ring-1 ring-zinc-800 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-zinc-950 p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            {s.label}
          </div>
          <div
            className="mt-2 font-mono text-[28px] font-semibold leading-none"
            style={{ color: ACCENT }}
          >
            {s.value}
          </div>
          {s.sub && (
            <div className="mt-1.5 font-mono text-[11px] text-zinc-500">
              {s.sub}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Bar({ label, value, max, hint }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between font-mono text-[12px]">
        <span className="text-zinc-300">{label}</span>
        <span className="text-zinc-500">{hint}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900 ring-1 ring-inset ring-zinc-800">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(to right, ${ACCENT_DIM}, ${ACCENT})`,
          }}
        />
      </div>
    </div>
  );
}

export default function SamIntelPostmortemPost() {
  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-200"
      style={{
        backgroundImage: `
          linear-gradient(${GRID} 1px, transparent 1px),
          linear-gradient(to right, ${GRID} 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundPosition: "-1px -1px",
      }}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a
            href="#"
            onClick={goBack}
            className="group inline-flex items-center gap-2 font-mono text-[12px] font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            cd ../shelf
          </a>
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: ACCENT }}
            />
            postmortem · 10 min
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 pb-28 pt-16">
        {/* Kicker */}
        <p
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em]"
          style={{ color: ACCENT }}
        >
          // postmortem · 06_months
        </p>

        <h1 className="mt-3 font-serif text-[44px] leading-[1.08] tracking-[-0.01em] text-zinc-50 md:text-[56px]">
          Sam Intel: Six Months In
        </h1>

        <p className="mt-6 text-[21px] leading-[1.5] text-zinc-400">
          What pgvector, OpenAI embeddings, and a stubborn refusal to use a
          generic search bar taught me about federal procurement data.
        </p>

        {/* Byline */}
        <div className="mt-10 flex items-center gap-4 border-y border-zinc-800/80 py-5">
          <img
            src={avatarSrc}
            alt="Danny"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-zinc-800"
            style={{ objectPosition: "center 28%" }}
          />
          <div className="flex-1 leading-tight">
            <p className="font-mono text-[13px] font-semibold text-zinc-200">
              danny@sam-intel:~$
            </p>
            <p className="mt-0.5 font-mono text-[12px] text-zinc-500">
              <span>Mar 12, 2026</span>
              <span className="mx-2 text-zinc-700">·</span>
              <span>10 min read</span>
            </p>
          </div>
          <span
            className="hidden rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-950 sm:inline-block"
            style={{ background: ACCENT }}
          >
            v0.6.0
          </span>
        </div>

        {/* Quick stats */}
        <StatGrid
          stats={[
            { label: "contracts", value: "8.2k", sub: "active solicitations" },
            { label: "embeddings", value: "1536", sub: "dim · text-3-large" },
            { label: "p95 query", value: "84ms", sub: "pgvector + ivfflat" },
            { label: "monthly cost", value: "$11", sub: "supabase + openai" },
          ]}
        />

        {/* Hero image */}
        <Figure
          src="/assets/blog/sam-intel-17.jpg"
          caption="$ sam-intel --status   six months, two rewrites, one good idea."
          wide
        />

        {/* Body */}
        <div className="font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            Six months ago I shipped the first version of Sam Intel: a
            recompete intelligence platform on top of the public SAM.gov
            firehose. The pitch was simple and a little smug —{" "}
            <em>federal procurement search is bad on purpose; the data
            isn&apos;t.</em>
          </p>

          <p className="mt-6">
            What I&apos;ve actually learned in those six months is not the
            stack story I expected to tell. The infrastructure was the easy
            part. The hard part was deciding, every week, what{" "}
            <em>not</em> to put in front of an analyst. This is that
            postmortem.
          </p>
        </div>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          The original sin: do not ship a search bar
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            Every federal data tool I&apos;d ever used opened on a search bar
            and a blank table. Type a NAICS code. Get four thousand rows. Sort
            by date. Discover that &ldquo;date&rdquo; means seven different
            things across four different solicitation types. Quit.
          </p>

          <p className="mt-6">
            I made a rule before writing any UI: the homepage of Sam Intel is
            never allowed to be a search bar. Whatever lives there has to be{" "}
            <em>opinionated</em> — a take, not a query.
          </p>

          <p className="mt-6">
            That single constraint did more architectural work than any
            framework decision. If the homepage is a take, the system has to
            generate takes. If it generates takes, it needs structure over the
            corpus. Structure over the corpus means embeddings. Embeddings
            mean pgvector. The stack fell out of the rule.
          </p>
        </div>

        <PullQuote>
          A search bar is what you ship when you don&apos;t know what the user
          should be doing. It&apos;s a confession dressed up as a feature.
        </PullQuote>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          Why pgvector, not a vector DB
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            I evaluated Pinecone, Weaviate, and Qdrant for about an afternoon
            each. They&apos;re all fine. None of them solved a problem I
            actually had.
          </p>

          <p className="mt-6">
            The thing about federal procurement data is that the embedding is
            never the whole answer. You almost always need to filter by{" "}
            <em>agency</em>, <em>NAICS code</em>, <em>set-aside type</em>,{" "}
            <em>dollar range</em>, and <em>response deadline</em> before the
            semantic query even matters. A standalone vector DB asks you to
            either (a) re-implement those filters with metadata indexes or
            (b) post-filter and pray you didn&apos;t toss the relevant rows.
          </p>

          <p className="mt-6">
            Postgres with pgvector lets the planner do its job. Index the
            structured fields, index the embedding, write the query the way
            you would&apos;ve written it before vectors existed. The schema
            ended up looking almost embarrassingly normal:
          </p>
        </div>

        <CodeBlock lang="postgres">{`create extension vector;

create table contracts (
  id              text primary key,
  agency          text   not null,
  sub_agency      text,
  naics           text   not null,
  set_aside       text,
  posted_at       timestamptz not null,
  response_due    timestamptz,
  ceiling_value   numeric,
  title           text   not null,
  description     text   not null,
  embedding       vector(1536)
);

create index on contracts using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

create index on contracts (agency, naics, response_due);
create index on contracts (response_due) where response_due > now();`}</CodeBlock>

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            That&apos;s the whole &ldquo;AI infrastructure&rdquo; for Sam
            Intel. There is no separate vector store, no sync job, no
            migration playbook. When a contract gets re-scored or
            re-embedded, it&apos;s an{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[14px] text-zinc-200">
              UPDATE
            </code>
            . Postgres is the boring answer and the boring answer is right.
          </p>
        </div>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          Embeddings as a UX primitive
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            The unlock — the thing I would not have predicted in month one —
            is that embeddings stop being a search feature pretty quickly.
            They become a <em>layout</em> feature.
          </p>

          <p className="mt-6">
            On the Recompete Radar, the rows of the heatmap aren&apos;t
            agencies in alphabetical order. They&apos;re agencies clustered
            by the kind of work they buy. Health and Human Services sits
            next to Veterans Affairs not because of org charts, but because
            their procurement <em>language</em> overlaps in vector space.
            That ordering took one
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[14px] text-zinc-200">
              {" "}
              kmeans
            </code>{" "}
            call and made the page feel intelligent in a way no amount of
            CSS would have.
          </p>
        </div>

        <Figure
          src="/assets/blog/sam-intel-18.jpg"
          caption="Recompete Radar — agencies clustered by procurement vocabulary, not org chart. The cells light up where the model expects activity."
          wide
        />

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            The same thing happens with the AI Insights feed. The cards
            aren&apos;t one-per-contract — they&apos;re one-per-cluster.
            Fifteen related solicitations from three different agencies
            collapse into a single signal: <em>HHS, VA, and DoD are all
            recompeting clinical staffing in the next 90 days.</em> No
            analyst would have surfaced that by sorting columns.
          </p>
        </div>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          The cost ledger, six months later
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            I expected this to be the painful section. It wasn&apos;t. The
            entire monthly bill, including a generous embeddings refresh
            schedule, lands in the price of a sandwich.
          </p>
        </div>

        <div className="my-10 space-y-5 rounded-lg border border-zinc-800 bg-zinc-950/80 p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            monthly burn · mar 2026
          </div>
          <Bar label="Supabase Pro" value={25} max={40} hint="$25.00" />
          <Bar
            label="OpenAI · text-embedding-3-large"
            value={6.4}
            max={40}
            hint="$6.40"
          />
          <Bar label="Claude Haiku · nightly insights" value={4.1} max={40} hint="$4.10" />
          <Bar label="Vercel" value={0} max={40} hint="hobby tier" />
          <div className="flex items-baseline justify-between border-t border-zinc-800 pt-3">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-400">
              total
            </span>
            <span
              className="font-mono text-[20px] font-semibold"
              style={{ color: ACCENT }}
            >
              $35.50 / mo
            </span>
          </div>
        </div>

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            The lesson I keep relearning: at small-to-medium scale, the
            cheap thing is good. The reason to reach for managed vector DBs
            and orchestration platforms is operational, not technical, and
            you usually know when you actually need them. I didn&apos;t.
          </p>
        </div>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          What broke
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            Three things, all worth saying out loud:
          </p>

          <ol className="mt-6 space-y-6 pl-0 list-none">
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-md font-mono text-[12px] font-semibold text-zinc-950"
                style={{ background: ACCENT }}
              >
                01
              </span>
              <strong className="text-zinc-50">
                Sparse-field hallucinations.
              </strong>{" "}
              About 18% of solicitations ship with a description shorter
              than 500 characters. The model would fill the gap. I caught it
              authoring incumbents. The fix was a hard rule in the prompt
              and a length-gated fallback that just returns{" "}
              <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[14px]">
                {`{ severity: "unknown" }`}
              </code>
              . Better silent than wrong.
            </li>
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-md font-mono text-[12px] font-semibold text-zinc-950"
                style={{ background: ACCENT }}
              >
                02
              </span>
              <strong className="text-zinc-50">
                NAICS taxonomy is a lie at the leaf level.
              </strong>{" "}
              Two contracts with identical NAICS codes are not necessarily
              comparable work. Embeddings caught the divergence; the
              taxonomy hid it. The Radar now uses NAICS as a filter, never
              as a grouping.
            </li>
            <li className="relative pl-12">
              <span
                className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-md font-mono text-[12px] font-semibold text-zinc-950"
                style={{ background: ACCENT }}
              >
                03
              </span>
              <strong className="text-zinc-50">
                ivfflat recall on small partitions.
              </strong>{" "}
              When I sliced the corpus down to a single agency, the
              approximate index started missing obviously-relevant rows. The
              fix was lazy and correct: fall back to exact search when the
              filtered set is under 5,000 rows. pgvector is fast enough that
              it doesn&apos;t matter.
            </li>
          </ol>
        </div>

        <PullQuote>
          The model was not the source of most failures. The data&apos;s
          self-description was.
        </PullQuote>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          The query that pays the rent
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            If I had to point at one piece of code and say{" "}
            <em>this is the product</em>, it&apos;s this query. Every screen
            in Sam Intel ends up calling a variant of it.
          </p>
        </div>

        <CodeBlock lang="sql">{`-- recompetes worth bidding on, in priority order
with target as (
  select embedding
    from firm_capabilities
   where firm_id = $1
)
select
  c.id,
  c.title,
  c.agency,
  c.response_due,
  c.ceiling_value,
  1 - (c.embedding <=> target.embedding)        as fit_score,
  extract(day from c.response_due - now())      as days_left
from contracts c, target
where c.response_due between now() and now() + interval '90 days'
  and c.set_aside = any($2)                      -- eligibility
  and c.ceiling_value >= $3                      -- floor
order by
  fit_score        desc,
  days_left        asc
limit 50;`}</CodeBlock>

        <div className="font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            That&apos;s it. A vector distance, two structured filters, and a
            sort. The reason it feels intelligent is that{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[14px] text-zinc-200">
              firm_capabilities.embedding
            </code>{" "}
            is the average of every past contract a firm has won — a
            literal vector of <em>what they actually do</em>, not what their
            capability statement says. The model writes the embedding. The
            database does the matching. The UI never has to ask the user a
            single thing.
          </p>
        </div>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          Six-month scorecard
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            What I&apos;d keep, what I&apos;d replace, and what I&apos;d
            ship if I started over tomorrow:
          </p>
        </div>

        <div className="my-10 overflow-hidden rounded-lg border border-zinc-800">
          <table className="w-full font-mono text-[13px]">
            <thead>
              <tr className="bg-zinc-900/80 text-left text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                <th className="px-4 py-3 font-semibold">decision</th>
                <th className="px-4 py-3 font-semibold">verdict</th>
                <th className="px-4 py-3 font-semibold">why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
              <tr>
                <td className="px-4 py-3 text-zinc-100">pgvector / Supabase</td>
                <td className="px-4 py-3" style={{ color: ACCENT }}>
                  keep
                </td>
                <td className="px-4 py-3 text-zinc-400">filters + vectors in one planner</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-100">text-embedding-3-large</td>
                <td className="px-4 py-3" style={{ color: ACCENT }}>
                  keep
                </td>
                <td className="px-4 py-3 text-zinc-400">cheap, dense, good enough</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-100">Claude Haiku for insights</td>
                <td className="px-4 py-3" style={{ color: ACCENT }}>
                  keep
                </td>
                <td className="px-4 py-3 text-zinc-400">structured JSON, low latency, low $</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-100">D3 + Tremor for charts</td>
                <td className="px-4 py-3 text-amber-300">replace</td>
                <td className="px-4 py-3 text-zinc-400">overkill — going pure SVG</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-100">Nightly batch refresh</td>
                <td className="px-4 py-3 text-amber-300">replace</td>
                <td className="px-4 py-3 text-zinc-400">streaming refresh on diff only</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-100">No search bar, ever</td>
                <td className="px-4 py-3" style={{ color: ACCENT }}>
                  keep
                </td>
                <td className="px-4 py-3 text-zinc-400">the rule that wrote the product</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H2 */}
        <h2
          className="mt-16 font-serif text-[32px] leading-[1.15] tracking-tight text-zinc-50"
          style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px" }}
        >
          Where it goes from here
        </h2>

        <div className="mt-5 font-serif text-[19px] leading-[1.75] text-zinc-300">
          <p>
            The next six months are about turning Sam Intel from a viewer
            into an actor. Right now it tells you which recompetes matter.
            The next version will draft the capability-statement diff, line
            up the past-performance citations, and pre-fill the bid/no-bid
            memo — same screen, same data, no chat panel.
          </p>

          <p className="mt-6">
            The shape of the work has not changed. The system still earns
            its keep by being opinionated on the homepage and quiet
            everywhere else. If you&apos;re building a data product on top
            of a public dataset right now, that&apos;s the only piece of
            advice from six months in I&apos;d actually defend:{" "}
            <strong className="text-zinc-50">
              decide what the front page is for, then let the schema fall
              out of that.
            </strong>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-zinc-800/80 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              "pgvector",
              "Supabase",
              "Embeddings",
              "Claude",
              "Federal",
              "Postmortem",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-900 px-3 py-1 font-mono text-[11px] font-medium text-zinc-300 ring-1 ring-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={avatarSrc}
              alt="Danny"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-zinc-800"
              style={{ objectPosition: "center 28%" }}
            />
            <div className="flex-1 leading-tight">
              <p className="text-[15px] font-semibold text-zinc-100">
                Written by Danny
              </p>
              <p className="mt-1 text-[13px] text-zinc-400">
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
              className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-mono text-[13px] font-semibold text-zinc-950 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-700 before:content-[''] hover:text-zinc-900 hover:before:translate-x-0 hover:before:translate-y-0 active:scale-[0.98]"
              style={{ background: ACCENT }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              cd ../shelf
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

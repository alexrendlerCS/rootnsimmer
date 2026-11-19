import Link from "next/link";
import { gaps, gapsIntro, lines, type LineId } from "@/content/gaps";

const lineName = (id: LineId) => lines.find((l) => l.id === id)!;

/** The six gaps, each with the City's own record and Root & Simmer's answer (home page and /our-work). */
export function GapCards() {
  return (
    <ol className="gap-cards">
      {gaps.map((g) => (
        <li key={g.id} id={`gap-${g.id}`} className="gap-card">
          <h3>{g.title}</h3>
          <p className="gap-record">
            {g.record}{" "}
            <a className="gap-source" href={g.source.href}>
              {g.source.label}
            </a>
          </p>
          <p className="gap-answer">
            <strong>Our answer:</strong> {g.answer}
          </p>
          <p className="gap-links">
            {g.links.map((l) => (
              <Link key={l.href} className="text-link" href={l.href}>
                {l.label}
              </Link>
            ))}
          </p>
          <p className="gap-lines">
            {g.lines.map((id) => (
              <span key={id} className="gap-line">
                {lineName(id).title}
              </span>
            ))}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function GapsSection() {
  return (
    <section id="gaps" className="section gaps" aria-labelledby="gaps-title">
      <div className="wrap">
        <p className="section-label">{gapsIntro.label}</p>
        <h2 id="gaps-title">{gapsIntro.title}</h2>
        <p className="muted gaps-lede">{gapsIntro.lede}</p>
        <GapCards />
        <p>
          <Link className="button" href="/our-work">
            {gapsIntro.more}
          </Link>
        </p>
      </div>
    </section>
  );
}

/** A short note at the top of a line's main page: the gaps it answers. */
export function GapNote({ line }: { line: LineId }) {
  const l = lineName(line);
  const mine = gaps.filter((g) => g.lines.includes(line));
  return (
    <aside className="gap-note" aria-label="The gap this work answers">
      <div className="wrap">
        <p>
          <span className="gap-note-label">
            {l.title}.
          </span>{" "}
          Answers what the City’s plans say is missing:{" "}
          {mine.map((g, i) => (
            <span key={g.id}>
              <Link href={`/our-work#gap-${g.id}`}>{g.title.toLowerCase()}</Link>
              {i < mine.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
    </aside>
  );
}

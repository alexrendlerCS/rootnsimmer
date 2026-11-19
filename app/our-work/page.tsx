import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { gaps, lines, ourWorkPage as p } from "@/content/gaps";
import { GapCards } from "@/components/Gaps";
import { SiteShell } from "@/components/SiteShell";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = { title: `Our Work | ${site.fullName}`, description: p.lede, alternates: { canonical: "/our-work" } };

export default function OurWorkPage() {
  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{p.label}</p>
          <h1 className="page-title land-title">{p.title}</h1>
          <p className="page-lede">{p.lede}</p>
        </div>
      </header>
      <HistoryFact fact={facts.march} />

      <section className="page-section" aria-labelledby="lines-title">
        <div className="wrap">
          <h2 id="lines-title" className="guide-h2">
            The four lines
          </h2>
          <ol className="line-cards">
            {lines.map((l) => (
              <li key={l.id} id={`line-${l.id}`} className="line-card">
                <p className="line-number" aria-hidden="true">
                  {l.number}
                </p>
                <h3>{l.title}</h3>
                <p className="line-who">{l.who}</p>
                <p>{l.body}</p>
                <ul className="line-pages">
                  {l.pages.map((pg) => (
                    <li key={pg.href}>
                      <Link href={pg.href}>{pg.label}</Link>
                    </li>
                  ))}
                </ul>
                <p className="line-earns">{l.earns}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section land-tracts" aria-labelledby="matrix-title">
        <div className="wrap">
          <h2 id="matrix-title" className="guide-h2">
            {p.matrixTitle}
          </h2>
          <p className="muted">{p.matrixNote}</p>
          <div className="table-wrap">
            <table className="gap-matrix">
              <thead>
                <tr>
                  <th scope="col">What’s missing</th>
                  {lines.map((l) => (
                    <th key={l.id} scope="col">
                      <span className="mx-num">{l.number}</span>
                      <span className="mx-name">. {l.title}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gaps.map((g) => (
                  <tr key={g.id}>
                    <th scope="row">
                      <a href={`#gap-${g.id}`}>{g.title}</a>
                    </th>
                    {lines.map((l) => (
                      <td key={l.id}>{g.lines.includes(l.id) ? <span className="dot" aria-label="answers this gap">●</span> : <span className="sr-only">no</span>}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="gaps-detail-title">
        <div className="wrap">
          <h2 id="gaps-detail-title" className="guide-h2">
            The six gaps, in the City’s own words
          </h2>
          <GapCards />
          <p className="notice">
            The Lincolnville Community Redevelopment Agency (CRA) sunsets on December 31, 2033. Root &amp; Simmer Hospitality Co. is an independent
            business, not a City or CRA body, and nothing here implies City or CRA endorsement.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

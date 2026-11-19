import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { archive, mapNote, sources, timeline, tracts, tractsPage as t } from "@/content/tracts";
import { SiteShell } from "@/components/SiteShell";
import { TractTimeline } from "@/components/TractTimeline";

export const metadata: Metadata = {
  title: `${t.title} | ${site.fullName}`,
  description: t.intro,
  alternates: { canonical: t.href },
};

export default function TractsPage() {
  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">Lincolnville history</p>
          <h1 className="page-title land-title">{t.title}</h1>
          <p className="land-subtitle">{t.subtitle}</p>
          <p className="page-lede">{t.intro}</p>
          <p className="land-feature">{t.feature}</p>
        </div>
      </header>

      <section className="page-section" aria-labelledby="timeline-title">
        <div className="wrap">
          <h2 id="timeline-title" className="guide-h2">
            How a community took root
          </h2>
          <TractTimeline entries={timeline} />
        </div>
      </section>

      <section className="page-section land-tracts" aria-labelledby="tracts-title">
        <div className="wrap">
          <h2 id="tracts-title" className="guide-h2">
            The historical tracts
          </h2>
          <p className="muted land-intro">Five tracts and additions where Lincolnville’s homes were built. Open a card to read more.</p>
          <div className="tract-cards">
            {tracts.map((tr) => (
              <details key={tr.id} id={tr.id} className="tract-card">
                <summary>
                  <span className="tract-name">{tr.name}</span>
                  <span className="tract-period">{tr.period}</span>
                </summary>
                <div className="tract-body">
                  <dl>
                    <dt>Overview</dt>
                    <dd>{tr.overview}</dd>
                    <dt>Approximate development period</dt>
                    <dd>{tr.period}</dd>
                    <dt>Historical significance</dt>
                    <dd>{tr.significance}</dd>
                    <dt>Property research to come</dt>
                    <dd>
                      <ul>
                        {tr.research.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
                  <p className="evidence">
                    <span className="evidence-tag" data-verified={tr.evidence !== "To verify"}>
                      {tr.evidence}
                    </span>
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="map-title">
        <div className="wrap">
          <h2 id="map-title" className="guide-h2">
            {mapNote.title}
          </h2>
          <div className="tract-map-placeholder">
            <p>{mapNote.body}</p>
            <p className="tract-map-note">{mapNote.note}</p>
          </div>
        </div>
      </section>

      <section className="page-section land-archive" aria-labelledby="archive-title">
        <div className="wrap split">
          <div className="prose">
            <h2 id="archive-title" className="guide-h2">
              {archive.title}
            </h2>
            {archive.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              <Link className="button" href="/lincolnville-history/mohlman-research">
                Open the Mohlman Research (members)
              </Link>
            </p>
          </div>
          <div className="panel">
            <p className="section-label">Research categories</p>
            <ul className="entries archive-list">
              {archive.categories.map((c) => (
                <li key={c}>
                  <p>{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="sources-title">
        <div className="wrap">
          <div className="prose">
          <h2 id="sources-title" className="guide-h2">
            Sources
          </h2>
          <ul className="source-list">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="notice">{t.independence}</p>
          <p>
            <Link className="text-link" href="/visitor-map">
              The Land Beneath Our Feet: the proposed historical walking experience
            </Link>
          </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

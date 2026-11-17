import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import {
  demolition,
  packets,
  protectFacts,
  protectHero,
  protectJoin,
  protectNote,
  protectOwn,
  protectQuote,
  recognition,
} from "@/content/protect";
import { GuideSection } from "@/components/CraGuide";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Preserve Historic Homes | ${site.fullName}`,
  description: protectHero.lede,
  alternates: { canonical: "/preserve-historic-homes" },
};

const Lock = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
    <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const sections = [
  { href: "/preserve-historic-homes/map", label: "Lincolnville Home Map" },
  { href: "#records", label: protectFacts.title },
  { href: `#${demolition.id}`, label: demolition.title },
  { href: `#${recognition.id}`, label: recognition.title },
  { href: "#packets", label: "The member packets" },
  { href: "#your-home", label: "Your own home’s history" },
];

export default function PreserveHistoricHomesPage() {
  return (
    <SiteShell>
      <div className="wrap guide">
        <aside className="guide-aside">
          <p className="route-title">On this page</p>
          <ul className="shelf-menu">
            {sections.map((s) => (
              <li key={s.href}>
                <a href={s.href}>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="route-title aside-back">
            <Link href="/library">All documents in the Library</Link>
          </p>
        </aside>

        <article className="guide-main">
          <header className="guide-head">
            <p className="section-label">{protectHero.label}</p>
            <h1 className="page-title">{protectHero.title}</h1>
            <p className="page-lede">{protectHero.lede}</p>
          </header>

          <section className="map-feature" aria-labelledby="map-feature-title">
            <div>
              <h2 id="map-feature-title">Find your home on the map</h2>
              <p>Every lot in Lincolnville, with what the public records say about its history.</p>
            </div>
            <Link className="button button-red" href="/preserve-historic-homes/map">
              Open the map
            </Link>
          </section>

          <GuideSection id="records" title={protectFacts.title}>
            <dl className="records-facts">
              {protectFacts.facts.map((f) => (
                <div key={f.value}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
            <p className="fine">{protectFacts.note}</p>
            <figure className="minutes-quote">
              <blockquote>{protectQuote.text}</blockquote>
              <figcaption>
                {protectQuote.who}
                <span>{protectQuote.source}</span>
              </figcaption>
            </figure>
          </GuideSection>

          <GuideSection id={demolition.id} title={demolition.title}>
            <p>{demolition.intro}</p>
            <dl className="glance">
              {demolition.reviews.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.body}</dd>
                </div>
              ))}
            </dl>
            <h3 className="steps-title">How to apply or respond, step by step</h3>
            <ol className="steps">
              {demolition.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </GuideSection>

          <GuideSection id={recognition.id} title={recognition.title}>
            <p>{recognition.intro}</p>
            <dl className="glance">
              {recognition.kinds.map((k) => (
                <div key={k.label}>
                  <dt>{k.label}</dt>
                  <dd>{k.body}</dd>
                </div>
              ))}
            </dl>
            <h3 className="steps-title">How to seek designation, step by step</h3>
            <ol className="steps">
              {recognition.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div className="panel tax-panel">
              <h3>{recognition.tax.title}</h3>
              <p>{recognition.tax.body}</p>
            </div>
          </GuideSection>

          <GuideSection id="packets" title="The member packets">
            <p>Each packet gathers the plain-words guide and the official records behind it into one document.</p>
            <div className="packets">
              {packets.map((p) => (
                <article key={p.id} className="packet" aria-labelledby={`${p.id}-title`}>
                  <p className="packet-number">{p.number}</p>
                  <h3 id={`${p.id}-title`}>{p.title}</h3>
                  <ul>
                    {p.contents.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <p className="packet-foot">
                    <span className="doc-badge">
                      <Lock />
                      Members only
                    </span>
                    <span className="doc-size">PDF, {p.pages}</span>
                  </p>
                </article>
              ))}
            </div>
            <div className="members-divider">
              <h3 className="members-divider-title">{protectJoin.title}</h3>
              <p>{protectJoin.body}</p>
              <Link className="button" href={protectJoin.href}>
                {protectJoin.button}
              </Link>
            </div>
          </GuideSection>

          <GuideSection id="your-home" title={protectOwn.title}>
            <p>{protectOwn.body}</p>
            <p>
              <Link className="button button-red" href={protectOwn.href}>
                {protectOwn.button}
              </Link>
            </p>
          </GuideSection>

          <p className="notice">{protectNote}</p>
        </article>
      </div>
    </SiteShell>
  );
}

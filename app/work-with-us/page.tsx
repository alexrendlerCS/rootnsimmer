import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { workWithUs as w } from "@/content/services";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { SiteShell } from "@/components/SiteShell";
import { GapNote } from "@/components/Gaps";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = { title: `${w.title} | ${site.fullName}`, description: w.lede, alternates: { canonical: "/work-with-us" } };

export default function WorkWithUsPage() {
  return (
    <SiteShell>
      <GapNote line="partners" />
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{w.label}</p>
          <h1 className="page-title land-title">{w.title}</h1>
          <p className="page-lede">{w.lede}</p>
        </div>
      </header>
      <HistoryFact fact={facts.directories} />
      <section className="page-section" aria-labelledby="services-title">
        <div className="wrap">
          <h2 id="services-title" className="guide-h2">
            What we offer
          </h2>
          <div className="ways">
            {w.services.map((s) => (
              <section key={s.title} className="way" aria-label={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section land-tracts" aria-labelledby="how-title">
        <div className="wrap split">
          <div className="prose">
            <h2 className="guide-h2">{w.examplesTitle}</h2>
            <ul className="source-list">
              {w.examples.map((e) => (
                <li key={e.href}>
                  <Link href={e.href}>{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2 id="how-title" className="newsletter-panel-title">
              {w.howTitle}
            </h2>
            <p>{w.how}</p>
            <EmailDraftButton label={w.button} subject={w.subject} body={w.body} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

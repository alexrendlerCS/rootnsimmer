import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { supportPage as s, tiers, ways } from "@/content/support";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { SiteShell } from "@/components/SiteShell";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: `${s.title} | ${site.fullName}`,
  description: s.lede,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{s.label}</p>
          <h1 className="page-title land-title">{s.title}</h1>
          <p className="page-lede">{s.lede}</p>
        </div>
      </header>
      <HistoryFact fact={facts.twine} />

      <section className="page-section" aria-labelledby="join-title">
        <div className="wrap">
          <h2 id="join-title" className="guide-h2">
            Join
          </h2>
          <ul className="tiers">
            {tiers.map((t) => (
              <li key={t.id} id={t.id} className="tier">
                <h3>{t.name}</h3>
                <p className="tier-price">{t.price}</p>
                <p className="tier-who">{t.who}</p>
                <ul className="tier-gets">
                  {t.gets.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
                <EmailDraftButton label={t.button} subject={t.subject} body={t.body} />
                {t.href && (
                  <Link className="text-link" href={t.href}>
                    {t.hrefLabel}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section land-tracts" aria-labelledby="ways-title">
        <div className="wrap">
          <h2 id="ways-title" className="guide-h2">
            More ways to help
          </h2>
          <div className="ways">
            {ways.map((w) => (
              <section key={w.id} id={w.id} className="way" aria-labelledby={`${w.id}-title`}>
                <h3 id={`${w.id}-title`}>{w.title}</h3>
                <p>{w.body}</p>
                <EmailDraftButton label={w.button} subject={w.subject} body={w.emailBody} />
                {w.note && <p className="fine">{w.note}</p>}
              </section>
            ))}
          </div>
          <p className="notice">
            {s.payNote} {s.taxNote}
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

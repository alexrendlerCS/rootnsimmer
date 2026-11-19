import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { homeownerHelp as h } from "@/content/services";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { SiteShell } from "@/components/SiteShell";
import { GapNote } from "@/components/Gaps";

export const metadata: Metadata = { title: `${h.title} | ${site.fullName}`, description: h.lede, alternates: { canonical: "/homeowner-help" } };

export default function HomeownerHelpPage() {
  return (
    <SiteShell>
      <GapNote line="homes" />
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{h.label}</p>
          <h1 className="page-title land-title">{h.title}</h1>
          <p className="page-lede">{h.lede}</p>
        </div>
      </header>
      <section className="page-section" aria-labelledby="programs-title">
        <div className="wrap">
          <h2 id="programs-title" className="guide-h2">
            The programs
          </h2>
          <div className="ways">
            {h.programs.map((p) => (
              <section key={p.title} className="way" aria-label={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <Link className="text-link" href={p.href}>
                  {p.link}
                </Link>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section land-tracts" aria-labelledby="help-title">
        <div className="wrap split">
          <div className="prose">
            <h2 id="help-title" className="guide-h2">
              {h.helpTitle}
            </h2>
            <ul className="entries">
              {h.help.map((x) => (
                <li key={x.title}>
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <p>Homeowner membership comes with the Home Story Package: your home’s history, records and packets, kept for you.</p>
            <EmailDraftButton label={h.helpButton} subject={h.helpSubject} body={h.helpBody} />
            <Link className="text-link" href="/digital-records#dr-membership">
              What the package includes
            </Link>
          </div>
        </div>
        <div className="wrap">
          <p className="notice">{h.note}</p>
        </div>
      </section>
    </SiteShell>
  );
}

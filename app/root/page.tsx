import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { pillars, rootHero, rootJoin, rootNote, rootWork } from "@/content/root";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { SiteShell } from "@/components/SiteShell";
import logo from "@/public/logo.jpeg";

export const metadata: Metadata = {
  title: `ROOT: Lincolnville Community Committee | ${site.fullName}`,
  description: `${rootHero.about} ${rootHero.promise}`,
  alternates: { canonical: "/root" },
};

export default function RootPage() {
  return (
    <SiteShell>
      <div className="wrap root-page">
        <header className="root-hero">
          <Image src={logo} alt="Root & Simmer Hospitality Co." className="root-logo" sizes="160px" priority />
          <h1 className="root-name">
            {rootHero.name}
            <span className="root-title">{rootHero.title}</span>
          </h1>
          <div className="root-rule" aria-hidden="true" />
          <p className="root-about">{rootHero.about}</p>
          <p className="root-promise">{rootHero.promise}</p>
        </header>

        <section aria-labelledby="pillars-title" className="root-section">
          <h2 id="pillars-title" className="sr-only">
            The four pillars
          </h2>
          <ol className="pillars">
            {pillars.map((p) => (
              <li key={p.name} className="pillar">
                <h3 className="pillar-name">{p.name}</h3>
                <p className="pillar-tagline">{p.tagline}</p>
                <p className="pillar-body">{p.body}</p>
                <ul className="pillar-links">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="work-title" className="root-work">
          <h2 id="work-title" className="sr-only">
            Preserve, educate, unite
          </h2>
          <ul className="root-work-list">
            {rootWork.map((w) => (
              <li key={w.word}>
                <p className="root-word">{w.word}</p>
                <p>{w.body}</p>
                <Link className="root-work-link" href={w.href}>
                  {w.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="root-place" aria-hidden="true">
            Lincolnville
          </p>
        </section>

        <section aria-labelledby="join-title" className="panel root-join">
          <h2 id="join-title" className="newsletter-panel-title">
            {rootJoin.title}
          </h2>
          <p>{rootJoin.body}</p>
          <EmailDraftButton label={rootJoin.button} subject={rootJoin.subject} body={rootJoin.emailBody} />
        </section>

        <p className="notice">{rootNote}</p>
      </div>
    </SiteShell>
  );
}

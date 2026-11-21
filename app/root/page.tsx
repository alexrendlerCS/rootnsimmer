import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { connection } from "@/content/site";
import { pillars, rootChoices, rootIntro, rootJoin, rootMotto, rootNote, rootWork } from "@/content/root";
import { SiteShell } from "@/components/SiteShell";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { ConnectionForm } from "@/components/ConnectionForm";
import { ProspectusLink } from "@/components/ProspectusLink";

export const metadata: Metadata = seo(
  "Discover ROOT Member - Lincolnville, St. Augustine FL | Root & Simmer",
  "ROOT Member: Residents, Oral History, Ownership, Tradition. Root & Simmer's independent community connection and preservation membership for Lincolnville. Preserve. Educate. Unite.",
  "/root",
);

/** Discover ROOT (/root): the full ROOT Member identity, pillars and ways to take part. */
export default function DiscoverRootPage() {
  return (
    <SiteShell>
      <section className="root-home root-page" aria-labelledby="root-title">
        <div className="wrap">
          <header className="root-intro">
            <p className="section-label">Discover ROOT</p>
            <h1 id="root-title" className="root-intro-name">
              {rootIntro.name}
              <span className="root-intro-title">{rootIntro.title}</span>
            </h1>
            <div className="root-rule" aria-hidden="true" />
            <p className="root-intro-lead">{rootIntro.tagline}</p>
            <p className="root-intro-sub">{rootIntro.subtagline}</p>
            <p className="root-promise">{rootIntro.promise}</p>
            <p className="root-intro-body root-intro-strong">{rootIntro.lead}</p>
            {rootIntro.body.map((p, i) => (
              <p key={p} className={i === 2 ? "root-intro-line" : "root-intro-body"}>
                {p}
              </p>
            ))}
          </header>

          <h2 className="sr-only">The four pillars</h2>
          <ol className="root-pillars">
            {pillars.map((p) => (
              <li key={p.name} className="root-pillar">
                <span className="root-letter" aria-hidden="true">
                  {p.letter}
                </span>
                <h3 className="root-pillar-name">{p.name}</h3>
                <p className="root-pillar-subtitle">{p.subtitle}</p>
                <p className="root-pillar-line">{p.line}</p>
              </li>
            ))}
          </ol>
          <p className="root-motto">{rootMotto}</p>

          <div className="root-work">
            <h2 className="sr-only">Preserve, educate, unite</h2>
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
          </div>

          <ul className="root-choices">
            {rootChoices.map((c) => (
              <li key={c.href}>
                <Link className="root-choice" href={c.href}>
                  <span className="root-choice-label">
                    {c.label} <span aria-hidden="true">→</span>
                  </span>
                  <span className="root-choice-body">{c.body}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="panel root-join">
            <h2 className="newsletter-panel-title">{rootJoin.title}</h2>
            <p>{rootJoin.body}</p>
            <EmailDraftButton label={rootJoin.button} subject={rootJoin.subject} body={rootJoin.emailBody} />
          </div>

          <p className="notice root-note">{rootNote}</p>
        </div>
      </section>

      {/* Community Connection sign-up (moved here from the home page, Nov 2026; wording unchanged) */}
      <section id="connection" className="section connection">
        <div className="wrap split">
          <div className="prose">
            <p className="section-label">Root & Simmer Hospitality Exclusively for Lincolnville Community Connection</p>
            <h2>{connection.title}</h2>
            {connection.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="invite-list">
              {connection.invitations.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <ProspectusLink />
            <p className="fine">{connection.fine}</p>
          </div>
          <ConnectionForm />
        </div>
      </section>
    </SiteShell>
  );
}

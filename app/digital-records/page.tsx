import type { Metadata } from "next";
import Link from "next/link";
import { drCollection, drHero, drMembership, drPhotos, recordGuides } from "@/content/digital-records";
import { site } from "@/content/site";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { OfferingArt } from "@/components/OfferingArt";
import { Photo } from "@/components/Photo";
import heroPhoto from "@/public/photos/washington-street-home.jpg";
import membershipPhoto from "@/public/photos/yellow-two-story-home.jpg";
import { SiteShell } from "@/components/SiteShell";
import { EvidenceLegend } from "@/components/EvidenceLegend";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: `Digital Records | ${site.fullName}`,
  description: drHero.lede,
  alternates: { canonical: "/digital-records" },
};

export default function DigitalRecordsPage() {
  return (
    <SiteShell>
      <section id="top" className="page-hero" aria-labelledby="dr-title">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <p className="section-label">{drHero.label}</p>
              <h1 id="dr-title" className="page-title">
                {drHero.title}
              </h1>
              <p className="page-lede">{drHero.lede}</p>
            </div>
            <Photo
              src={heroPhoto}
              alt={drPhotos.hero.alt}
              caption={drPhotos.hero.caption}
              credit={drPhotos.hero.credit}
              sizes="(max-width: 900px) 90vw, 380px"
              className="photo-arch"
              priority
            />
          </div>
          <nav className="subnav" aria-label="On this page">
            {drHero.subnav.map((s) => (
              <a key={s.href} href={s.href}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* The three member documents */}
      <HistoryFact fact={facts.records} />
      <section id="dr-collection" className="page-section work" aria-labelledby="dr-collection-title">
        <div className="wrap">
          <div className="section-head">
            <p className="section-label">{drCollection.label}</p>
            <h2 id="dr-collection-title" className="h-medium">
              {drCollection.title}
            </h2>
            <p className="muted">{drCollection.intro}</p>
          </div>
          <ul className="offerings offerings-three">
            {recordGuides.map((g) => (
              <li key={g.id} id={g.id} className="offering">
                <OfferingArt offering={{ art: "paper", artTitle: g.artTitle }} />
                <div className="offering-body">
                  <p className="offering-tagline">{g.kind}</p>
                  <h3>{g.title}</h3>
                  <p>{g.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="notice">{drCollection.note}</p>
        </div>
      </section>

      {/* What's included */}
      <section id="dr-membership" className="page-section" aria-labelledby="dr-membership-title">
        <div className="wrap">
          <div className="split split-media">
            <div className="section-head">
              <p className="section-label">{drMembership.label}</p>
              <h2 id="dr-membership-title" className="h-medium">
                {drMembership.title}
              </h2>
              <p className="muted">{drMembership.intro}</p>
            </div>
            <Photo
              src={membershipPhoto}
              alt={drPhotos.membership.alt}
              caption={drPhotos.membership.caption}
              credit={drPhotos.membership.credit}
              sizes="(max-width: 900px) 90vw, 560px"
            />
          </div>
          <div className="goal-grid four">
            {drMembership.included.map((f) => (
              <article key={f.title} className="goal">
                <p className="goal-kicker">Included</p>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                {f.href && (
                  <p className="goal-more">
                    <Link className="goal-link" href={f.href}>{f.linkLabel}</Link>
                  </p>
                )}
              </article>
            ))}
          </div>
          <div className="panel membership-votes">
            <h3>{drMembership.votes.title}</h3>
            <p>{drMembership.votes.body}</p>
          </div>
          <div className="membership-cta">
            <div className="hero-actions">
              <Link className="button button-red" href={drMembership.packageLink.href}>
                {drMembership.packageLink.label}
              </Link>
              <EmailDraftButton
                label={drMembership.button}
                subject={drMembership.emailSubject}
                body={drMembership.emailBody}
              />
            </div>
            <p className="fine">{drMembership.fine}</p>
          </div>
        </div>
      </section>
      <section className="page-section" aria-label="How we label what we know">
        <div className="wrap">
          <EvidenceLegend />
        </div>
      </section>
    </SiteShell>
  );
}

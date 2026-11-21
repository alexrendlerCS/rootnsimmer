import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  closing,
  connection,
  contactEmail,
  homeHero,
  kimberly,
  method,
  mission,
  records,
  respect,
  threshold,
  values,
  why,
  work,
} from "@/content/site";
import { pillars, rootIntro, rootJoin, rootMotto, rootNote, rootWork } from "@/content/root";
import { craTeaser } from "@/content/cra";
import { tractsPage, tractsTeaser } from "@/content/tracts";
import { whatIfTeasers } from "@/content/stable-bodega";
import { visitorMapTeaser } from "@/content/visitor-map";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { ConnectionForm } from "@/components/ConnectionForm";
import { Offerings } from "@/components/Offerings";
import { RecordsForm } from "@/components/RecordsForm";
import logo from "@/public/logo.jpeg";
import { SiteShell } from "@/components/SiteShell";
import { GapsSection } from "@/components/Gaps";
import headshot from "@/public/photos/kimberly-joyce-headshot.jpg";
import { LetterMore } from "@/components/LetterMore";
import { ProspectusLink } from "@/components/ProspectusLink";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = seo(
  "Our Story | Root & Simmer Hospitality Co.",
  "Root & Simmer Hospitality Co.: our promise, mission, vision, method and values for Lincolnville, St. Augustine, FL.",
  "/our-story",
);

/** Moved from the home page on Nov 19, 2026 (simpler home page); wording unchanged. */
export default function OurStoryPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <p className="section-label">Our Story</p>
          <h1 className="page-title">About Root &amp; Simmer</h1>
        </div>
      </header>
        {/* What is missing in Lincolnville, and how the four lines of work fill it */}
        <HistoryFact fact={facts.founding} />
        <GapsSection />

        {/* The promise, read as a path across the threshold */}
        <section className="threshold" aria-label="Our promise">
          <ol className="wrap threshold-list">
            {threshold.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </section>

        {/* Where it began: bringing Lincolnville onto the visitor map */}
        <section className="story-open" aria-labelledby="story-open-title">
          <Link href={visitorMapTeaser.href} className="wrap story-open-card">
            <p className="section-label">{visitorMapTeaser.label}</p>
            <h2 id="story-open-title" className="h-medium">
              {visitorMapTeaser.title}
            </h2>
            <p>{visitorMapTeaser.body}</p>
            <span className="button button-red">{visitorMapTeaser.link}</span>
          </Link>
        </section>

        {/* Mission & vision */}
        <section id="mission" className="section">
          <div className="wrap mission-grid">
            <div className="prose">
              <p className="section-label">Mission &amp; vision</p>
              <h2>{mission.title}</h2>
              <h3>{mission.missionHeading}</h3>
              <p>{mission.mission}</p>
              <h3>{mission.visionHeading}</h3>
              <p>{mission.vision}</p>
            </div>
            <aside className="note-card">
              <h3>{mission.independence.heading}</h3>
              <p>{mission.independence.body}</p>
              <p className="fine">{mission.independence.disclaimer}</p>
            </aside>
          </div>

          <div className="wrap why-grid">
            <p className="why-year" aria-hidden="true">
              {why.year}
            </p>
            <div className="prose">
              <h2 className="h-medium">{why.title}</h2>
              {why.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <a className="text-link" href={why.link.href}>
                {why.link.label}
              </a>
            </div>
          </div>
        </section>

        {/* Method: a real sequence, so it gets numbers */}
        <section className="method" aria-labelledby="method-title">
          <div className="wrap">
            <h2 id="method-title" className="h-medium">
              How a home’s story comes together
            </h2>
            <ol className="method-steps">
              {method.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="section">
          <div className="wrap values-grid">
            <div className="values-head">
              <p className="section-label">Our values</p>
              <h2>{values.title}</h2>
              <p className="muted">{values.lede}</p>
            </div>
            <dl className="values-list">
              {values.items.map((v) => (
                <div key={v.title}>
                  <dt>{v.title}</dt>
                  <dd>{v.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="respect" aria-labelledby="respect-title">
          <div className="wrap">
            <h2 id="respect-title">{respect.title}</h2>
            <p>{respect.body}</p>
          </div>
        </section>

        {/* Lincolnville history: The Land Beneath Our Feet (moved here from the home page, Nov 2026) */}
        <section id="lincolnville-history" className="land-teaser" aria-labelledby="land-teaser-title">
          <Link href={tractsPage.href} className="wrap land-teaser-card">
            <p className="land-teaser-year" aria-hidden="true">
              1866
            </p>
            <div>
              <p className="section-label">{tractsTeaser.label}</p>
              <h2 id="land-teaser-title" className="h-medium">
                {tractsTeaser.title}
              </h2>
              <p>{tractsTeaser.body}</p>
              <span className="text-link">{tractsTeaser.link}</span>
            </div>
          </Link>
        </section>
    </SiteShell>
  );
}

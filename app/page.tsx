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
import { FourLines } from "@/components/FourLines";
import headshot from "@/public/photos/kimberly-joyce-headshot.jpg";
import { LetterMore } from "@/components/LetterMore";
import { ProspectusLink } from "@/components/ProspectusLink";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

const LETTER_PREVIEW = 3;

export const metadata: Metadata = seo(
  "Root & Simmer - Lincolnville History, St. Augustine FL",
  "Preserving Lincolnville's home and family histories in St. Augustine, FL. Founded in 1866 as Lil Africa. Every home known. Every voice kept.",
  "/",
);

/** Business listing code for Google (from Kimberly's keywords file, Nov 19, 2026). Visitors never see it. */
const businessListing = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Root & Simmer Hospitality Co.",
  url: "https://www.rootnsimmer.com/",
  email: "rootnsimmer@gmail.com",
  telephone: "+1-760-481-4961",
  founder: { "@type": "Person", name: "Kimberly Joyce" },
  description: "Documenting Lincolnville home and family histories and supporting historic preservation in St. Augustine, Florida.",
  areaServed: { "@type": "Place", name: "Lincolnville Historic District, St. Augustine, Florida" },
  knowsAbout: ["Lincolnville history", "Lil Africa", "Historic preservation", "Home history research", "Gullah Geechee heritage"],
};

export default function Home() {
  return (
    <SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessListing) }} />
        {/* Hero: Kimberly's brand promise, with the approved live-oak logo as the centerpiece (Nov 19, 2026).
            The then-and-now house photos stay on the Homes Not Hotels page. */}
        <section id="top" className="home-hero" aria-labelledby="home-hero-title">
          <div className="wrap home-hero-grid">
            <div className="home-hero-copy">
              <p className="home-hero-eyebrow">{homeHero.eyebrow}</p>
              <h1 id="home-hero-title" className="home-hero-title">
                {homeHero.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="home-hero-body">{homeHero.body}</p>
              <p className="home-hero-signature">{homeHero.signature}</p>
              <div className="hero-actions">
                <a className="button" href={homeHero.primary.href}>
                  {homeHero.primary.label}
                </a>
              </div>
              <p className="home-hero-fine">{homeHero.fine}</p>
            </div>
            <figure className="hero-logo">
              <Image
                src={logo}
                alt="Root & Simmer Hospitality Co. logo: a live oak with deep roots and a rising sun, the outline of Africa in its trunk, framed by flowers"
                priority
                placeholder="blur"
                sizes="(max-width: 900px) 78vw, 480px"
              />
            </figure>
          </div>
        </section>

        {/* What we do: the four lines of work, each linking to its own page */}
        <FourLines />

        {/* Kimberly */}
        <section id="kimberly" className="section kimberly">
          <div className="wrap kimberly-grid">
            <aside className="kimberly-side">
              <Image
                src={headshot}
                alt="Kimberly Joyce, founder of Root & Simmer Hospitality Co., smiling, with long wavy brown hair and a purple ruffled blouse, outdoors in warm evening light."
                placeholder="blur"
                sizes="(max-width: 760px) 80vw, 380px"
                className="kimberly-photo"
              />
              <blockquote>
                <p>“{kimberly.quote}”</p>
                <footer>
                  {kimberly.name}
                  <span>{kimberly.role}</span>
                </footer>
              </blockquote>
            </aside>
            <div className="letter">
              <p className="section-label">About Kimberly Joyce</p>
              <h2>{kimberly.title}</h2>
              {kimberly.letter.slice(0, LETTER_PREVIEW).map((p) => (
                <p key={p}>{p}</p>
              ))}
              <LetterMore>
                {kimberly.letter.slice(LETTER_PREVIEW).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </LetterMore>
              <p>
                <Link href={visitorMapTeaser.href}>How it began: bringing Lincolnville onto the visitor map</Link>
              </p>
              <p className="signature">{kimberly.name}</p>
            </div>
          </div>
        </section>

        {/* ROOT: Lincolnville Community Committee (old /root address forwards here) */}
        <section id="root" className="root-home" aria-labelledby="root-title">
          <div className="wrap">
            <header className="root-intro">
              <h2 id="root-title" className="root-intro-name">
                {rootIntro.name}
                <span className="root-intro-title">{rootIntro.title}</span>
              </h2>
              <div className="root-rule" aria-hidden="true" />
              <p className="root-intro-lead">{rootIntro.lead}</p>
              <p className="root-intro-body">{rootIntro.body}</p>
            </header>

            <h3 className="sr-only">The four pillars</h3>
            <ol className="root-pillars">
              {pillars.map((p) => (
                <li key={p.name} className="root-pillar">
                  <span className="root-letter" aria-hidden="true">
                    {p.letter}
                  </span>
                  <h4 className="root-pillar-name">{p.name}</h4>
                  <p className="root-pillar-subtitle">{p.subtitle}</p>
                  <p className="root-pillar-line">{p.line}</p>
                </li>
              ))}
            </ol>
            <p className="root-motto">{rootMotto}</p>

            <div className="root-work">
              <h3 className="sr-only">Preserve, educate, unite</h3>
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

            <div className="panel root-join">
              <h3 className="newsletter-panel-title">{rootJoin.title}</h3>
              <p>{rootJoin.body}</p>
              <EmailDraftButton label={rootJoin.button} subject={rootJoin.subject} body={rootJoin.emailBody} />
            </div>

            <p className="notice root-note">{rootNote}</p>
          </div>
        </section>

        {/* Lincolnville history: The Land Beneath Our Feet */}
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

        {/* Community Connection sign-up */}
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

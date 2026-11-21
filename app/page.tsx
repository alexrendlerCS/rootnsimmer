import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { homeCards, homeHero, homeSupport, kimberly, kimberlyIntro } from "@/content/site";
import { rootHome, rootIntro } from "@/content/root";
import logo from "@/public/logo.jpeg";
import { SiteShell } from "@/components/SiteShell";
import { CornerMarketLinked } from "@/components/CornerMarketLinked";
import headshot from "@/public/photos/kimberly-joyce-headshot.jpg";

export const metadata: Metadata = seo(
  "Root & Simmer - Lincolnville History, St. Augustine FL",
  "Preserving Lincolnville's home and family histories in St. Augustine, FL. Founded in 1866 as Lil Africa. Every Home Known. Every Voice Heard.",
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
        {/* Home page: five sections (Final Website Master Plan, Nov 2026). Sections that used to be here were moved, not deleted:
            the four lines of work are on /our-work, The Land Beneath Our Feet teaser is on /our-story,
            the Community Connection form is on /root, and Kimberly’s full letter is on /visitor-map#kimberly-story. */}

        {/* 1. Hero */}
        <section id="top" className="home-hero" aria-labelledby="home-hero-title">
          <div className="wrap home-hero-grid">
            <div className="home-hero-copy">
              <p className="home-hero-eyebrow">{homeHero.eyebrow}</p>
              <h1 id="home-hero-title" className="home-hero-title">
                {homeHero.headline.map((line, i) => (
                  <span key={line}>
                    {i > 0 && " "}
                    {line}
                  </span>
                ))}
              </h1>
              <p className="home-hero-promise">{homeHero.promise}</p>
              {homeHero.body.map((p) => (
                <p key={p} className="home-hero-body">
                  {p}
                </p>
              ))}
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

        {/* 2. Rooted Together. (three audience cards) */}
        <section id="help" className="section home-cards" aria-labelledby="home-cards-title">
          <div className="wrap">
            <header className="home-cards-head">
              <h2 id="home-cards-title">{homeCards.title}</h2>
              <p className="home-cards-sub">{homeCards.subtitle}</p>
              <p className="home-cards-line">{homeCards.line}</p>
            </header>
            <ul className="home-cards-list">
              {homeCards.cards.map((c) => (
                <li key={c.title} className="home-card">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <Link className="text-link home-card-link" href={c.link.href}>
                    {c.link.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Meet Kimberly Joyce */}
        <section id="kimberly" className="section kimberly" aria-labelledby="kimberly-title">
          <div className="wrap kimberly-grid">
            <aside className="kimberly-side">
              <Image
                src={headshot}
                alt="Kimberly Joyce, founder of Root & Simmer Hospitality Co., smiling, with long wavy brown hair and a purple ruffled blouse, outdoors in warm evening light."
                placeholder="blur"
                sizes="(max-width: 760px) 80vw, 380px"
                className="kimberly-photo"
              />
              <p className="kimberly-caption">
                {kimberly.name}
                <span>{kimberly.role}</span>
              </p>
            </aside>
            <div className="letter">
              <p className="section-label">{kimberlyIntro.label}</p>
              <h2 id="kimberly-title">{kimberlyIntro.title}</h2>
              <p className="kimberly-subtitle">{kimberlyIntro.subtitle}</p>
              {kimberlyIntro.paragraphs.map((p, i) =>
                i === 1 ? (
                  <p key={p}>
                    <CornerMarketLinked text={p} />
                  </p>
                ) : (
                  <p key={p}>{p}</p>
                ),
              )}
              <p>
                <Link className="button" href={kimberlyIntro.link.href}>
                  {kimberlyIntro.link.label} <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* 4. ROOT Member (short; the full story is on /root) */}
        <section id="root" className="root-home" aria-labelledby="root-title">
          <div className="wrap">
            <header className="root-intro">
              <h2 id="root-title" className="root-intro-name">
                {rootIntro.name}
                <span className="root-intro-title">{rootIntro.title}</span>
              </h2>
              <div className="root-rule" aria-hidden="true" />
              <p className="root-intro-lead">{rootIntro.tagline}</p>
              <p className="root-intro-sub">{rootIntro.subtagline}</p>
              <p className="root-intro-body">{rootHome.body}</p>
              <p className="root-intro-line">{rootHome.line}</p>
              <p className="root-actions">
                <Link className="button button-red" href={rootHome.primary.href}>
                  {rootHome.primary.label}
                </Link>
                <Link className="text-link" href={rootHome.homeStory.href}>
                  {rootHome.homeStory.label}
                </Link>
              </p>
            </header>
          </div>
        </section>

        {/* 5. Help Move the Mission Forward (no amounts until card payments are set up and tested) */}
        <section id="support" className="section home-support" aria-labelledby="home-support-title">
          <div className="wrap home-support-inner">
            <h2 id="home-support-title">{homeSupport.title}</h2>
            {homeSupport.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="home-support-closing">{homeSupport.closing}</p>
            <p>
              <Link className="button" href={homeSupport.link.href}>
                {homeSupport.link.label}
              </Link>
            </p>
            <p className="fine">{homeSupport.fine}</p>
          </div>
        </section>
    </SiteShell>
  );
}


import Image from "next/image";
import Link from "next/link";
import {
  closing,
  connection,
  contactEmail,
  hero,
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
import { craTeaser } from "@/content/cra";
import { whatIfTeasers } from "@/content/stable-bodega";
import { ConnectionForm } from "@/components/ConnectionForm";
import { Offerings } from "@/components/Offerings";
import { RecordsForm } from "@/components/RecordsForm";
import { SiteShell } from "@/components/SiteShell";
import homePhoto from "@/public/lincolnville-home.jpeg";
import homeThenPhoto from "@/public/photos/home-story-then.jpg";
import logo from "@/public/logo.jpeg";

const LETTER_PREVIEW = 3;

export default function Home() {
  return (
    <SiteShell>
        {/* Hero: the house, framed as a doorway */}
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>{hero.title}</h1>
              <p className="hero-subtitle">{hero.subtitle}</p>
              <p className="hero-lede">{hero.lede}</p>
              <div className="hero-actions">
                <a className="button" href={hero.primary.href}>
                  {hero.primary.label}
                </a>
                <a className="text-link" href={hero.secondary.href}>
                  {hero.secondary.label}
                </a>
              </div>
            </div>
            <figure className="doorway">
              <div className="doorway-frame">
                <Image
                  src={homePhoto}
                  alt={hero.photoAlt}
                  priority
                  placeholder="blur"
                  sizes="(max-width: 760px) 90vw, 44vw"
                  className="doorway-photo"
                />
              </div>
              <figure className="then-print">
                <Image
                  src={homeThenPhoto}
                  alt={hero.then.alt}
                  sizes="(max-width: 640px) 150px, 220px"
                  className="then-print-photo"
                />
                <figcaption>
                  {hero.then.label}
                  <span>{hero.then.credit}</span>
                </figcaption>
              </figure>
              <figcaption>{hero.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* The promise, read as a path across the threshold */}
        <section className="threshold" aria-label="Our promise">
          <ol className="wrap threshold-list">
            {threshold.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
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

        {/* CRA teaser: links to the full CRA – Lincolnville page */}
        <section id="cra" className="cra-teaser" aria-labelledby="cra-teaser-title">
          <div className="wrap split">
            <div className="prose">
              <p className="section-label">{craTeaser.label}</p>
              <h2 id="cra-teaser-title" className="h-medium">
                {craTeaser.title}
              </h2>
              <p>{craTeaser.body}</p>
              <Link className="button" href="/cra-lincolnville">
                {craTeaser.link}
              </Link>
            </div>
            <div className="panel">
              <ol className="goal-list">
                {craTeaser.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ol>
              <p className="fine">{craTeaser.source}</p>
            </div>
          </div>
        </section>

        {/* What if…? The Stable Bodega */}
        <section id="what-if" className="what-if" aria-label="What if…? Root & Simmer visions">
          <div className="wrap what-if-grid">
            {whatIfTeasers.map((w) => (
              <Link key={w.href} href={w.href} className="what-if-card">
                <Image src={w.image} alt="" width={1200} height={700} sizes="(max-width: 900px) 90vw, 560px" className="what-if-img" />
                <div>
                  <p className="section-label">{w.label}</p>
                  <h2 className="h-medium">{w.title}</h2>
                  <p>{w.body}</p>
                  <span className="button button-red">{w.link}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Offerings */}
        <section id="work" className="section work">
          <div className="wrap">
            <div className="work-head">
              <div>
                <p className="section-label">Our work</p>
                <h2>{work.title}</h2>
              </div>
              <p className="muted">{work.intro}</p>
            </div>
            <Offerings />
            <p className="work-note">{work.note}</p>
            <p className="work-note">
              {work.recordsPrompt}{" "}
              <Link className="text-link" href="/digital-records">
                {work.recordsLink}
              </Link>
            </p>
          </div>
        </section>

        {/* Kimberly */}
        <section id="kimberly" className="section kimberly">
          <div className="wrap kimberly-grid">
            <aside className="kimberly-side">
              <Image src={logo} alt="Root & Simmer Hospitality Co. live oak logo" placeholder="blur" sizes="(max-width: 760px) 70vw, 360px" className="kimberly-logo" />
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
              <details className="letter-more">
                <summary>
                  <span className="when-closed">Keep reading Kimberly’s story</span>
                  <span className="when-open">Show less</span>
                </summary>
                {kimberly.letter.slice(LETTER_PREVIEW).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </details>
              <p className="signature">{kimberly.name}</p>
            </div>
          </div>
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
              <p className="fine">{connection.fine}</p>
            </div>
            <ConnectionForm />
          </div>
        </section>

        <section className="respect" aria-labelledby="respect-title">
          <div className="wrap">
            <h2 id="respect-title">{respect.title}</h2>
            <p>{respect.body}</p>
          </div>
        </section>

        {/* Records request */}
        <section id="records" className="section">
          <div className="wrap split">
            <div className="prose">
              <p className="section-label">Request records</p>
              <h2>{records.title}</h2>
              <p>{records.intro}</p>
              <div className="faq">
                {records.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <RecordsForm />
          </div>
        </section>

        <section className="closing">
          <div className="wrap">
            <p className="closing-quote">“{closing.quote}”</p>
            <a className="button button-red" href={`mailto:${contactEmail}`}>
              {closing.link}
            </a>
          </div>
        </section>
    </SiteShell>
  );
}

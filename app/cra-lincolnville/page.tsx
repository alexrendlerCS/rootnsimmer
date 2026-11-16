import type { Metadata } from "next";
import Link from "next/link";
import { craHero, craHistory, craMembers, craNow, craPhotos, craPlan, craRole, craVoices, craWhy } from "@/content/cra";
import { site } from "@/content/site";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { Photo } from "@/components/Photo";
import markerPhoto from "@/public/photos/lincolnville-historic-district-marker.jpg";
import benedictPhoto from "@/public/photos/st-benedict-the-moor-church.jpg";
import trinityPhoto from "@/public/photos/trinity-methodist-church.jpg";
import { Rich } from "@/components/Rich";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `CRA – Lincolnville | ${site.fullName}`,
  description: craHero.lede,
  alternates: { canonical: "/cra-lincolnville" },
};

export default function CraPage() {
  return (
    <SiteShell>
      <section id="top" className="page-hero" aria-labelledby="cra-title">
        <div className="wrap">
          <div className="page-hero-grid">
            <div>
              <p className="section-label">{craHero.label}</p>
              <h1 id="cra-title" className="page-title">
                {craHero.title}
              </h1>
              <p className="page-lede">{craHero.lede}</p>
            </div>
            <Photo
              src={markerPhoto}
              alt={craPhotos.hero.alt}
              caption={craPhotos.hero.caption}
              credit={craPhotos.hero.credit}
              sizes="(max-width: 900px) 90vw, 380px"
              className="photo-arch"
              priority
            />
          </div>
          <dl className="facts">
            {craHero.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <nav className="subnav" aria-label="On this page">
            {craHero.subnav.map((s) => (
              <a key={s.href} href={s.href}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Why it began */}
      <section id="cra-why" className="page-section band" aria-labelledby="cra-why-title">
        <div className="wrap split">
          <div className="prose">
            <p className="section-label">{craWhy.label}</p>
            <h2 id="cra-why-title" className="h-medium">
              {craWhy.title}
            </h2>
            {craWhy.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="panel">
            <h3>{craWhy.conditionsTitle}</h3>
            <ol className="plain-list">
              {craWhy.conditions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="cra-history" className="page-section" aria-labelledby="cra-history-title">
        <div className="wrap">
          <div className="section-head">
            <p className="section-label">{craHistory.label}</p>
            <h2 id="cra-history-title" className="h-medium">
              {craHistory.title}
            </h2>
          </div>
          <div className="split">
            <ol className="timeline">
              {craHistory.timeline.map((t) => (
                <li key={t.when}>
                  <b>{t.when}</b>
                  {t.what}
                </li>
              ))}
            </ol>
            <div>
              <h3 className="h-flush">{craHistory.institutionsTitle}</h3>
              <div className="table-wrap">
                <table className="record-table">
                  <thead>
                    <tr>
                      <th scope="col">Building</th>
                      <th scope="col">Built</th>
                    </tr>
                  </thead>
                  <tbody>
                    {craHistory.institutions.map((r) => (
                      <tr key={r.name}>
                        <td>{r.name}</td>
                        <td className="nowrap">{r.built}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="fine table-note">{craHistory.institutionsNote}</p>
              <Photo
                src={benedictPhoto}
                alt={craPhotos.history.alt}
                caption={craPhotos.history.caption}
                credit={craPhotos.history.credit}
                sizes="(max-width: 900px) 90vw, 560px"
                className="photo-section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residents' voices */}
      <section id="cra-voices" className="page-section band" aria-labelledby="cra-voices-title">
        <div className="wrap">
          <div className="section-head">
            <p className="section-label">{craVoices.label}</p>
            <h2 id="cra-voices-title" className="h-medium">
              {craVoices.title}
            </h2>
            <p className="muted">{craVoices.intro}</p>
          </div>
          <ul className="voices">
            {craVoices.quotes.map((q) => (
              <li key={q.text}>
                <blockquote>
                  <p>{q.text}</p>
                  <footer>{q.source}</footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The 2017 Plan */}
      <section id="cra-plan" className="page-section" aria-labelledby="cra-plan-title">
        <div className="wrap">
          <div className="section-head">
            <p className="section-label">{craPlan.label}</p>
            <h2 id="cra-plan-title" className="h-medium">
              {craPlan.title}
            </h2>
            <p className="muted">{craPlan.intro}</p>
          </div>
          <div className="goal-grid">
            {craPlan.goals.map((g, i) => (
              <article key={g.title} className="goal">
                <p className="goal-kicker">Goal {i + 1}</p>
                <h3>{g.title}</h3>
                <ul>
                  {g.steps.map((s) => (
                    <li key={s}>
                      <Rich text={s} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="notice">{craPlan.note}</p>
        </div>
      </section>

      {/* Work today */}
      <section id="cra-now" className="page-section band" aria-labelledby="cra-now-title">
        <div className="wrap split">
          <div>
            <p className="section-label">{craNow.label}</p>
            <h2 id="cra-now-title" className="h-medium">
              {craNow.title}
            </h2>
            <ol className="timeline">
              {craNow.timeline.map((t) => (
                <li key={t.when}>
                  <b>{t.when}</b>
                  {t.what}
                </li>
              ))}
            </ol>
          </div>
          <div className="stack">
            <Photo
              src={trinityPhoto}
              alt={craPhotos.now.alt}
              caption={craPhotos.now.caption}
              credit={craPhotos.now.credit}
              sizes="(max-width: 900px) 90vw, 560px"
            />
          <div className="panel">
            <h3>{craNow.underwayTitle}</h3>
            <ul className="work-list">
              {craNow.underway.map((u) => (
                <li key={u.title}>
                  <strong>{u.title}</strong> {u.body}
                </li>
              ))}
            </ul>
            <p className="fine">{craNow.note}</p>
          </div>
          </div>
        </div>
      </section>

      {/* Member access */}
      <section id="cra-members" className="page-section" aria-labelledby="cra-members-title">
        <div className="wrap">
          <div className="section-head">
            <p className="section-label">{craMembers.label}</p>
            <h2 id="cra-members-title" className="h-medium">
              {craMembers.title}
            </h2>
            <p className="muted">{craMembers.intro}</p>
          </div>
          <div className="goal-grid four">
            {craMembers.features.map((f) => (
              <article key={f.title} className="goal">
                <p className="goal-kicker">Members</p>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
          <div className="split split-tight">
            <div className="panel">
              <p className="section-label">{craMembers.ask.label}</p>
              <h3>{craMembers.ask.title}</h3>
              <p>{craMembers.ask.body}</p>
              <EmailDraftButton
                label={craMembers.ask.button}
                subject={craMembers.ask.emailSubject}
                body={craMembers.ask.emailBody}
              />
            </div>
            <div className="panel">
              <p className="section-label">{craMembers.sample.label}</p>
              <h3>{craMembers.sample.title}</h3>
              <ul className="work-list">
                {craMembers.sample.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="fine">{craMembers.sample.source}</p>
            </div>
          </div>
          <p className="notice">
            {craMembers.note}{" "}
            <Link className="text-link" href="/digital-records#dr-membership">
              {craMembers.membershipLink}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Root & Simmer's role */}
      <section id="cra-rs" className="page-section band" aria-labelledby="cra-rs-title">
        <div className="wrap split">
          <div>
            <p className="section-label">{craRole.label}</p>
            <h2 id="cra-rs-title" className="h-medium">
              {craRole.title}
            </h2>
          </div>
          <div className="prose">
            <p>{craRole.body}</p>
            <p className="notice">{craRole.disclaimer}</p>
            <div className="hero-actions">
              <Link className="button" href="/#work">
                See our work
              </Link>
              <Link className="text-link" href="/#records">
                Request records
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap">
          <p className="fine sources">{craRole.sources}</p>
        </div>
      </section>
    </SiteShell>
  );
}

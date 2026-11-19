import type { Metadata } from "next";
import Link from "next/link";
import { craLanding, craLandingPhoto, craTakePart, type CraSlug } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, craHref, GuideSection, JoinCta } from "@/components/CraGuide";
import { Photo } from "@/components/Photo";
import markerPhoto from "@/public/photos/lincolnville-historic-district-marker.jpg";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo(
  "Lincolnville Community & CRA - St. Augustine",
  "Lincolnville Community Redevelopment Agency (CRA) updates, community requests, newsletter and local Lincolnville businesses and restaurants.",
  "/cra-lincolnville",
);

export default function CraLandingPage() {
  const l = craLanding;
  return (
    <CraGuide slug="" lede={l.intro}>
      <div className="guide-split">
        <GuideSection id="what" title={l.what.title}>
          {l.what.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </GuideSection>
        <Photo
          src={markerPhoto}
          alt={craLandingPhoto.alt}
          caption={craLandingPhoto.caption}
          credit={craLandingPhoto.credit}
          sizes="(max-width: 900px) 90vw, 300px"
          className="photo-arch guide-photo"
          priority
        />
      </div>

      <GuideSection id="glance" title={l.glance.title}>
        <dl className="glance">
          {l.glance.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </GuideSection>

      <GuideSection id="goals" title={l.goals.title}>
        <p>{l.goals.intro}</p>
        <ol className="goal-grid guide-goals">
          {l.goals.items.map((g, i) => (
            <li key={g.name} className="goal">
              <p className="goal-kicker">Goal {i + 1}</p>
              <h3>{g.name}</h3>
              <p>{g.body}</p>
            </li>
          ))}
        </ol>
      </GuideSection>

      <GuideSection id="done" title={l.done.title}>
        <ul className="done-list">
          {l.done.items.map((d) => (
            <li key={d.title}>
              <Link href={craHref(d.slug as CraSlug)}>
                <span className="done-goal">{d.goal}</span>
                <span className="done-title">{d.title}</span>
                <span className="done-body">{d.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="budget" title={l.budget.title}>
        <p>{l.budget.intro}</p>
        <div className="budget-total">
          <span>{l.budget.total.label}</span>
          <strong>{l.budget.total.amount}</strong>
        </div>
        <dl className="budget-income">
          {l.budget.income.map((i) => (
            <div key={i.label}>
              <dt>{i.label}</dt>
              <dd>{i.amount}</dd>
            </div>
          ))}
        </dl>
        {l.budget.groups.map((g) => (
          <div key={g.title} className="budget-group">
            <h3>
              <span className="done-goal">{g.goal}</span> {g.title} <span className="budget-group-total">{g.total}</span>
            </h3>
            <table className="budget-table">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">New</th>
                  <th scope="col">Committed</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {g.lines.map((r) => (
                  <tr key={r.name}>
                    <th scope="row">{r.name}</th>
                    <td>{r.added || "–"}</td>
                    <td>{r.committed || "–"}</td>
                    <td>{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <p>{l.budget.landmarks}</p>
        <p className="fine">{l.budget.note}</p>
        <p>
          <a className="button" href={l.budget.source.href} target="_blank" rel="noopener">
            {l.budget.source.label}
          </a>{" "}
          <a href={l.budget.lastYear.href} target="_blank" rel="noopener">
            {l.budget.lastYear.label}
          </a>
        </p>
      </GuideSection>

      <GuideSection id="library" title={l.library.title}>
        <p>{l.library.body}</p>
        <p>
          <Link className="button" href="/library">
            {l.library.link}
          </Link>
        </p>
      </GuideSection>

      <GuideSection id="follow" title={l.follow.title}>
        <p>{l.follow.body}</p>
        <ol className="stages">
          {l.follow.stages.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p>{l.follow.questionsIntro}</p>
        <ul className="questions">
          {l.follow.questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="minutes" title={l.minutes.title}>
        <p>{l.minutes.intro}</p>
        <ul className="minutes-list">
          {l.minutes.quotes.map((q) => (
            <li key={q.text}>
              <figure className="minutes-quote">
                <blockquote>{q.text}</blockquote>
                <figcaption>
                  {q.who}, {q.date}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="fine">{l.minutes.note}</p>
      </GuideSection>

      <GuideSection id="take-part" title="How to take part">
        <ul className="ways">
          {craTakePart.ways.map((w) => (
            <li key={w.title}>
              <strong>{w.title}</strong> {w.body}
            </li>
          ))}
        </ul>
      </GuideSection>

      <JoinCta>
        <Link className="button" href={craHref("take-part")}>
          See how to take part
        </Link>
        <Link className="button button-red" href="/digital-records#dr-membership">
          Lincolnville Connection
        </Link>
      </JoinCta>

      <p className="notice">{l.disclaimer}</p>
    </CraGuide>
  );
}

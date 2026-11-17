import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { twinePark as t } from "@/content/twine-park";
import { requireMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { CraGuide, GuideSection } from "@/components/CraGuide";

export const metadata: Metadata = {
  title: `Twine Park Proposal | ${site.fullName}`,
  description: "For Lincolnville Connection members: Root & Simmer’s proposal to collaborate with the Lincolnville CRA on Twine Park.",
  alternates: { canonical: "/cra-lincolnville/twine-park" },
  robots: { index: false },
};

/** Members only: visitors who are not signed in go to the sign-in page and come back here. */
export default async function TwineParkPage() {
  await requireMember("/cra-lincolnville/twine-park");
  const supabase = await createClient();
  const { data: pdf } = await supabase
    .from("documents")
    .select("id")
    .eq("file_name", t.pdf.fileName)
    .eq("archived", false)
    .maybeSingle();

  return (
    <CraGuide slug="twine-park" lede={t.lede}>
      <p className="members-flag">
        Members only · {t.date}
        {pdf && (
          <>
            {" · "}
            <a href={`/members/document/${pdf.id}`} target="_blank" rel="noopener">
              {t.pdf.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </>
        )}
      </p>

      <GuideSection id="brief" title={t.brief.title}>
        <p className="twine-brief">{t.brief.body}</p>
      </GuideSection>

      <GuideSection id="twines" title={t.twines.title}>
        {t.twines.paragraphs.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </GuideSection>

      <GuideSection id="vision" title={t.vision.title}>
        <figure className="minutes-quote twine-vision">
          <blockquote>{t.vision.quote}</blockquote>
          <figcaption>{t.vision.tagline}</figcaption>
        </figure>
        <dl className="glance">
          {t.vision.pillars.map((p) => (
            <div key={p.label}>
              <dt>{p.label}</dt>
              <dd>{p.body}</dd>
            </div>
          ))}
        </dl>
        <div className="panel twine-passion">
          <h3>Passion with purpose</h3>
          <p>{t.vision.passion}</p>
          <p className="fine">{t.vision.who}</p>
        </div>
      </GuideSection>

      <GuideSection id="stand" title={t.stand.title}>
        <ul className="twine-list">
          {t.stand.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="corner" title={t.corner.title}>
        <p>{t.corner.intro}</p>
        <ol className="twine-places">
          {t.corner.places.map((p) => (
            <li key={p.n}>
              <span className="twine-num" aria-hidden="true">
                {p.n}
              </span>
              <div>
                <h3>{p.place}</h3>
                <p>{p.there}</p>
                <p className="twine-project">Our project: {p.project}</p>
              </div>
            </li>
          ))}
        </ol>
      </GuideSection>

      <GuideSection id="park" title={t.park.title}>
        <p>{t.park.intro}</p>
        <p>{t.park.ask}</p>
        <h3 className="steps-title">{t.park.contributeTitle}</h3>
        <ol className="steps">
          {t.park.contribute.map((c) => (
            <li key={c.label}>
              <strong>{c.label}.</strong> {c.body}
            </li>
          ))}
        </ol>
        <div className="panel">
          <h3>{t.park.listening.title}</h3>
          <p>{t.park.listening.body}</p>
        </div>
        <h3 className="steps-title">{t.park.protectionsTitle}</h3>
        <ul className="twine-list">
          {t.park.protections.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </GuideSection>

      {t.projects.map((p) => (
        <GuideSection key={p.id} id={p.id} title={p.title}>
          {p.paragraphs.map((para) => (
            <p key={para.slice(0, 30)}>{para}</p>
          ))}
          {p.id === "bricks" && (
            <dl className="glance twine-bricks">
              {t.bricks.map((b) => (
                <div key={b.stamp}>
                  <dt>{b.stamp}</dt>
                  <dd>
                    {b.maker} <span className="fine">{b.when}.</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {"listTitle" in p && p.listTitle && (
            <>
              <h3 className="steps-title">{p.listTitle}</h3>
              <ul className="twine-list">
                {p.list?.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </>
          )}
          {"after" in p && p.after && <p>{p.after}</p>}
          {"link" in p && p.link && (
            <p>
              <Link className="button" href={p.link.href}>
                {p.link.label}
              </Link>
            </p>
          )}
        </GuideSection>
      ))}

      <GuideSection id="next" title={t.next.title}>
        <div className="panel twine-milestone">
          <p className="twine-label">Next public milestone</p>
          <h3>
            {t.next.milestone.date}, {t.next.milestone.place}
          </h3>
          <p>{t.next.milestone.body}</p>
        </div>
        <p>{t.next.partners}</p>
        <h3 className="steps-title">Next steps</h3>
        <ol className="steps">
          {t.next.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </GuideSection>

      <GuideSection id="not-claim" title={t.notClaim.title}>
        <p>{t.notClaim.body}</p>
        {pdf && (
          <p>
            <a className="button button-red" href={`/members/document/${pdf.id}`} target="_blank" rel="noopener">
              {t.pdf.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            <span className="fine">{t.pdf.note}</span>
          </p>
        )}
      </GuideSection>

      <p className="notice">{t.notice}</p>
    </CraGuide>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { storyMap as s } from "@/content/story-map";
import { loadResidentsData } from "@/lib/residents-map";
import { loadStorySummary } from "@/lib/story-map";
import { StoryMapLoader } from "@/components/StoryMapLoader";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = seo(
  "Lil Africa Neighborhood Story Map - Lincolnville",
  "The people, homes and work of Lil Africa, Lincolnville’s first neighborhood: grocers, barbers, physicians, teachers and more from the city directories of 1885–1912.",
  s.href,
);

export default async function StoryMapPage() {
  const [data, summary] = await Promise.all([loadResidentsData(), loadStorySummary()]);
  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{s.label}</p>
          <h1 className="page-title land-title">{s.title}</h1>
          <p className="land-subtitle">{s.subtitle}</p>
          {s.intro.map((p) => (
            <p key={p} className="page-lede">
              {p}
            </p>
          ))}
        </div>
      </header>

      {summary && (
        <section className="page-section" aria-labelledby="story-summary-title">
          <div className="wrap">
            <h2 id="story-summary-title" className="guide-h2">
              {s.summaryTitle}
            </h2>
            <p className="muted">
              {summary.total} directory entries · {summary.people} people · {summary.addresses} Lincolnville addresses on the map
            </p>
            <ul className="story-summary">
              {summary.groups.map((g) => (
                <li key={g.id}>
                  <span className="rm-dot" style={{ background: g.color }} aria-hidden="true" />
                  <strong>{g.count}</strong> {g.label.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="page-section" aria-labelledby="story-map-title">
        <div className="wrap">
          <h2 id="story-map-title" className="guide-h2">
            The Story Map
          </h2>
          {data ? (
            <>
              <StoryMapLoader data={data} partners={s.partners} todayLabel={s.todayLabel} />
              <p className="notice">{s.mapNote}</p>
              <p className="evidence">
                <span className="evidence-tag" data-verified="true">
                  {s.evidence}
                </span>
              </p>
            </>
          ) : (
            <div className="panel research-join">
              <p>{s.membersNote}</p>
              <p className="latest-actions">
                <Link className="button" href={`/members/sign-in?next=${encodeURIComponent(s.href)}`}>
                  Member sign-in
                </Link>
                <Link className="text-link" href="/digital-records#dr-membership">
                  Become a member
                </Link>
              </p>
            </div>
          )}
          <p>
            <Link className="text-link" href="/lincolnville-history/directory">
              The Lil Africa Directory, street by street
            </Link>
            {"  ·  "}
            <Link className="text-link" href="/lincolnville-history/tracts">
              The Land Beneath Our Feet
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

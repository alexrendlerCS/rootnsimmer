import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { directoryPage, directoryTeaser, mapStory } from "@/content/africa-directory";
import { SiteShell } from "@/components/SiteShell";
import { LocatorMap } from "@/components/LocatorMap";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: `Historic Lincolnville Locator Map | ${site.fullName}`,
  description: "Businesses and community places in the Lincolnville Historic District, St. Augustine: a numbered directory and illustrated map from Root & Simmer Hospitality Co.",
  alternates: { canonical: "/locator-map" },
};

export default function LocatorMapPage() {
  return (
    <SiteShell>
      <div className="wrap locator-page">
        <LocatorMap />
      </div>

      <HistoryFact fact={facts.washington} />
      <section className="page-section locator-story" aria-labelledby="map-story-title">
        <div className="wrap split">
          <div className="prose">
            <h2 id="map-story-title" className="guide-h2">
              {mapStory.title}
            </h2>
            {mapStory.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href={directoryPage.href} className="panel dir-teaser">
            <p className="land-teaser-year" aria-hidden="true">
              1885
            </p>
            <h3>{directoryTeaser.title}</h3>
            <p>{directoryTeaser.body}</p>
            <span className="text-link">{directoryTeaser.link}</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

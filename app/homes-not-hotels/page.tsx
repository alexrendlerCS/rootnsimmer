import type { Metadata } from "next";
import Link from "next/link";
import { hero } from "@/content/site";
import { HomesHero } from "@/components/HomesHero";
import { SiteShell } from "@/components/SiteShell";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";
import { HomesNotHotelsGuide } from "@/components/HomesNotHotelsGuide";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo(
  "Homes Not Hotels - Historic Preservation in Lincolnville",
  "Keeping Lincolnville's historic homes as homes. Preservation, home history and community voice in St. Augustine's Lincolnville Historic District.",
  "/homes-not-hotels",
);

export default function HomesNotHotels() {
  const h = hero.hope;
  return (
    <SiteShell>
      <HomesHero />

      <section className="hope" aria-label="What we hope to see">
        <div className="wrap hope-inner">
          <p className="hope-line">{h.line}</p>
          <p className="hope-body">
            <strong>{h.label}</strong> {h.body}
          </p>
          <Link className="button button-red" href={h.link.href}>
            {h.link.label}
          </Link>
        </div>
      </section>
      <HistoryFact fact={facts.before1930} />
      <HomesNotHotelsGuide />
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { hero } from "@/content/site";
import { HomesHero } from "@/components/HomesHero";
import { SiteShell } from "@/components/SiteShell";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: { absolute: "Homes Not Hotels | Root & Simmer Hospitality Co." },
  description: hero.lede,
  alternates: { canonical: "/homes-not-hotels" },
};

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
    </SiteShell>
  );
}

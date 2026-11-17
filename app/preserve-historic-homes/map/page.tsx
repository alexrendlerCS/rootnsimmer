import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { homeMapHero, homeMapNote } from "@/content/home-map";
import { HomeMapLoader } from "@/components/HomeMapLoader";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Lincolnville Home Map | ${site.fullName}`,
  description: homeMapHero.lede,
  alternates: { canonical: "/preserve-historic-homes/map" },
};

export default function HomeMapPage() {
  return (
    <SiteShell>
      <section className="wrap map-page" aria-labelledby="map-title">
        <header className="map-head">
          <p className="section-label">
            <Link href="/preserve-historic-homes">{homeMapHero.label}</Link>
          </p>
          <h1 id="map-title" className="page-title">
            {homeMapHero.title}
          </h1>
          <p className="page-lede">{homeMapHero.lede}</p>
        </header>
        <HomeMapLoader />
        <p className="fine map-note">{homeMapNote}</p>
      </section>
    </SiteShell>
  );
}

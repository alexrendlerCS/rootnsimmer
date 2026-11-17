import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { homeMapHero, homeMapNote } from "@/content/home-map";
import { requireMember } from "@/lib/members";
import { HomeMapLoader } from "@/components/HomeMapLoader";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Lincolnville Home Map | ${site.fullName}`,
  description: "For Lincolnville Connection members: every Lincolnville lot, with what the public records say about it.",
  alternates: { canonical: "/preserve-historic-homes/map" },
  robots: { index: false },
};

/** Members only: visitors who are not signed in go to the sign-in page and come back here. */
export default async function HomeMapPage() {
  await requireMember("/preserve-historic-homes/map");
  return (
    <SiteShell>
      <section className="wrap map-page" aria-labelledby="map-title">
        <header className="map-head">
          <p className="section-label">
            <Link href="/members">Members’ library</Link>
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

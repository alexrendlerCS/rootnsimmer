import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { SiteShell } from "@/components/SiteShell";
import { PlacesMapLoader } from "@/components/PlacesMapLoader";
import { GROUPS, type PlacesData } from "@/lib/places";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: `Lincolnville Places Map | ${site.fullName}`,
  description: "Every park, restaurant, church, museum and business inside Lincolnville, on one map.",
  alternates: { canonical: "/places-map" },
};

function loadPlaces(): PlacesData {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public/data/lincolnville-places.json"), "utf8"));
}

export default function PlacesMapPage() {
  const data = loadPlaces();
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <p className="section-label">Explore Lincolnville</p>
          <h1 className="page-title">Lincolnville Places Map</h1>
          <p className="page-lede">
            Every park, restaurant, church, museum and business inside Lincolnville, on one map. Tap a button to show or hide a
            group, and tap a dot to see its name and address.
          </p>
        </div>
      </header>
      <HistoryFact fact={facts.churches} />

      <section className="page-section" aria-labelledby="pm-title">
        <div className="wrap">
          <h2 id="pm-title" className="guide-h2">
            {data.places.length} places in Lincolnville
          </h2>
          <PlacesMapLoader data={data} />
          <p className="notice">
            The shaded area is the City of St. Augustine’s Lincolnville neighborhood boundary, which reaches north to King Street.
            Places come from OpenStreetMap and the{" "}
            <Link className="text-link" href="/locator-map">
              Lincolnville Locator Map
            </Link>
            . Businesses open, close and move: confirm hours and details with each one before visiting. Root &amp; Simmer Hospitality
            Co. is independent, and this map implies no City endorsement. Map data © OpenStreetMap contributors. Updated {data.built}.
          </p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="pm-list">
        <div className="wrap">
          <h2 id="pm-list" className="guide-h2">
            The list
          </h2>
          <div className="pm-list">
            {GROUPS.map((g) => (
              <div key={g.id} className="pm-group">
                <h3>
                  <span className="rm-dot" style={{ background: g.color }} aria-hidden="true" /> {g.label}
                </h3>
                <ul>
                  {data.places
                    .filter((p) => p.group === g.id)
                    .map((p) => (
                      <li key={p.name}>
                        <strong>{p.name}</strong>
                        {p.address && <span>{p.address}</span>}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

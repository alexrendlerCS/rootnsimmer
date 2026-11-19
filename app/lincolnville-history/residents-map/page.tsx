import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { loadResidentsData, type ResidentEntry } from "@/lib/residents-map";
import { ResidentsMapLoader } from "@/components/ResidentsMapLoader";
import { SiteShell } from "@/components/SiteShell";

const href = "/lincolnville-history/residents-map";

export const metadata: Metadata = {
  title: `Historic Residents Map | ${site.fullName}`,
  description: "Members of the Lincolnville Connection: the people who lived and worked in Lincolnville in the city directories of 1885 to about 1912, placed on today’s map.",
  alternates: { canonical: href },
};

function Person({ p }: { p: ResidentEntry & { address?: string } }) {
  return (
    <li>
      <strong>{p.name}</strong>
      <span>{p.work}</span>
      <em>
        {p.kind}
        {p.year ? ` · ${p.year}` : ""}
        {p.address ? ` · ${p.address}` : ""}
      </em>
    </li>
  );
}

export default async function ResidentsMapPage() {
  const data = await loadResidentsData();
  const streetOf = (a: string) => a.replace(/^[\d-]+\s+/, "");
  const byStreet = new Map<string, { address: string; people: ResidentEntry[] }[]>();
  for (const p of data?.places ?? []) {
    const street = streetOf(p.historic[0]);
    if (!byStreet.has(street)) byStreet.set(street, []);
    byStreet.get(street)!.push({ address: p.historic.join(" · "), people: p.people });
  }
  const streets = [...byStreet.entries()].sort(([a], [b]) => a.localeCompare(b));
  const count = data ? new Set([...data.places.flatMap((p) => p.people), ...data.elsewhere].map((p) => p.name)).size : 0;

  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">Lincolnville history · Members</p>
          <h1 className="page-title land-title">Historic Residents Map</h1>
          <p className="land-subtitle">The people who lived and worked here, placed back on their streets</p>
          <p className="page-lede">
            Old city directories listed each resident’s name, work and address. Read together, they show a neighborhood at work:
            teachers boarding together on Moore Street, physicians on Bridge and Oneida Streets, a dentist, an undertaker, musicians,
            a midwife and the officers of a building and loan association. This map places the directory entries of 1885 to about
            1912 on today’s Lincolnville streets.
          </p>
          {!data && (
            <div className="panel research-join">
              <p>The Historic Residents Map is for members of the Root &amp; Simmer Hospitality Exclusively for Lincolnville Community Connection. Members sign in to open it.</p>
              <p className="latest-actions">
                <Link className="button" href={`/members/sign-in?next=${encodeURIComponent(href)}`}>
                  Member sign-in
                </Link>
                <Link className="text-link" href="/digital-records#dr-membership">
                  Become a member
                </Link>
              </p>
            </div>
          )}
        </div>
      </header>

      {data && (
        <>
          <section className="page-section" aria-labelledby="rm-title">
            <div className="wrap">
              <h2 id="rm-title" className="guide-h2">
                {count} people on {data.places.length} Lincolnville addresses
              </h2>
              <p className="muted rm-intro">Tap a dot to see who lived or worked there. Larger dots hold more people.</p>
              <ResidentsMapLoader data={data} />
              <p className="notice">
                Historic house numbers do not always match today’s. Each dot is placed at the same number on today’s street, or at the
                nearest number when that one no longer exists, so every location is approximate. Central Avenue is today’s Martin Luther
                King Avenue.
              </p>
            </div>
          </section>

          <section className="page-section land-tracts" aria-labelledby="rm-list-title">
            <div className="wrap">
              <h2 id="rm-list-title" className="guide-h2">
                Street by street
              </h2>
              <div className="dir-grid">
                {streets.map(([street, places]) => (
                  <section key={street} className="dir-street" aria-label={street}>
                    <h3>{street}</h3>
                    {places
                      .sort((a, b) => parseInt(a.address) - parseInt(b.address))
                      .map((pl) => (
                        <div key={pl.address} className="rm-address">
                          <p className="rm-address-label">{pl.address}</p>
                          <ul className="rm-people">
                            {pl.people.map((p) => (
                              <Person key={p.name + p.kind} p={p} />
                            ))}
                          </ul>
                        </div>
                      ))}
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="page-section" aria-labelledby="rm-else-title">
            <div className="wrap">
              <h2 id="rm-else-title" className="guide-h2">
                Elsewhere in St. Augustine, or no street given
              </h2>
              <p className="muted rm-intro">Workplaces downtown, homes outside Lincolnville, and entries without a house number.</p>
              <ul className="rm-people rm-else">
                {data.elsewhere.map((p) => (
                  <Person key={p.name + p.address} p={p} />
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      <section className="page-section">
        <div className="wrap">
          <p>
            <Link className="text-link" href="/lincolnville-history/mohlman-research">
              Mohlman Research
            </Link>
            {"  ·  "}
            <Link className="text-link" href="/lincolnville-history/directory">
              The Lil Africa Directory
            </Link>
            {"  ·  "}
            <Link className="text-link" href="/locator-map">
              Lincolnville today: the Locator Map
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

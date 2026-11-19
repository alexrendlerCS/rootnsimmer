import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { mohlmanPage as m, mohlmanShelves } from "@/content/mohlman";
import { shelfLinks } from "@/lib/record-links";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `${m.title} | ${site.fullName}`,
  description: m.intro,
  alternates: { canonical: m.href },
};

export default async function MohlmanResearchPage() {
  const links = await shelfLinks("Mohlman research");
  const signedIn = Object.keys(links).length > 0;
  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{m.label}</p>
          <h1 className="page-title land-title">{m.title}</h1>
          <p className="land-subtitle">{m.subtitle}</p>
          <p className="page-lede">{m.intro}</p>
          {!signedIn && (
            <div className="panel research-join">
              <p>{m.membersNote}</p>
              <p className="latest-actions">
                <Link className="button" href={`/members/sign-in?next=${encodeURIComponent(m.href)}`}>
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

      <section className="page-section land-tracts" aria-label="The research shelves">
        <div className="wrap">
          <div className="research-shelves">
            {mohlmanShelves.map((shelf) => (
              <section key={shelf.id} id={shelf.id} className="research-shelf" aria-labelledby={`${shelf.id}-title`}>
                <h2 id={`${shelf.id}-title`} className="guide-h2">
                  {shelf.title}
                </h2>
                <p className="muted">{shelf.intro}</p>
                <ul className="research-files">
                  {shelf.files.map((f) => {
                    const id = links[f.file];
                    return (
                      <li key={f.file}>
                        <h3>{f.title}</h3>
                        <p>{f.about}</p>
                        {id ? (
                          <a className="text-link" href={`/members/document/${id}`} target="_blank" rel="noopener">
                            Open<span className="sr-only"> {f.title} (opens in a new tab)</span>
                          </a>
                        ) : (
                          <span className="research-lock">
                            <span aria-hidden="true">🔒</span> Members only
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {shelf.coming && <p className="fine">{shelf.coming}</p>}
              </section>
            ))}
          </div>
          <Link href="/lincolnville-history/residents-map" className="panel dir-teaser research-map-card">
            <h2 className="guide-h2">Historic Residents Map</h2>
            <p>The people in the directories, placed back on their streets: tap a house to see who lived or worked there.</p>
            <span className="text-link">Open the map</span>
          </Link>
          <p className="notice">{m.rule}</p>
          <p>
            <Link className="text-link" href="/lincolnville-history/tracts">
              The Land Beneath Our Feet
            </Link>
            {"  ·  "}
            <Link className="text-link" href="/lincolnville-history/directory">
              The Lil Africa Directory
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

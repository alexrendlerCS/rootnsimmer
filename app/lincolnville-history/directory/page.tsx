import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { directoryPage as d } from "@/content/africa-directory";
import { loadDirectory } from "@/lib/africa-directory";
import { SiteShell } from "@/components/SiteShell";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: `${d.title} | ${site.fullName}`,
  description: d.intro,
  alternates: { canonical: d.href },
  robots: { index: false }, // members only: kept out of Google
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function DirectoryPage() {
  const data = await loadDirectory();
  const directory = data?.streets ?? [];
  const count = directory.reduce((n, s) => n + s.people.length, 0);
  return (
    <SiteShell>
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">{d.label}</p>
          <h1 className="page-title land-title">{d.title}</h1>
          <p className="land-subtitle">{d.subtitle}</p>
          <p className="page-lede">{d.intro}</p>
          {!data && (
            <div className="panel research-join">
              <p>{d.members}</p>
              <p className="latest-actions">
                <Link className="button" href={`/members/sign-in?next=${encodeURIComponent(d.href)}`}>
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
      <HistoryFact fact={facts.teachers} />

      {data && (
        <>

      <section className="page-section" aria-labelledby="narrative-title">
        <div className="wrap split">
          <div className="prose">
            <h2 id="narrative-title" className="guide-h2">
              {d.narrativeTitle}
            </h2>
            {data.narrative.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="evidence">
              <span className="evidence-tag" data-verified="true">
                {d.evidence}
              </span>
            </p>
          </div>
          <nav className="panel dir-streets" aria-label="Jump to a street">
            <p className="section-label">
              {count} entries on {directory.length} streets
            </p>
            <ul>
              {directory.map((s) => (
                <li key={s.street}>
                  <a href={`#${slug(s.street)}`}>{s.street}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="page-section land-tracts" aria-labelledby="dir-title">
        <div className="wrap">
          <h2 id="dir-title" className="guide-h2">
            Street by street
          </h2>
          <div className="dir-grid">
            {directory.map((s) => (
              <section key={s.street} id={slug(s.street)} className="dir-street" aria-labelledby={`${slug(s.street)}-h`}>
                <h3 id={`${slug(s.street)}-h`}>{s.street}</h3>
                <table className="dir-table">
                  <thead>
                    <tr>
                      <th scope="col">Person</th>
                      <th scope="col">Address</th>
                      <th scope="col">Work</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.people.map((p) => (
                      <tr key={p.name + p.where}>
                        <th scope="row">{p.name}</th>
                        <td>{p.where}</td>
                        <td>{p.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            ))}
          </div>
          <p className="notice">{d.note}</p>
          <p>
            <Link className="text-link" href="/locator-map">
              See Lincolnville today on the Locator Map
            </Link>
            {"  ·  "}
            <Link className="text-link" href="/lincolnville-history/tracts">
              The Land Beneath Our Feet
            </Link>
          </p>
        </div>
      </section>
        </>
      )}
    </SiteShell>
  );
}

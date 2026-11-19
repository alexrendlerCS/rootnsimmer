import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { site } from "@/content/site";
import { loadWalks, walkAccess, type WalkStop } from "@/lib/walks";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: `Self-Guided Walk | ${site.fullName}`, robots: { index: false } };

function Stops({ stops, start }: { stops: WalkStop[]; start: number }) {
  return (
    <ol className="walk-stops" start={start}>
      {stops.map((s) => (
        <li key={s.title + s.where} className="walk-stop">
          <h3>{s.title}</h3>
          <p className="walk-where">{s.where}</p>
          {s.theme && <p className="walk-theme">{s.theme}</p>}
          <p>{s.story}</p>
          {s.look && <p className="walk-look">{s.look}</p>}
        </li>
      ))}
    </ol>
  );
}

export default async function WalkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [walks, access] = await Promise.all([loadWalks(), walkAccess()]);
  const walk = walks.find((w) => w.slug === slug);
  if (!walk) notFound();
  if (!access) redirect("/walks");
  // The guest's name, faint across the page: a shared screenshot shows whose guide it was.
  const mark = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180'><text x='10' y='100' transform='rotate(-24 160 90)' font-family='Georgia' font-size='16' fill='rgba(31,58,44,0.07)'>${access.name.replace(/[<&>'"]/g, "")} · Root &amp; Simmer</text></svg>`,
  );
  return (
    <SiteShell>
      <div className="walk-guide" style={{ backgroundImage: `url("data:image/svg+xml,${mark}")` }}>
        <header className="page-hero land-hero">
          <div className="wrap">
            <p className="section-label">Self-guided walk · {access.name}</p>
            <h1 className="page-title land-title">{walk.title}</h1>
            <p className="land-subtitle">{walk.subtitle}</p>
            {walk.intro.map((p) => (
              <p key={p} className="page-lede">
                {p}
              </p>
            ))}
            <p className="walk-meta">Start: {walk.start}</p>
          </div>
        </header>
        <section className="page-section">
          <div className="wrap">
            {walk.stops && <Stops stops={walk.stops} start={1} />}
            {walk.sections?.map((s) => (
              <div key={s.title}>
                <h2 className="guide-h2">{s.title}</h2>
                <Stops stops={s.stops} start={1} />
              </div>
            ))}
            {walk.connections && <p className="notice">{walk.connections}</p>}
            <p className="walk-copy">
              © {new Date().getFullYear()} Root &amp; Simmer Hospitality Co. All rights reserved. This walk guide is for {access.name} only and may not
              be copied, printed or shared. Please view private homes from the public sidewalk.
            </p>
            <p>
              <Link className="text-link" href="/walks">
                All walks
              </Link>
              {"  ·  "}
              <Link className="text-link" href="/support">
                Become a Supporter
              </Link>
            </p>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

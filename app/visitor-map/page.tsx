import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { visitorMap as v } from "@/content/visitor-map";
import { SiteShell } from "@/components/SiteShell";
import { WhatIfVote } from "@/components/WhatIf";
import { ProjectConcerns, ProjectHelp, ProjectRecords } from "@/components/ProjectSupport";

export const metadata: Metadata = {
  title: `Bringing Lincolnville onto the Visitor Map | ${site.fullName}`,
  description: "Where Root & Simmer began: a newcomer with the St. Augustine visitor map, a walk to the Corner Market, and a request to put all of Lincolnville, historically known as Lil Africa, on the map.",
  alternates: { canonical: "/visitor-map" },
};

export default function VisitorMapPage() {
  return (
    <SiteShell>
      <article className="wrap bodega">
        <header className="bodega-head">
          <div>
            <p className="section-label">{v.label}</p>
            <h1 className="page-title">{v.title}</h1>
            <p className="bodega-tagline">{v.tagline}</p>
            <p className="page-lede">{v.lede}</p>
            <p className="bodega-jump">
              <a className="button button-red" href="#vote">
                Help draw the map
              </a>
              <a className="button" href="#asks">
                What we are asking for
              </a>
            </p>
          </div>
          <figure className="bodega-figure story-marker">
            <Image src={v.hero.src} width={1200} height={1500} alt={v.hero.alt} sizes="(max-width: 900px) 70vw, 360px" priority />
            <figcaption>{v.hero.caption}</figcaption>
          </figure>
        </header>

        <section className="bodega-section" aria-labelledby="walk-title">
          <h2 id="walk-title" className="guide-h2">
            {v.walk.title}
          </h2>
          {v.walk.paragraphs.map((p, i) => (
            <p key={p.slice(0, 30)} className={i === 0 ? "bodega-feel" : undefined}>
              {p}
            </p>
          ))}
          <p className="stairs-closing story-quote">{v.walk.quote}</p>
        </section>

        <section className="bodega-section" aria-labelledby="roots-title">
          <h2 id="roots-title" className="guide-h2">
            {v.roots.title}
          </h2>
          {v.roots.paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </section>

        <section className="bodega-section" aria-labelledby="map-title">
          <h2 id="map-title" className="guide-h2">
            {v.map.title}
          </h2>
          {v.map.paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </section>

        <section id="asks" className="bodega-section" aria-labelledby="asks-title">
          <h2 id="asks-title" className="guide-h2">
            {v.asks.title}
          </h2>
          <p>{v.asks.intro}</p>
          <ol className="project-help-list story-asks">
            {v.asks.items.map((a, i) => (
              <li key={a.title}>
                <span className="twine-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="stairs-closing">{v.asks.purpose}</p>
        </section>

        <section id="vote" className="bodega-section" aria-labelledby="vote-title">
          <h2 id="vote-title" className="guide-h2">
            {v.vote.title}
          </h2>
          <p>{v.vote.intro}</p>
          <WhatIfVote project="Lincolnville on the visitor map" storageKey="visitor-map-picks" choices={v.landmarks} voice={v.voice} voteLabel="Put it on the map" />
        </section>

        <section className="bodega-section" aria-labelledby="land-title">
          <h2 id="land-title" className="guide-h2">
            {v.landBeneath.title}
          </h2>
          <p>{v.landBeneath.body}</p>
          <p>
            <Link className="text-link" href="/lincolnville-history/tracts">
              Read the history: The Land Beneath Your Feet, from Little Africa to Lincolnville
            </Link>
          </p>
        </section>

        <ProjectConcerns title="The concerns, and how we can help" concerns={v.concerns} />

        <ProjectRecords title="The records behind the request" intro="Every fact on this page comes from a public record. Here they are, with what each one says in plain words." records={v.records} />

        <ProjectHelp />

        <section className="bodega-section story-heart" aria-labelledby="heart-title">
          <h2 id="heart-title" className="guide-h2">
            {v.heart.title}
          </h2>
          {v.heart.paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
          <p className="stairs-lead">{v.heart.closing}</p>
          <p className="stairs-closing">{v.heart.sign}</p>
          <p className="signature">{v.heart.name}</p>
          <p className="fine">{v.heart.role}</p>
        </section>

        <p className="notice">{v.notice}</p>
        <p className="fine">
          <Link href="/locator-map">The Lincolnville Locator Map</Link> · Our visions: <Link href="/what-if/twine-park">What if…? Twine Park</Link> ·{" "}
          <Link href="/what-if/stable-bodega">What if…? The Stable Bodega</Link> ·{" "}
          <Link href="/preserve-historic-homes/map">The Lincolnville Home Map</Link>
        </p>
      </article>
    </SiteShell>
  );
}

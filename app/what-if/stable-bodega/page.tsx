import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { stableBodega as s } from "@/content/stable-bodega";
import { SiteShell } from "@/components/SiteShell";
import { StableBodegaVendorForm, StableBodegaVote } from "@/components/StableBodega";

export const metadata: Metadata = {
  title: `What if…? The Stable Bodega | ${site.fullName}`,
  description: "A Root & Simmer vision for the old City stables on Riberia Street: a neighborhood corner store, makers’ barn, market lawn and free heritage walk. Vote, add your ideas, or tell us you’d like a place in the yard.",
  alternates: { canonical: "/what-if/stable-bodega" },
};

export default function StableBodegaPage() {
  return (
    <SiteShell>
      <article className="wrap bodega">
        <header className="bodega-head">
          <div>
            <p className="section-label">{s.label}</p>
            <h1 className="page-title">{s.title}</h1>
            <p className="bodega-tagline">{s.tagline}</p>
            <p className="page-lede">{s.lede}</p>
            <p className="bodega-idea">{s.idea}</p>
            <p className="bodega-jump">
              <a className="button button-red" href="#vote">
                Vote and add your idea
              </a>
              <a className="button" href="#vendors">
                I’d like a place in the yard
              </a>
            </p>
          </div>
          <figure className="bodega-figure">
            <Image src={s.barn.src} width={s.barn.width} height={s.barn.height} alt={s.barn.alt} sizes="(max-width: 900px) 90vw, 480px" priority />
            <figcaption>{s.barn.caption}</figcaption>
          </figure>
        </header>

        <section className="bodega-section" aria-labelledby="feel-title">
          <h2 id="feel-title" className="guide-h2">
            {s.feel.title}
          </h2>
          <p className="bodega-feel">{s.feel.body}</p>
          <figure className="bodega-figure bodega-wide">
            <Image src={s.marketDay.src} width={s.marketDay.width} height={s.marketDay.height} alt={s.marketDay.alt} sizes="(max-width: 1100px) 92vw, 1000px" />
            <figcaption>{s.marketDay.caption}</figcaption>
          </figure>
          <p className="stairs-closing">{s.feel.promise}</p>
        </section>

        <section id="vote" className="bodega-section" aria-labelledby="vote-title">
          <h2 id="vote-title" className="guide-h2">
            {s.vote.title}
          </h2>
          <p>{s.vote.intro}</p>
          <StableBodegaVote />
        </section>

        <section className="bodega-section bodega-split" aria-labelledby="yard-title">
          <figure className="bodega-figure">
            <Image src={s.yard.src} width={s.yard.width} height={s.yard.height} alt={s.yard.alt} sizes="(max-width: 900px) 92vw, 560px" />
            <figcaption>{s.yard.caption}</figcaption>
          </figure>
          <div>
            <h2 id="yard-title" className="guide-h2">
              {s.yard.title}
            </h2>
            <dl className="glance">
              {s.yard.points.map((p) => (
                <div key={p.label}>
                  <dt>{p.label}</dt>
                  <dd>{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bodega-section" aria-labelledby="history-title">
          <h2 id="history-title" className="guide-h2">
            {s.history.title}
          </h2>
          <p>{s.history.intro}</p>
          <ul className="bodega-walk">
            {s.history.walk.map((w, i) => (
              <li key={w.label}>
                <span className="twine-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{w.label}</h3>
                  <p>{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="fine">{s.history.research}</p>
        </section>

        <section className="bodega-section" aria-labelledby="site-title">
          <h2 id="site-title" className="guide-h2">
            {s.site.title}
          </h2>
          <dl className="glance">
            {s.site.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.body}</dd>
              </div>
            ))}
          </dl>
          <p className="stairs-closing">{s.site.stance}</p>
        </section>

        <section id="vendors" className="bodega-section bodega-vendors" aria-labelledby="vendors-title">
          <div>
            <h2 id="vendors-title" className="guide-h2">
              {s.vendors.title}
            </h2>
            <p>{s.vendors.intro}</p>
            <p>{s.vendors.gets}</p>
            <p>{s.vendors.asks}</p>
          </div>
          <StableBodegaVendorForm />
        </section>

        <p className="notice">{s.notice}</p>
        <p className="fine">
          More from Root & Simmer: <Link href="/cra-lincolnville">Understanding the Lincolnville CRA</Link> ·{" "}
          <Link href="/root">ROOT: Lincolnville Community Committee</Link>
        </p>
      </article>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { twineVision as t } from "@/content/twine-vision";
import { SiteShell } from "@/components/SiteShell";
import { WhatIfSignup, WhatIfVote } from "@/components/WhatIf";
import { ProjectConcerns, ProjectHelp, ProjectRecords } from "@/components/ProjectSupport";

export const metadata: Metadata = {
  title: `What if…? Twine Park | ${site.fullName}`,
  description: "A Root & Simmer vision for Twine Park at Riberia and Lovett: a Twine Grove, a new history panel, dry benches and a history walk. Vote, add your ideas, or lend a hand.",
  alternates: { canonical: "/what-if/twine-park" },
};

export default function TwineParkVisionPage() {
  return (
    <SiteShell>
      <article className="wrap bodega">
        <header className="bodega-head">
          <div>
            <p className="section-label">{t.label}</p>
            <h1 className="page-title">{t.title}</h1>
            <p className="bodega-tagline">{t.tagline}</p>
            <p className="page-lede">{t.lede}</p>
            <p className="bodega-idea">{t.idea}</p>
            <p className="bodega-jump">
              <a className="button button-red" href="#vote">
                Vote and add your idea
              </a>
              <a className="button" href="#help-out">
                I’d like to lend a hand
              </a>
            </p>
          </div>
          <figure className="bodega-figure">
            <Image src={t.hero.src} width={t.hero.width} height={t.hero.height} alt={t.hero.alt} sizes="(max-width: 900px) 90vw, 480px" priority />
            <figcaption>{t.hero.caption}</figcaption>
          </figure>
        </header>

        <section className="bodega-section" aria-labelledby="feel-title">
          <h2 id="feel-title" className="guide-h2">
            {t.feel.title}
          </h2>
          <p className="bodega-feel">{t.feel.body}</p>
          <p className="stairs-closing">{t.feel.promise}</p>
        </section>

        <section id="vote" className="bodega-section" aria-labelledby="vote-title">
          <h2 id="vote-title" className="guide-h2">
            {t.vote.title}
          </h2>
          <p>{t.vote.intro}</p>
          <WhatIfVote project="Twine Park" storageKey="twine-park-picks" choices={t.choices} voice={t.voice} voteLabel="I’d want this" />
        </section>

        <section className="bodega-section bodega-split" aria-labelledby="history-title">
          <figure className="bodega-figure">
            <Image src={t.marker.src} width={t.marker.width} height={t.marker.height} alt={t.marker.alt} sizes="(max-width: 900px) 92vw, 560px" />
            <figcaption>{t.marker.caption}</figcaption>
          </figure>
          <div>
            <h2 id="history-title" className="guide-h2">
              {t.history.title}
            </h2>
            {t.history.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </section>

        <section className="bodega-section" aria-labelledby="site-title">
          <h2 id="site-title" className="guide-h2">
            {t.site.title}
          </h2>
          <dl className="glance">
            {t.site.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.body}</dd>
              </div>
            ))}
          </dl>
          <p>{t.site.stance}</p>
          <figure className="bodega-figure bodega-wide">
            <Image src={t.history.cottage.src} width={t.history.cottage.width} height={t.history.cottage.height} alt={t.history.cottage.alt} sizes="(max-width: 1100px) 92vw, 1000px" />
            <figcaption>{t.history.cottage.caption}</figcaption>
          </figure>
          <p>
            <Link className="button" href={t.site.mapLink.href}>
              {t.site.mapLink.label}
            </Link>
          </p>
        </section>

        <ProjectConcerns title="The CRA’s concerns, and how we can help" intro="Here are the questions the City and the CRA face with the park, and what Root & Simmer can do about each." concerns={t.concerns} />

        <section id="help-out" className="bodega-section bodega-vendors" aria-labelledby="help-out-title">
          <div>
            <h2 id="help-out-title" className="guide-h2">
              {t.signup.title}
            </h2>
            <p>{t.signup.intro}</p>
          </div>
          <WhatIfSignup c={t.signup.config} />
        </section>

        <ProjectRecords title="The records behind the idea" intro="Every fact on this page comes from a public record. Here they are, with what each one says in plain words." records={t.records} />

        <ProjectHelp />

        <p className="notice">{t.notice}</p>
        <p className="fine">
          Another idea: <Link href="/what-if/stable-bodega">What if…? The Stable Bodega</Link> ·{" "}
          <Link href="/cra-lincolnville">Understanding the Lincolnville CRA</Link>
        </p>
      </article>
    </SiteShell>
  );
}

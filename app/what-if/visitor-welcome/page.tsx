import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { visitorWelcome as t } from "@/content/visitor-welcome";
import { SiteShell } from "@/components/SiteShell";
import { WhatIfSignup, WhatIfVote } from "@/components/WhatIf";
import { ProjectConcerns, ProjectHelp, ProjectRecords } from "@/components/ProjectSupport";

export const metadata: Metadata = {
  title: `What if…? A Lincolnville Visitor Welcome | ${site.fullName}`,
  description: "A Root & Simmer vision: a Lincolnville visitor welcome at Ragga Surf Cafe on the Riberia Street waterfront, with a map, the Welcoming Walk and local business referrals. Vote and add your ideas.",
  alternates: { canonical: "/what-if/visitor-welcome" },
};

export default function VisitorWelcomePage() {
  return (
    <SiteShell>
      <article className="wrap bodega">
        <header className="bodega-head bodega-head-solo">
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
                I’d like to take part
              </a>
            </p>
          </div>
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
          <WhatIfVote project="A Lincolnville Visitor Welcome" storageKey="visitor-welcome-picks" choices={t.choices} voice={t.voice} voteLabel="Yes, this" />
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
          <p>
            <Link className="button" href={t.site.mapLink.href}>
              {t.site.mapLink.label}
            </Link>
          </p>
        </section>

        <ProjectConcerns title="The concerns, and how we can help" concerns={t.concerns} />

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
          Our other visions: <Link href="/what-if/twine-park">What if…? Twine Park</Link> · <Link href="/what-if/stable-bodega">What if…? The Stable Bodega</Link> ·{" "}
          <Link href="/visitor-map">Bringing Lincolnville onto the Visitor Map</Link>
        </p>
      </article>
    </SiteShell>
  );
}

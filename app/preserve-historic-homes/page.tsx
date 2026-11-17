import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { preservePaths, protectFacts, protectHero, protectOwn, protectQuote } from "@/content/protect";
import { GuideSection } from "@/components/CraGuide";
import { PreserveGuide, preserveHref } from "@/components/PreserveGuide";

export const metadata: Metadata = {
  title: `Preserve Historic Homes | ${site.fullName}`,
  description: protectHero.lede,
  alternates: { canonical: "/preserve-historic-homes" },
};

export default function PreserveOverviewPage() {
  return (
    <PreserveGuide slug="" title={protectHero.title} lede={protectHero.lede}>
      <GuideSection id="paths" title="Where to start">
        <ul className="paths">
          {preservePaths.map((p) => (
            <li key={p.slug}>
              <Link href={preserveHref(p.slug)} className="path">
                {p.packet && <span className="path-packet">{p.packet}</span>}
                <span className="path-title">{p.title}</span>
                <span className="path-body">{p.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="records" title={protectFacts.title}>
        <dl className="records-facts">
          {protectFacts.facts.map((f) => (
            <div key={f.value}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
        <p className="fine">{protectFacts.note}</p>
        <figure className="minutes-quote">
          <blockquote>{protectQuote.text}</blockquote>
          <figcaption>
            {protectQuote.who}
            <span>{protectQuote.source}</span>
          </figcaption>
        </figure>
      </GuideSection>

      <GuideSection id="your-home" title={protectOwn.title}>
        <p>{protectOwn.body}</p>
        <p>
          <Link className="button button-red" href={protectOwn.href}>
            {protectOwn.button}
          </Link>
        </p>
      </GuideSection>
    </PreserveGuide>
  );
}

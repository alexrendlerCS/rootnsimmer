import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, site } from "@/content/site";
import Image from "next/image";
import { demolition, stairs } from "@/content/protect";
import { filingIntro, filingSteps, floodExemption, needsReview } from "@/content/demolition-filing";
import { GuideSection } from "@/components/CraGuide";
import { PacketCards, PreserveGuide } from "@/components/PreserveGuide";

export const metadata: Metadata = {
  title: `Demolition | Preserve Historic Homes | ${site.fullName}`,
  description:
    "How St. Augustine reviews demolition, how to speak up when one is proposed in Lincolnville, and the paperwork an owner files.",
  alternates: { canonical: "/preserve-historic-homes/demolition" },
};

export default function DemolitionPage() {
  return (
    <PreserveGuide
      slug="demolition"
      title="Demolition"
      lede="Once a historic house or one of its defining features is gone, it cannot be brought back. Here is how the City reviews demolition, how neighbors can speak up, and what an owner must file."
    >
      <GuideSection id={stairs.id} title={stairs.title}>
        <div className="stairs-intro">
          <div>
            {stairs.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className={p === stairs.paragraphs[0] ? "stairs-lead" : undefined}>
                {p}
              </p>
            ))}
          </div>
          <figure className="stairs-photo">
            <Image src={stairs.photo.src} width={stairs.photo.width} height={stairs.photo.height} alt={stairs.photo.alt} sizes="(max-width: 720px) 90vw, 300px" />
            <figcaption>{stairs.photo.caption}</figcaption>
          </figure>
        </div>
        <dl className="glance">
          {stairs.sets.map((s) => (
            <div key={s.place}>
              <dt>{s.place}</dt>
              <dd>{s.body}</dd>
            </div>
          ))}
        </dl>
        <p>{stairs.trail}</p>
        <p className="stairs-closing">{stairs.closing}</p>
        <p>
          <a className="button" href={`mailto:${contactEmail}?subject=${encodeURIComponent(stairs.ask.subject)}`}>
            {stairs.ask.label}
          </a>
        </p>
        <p className="fine">{stairs.bridge}</p>
      </GuideSection>

      <GuideSection id={demolition.id} title={demolition.title}>
        <p>{demolition.intro}</p>
        <dl className="glance">
          {demolition.reviews.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.body}</dd>
            </div>
          ))}
        </dl>
      </GuideSection>

      <GuideSection id="respond" title={demolition.respondTitle}>
        <ol className="steps">
          {demolition.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p>
          <Link className="button" href="/preserve-historic-homes/map?sort=watch">
            See the demolition watch on the map
          </Link>
        </p>
      </GuideSection>

      <GuideSection id="filing" title={filingIntro.title}>
        <p>{filingIntro.lede}</p>
        <div className="panel needs-review">
          <h3>{needsReview.title}</h3>
          <p>{needsReview.intro}</p>
          <ul>
            {needsReview.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="fine">{needsReview.note}</p>
        </div>
        <h3 className="steps-title">The seven steps</h3>
        <ol className="steps filing-steps">
          {filingSteps.map((s) => (
            <li key={s.title}>{s.title}</li>
          ))}
        </ol>
        <p className="filing-members">
          <strong>The full filing guide is in Packet 1.</strong> Members get each step in detail, what “proof of undue
          economic hardship” means, the flood-zone exemption, and the City’s Application Agreement, Economic Hardship
          Worksheet and Submittal Checklist gathered in one packet.
        </p>
        <p className="fine">{floodExemption.title}: some single-family homes in flood zones may be exempt from HARB review. {filingIntro.source}</p>
      </GuideSection>

      <GuideSection id="packets" title="The member packet">
        <PacketCards ids={["packet-1"]} />
      </GuideSection>
    </PreserveGuide>
  );
}

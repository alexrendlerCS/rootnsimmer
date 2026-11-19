import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { recognition } from "@/content/protect";
import { GuideSection } from "@/components/CraGuide";
import { PacketCards, PreserveGuide } from "@/components/PreserveGuide";

export const metadata: Metadata = {
  title: `Historic Recognition | Preserve Historic Homes | ${site.fullName}`,
  description: recognition.intro,
  alternates: { canonical: "/preserve-historic-homes/historic-recognition" },
};

export default function HistoricRecognitionPage() {
  return (
    <PreserveGuide slug="historic-recognition" title="Historic Recognition" lede={recognition.intro}>
      <GuideSection id="qualify" title={recognition.qualify.title}>
        <p>{recognition.qualify.intro}</p>
        <dl className="glance">
          {recognition.qualify.checks.map((c) => (
            <div key={c.q}>
              <dt>{c.q}</dt>
              <dd>{c.a}</dd>
            </div>
          ))}
        </dl>
      </GuideSection>

      <GuideSection id="kinds" title="Three kinds of recognition">
        <dl className="glance">
          {recognition.kinds.map((k) => (
            <div key={k.label}>
              <dt>{k.label}</dt>
              <dd>{k.body}</dd>
            </div>
          ))}
        </dl>
      </GuideSection>

      <GuideSection id="steps" title="How to seek designation, step by step">
        <ol className="steps">
          {recognition.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p>
          <Link className="button" href="/preserve-historic-homes/map?sort=historic">
            See historic homes on the map
          </Link>
        </p>
      </GuideSection>

      <GuideSection id="tax" title={recognition.tax.title}>
        <p>{recognition.tax.body}</p>
      </GuideSection>

      <GuideSection id="packets" title="The member packet">
        <PacketCards ids={["packet-2"]} />
      </GuideSection>
    </PreserveGuide>
  );
}

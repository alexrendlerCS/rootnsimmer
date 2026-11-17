import type { Metadata } from "next";
import { craTakePart } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, GuideSection, Sources } from "@/components/CraGuide";

export const metadata: Metadata = {
  title: `How to Take Part | ${site.fullName}`,
  description: "Ways neighbors and friends of Lincolnville can follow and take part in the Lincolnville CRA’s work.",
  alternates: { canonical: "/cra-lincolnville/take-part" },
};

export default function TakePartPage() {
  const c = craTakePart;
  return (
    <CraGuide slug="take-part">
      <GuideSection id="ways" title="Ways to take part">
        <ul className="entries">
          {c.ways.map((w) => (
            <li key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="grants" title={c.grants.title}>
        <p>{c.grants.body}</p>
        <Sources text={c.grants.sources} />
      </GuideSection>
    </CraGuide>
  );
}

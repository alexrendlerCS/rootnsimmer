import type { Metadata } from "next";
import { craFixItUp } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, GuideSection, Sources } from "@/components/CraGuide";

export const metadata: Metadata = {
  title: `Fix-It-Up and Staying in Place | ${site.fullName}`,
  description: craFixItUp.body[0],
  alternates: { canonical: "/cra-lincolnville/fix-it-up" },
};

export default function FixItUpPage() {
  const c = craFixItUp;
  return (
    <CraGuide slug="fix-it-up">
      <GuideSection id="fix-it-up" title={c.title}>
        <div className="guide-split">
          <div>
            {c.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="figure">
            <strong>{c.highlight.value}</strong>
            {c.highlight.label}
          </p>
        </div>
        <Sources text={c.sources} />
      </GuideSection>
    </CraGuide>
  );
}

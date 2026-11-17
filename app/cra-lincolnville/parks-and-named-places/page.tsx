import type { Metadata } from "next";
import { craParks } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, GuideSection, Sources } from "@/components/CraGuide";

export const metadata: Metadata = {
  title: `Parks and Named Places | ${site.fullName}`,
  description: craParks.faces.body,
  alternates: { canonical: "/cra-lincolnville/parks-and-named-places" },
};

export default function ParksPage() {
  const c = craParks;
  return (
    <CraGuide slug="parks-and-named-places">
      <GuideSection id="faces" title={c.faces.title}>
        <p>{c.faces.body}</p>
        <Sources text={c.faces.sources} />
      </GuideSection>

      <GuideSection id="parks" title={c.parks.title}>
        <ul className="entries">
          {c.parks.items.map((p) => (
            <li key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
        <Sources text={c.parks.sources} />
      </GuideSection>

      <GuideSection id="streets" title={c.streets.title}>
        <p>{c.streets.body}</p>
        <Sources text={c.streets.sources} />
      </GuideSection>
    </CraGuide>
  );
}

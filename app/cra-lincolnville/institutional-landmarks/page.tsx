import type { Metadata } from "next";
import { craLandmarks } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, GuideSection, Sources } from "@/components/CraGuide";
import { Photo } from "@/components/Photo";
import trinityPhoto from "@/public/photos/trinity-methodist-church.jpg";

export const metadata: Metadata = {
  title: `Institutional Landmarks | ${site.fullName}`,
  description: craLandmarks.intro,
  alternates: { canonical: "/cra-lincolnville/institutional-landmarks" },
};

export default function LandmarksPage() {
  const c = craLandmarks;
  return (
    <CraGuide slug="institutional-landmarks">
      <GuideSection id="rehab" title={c.title}>
        <div className="guide-split">
          <p>{c.intro}</p>
          <Photo
            src={trinityPhoto}
            alt={c.photo.alt}
            caption={c.photo.caption}
            credit={c.photo.credit}
            sizes="(max-width: 900px) 90vw, 300px"
            className="guide-photo"
          />
        </div>
        <ul className="entries">
          {c.landmarks.map((l) => (
            <li key={l.name}>
              <h3>{l.name}</h3>
              {l.where && <p className="entry-where">{l.where}</p>}
              <p>{l.body}</p>
            </li>
          ))}
        </ul>
        <Sources text={c.sources} />
      </GuideSection>
    </CraGuide>
  );
}

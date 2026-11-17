import type { Metadata } from "next";
import { craDistrict } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, GuideSection, Sources } from "@/components/CraGuide";
import { Photo } from "@/components/Photo";
import benedictPhoto from "@/public/photos/st-benedict-the-moor-church.jpg";

export const metadata: Metadata = {
  title: `The Historic District and Home History | ${site.fullName}`,
  description: "Lincolnville is one of St. Augustine’s seven National Register historic districts.",
  alternates: { canonical: "/cra-lincolnville/historic-district" },
};

export default function DistrictPage() {
  const [first, ...rest] = craDistrict.sections;
  const photo = craDistrict.photo;
  return (
    <CraGuide slug="historic-district">
      <GuideSection id={first.id} title={first.title}>
        <div className="guide-split">
          <div>
            {first.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Sources text={first.sources} />
          </div>
          <Photo
            src={benedictPhoto}
            alt={photo.alt}
            caption={photo.caption}
            credit={photo.credit}
            sizes="(max-width: 900px) 90vw, 300px"
            className="guide-photo"
          />
        </div>
      </GuideSection>

      {rest.map((s) => (
        <GuideSection key={s.id} id={s.id} title={s.title}>
          {s.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.note && <p className="aside-note">{s.note}</p>}
          <Sources text={s.sources} />
        </GuideSection>
      ))}
    </CraGuide>
  );
}

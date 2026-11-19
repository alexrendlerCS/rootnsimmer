import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { craHomeStory } from "@/content/cra";
import { site } from "@/content/site";
import { CraGuide, GuideSection } from "@/components/CraGuide";
import { EvidenceLegend } from "@/components/EvidenceLegend";
import thenPhoto from "@/public/photos/home-story-then.jpg";
import nowPhoto from "@/public/photos/home-story-now.jpg";

export const metadata: Metadata = {
  title: `Every Home Known: The Home Story Package | ${site.fullName}`,
  description: "The Home Story Package: $1,200, paid $600 when the work begins and $600 on delivery.",
  alternates: { canonical: "/cra-lincolnville/home-story-package" },
};

export default function HomeStoryPage() {
  const c = craHomeStory;
  return (
    <CraGuide slug="home-story-package">
      <div className="then-now">
        <figure>
          <p className="then-now-label">Then</p>
          <Image src={thenPhoto} alt={c.then.alt} sizes="(max-width: 720px) 90vw, 380px" placeholder="blur" priority className="then-now-img" />
          <figcaption>{c.then.caption}</figcaption>
        </figure>
        <figure>
          <p className="then-now-label">Now</p>
          <Image src={nowPhoto} alt={c.now.alt} sizes="(max-width: 720px) 90vw, 380px" placeholder="blur" priority className="then-now-img" />
          <figcaption>{c.now.caption}</figcaption>
        </figure>
      </div>

      <GuideSection id="price" title="The Home Story Package">
        <div className="price-card">
          <div className="price-main">
            <p className="price-amount">{c.price.amount}</p>
            <ul className="price-split">
              {c.price.payments.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Link className="button" href={c.membershipLink.href}>
              {c.membershipLink.label}
            </Link>
          </div>
          <div className="price-included">
            <h3>{c.included.title}</h3>
            <div className="table-wrap">
              <table className="record-table included-table">
                <thead>
                  <tr>
                    {c.included.columns.map((col) => (
                      <th key={col} scope="col">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.included.rows.map(([item, details]) => (
                    <tr key={item}>
                      <th scope="row">{item}</th>
                      <td>{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection id="sample" title={c.sample.title}>
        <p>{c.sample.intro}</p>
        <ol className="sample-parts">
          {c.sample.parts.map((s) => (
            <li key={s.name}>
              <h3>{s.name}</h3>
              <p className="doc-size">{s.size}</p>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <h3 className="steps-title">{c.sample.sectionsTitle}</h3>
        <dl className="glance">
          {c.sample.sections.map((s) => (
            <div key={s.name}>
              <dt>{s.name}</dt>
              <dd>{s.body}</dd>
            </div>
          ))}
        </dl>
        <p className="sample-extras">{c.sample.extras}</p>
      </GuideSection>

      <div className="guide-section">
        <EvidenceLegend />
      </div>
    </CraGuide>
  );
}

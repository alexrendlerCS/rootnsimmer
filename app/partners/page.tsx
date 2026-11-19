import type { Metadata } from "next";
import { site } from "@/content/site";
import { partnersPage as pp, partnersSection } from "@/content/newsletter";
import { SiteShell } from "@/components/SiteShell";
import { PlaceCard } from "@/components/PlaceCard";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo(
  "Partner With Us - Lincolnville Businesses",
  "Partnerships with Lincolnville businesses, restaurants and museums that share our commitment to the neighborhood's history.",
  "/partners",
);

export default function PartnersPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <p className="section-label">{pp.label}</p>
          <h1 className="page-title">{pp.title}</h1>
          <p className="page-lede">{pp.lede}</p>
        </div>
      </header>

      <section className="page-section" aria-labelledby="partner-list-title">
        <div className="wrap">
          <h2 id="partner-list-title" className="guide-h2">
            Our partners
          </h2>
          <ul className="local-list">
            {partnersSection.places.map((p) => (
              <PlaceCard key={p.name} p={p} badge={partnersSection.badge} />
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section" aria-labelledby="partner-benefits-title">
        <div className="wrap split">
          <div className="prose">
            <h2 id="partner-benefits-title" className="guide-h2">
              {pp.benefitsTitle}
            </h2>
            <ul className="entries">
              {pp.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <p>{pp.rate}</p>
            <EmailDraftButton label={pp.button} subject={pp.subject} body={pp.body} />
            <p className="fine">{pp.note}</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

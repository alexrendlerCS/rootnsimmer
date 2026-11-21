import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  communityMore,
  closing,
  connection,
  contactEmail,
  homeHero,
  kimberly,
  method,
  mission,
  records,
  respect,
  threshold,
  values,
  why,
  work,
} from "@/content/site";
import { pillars, rootIntro, rootJoin, rootMotto, rootNote, rootWork } from "@/content/root";
import { craTeaser } from "@/content/cra";
import { tractsPage, tractsTeaser } from "@/content/tracts";
import { whatIfTeasers } from "@/content/stable-bodega";
import { visitorMapTeaser } from "@/content/visitor-map";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { ConnectionForm } from "@/components/ConnectionForm";
import { Offerings } from "@/components/Offerings";
import { RecordsForm } from "@/components/RecordsForm";
import logo from "@/public/logo.jpeg";
import { SiteShell } from "@/components/SiteShell";
import { MoreLinks } from "@/components/MoreLinks";
import { GapsSection } from "@/components/Gaps";
import headshot from "@/public/photos/kimberly-joyce-headshot.jpg";
import { LetterMore } from "@/components/LetterMore";
import { ProspectusLink } from "@/components/ProspectusLink";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = seo(
  "Lincolnville Community | Root & Simmer Hospitality Co.",
  "The Lincolnville CRA in plain words, ways to take part, and What if…? ideas for the neighborhood’s future.",
  "/community",
);

/** Moved from the home page on Nov 19, 2026 (simpler home page); wording unchanged. */
export default function CommunityPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <p className="section-label">Community</p>
          <h1 className="page-title">Lincolnville community</h1>
          <p className="page-lede">The Lincolnville Community Redevelopment Agency (CRA) in plain words, and ideas for the neighborhood’s future.</p>
        </div>
      </header>
        {/* CRA teaser: links to the full CRA – Lincolnville page */}
        <section id="cra" className="cra-teaser" aria-labelledby="cra-teaser-title">
          <div className="wrap split">
            <div className="prose">
              <p className="section-label">{craTeaser.label}</p>
              <h2 id="cra-teaser-title" className="h-medium">
                {craTeaser.title}
              </h2>
              <p>{craTeaser.body}</p>
              <Link className="button" href="/cra-lincolnville">
                {craTeaser.link}
              </Link>
            </div>
            <div className="panel">
              <ol className="goal-list">
                {craTeaser.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ol>
              <p className="fine">{craTeaser.source}</p>
            </div>
          </div>
        </section>

        {/* What if…? The Stable Bodega */}
        <section id="what-if" className="what-if" aria-label="What if…? Root & Simmer visions">
          <div className="wrap what-if-grid">
            {whatIfTeasers.map((w) => (
              <Link key={w.href} href={w.href} className="what-if-card">
                <Image src={w.image} alt={w.alt} width={1200} height={700} sizes="(max-width: 900px) 90vw, 560px" className="what-if-img" />
                <div>
                  <p className="section-label">{w.label}</p>
                  <h2 className="h-medium">{w.title}</h2>
                  <p>{w.body}</p>
                  <span className="button button-red">{w.link}</span>
                  {"credit" in w && w.credit && <p className="what-if-credit">{w.credit}</p>}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Everything in the Community menu, grouped (Nov 2026) */}
        <MoreLinks id="community-more" title="More in Community" groups={communityMore} />
    </SiteShell>
  );
}

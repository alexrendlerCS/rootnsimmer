import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
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
import { GapsSection } from "@/components/Gaps";
import headshot from "@/public/photos/kimberly-joyce-headshot.jpg";
import { LetterMore } from "@/components/LetterMore";
import { ProspectusLink } from "@/components/ProspectusLink";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";

export const metadata: Metadata = seo(
  "Contact Root & Simmer - Lincolnville, St. Augustine",
  "Reach Kimberly Joyce at Root & Simmer Hospitality Co. Email rootnsimmer@gmail.com or call 760-481-4961.",
  "/contact",
);

/** Moved from the home page on Nov 19, 2026 (simpler home page); wording unchanged. */
export default function ContactPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <p className="section-label">Contact</p>
          <h1 className="page-title">Contact Root &amp; Simmer</h1>
          <p className="page-lede">Reach Kimberly Joyce at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or call <a href="tel:+17604814961">760-481-4961</a>.</p>
        </div>
      </header>
        {/* Offerings */}
        <section id="work" className="section work">
          <div className="wrap">
            <div className="work-head">
              <div>
                <p className="section-label">Our work</p>
                <h2>{work.title}</h2>
              </div>
              <p className="muted">{work.intro}</p>
            </div>
            <Offerings />
            <p className="work-note">{work.note}</p>
            <p className="work-note">
              {work.recordsPrompt}{" "}
              <Link className="text-link" href="/digital-records">
                {work.recordsLink}
              </Link>
            </p>
          </div>
        </section>

        {/* Records request */}
        <section id="records" className="section">
          <div className="wrap split">
            <div className="prose">
              <p className="section-label">Request records</p>
              <h2>{records.title}</h2>
              <p>{records.intro}</p>
              <div className="faq">
                {records.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <RecordsForm />
          </div>
        </section>

        <section className="closing">
          <div className="wrap">
            <a className="button button-red" href={`mailto:${contactEmail}`}>
              {closing.link}
            </a>
          </div>
        </section>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { walkAccess } from "@/lib/walks";
import { walkSummaries as walks } from "@/content/walks";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { SiteShell } from "@/components/SiteShell";
import { GapNote } from "@/components/Gaps";
import { HistoryFact } from "@/components/HistoryFact";
import { facts } from "@/content/facts";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo(
  "Lincolnville History - Little Africa, St. Augustine",
  "Self-guided discovery of Lincolnville: Little Africa, Black history, civil rights sites, museums and historic churches in St. Augustine, FL.",
  "/walks",
);

export default async function WalksPage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const [access, sp] = await Promise.all([walkAccess(), searchParams]);
  return (
    <SiteShell>
      <GapNote line="history" />
      <header className="page-hero land-hero">
        <div className="wrap">
          <p className="section-label">Self-guided walks</p>
          <h1 className="page-title land-title">Walk Lincolnville’s history</h1>
          <p className="page-lede">
            Three self-guided walks on your phone, at your own pace, from the public sidewalk. Each one brings the streets, homes and
            people of Lincolnville to life, stop by stop.
          </p>
          {access ? (
            <p className="walk-welcome">Welcome, {access.name}. Your walks are open below.</p>
          ) : (
            <div className="panel research-join walk-access">
              <h2 className="newsletter-panel-title">Open the walks</h2>
              <p>
                <strong>Members</strong> walk free, and every membership includes three walk codes a year to share with family, friends and guests.
              </p>
              <form action="/walks/redeem" method="post" className="walk-code-form">
                <label htmlFor="walk-code">Have a walk code?</label>
                <div>
                  <input id="walk-code" name="code" placeholder="WALK-XXXXXX" autoComplete="off" required />
                  <button className="button" type="submit">
                    Open the walks
                  </button>
                </div>
                {sp.code === "invalid" && <p className="form-status walk-error">That code isn’t working. Check it, or ask us for help.</p>}
              </form>
              <p className="latest-actions">
                <Link className="text-link" href={`/members/sign-in?next=${encodeURIComponent("/walks")}`}>
                  Member sign-in
                </Link>
              </p>
              <EmailDraftButton
                label="Ask about visitor walk codes"
                subject="Visitor walk codes"
                body={"Hello Kimberly,\n\nPlease tell me when visitor walk codes are available.\n\nMy name:\nNumber of guests:\nDates of my visit:\nBest way to reach me:"}
              />
            </div>
          )}
        </div>
      </header>
      <HistoryFact fact={facts.oneida} />

      <section className="page-section land-tracts" aria-label="The walks">
        <div className="wrap">
          <ul className="walk-cards">
            {walks.map((w) => (
              <li key={w.slug} className="walk-card">
                <h2>{w.title}</h2>
                <p className="walk-sub">{w.subtitle}</p>
                <p>{w.summary}</p>
                <p className="walk-meta">
                  {w.stops} stops · Starts at {w.start}
                </p>
                {access ? (
                  <Link className="button" href={`/walks/${w.slug}`}>
                    Start this walk
                  </Link>
                ) : (
                  <span className="research-lock">
                    <span aria-hidden="true">🔒</span> Members and walk-code holders
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="notice">
            Please view private homes from the public sidewalk and respect the families who live in Lincolnville today. © {new Date().getFullYear()} Root &amp;
            Simmer Hospitality Co. All rights reserved. The walk guides may not be copied, printed or shared.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { supportPage, thankYou as t } from "@/content/support";
import { SiteShell } from "@/components/SiteShell";
import logo from "@/public/logo.jpeg";

export const metadata: Metadata = {
  title: `Thank you | ${site.fullName}`,
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <section className="page-section thanks">
        <div className="wrap thanks-inner">
          <Image src={logo} alt="Root & Simmer Hospitality Co." className="thanks-logo" sizes="160px" />
          <h1 className="page-title">{t.title}</h1>
          {t.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="signature">{t.name}</p>
          <p className="thanks-role">
            {t.role}
            <br />
            {site.fullName}
          </p>
          <p className="fine">{supportPage.taxNote}</p>
          <p>
            <Link className="button" href="/lincolnville-history/tracts">
              Explore Lincolnville’s history
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

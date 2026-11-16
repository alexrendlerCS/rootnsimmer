import { contactEmail, site } from "@/content/site";
import { Header } from "./Header";
import { InquiryDialog } from "./InquiryDialog";
import { InquiryProvider } from "./InquiryProvider";
import Link from "next/link";

/** Header, footer and the inquiry dialog shared by every page. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <InquiryProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-name">{site.fullName}</p>
            <p>Independent preservation and community storytelling rooted in Lincolnville.</p>
            <p className="footer-links">
              <Link href="/cra-lincolnville">CRA – Lincolnville</Link>
              <Link href="/digital-records">Digital Records &amp; Lincolnville Love Membership</Link>
            </p>
          </div>
          <div>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <p>{site.place}</p>
          </div>
          <p className="footer-fine">
            © {new Date().getFullYear()} {site.fullName} Not affiliated with the City of St. Augustine or the Lincolnville CRA.
          </p>
        </div>
      </footer>

      <InquiryDialog />
    </InquiryProvider>
  );
}

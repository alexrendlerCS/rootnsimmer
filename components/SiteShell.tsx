import { contactEmail, site } from "@/content/site";
import { Header } from "./Header";
import { InquiryDialog } from "./InquiryDialog";
import { InquiryProvider } from "./InquiryProvider";
import { ScrollToTop } from "./ScrollToTop";
import Link from "next/link";

/** Header, footer and the inquiry dialog shared by every page. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <InquiryProvider>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-name">{site.fullName} · Lincolnville, St. Augustine</p>
            <p>Independent community education. Not an official City of St. Augustine or CRA publication.</p>
            <p className="footer-links">
              <Link href="/cra-lincolnville">Understanding the Lincolnville CRA</Link>
              <Link href="/digital-records">Digital Records</Link>
            </p>
          </div>
          <div>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <p>{site.place}</p>
          </div>
          <p className="footer-fine">
            © {new Date().getFullYear()} {site.fullName}
          </p>
        </div>
      </footer>

      <InquiryDialog />
    </InquiryProvider>
  );
}

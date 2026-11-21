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
              <Link href="/root">Discover ROOT Member</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/cra-lincolnville">Understanding the Lincolnville CRA</Link>
              <Link href="/digital-records">Digital Records</Link>
              <Link href="/our-work">Our four lines of work</Link>
              <Link href="/support">Support Lincolnville’s History</Link>
              <Link href="/walks">Self-guided walks</Link>
              <Link href="/homeowner-help">Help for Lincolnville homeowners</Link>
              <Link href="/work-with-us">Work with Root & Simmer</Link>
              <Link href="/preserve-historic-homes">Preserve Historic Homes</Link>
              <Link href="/library">Library</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/lincolnville-history/tracts">Lincolnville History: The Land Beneath Our Feet</Link>
              <Link href="/lincolnville-history/directory">The Lil Africa Directory</Link>
              <Link href="/lincolnville-history/mohlman-research">Mohlman Research (members)</Link>
              <Link href="/lincolnville-history/residents-map">Historic Residents Map (members)</Link>
              <Link href="/locator-map">Lincolnville Locator Map</Link>
              <Link href="/visitor-map">Lincolnville on the Visitor Map</Link>
              <Link href="/what-if/washington-street">What if…? Washington Street</Link>
              <Link href="/what-if/visitor-welcome">What if…? A Visitor Welcome</Link>
              <Link href="/what-if/twine-park">What if…? Twine Park</Link>
              <Link href="/what-if/stable-bodega">What if…? The Stable Bodega</Link>
            </p>
          </div>
          <div>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <p>
              <a href="tel:+17604814961">760-481-4961</a>
            </p>
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

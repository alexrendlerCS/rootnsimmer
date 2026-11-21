import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rootnsimmer.com";

/** Public pages only. Member pages, sign-in and the walk guides themselves are left out on purpose. */
const pages: string[] = ["/","/cra-lincolnville","/cra-lincolnville/fix-it-up","/cra-lincolnville/historic-district","/cra-lincolnville/home-story-package","/cra-lincolnville/institutional-landmarks","/cra-lincolnville/parks-and-named-places","/cra-lincolnville/requests","/cra-lincolnville/take-part","/digital-records","/homeowner-help","/homes-not-hotels","/library","/lincolnville-history/tracts","/lincolnville-history/story-map","/locator-map","/newsletter","/our-story","/root","/community","/contact","/our-work","/partners","/places-map","/preserve-historic-homes","/preserve-historic-homes/abandoned-homes","/preserve-historic-homes/demolition","/preserve-historic-homes/historic-recognition","/preserve-historic-homes/map","/support","/visitor-map","/walks","/what-if/stable-bodega","/what-if/twine-park","/what-if/visitor-welcome","/what-if/washington-street","/work-with-us"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: SITE + p }));
}

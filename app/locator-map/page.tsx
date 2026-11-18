import type { Metadata } from "next";
import { site } from "@/content/site";
import { SiteShell } from "@/components/SiteShell";
import { LocatorMap } from "@/components/LocatorMap";

export const metadata: Metadata = {
  title: `Historic Lincolnville Locator Map | ${site.fullName}`,
  description: "Businesses and community places in the Lincolnville Historic District, St. Augustine: a numbered directory and illustrated map from Root & Simmer Hospitality Co.",
  alternates: { canonical: "/locator-map" },
};

export default function LocatorMapPage() {
  return (
    <SiteShell>
      <div className="wrap locator-page">
        <LocatorMap />
      </div>
    </SiteShell>
  );
}

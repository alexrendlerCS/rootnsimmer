import type { Metadata } from "next";

/**
 * Search titles and descriptions from Kimberly's "Hashtags and search keywords for rootnsimmer.com" (Nov 19, 2026).
 * Sets the Google title and description, the canonical address and the link-preview (Open Graph) tags together.
 */
const IMAGE = { url: "/share-card.jpg", width: 1200, height: 630, alt: "Root & Simmer Hospitality Co. live-oak logo. Exclusively for Lincolnville, St. Augustine, Florida." };

export function seo(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Root & Simmer Hospitality Co.", type: "website", locale: "en_US", images: [IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [IMAGE.url] },
  };
}

/** Members-only pages: kept out of Google and out of the sitemap. */
export const noindex: Metadata["robots"] = { index: false, follow: true };

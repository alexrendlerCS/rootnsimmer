import type { Metadata, Viewport } from "next";
import { Libre_Franklin, Young_Serif } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = Libre_Franklin({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rootnsimmer.com"),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.fullName,
    type: "website",
    locale: "en_US",
    images: [{ url: "/share-card.jpg", width: 1200, height: 630, alt: "Root & Simmer Hospitality Co. live-oak logo. Exclusively for Lincolnville, St. Augustine, Florida. Every home has a history. Every family has a voice. Lincolnville’s story lives in both. www.rootnsimmer.com" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/share-card.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#1f3a2c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

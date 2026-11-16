import type { Metadata, Viewport } from "next";
import { Libre_Franklin, Young_Serif } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = Libre_Franklin({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://rootnsimmer.vercel.app"),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.fullName,
    type: "website",
    locale: "en_US",
    images: [{ url: "/lincolnville-home.jpeg", width: 1920, height: 1440, alt: "A Lincolnville cottage with a screened front porch" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // ROOT now lives on the home page; posters and newsletters still point to /root.
      { source: "/root", destination: "/#root", permanent: true },
      // The Lincolnville History section starts with The Land Beneath Our Feet.
      { source: "/lincolnville-history", destination: "/lincolnville-history/tracts", permanent: false },
      // Kimberly chose "Our Feet" (Nov 2026): the old walk link and the brief's page address both still work.
      { source: "/walks/land-beneath-your-feet", destination: "/walks/land-beneath-our-feet", permanent: true },
      { source: "/the-land-beneath-our-feet", destination: "/lincolnville-history/tracts", permanent: false },
    ];
  },
};

export default nextConfig;

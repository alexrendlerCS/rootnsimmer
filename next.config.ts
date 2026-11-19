import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // ROOT now lives on the home page; posters and newsletters still point to /root.
      { source: "/root", destination: "/#root", permanent: true },
      // The Lincolnville History section starts with The Land Beneath Your Feet.
      { source: "/lincolnville-history", destination: "/lincolnville-history/tracts", permanent: false },
    ];
  },
};

export default nextConfig;

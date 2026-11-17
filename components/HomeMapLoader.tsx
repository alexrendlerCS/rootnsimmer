"use client";

import dynamic from "next/dynamic";

/** The map needs the browser (Leaflet), so it is loaded on the client only. */
const HomeMap = dynamic(() => import("./HomeMap"), {
  ssr: false,
  loading: () => <p className="home-map-loading home-map-loading-static">Loading the map…</p>,
});

export function HomeMapLoader() {
  return <HomeMap />;
}

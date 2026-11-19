"use client";

import dynamic from "next/dynamic";
import type { ResidentsData } from "@/lib/residents-map";

/** Leaflet needs the browser, so the map loads on the client only. */
const ResidentsMap = dynamic(() => import("./ResidentsMap"), {
  ssr: false,
  loading: () => <p className="home-map-loading home-map-loading-static">Loading the map…</p>,
});

export function ResidentsMapLoader({ data }: { data: ResidentsData }) {
  return <ResidentsMap data={data} />;
}

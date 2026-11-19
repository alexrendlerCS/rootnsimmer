"use client";

import dynamic from "next/dynamic";
import type { ResidentsData } from "@/lib/residents-map";

/** Leaflet needs the browser, so the Story Map loads on the client only. */
const StoryMap = dynamic(() => import("./StoryMap"), {
  ssr: false,
  loading: () => <p className="home-map-loading home-map-loading-static">Loading the map…</p>,
});

export function StoryMapLoader(props: { data: ResidentsData; partners: { name: string; where: string; lat: number; lng: number }[]; todayLabel: string }) {
  return <StoryMap {...props} />;
}

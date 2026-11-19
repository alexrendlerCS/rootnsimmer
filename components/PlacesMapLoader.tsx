"use client";

import dynamic from "next/dynamic";
import type { PlacesData } from "@/lib/places";

const PlacesMap = dynamic(() => import("./PlacesMap"), {
  ssr: false,
  loading: () => <p className="home-map-loading home-map-loading-static">Loading the map…</p>,
});

export function PlacesMapLoader({ data }: { data: PlacesData }) {
  return <PlacesMap data={data} />;
}

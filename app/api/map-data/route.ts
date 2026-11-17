import { NextResponse } from "next/server";
import { getMember } from "@/lib/members";
import { loadHomeMapData, parcelOf } from "@/lib/home-map-data";

/** The Lincolnville Home Map data, for signed-in members only, plus which lots are the member's own home. */
export async function GET() {
  const member = await getMember();
  if (!member) return NextResponse.json({ error: "Members only" }, { status: 401 });
  const data = await loadHomeMapData();
  const mine = data.homes.filter((h) => member.home_parcels.includes(parcelOf(h.id))).map((h) => h.id);
  return NextResponse.json({ ...data, mine }, { headers: { "Cache-Control": "private, no-store" } });
}

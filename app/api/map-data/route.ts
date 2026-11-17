import { NextResponse } from "next/server";
import { getMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { homeOfDoc, loadHomeMapData, parcelOf } from "@/lib/home-map-data";

type MyFile = { id: string; title: string; download: boolean; size: number | null };

/**
 * The Lincolnville Home Map data, for signed-in members only, plus which lots are the member's own homes
 * and, for each home (by parcel), the "Start here" documents of its file (welcome letter, printed folder,
 * digital packet, introduction packet), so the map can link straight to them from that home.
 */
export async function GET() {
  const member = await getMember();
  if (!member) return NextResponse.json({ error: "Members only" }, { status: 401 });
  const data = await loadHomeMapData();
  const mine = data.homes.filter((h) => member.home_parcels.includes(parcelOf(h.id))).map((h) => h.id);

  const myFiles: Record<string, MyFile[]> = {};
  if (mine.length) {
    const supabase = await createClient();
    const { data: docs } = await supabase
      .from("documents")
      .select("id, title, file_name, size_bytes, storage_path")
      .eq("visibility", "private")
      .eq("member_id", member.id)
      .eq("category", "Start here")
      .eq("archived", false)
      .order("created_at", { ascending: true });
    for (const d of docs ?? []) {
      const parcel = homeOfDoc(d.storage_path, member.home_parcels);
      (myFiles[parcel] ??= []).push({ id: d.id, title: d.title, download: !/\.pdf$/i.test(d.file_name ?? ""), size: d.size_bytes });
    }
  }
  return NextResponse.json({ ...data, mine, myFiles }, { headers: { "Cache-Control": "private, no-store" } });
}

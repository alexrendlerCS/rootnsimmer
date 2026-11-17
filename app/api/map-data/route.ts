import { NextResponse } from "next/server";
import { getMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { loadHomeMapData, parcelOf } from "@/lib/home-map-data";

/**
 * The Lincolnville Home Map data, for signed-in members only, plus which lots are the member's own home
 * and the "Start here" documents of their home file (welcome letter, printed folder, digital packet),
 * so the map can link straight to them from their home.
 */
export async function GET() {
  const member = await getMember();
  if (!member) return NextResponse.json({ error: "Members only" }, { status: 401 });
  const data = await loadHomeMapData();
  const mine = data.homes.filter((h) => member.home_parcels.includes(parcelOf(h.id))).map((h) => h.id);

  let myFile: { id: string; title: string; download: boolean; size: number | null }[] = [];
  if (mine.length) {
    const supabase = await createClient();
    const { data: docs } = await supabase
      .from("documents")
      .select("id, title, file_name, size_bytes")
      .eq("visibility", "private")
      .eq("member_id", member.id)
      .eq("category", "Start here")
      .eq("archived", false)
      .order("created_at", { ascending: true });
    myFile = (docs ?? []).map((d) => ({
      id: d.id,
      title: d.title,
      download: !/\.pdf$/i.test(d.file_name ?? ""),
      size: d.size_bytes,
    }));
  }
  return NextResponse.json({ ...data, mine, myFile }, { headers: { "Cache-Control": "private, no-store" } });
}

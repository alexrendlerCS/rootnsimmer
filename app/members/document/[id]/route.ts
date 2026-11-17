import { NextResponse, type NextRequest } from "next/server";
import { getMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { MEMBER_BUCKET } from "@/lib/supabase/env";

/**
 * Opens a members' document. The lookup runs as the signed-in member, so row level security decides
 * whether they may see it; only then does the server make a link that works for two minutes.
 */
export async function GET(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const member = await getMember();
  if (!member) {
    return NextResponse.redirect(new URL(`/members/sign-in?next=${encodeURIComponent(`/members/document/${id}`)}`, request.nextUrl.origin));
  }
  const supabase = await createClient();
  const { data: doc } = await supabase.from("documents").select("storage_path, file_name").eq("id", id).maybeSingle();
  if (!doc) return new NextResponse("This document is not available.", { status: 404 });

  const { data, error } = await createAdminClient()
    .storage.from(MEMBER_BUCKET)
    .createSignedUrl(doc.storage_path, 120, { download: request.nextUrl.searchParams.has("download") ? (doc.file_name ?? true) : undefined });
  if (error || !data) return new NextResponse("The document could not be opened. Please try again.", { status: 502 });
  return NextResponse.redirect(data.signedUrl);
}

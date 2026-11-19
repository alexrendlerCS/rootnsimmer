import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { supabaseConfigured } from "@/lib/supabase/env";

export async function POST(request: NextRequest) {
  if (supabaseConfigured) {
    try {
      const supabase = await createClient();
      await supabase.auth.signOut();
    } catch {
      // Signing out should never show an error page; the visitor ends up signed out either way.
    }
  }
  return NextResponse.redirect(new URL("/members/sign-in?signed-out=1", request.nextUrl.origin), { status: 303 });
}

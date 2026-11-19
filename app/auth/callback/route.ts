import { NextResponse, type NextRequest } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { portalOpen, safeNextPath } from "@/lib/portal";

/** Where the sign-in email link lands. Finishes the sign-in, then goes on to the page the member asked for. */
export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (!portalOpen) return NextResponse.redirect(new URL("/members/sign-in", url.origin));
  const next = safeNextPath(url.searchParams.get("next"));
  const supabase = await createClient();

  const code = url.searchParams.get("code");
  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;

  const { error } = code
    ? await supabase.auth.exchangeCodeForSession(code)
    : tokenHash && type
      ? await supabase.auth.verifyOtp({ token_hash: tokenHash, type })
      : { error: new Error("missing code") };

  const target = new URL(error ? "/members/sign-in?error=link" : next, url.origin);
  return NextResponse.redirect(target);
}

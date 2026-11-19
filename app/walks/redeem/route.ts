import { NextResponse, type NextRequest } from "next/server";
import { redeemWalkCode, WALK_COOKIE } from "@/lib/walks";
import { portalOpen } from "@/lib/portal";

/** The walk-code form posts here. A good code sets a private cookie for the length of the guest's access. */
export async function POST(request: NextRequest) {
  if (!portalOpen) return NextResponse.redirect(new URL("/walks", request.nextUrl.origin), 303);
  const form = await request.formData();
  const code = String(form.get("code") ?? "");
  const next = String(form.get("next") ?? "/walks");
  const safeNext = next.startsWith("/walks") ? next : "/walks";
  const result = code ? await redeemWalkCode(code) : null;
  if (!result) return NextResponse.redirect(new URL(`/walks?code=invalid`, request.nextUrl.origin), 303);
  const res = NextResponse.redirect(new URL(safeNext, request.nextUrl.origin), 303);
  res.cookies.set(WALK_COOKIE, code.trim().toUpperCase(), { httpOnly: true, secure: true, sameSite: "lax", path: "/", expires: new Date(result.until) });
  return res;
}

/**
 * Member portal switch.
 *
 * OPEN (Kimberly, Nov 19, 2026): "member portal can open but the members can't see it until they pay."
 * Only people Kimberly adds as members (after they pay) can sign in; nobody can create their own account.
 *
 * To PAUSE again without touching code: in Vercel → rootnsimmer → Settings → Environment Variables, add
 * MEMBER_PORTAL = paused (Production) and redeploy. Paused = no sign-in, no private pages, no member downloads or
 * signed links, no walk codes, and existing sign-ins are ignored; accounts, files and security rules are untouched.
 */
export const portalOpen = process.env.MEMBER_PORTAL !== "paused";

export const portalSoon = {
  title: "The member portal is coming soon",
  body: "Root & Simmer’s members’ library, home files and self-guided walk guides open soon. Everything on the public website is open to everyone now. Questions? Email rootnsimmer@gmail.com or call 760-481-4961.",
};

/** Only ever continue to a path on this site: a single leading slash, no backslashes, no other host. */
export function safeNextPath(value: string | null | undefined, fallback = "/members") {
  if (!value || !value.startsWith("/") || value.startsWith("//") || /[\\\x00-\x1f]/.test(value)) return fallback;
  try {
    const u = new URL(value, "https://www.rootnsimmer.com");
    return u.origin === "https://www.rootnsimmer.com" ? u.pathname + u.search + u.hash : fallback;
  } catch {
    return fallback;
  }
}

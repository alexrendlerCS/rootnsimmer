/**
 * Member portal switch (public launch, Nov 19, 2026).
 *
 * The portal is PAUSED unless the server setting MEMBER_PORTAL=open is present.
 *   - Paused: no sign-in, no private pages, no member downloads or signed links, no walk codes, and any existing
 *     sign-in is ignored. Accounts, home assignments, private files, database records and security rules are untouched.
 *   - To reopen: in Vercel → rootnsimmer → Settings → Environment Variables, add MEMBER_PORTAL = open (Production),
 *     then redeploy. On this laptop, add MEMBER_PORTAL=open to .env.local.
 */
export const portalOpen = process.env.MEMBER_PORTAL === "open";

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

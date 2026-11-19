import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { site } from "@/content/site";
import { getMember } from "@/lib/members";
import { supabaseConfigured } from "@/lib/supabase/env";
import { portalOpen, portalSoon, safeNextPath } from "@/lib/portal";
import { SignInForm } from "@/components/SignInForm";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Member sign-in | ${site.fullName}`,
  robots: { index: false },
};

export default async function SignInPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const next = safeNextPath(params.next);
  if (!portalOpen) {
    return (
      <SiteShell>
        <section className="wrap members-narrow" aria-labelledby="signin-title">
          <p className="section-label">Lincolnville Connection</p>
          <h1 id="signin-title" className="page-title members-title">
            {portalSoon.title}
          </h1>
          <p className="page-lede">{portalSoon.body}</p>
          <p className="signin-help">
            Membership comes with the Home Story Package. <Link href="/digital-records#dr-membership">See the Lincolnville Connection</Link>.
          </p>
        </section>
      </SiteShell>
    );
  }
  if (await getMember()) redirect(next);

  return (
    <SiteShell>
      <section className="wrap members-narrow" aria-labelledby="signin-title">
        <p className="section-label">Lincolnville Connection</p>
        <h1 id="signin-title" className="page-title members-title">
          Member sign-in
        </h1>
        <p className="page-lede">
          Enter the email address you gave Root &amp; Simmer. We will email you a link that signs you in, with no password to
          remember.
        </p>
        {params.error === "link" && (
          <p className="form-error" role="alert">
            That sign-in link has expired or was already used. Send yourself a new one below.
          </p>
        )}
        {params["signed-out"] && <p className="notice">You are signed out.</p>}
        {supabaseConfigured ? (
          <SignInForm next={next} />
        ) : (
          <p className="placeholder">Member sign-in is being set up.</p>
        )}
        <p className="signin-help">
          Not a member yet? Membership comes with the Home Story Package.{" "}
          <Link href="/digital-records#dr-membership">See the Lincolnville Connection</Link>.
        </p>
      </section>
    </SiteShell>
  );
}

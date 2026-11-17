"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

/** Sends the one-time sign-in link. Members are added by Kimberly, so this never creates an account. */
export function SignInForm({ next }: { next: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const supabase = createClient();
    const redirect = new URL("/auth/callback", window.location.origin);
    redirect.searchParams.set("next", next);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: false, emailRedirectTo: redirect.toString() },
    });
    // Same message whether or not the address belongs to a member, so the form never reveals who is a member.
    setState(error && error.status !== 400 && error.status !== 422 ? "error" : "sent");
  }

  if (state === "sent") {
    return (
      <div className="panel signin-sent" role="status">
        <h2>Check your email</h2>
        <p>
          If <strong>{email}</strong> belongs to a Lincolnville Connection member, a sign-in link is on its way. Open it on this
          device. The link works once and expires in an hour.
        </p>
        <button type="button" className="text-button" onClick={() => setState("idle")}>
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form className="signin-form" onSubmit={onSubmit}>
      <label htmlFor="signin-email">Your email address</label>
      <input
        id="signin-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="button" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Email me a sign-in link"}
      </button>
      {state === "error" && (
        <p className="form-error" role="alert">
          The link could not be sent right now. Please try again in a few minutes, or call 760-481-4961.
        </p>
      )}
    </form>
  );
}

"use client";

import { useActionState } from "react";
import { joinNewsletter, type SignupResult } from "@/lib/newsletter";
import { newsletterSignup as n } from "@/content/newsletter";

export function NewsletterSignupForm() {
  const [result, action, pending] = useActionState<SignupResult, FormData>(joinNewsletter, null);
  if (result?.ok) return <p className="signup-thanks" role="status">{result.message}</p>;
  return (
    <form action={action} className="signup-form">
      <label>
        Your name
        <input name="name" autoComplete="name" maxLength={120} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required maxLength={254} />
      </label>
      <fieldset>
        <legend>{n.interestsLabel}</legend>
        {n.interests.map((i) => (
          <label key={i} className="signup-check">
            <input type="checkbox" name="interests" value={i} /> {i}
          </label>
        ))}
      </fieldset>
      <input className="signup-trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button" type="submit" disabled={pending}>
        {pending ? "Adding you…" : n.button}
      </button>
      {result && !result.ok && (
        <p className="form-error" role="alert">
          {result.message}
        </p>
      )}
    </form>
  );
}

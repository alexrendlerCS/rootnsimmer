"use client";

import { useEffect, useState } from "react";
import { openEmailDraft } from "@/lib/email";

/** One choice people can vote for on a "What if…?" page. */
export type WhatIfChoice = { id: string; name: string; where: string; body: string };

export type WhatIfVoice = {
  title: string;
  intro: string;
  ideaLabel: string;
  ideaPlaceholder: string;
  worryLabel: string;
  rememberLabel: string;
  connections: string[];
  submit: string;
  fine: string;
};

const SENT = "Your email draft is open. Review it and press send in your email app.";

/** Vote cards plus the "Add your voice" form. Picks are remembered in this browser only. */
export function WhatIfVote({
  project,
  storageKey,
  choices,
  voice,
  voteLabel = "I’d come for this",
}: {
  project: string;
  storageKey: string;
  choices: WhatIfChoice[];
  voice: WhatIfVoice;
  voteLabel?: string;
}) {
  const [picks, setPicks] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
      if (Array.isArray(saved)) setPicks(saved.filter((id) => choices.some((c) => c.id === id)));
    } catch {}
  }, [storageKey, choices]);

  function toggle(id: string) {
    setPicks((prev) => {
      const next = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const chosen = choices.filter((c) => picks.includes(c.id)).map((c) => `- ${c.name}`);
    openEmailDraft(
      `${project}: my picks and ideas`,
      [
        "Hello Kimberly,",
        "",
        `My picks for ${project}:`,
        chosen.length ? chosen.join("\n") : "(no picks)",
        "",
        `What if…? My idea:\n${d.get("idea") || "(none)"}`,
        "",
        `What worries me:\n${d.get("worry") || "(nothing)"}`,
        "",
        `What I remember:\n${d.get("remember") || "(nothing)"}`,
        "",
        `Me: ${d.get("connection")}`,
        `Name: ${d.get("name") || "(not given)"}`,
        "",
        d.get("quote") ? "You may quote my idea, with my first name." : "Please do not quote me.",
      ].join("\n"),
    );
    setStatus(SENT);
  }

  return (
    <>
      <ul className="bodega-spaces">
        {choices.map((c) => {
          const on = picks.includes(c.id);
          return (
            <li key={c.id}>
              <button type="button" className={`bodega-space${on ? " is-on" : ""}`} aria-pressed={on} onClick={() => toggle(c.id)}>
                <span className="bodega-space-where">{c.where}</span>
                <span className="bodega-space-name">{c.name}</span>
                <span className="bodega-space-body">{c.body}</span>
                <span className="bodega-space-vote" aria-hidden="true">
                  {on ? `✓ ${voteLabel}` : `+ ${voteLabel}`}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <section id="voice" className="bodega-voice" aria-labelledby="voice-title">
        <div className="bodega-voice-head">
          <h2 id="voice-title" className="guide-h2">
            {voice.title}
          </h2>
          <p className="bodega-picked" role="status">
            {picks.length === 1 ? "1 pick" : `${picks.length} picks`}
          </p>
        </div>
        <p>{voice.intro}</p>
        <form className="form-card stack" onSubmit={onSubmit} aria-label={voice.title}>
          <label>
            {voice.ideaLabel}
            <textarea name="idea" rows={3} placeholder={voice.ideaPlaceholder} />
          </label>
          <label>
            {voice.worryLabel} <span className="optional">(optional)</span>
            <textarea name="worry" rows={2} />
          </label>
          <label>
            {voice.rememberLabel} <span className="optional">(optional)</span>
            <textarea name="remember" rows={2} />
          </label>
          <div className="two">
            <label>
              Your first name <span className="optional">(optional)</span>
              <input name="name" autoComplete="given-name" />
            </label>
            <label>
              Me
              <select name="connection">
                {voice.connections.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="check">
            <input type="checkbox" name="quote" />
            <span>You may quote my idea with my first name.</span>
          </label>
          <button className="button button-red" type="submit">
            {voice.submit}
          </button>
          <p className="fine">{voice.fine}</p>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </section>
    </>
  );
}

export type WhatIfSignupConfig = {
  subject: string;
  opening: string;
  orgLabel: string;
  whatLabel: string;
  roleLabel: string;
  roles: string[];
  whenLabel: string;
  whens: string[];
  submit: string;
  fine: string;
};

/** Sign-up form (vendors, volunteers…): opens an email draft to Kimberly. */
export function WhatIfSignup({ c }: { c: WhatIfSignupConfig }) {
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openEmailDraft(
      c.subject,
      [
        "Hello Kimberly,",
        "",
        c.opening,
        "",
        `${c.orgLabel}: ${d.get("org") || "(none)"}`,
        `${c.whatLabel}: ${d.get("what")}`,
        `${c.roleLabel}: ${d.get("role")}`,
        `Lincolnville business or resident: ${d.get("local")}`,
        `${c.whenLabel}: ${d.get("when")}`,
        "",
        `Name: ${d.get("name")}`,
        `Email: ${d.get("email")}`,
        `Phone: ${d.get("phone") || "(not given)"}`,
        "",
        `Anything else:\n${d.get("notes") || "(nothing)"}`,
      ].join("\n"),
    );
    setStatus(SENT);
  }

  return (
    <form className="form-card stack" onSubmit={onSubmit} aria-label={c.subject}>
      <div className="two">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          {c.orgLabel} <span className="optional">(optional)</span>
          <input name="org" autoComplete="organization" />
        </label>
      </div>
      <div className="two">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone <span className="optional">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        {c.whatLabel}
        <textarea name="what" rows={2} required />
      </label>
      <div className="two">
        <label>
          {c.roleLabel}
          <select name="role">
            {c.roles.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          {c.whenLabel}
          <select name="when">
            {c.whens.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Are you a Lincolnville business or resident?
        <select name="local">
          <option>Yes</option>
          <option>No, but nearby</option>
          <option>No</option>
        </select>
      </label>
      <label>
        Anything else? <span className="optional">(optional)</span>
        <textarea name="notes" rows={2} />
      </label>
      <button className="button" type="submit">
        {c.submit}
      </button>
      <p className="fine">{c.fine}</p>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { stableBodega as s } from "@/content/stable-bodega";
import { openEmailDraft } from "@/lib/email";

const KEY = "stable-bodega-picks";

/** "What would you come for?" cards plus the "Add your voice" form. Picks are remembered in this browser only. */
export function StableBodegaVote() {
  const [picks, setPicks] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "[]");
      if (Array.isArray(saved)) setPicks(saved.filter((id) => s.spaces.some((sp) => sp.id === id)));
    } catch {}
  }, []);

  function toggle(id: string) {
    setPicks((prev) => {
      const next = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const chosen = s.spaces.filter((sp) => picks.includes(sp.id)).map((sp) => `- ${sp.name}`);
    openEmailDraft(
      "The Stable Bodega: my picks and ideas",
      [
        "Hello Kimberly,",
        "",
        "What I would come for at the Stable Bodega:",
        chosen.length ? chosen.join("\n") : "(no picks)",
        "",
        `What if…? My idea:\n${d.get("idea") || "(none)"}`,
        "",
        `What worries me:\n${d.get("worry") || "(nothing)"}`,
        "",
        `What I remember about the stables or the south end of Riberia:\n${d.get("remember") || "(nothing)"}`,
        "",
        `Me: ${d.get("connection")}`,
        `Name: ${d.get("name") || "(not given)"}`,
        "",
        d.get("quote") ? "You may quote my idea, with my first name." : "Please do not quote me.",
      ].join("\n"),
    );
    setStatus(s.voice.sent);
  }

  return (
    <>
      <ul className="bodega-spaces">
        {s.spaces.map((sp) => {
          const on = picks.includes(sp.id);
          return (
            <li key={sp.id}>
              <button type="button" className={`bodega-space${on ? " is-on" : ""}`} aria-pressed={on} onClick={() => toggle(sp.id)}>
                <span className="bodega-space-where">{sp.where}</span>
                <span className="bodega-space-name">{sp.name}</span>
                <span className="bodega-space-body">{sp.body}</span>
                <span className="bodega-space-vote" aria-hidden="true">
                  {on ? "✓ I’d come for this" : "+ I’d come for this"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <section id="voice" className="bodega-voice" aria-labelledby="voice-title">
        <div className="bodega-voice-head">
          <h2 id="voice-title" className="guide-h2">
            {s.voice.title}
          </h2>
          <p className="bodega-picked" role="status">
            {s.vote.picked(picks.length)}
          </p>
        </div>
        <p>{s.voice.intro}</p>
        <form className="form-card stack" onSubmit={onSubmit} aria-label={s.voice.title}>
          <label>
            {s.voice.ideaLabel}
            <textarea name="idea" rows={3} placeholder={s.voice.ideaPlaceholder} />
          </label>
          <label>
            {s.voice.worryLabel} <span className="optional">(optional)</span>
            <textarea name="worry" rows={2} />
          </label>
          <label>
            {s.voice.rememberLabel} <span className="optional">(optional)</span>
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
                {s.voice.connections.map((c) => (
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
            {s.voice.submit}
          </button>
          <p className="fine">{s.voice.fine}</p>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </section>
    </>
  );
}

/** Vendor interest: opens an email draft to Kimberly. */
export function StableBodegaVendorForm() {
  const [status, setStatus] = useState("");
  const v = s.vendors;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openEmailDraft(
      "The Stable Bodega: vendor interest",
      [
        "Hello Kimberly,",
        "",
        "I would like a place at the Stable Bodega.",
        "",
        `Business or craft: ${d.get("business")}`,
        `What I make or do: ${d.get("what")}`,
        `Space I'd want: ${d.get("space")}`,
        `Lincolnville business or resident: ${d.get("local")}`,
        `When: ${d.get("start")}`,
        "",
        `Name: ${d.get("name")}`,
        `Email: ${d.get("email")}`,
        `Phone: ${d.get("phone") || "(not given)"}`,
        "",
        `Anything else:\n${d.get("notes") || "(nothing)"}`,
      ].join("\n"),
    );
    setStatus(s.voice.sent);
  }

  return (
    <form className="form-card stack" onSubmit={onSubmit} aria-label="Vendor interest">
      <div className="two">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Business or craft name
          <input name="business" autoComplete="organization" required />
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
        What do you make, grow, sell or teach?
        <textarea name="what" rows={2} required />
      </label>
      <div className="two">
        <label>
          The space you’d want
          <select name="space">
            {v.spaceTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          When
          <select name="start">
            {v.starts.map((t) => (
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
        {v.submit}
      </button>
      <p className="fine">{v.fine}</p>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}

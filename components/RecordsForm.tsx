"use client";

import { useState } from "react";
import { records } from "@/content/site";
import { openEmailDraft } from "@/lib/email";

export function RecordsForm() {
  const [status, setStatus] = useState("");
  const f = records.form;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openEmailDraft(
      "Lincolnville records request",
      `Hello Kimberly,\n\nName: ${d.get("name")}\nEmail: ${d.get("email")}\nI am a: ${d.get("role")}\nLooking for: ${d.get("topic")}\nAddress or family name: ${d.get("subject")}\n\nWhat I already know:\n${d.get("details") || "(not provided)"}\n\nPlease reply about this request. Public sharing of family material would require separate permission.`,
    );
    setStatus("Your email draft is open. Review it and press send in your email app.");
  }

  return (
    <form className="form-card stack" onSubmit={onSubmit} aria-label="Records request">
      <div className="two">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="two">
        <label>
          I am a
          <select name="role">
            {f.roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          I’m looking for
          <select name="topic">
            {f.topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Street address or family name
        <input name="subject" required />
      </label>
      <label>
        What do you already know? <span className="optional">(optional)</span>
        <textarea name="details" rows={4} />
      </label>
      <label className="check">
        <input type="checkbox" required />
        <span>{f.consent}</span>
      </label>
      <button className="button" type="submit">
        {f.submit}
      </button>
      <p className="fine">{f.fine}</p>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}

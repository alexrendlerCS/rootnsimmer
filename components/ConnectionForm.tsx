"use client";

import { useState } from "react";
import { connection } from "@/content/site";
import { openEmailDraft } from "@/lib/email";

export function ConnectionForm() {
  const [status, setStatus] = useState("");
  const f = connection.form;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openEmailDraft(
      "Lincolnville Connection: introduction",
      `Hello Kimberly,\n\nI would like to hear about Lincolnville Connection.\n\nName: ${d.get("name")}\nEmail: ${d.get("email")}\nMy connection: ${d.get("connection")}\n\nPlease contact me about the community.`,
    );
    setStatus("Your email draft is open. Review it and press send in your email app.");
  }

  return (
    <form className="form-card stack" onSubmit={onSubmit} aria-labelledby="connection-form-title">
      <h3 id="connection-form-title">{f.title}</h3>
      <p>{f.intro}</p>
      <label>
        Your name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Your connection to Lincolnville
        <select name="connection">
          {f.connections.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
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

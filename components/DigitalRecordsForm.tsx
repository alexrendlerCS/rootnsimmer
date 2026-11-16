"use client";

import { useState } from "react";
import { addressGuideId, drOrder, recordGuides } from "@/content/digital-records";
import { openEmailDraft } from "@/lib/email";

export function DigitalRecordsForm() {
  const [status, setStatus] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const f = drOrder.form;
  const needsAddress = picked.includes(addressGuideId);

  function toggle(id: string, on: boolean) {
    setPicked((p) => (on ? [...p, id] : p.filter((x) => x !== id)));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (picked.length === 0) {
      setStatus(f.pickOne);
      return;
    }
    const d = new FormData(e.currentTarget);
    const lines = recordGuides
      .filter((g) => picked.includes(g.id))
      .map((g) => `- ${g.title}`)
      .join("\n");
    const address = String(d.get("address") || "").trim();
    openEmailDraft(
      "Digital records request",
      `Hello Kimberly,\n\nI’d like these record guides:\n${lines}${
        address ? `\n\nAddress for the Address Records Starter: ${address}` : ""
      }\n\nName: ${d.get("name")}\nEmail: ${d.get("email")}\n\nPlease reply with availability and prices. I understand nothing is charged until I agree.`,
    );
    setStatus("Your email draft is open. Review it and press send in your email app.");
  }

  return (
    <form className="form-card stack" onSubmit={onSubmit} aria-label="Digital records request">
      <fieldset className="picks">
        <legend>{f.legend}</legend>
        {recordGuides.map((g) => (
          <label key={g.id} className="check">
            <input
              type="checkbox"
              name="guide"
              value={g.id}
              checked={picked.includes(g.id)}
              onChange={(e) => toggle(g.id, e.target.checked)}
            />
            <span>{g.title}</span>
          </label>
        ))}
      </fieldset>
      <label>
        {f.addressLabel}
        <input name="address" autoComplete="street-address" required={needsAddress} />
      </label>
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

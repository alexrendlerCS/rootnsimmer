"use client";

import { useState } from "react";
import { offerings } from "@/content/site";
import { openEmailDraft } from "@/lib/email";
import { useInquiry } from "./InquiryProvider";
import { Modal } from "./Modal";

export function InquiryDialog() {
  const { selections, isOpen, close, setQuantity, remove } = useInquiry();
  const [status, setStatus] = useState("");
  const chosen = offerings.filter((o) => selections[o.id]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = chosen.map((o) => `${selections[o.id]} × ${o.title}`).join("\n");
    openEmailDraft(
      "Root & Simmer: inquiry about offerings",
      `Hello Kimberly,\n\nI would like to talk about these offerings:\n${lines}\n\nName: ${d.get("name")}\nEmail: ${d.get("email")}\n\nAbout my project:\n${d.get("details") || "(not provided)"}\n\nI understand scope and fees will be agreed before work begins.`,
    );
    setStatus("Your email draft is open. Review it and press send in your email app.");
  }

  return (
    <Modal open={isOpen} onClose={close} labelledBy="inquiry-title" className="modal-inquiry">
      <h2 id="inquiry-title">Your inquiry</h2>
      {chosen.length === 0 ? (
        <div className="empty">
          <p>Nothing added yet. Add the offerings you’re curious about and send them to Kimberly as one inquiry.</p>
          <a
            className="button"
            href="#work"
            onClick={() => {
              close();
            }}
          >
            Browse offerings
          </a>
        </div>
      ) : (
        <>
          <ul className="inquiry-list">
            {chosen.map((o) => (
              <li key={o.id}>
                <span className="inquiry-title">{o.title}</span>
                <label className="qty">
                  <span className="sr-only">Quantity of {o.title}</span>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    inputMode="numeric"
                    value={selections[o.id]}
                    onChange={(e) => setQuantity(o.id, Number(e.target.value))}
                  />
                </label>
                <button type="button" className="link-button remove" onClick={() => remove(o.id)}>
                  Remove<span className="sr-only"> {o.title}</span>
                </button>
              </li>
            ))}
          </ul>
          <form className="stack" onSubmit={onSubmit}>
            <p className="fine">No payment is due now. Prices are arranged after you and Kimberly talk.</p>
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
            <label>
              Tell us about your project <span className="optional">(optional)</span>
              <textarea name="details" rows={3} />
            </label>
            <button className="button" type="submit">
              Write my inquiry email
            </button>
            <p className="fine">This opens a draft in your email app with your selections. Nothing is sent until you press send there.</p>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </>
      )}
    </Modal>
  );
}

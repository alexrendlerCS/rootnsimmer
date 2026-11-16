"use client";

import { useState } from "react";
import { openEmailDraft } from "@/lib/email";

/** A button that opens a pre-written email draft, then confirms what happened. */
export function EmailDraftButton({ label, subject, body }: { label: string; subject: string; body: string }) {
  const [status, setStatus] = useState("");

  return (
    <div className="stack">
      <button
        type="button"
        className="button"
        onClick={() => {
          openEmailDraft(subject, body);
          setStatus("Your email draft is open. Review it and press send in your email app.");
        }}
      >
        {label}
      </button>
      <p className="form-status" role="status">
        {status}
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";

/** "Keep reading" for Kimberly's letter: only the label that applies is in the page. */
export function LetterMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="letter-more" onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary>{open ? "Show less" : "Keep reading Kimberly’s story"}</summary>
      {children}
    </details>
  );
}

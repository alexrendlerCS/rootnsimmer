"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { offerings } from "@/content/site";

type Selections = Record<string, number>;

type InquiryContextValue = {
  selections: Selections;
  count: number;
  add: (id: string) => void;
  setQuantity: (id: string, qty: number) => void;
  remove: (id: string) => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  notify: (message: string) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);
const STORAGE_KEY = "rs-selections";
const MAX_QTY = 20;

function readSaved(): Selections {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const clean: Selections = {};
    for (const o of offerings) {
      const q = saved[o.id];
      if (Number.isInteger(q) && q > 0 && q <= MAX_QTY) clean[o.id] = q;
    }
    return clean;
  } catch {
    return {};
  }
}

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [selections, setSelections] = useState<Selections>({});
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; key: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    setSelections(readSaved());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
    } catch {}
  }, [selections, loaded]);

  const notify = useCallback((message: string) => {
    clearTimeout(timer.current);
    setToast({ message, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const add = useCallback(
    (id: string) => {
      setSelections((s) => ({ ...s, [id]: Math.min((s[id] || 0) + 1, MAX_QTY) }));
      const title = offerings.find((o) => o.id === id)?.title ?? "Offering";
      notify(`${title} added to your inquiry`);
    },
    [notify],
  );

  const setQuantity = useCallback((id: string, qty: number) => {
    setSelections((s) => ({ ...s, [id]: Math.max(1, Math.min(MAX_QTY, Math.round(qty) || 1)) }));
  }, []);

  const remove = useCallback((id: string) => {
    setSelections((s) => {
      const next = { ...s };
      delete next[id];
      return next;
    });
  }, []);

  const count = Object.values(selections).reduce((a, b) => a + b, 0);

  return (
    <InquiryContext.Provider
      value={{
        selections,
        count,
        add,
        setQuantity,
        remove,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        notify,
      }}
    >
      {children}
      <div className="toast" role="status" aria-live="polite">
        {toast && (
          <p key={toast.key} className="toast-message">
            {toast.message}
          </p>
        )}
      </div>
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used inside <InquiryProvider>");
  return ctx;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { useInquiry } from "./InquiryProvider";

export function Header() {
  const { count, open } = useInquiry();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="identity" href="/#top" aria-label={`${site.fullName}, home`}>
          <Image src="/oak-mark.jpg" alt="" width={52} height={52} className="identity-mark" priority />
          <span className="identity-name">
            Root <span className="amp">&amp;</span> Simmer
            <small>Hospitality Co.</small>
          </span>
        </Link>

        <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === pathname ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="selections-button" onClick={open} aria-label={`Your inquiry, ${count} selected`}>
            <span className="selections-label">Your inquiry</span>
            <span className="selections-count" data-empty={count === 0}>
              {count}
            </span>
          </button>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { useInquiry } from "./InquiryProvider";

export function Header() {
  const { count, open } = useInquiry();
  const [menuOpen, setMenuOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close the Our Story drop-down on Escape or a click elsewhere.
  useEffect(() => {
    if (!groupOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGroupOpen(false);
        groupRef.current?.querySelector("button")?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!groupRef.current?.contains(e.target as Node)) setGroupOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [groupOpen]);

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
          {nav.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="nav-group"
                ref={groupRef}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setGroupOpen(false);
                }}
              >
                <button
                  type="button"
                  className="nav-group-button"
                  aria-expanded={groupOpen}
                  aria-controls="nav-group-list"
                  aria-current={item.items.some((l) => l.href === pathname) ? "page" : undefined}
                  onClick={() => setGroupOpen((v) => !v)}
                >
                  {item.label}
                  <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <ul id="nav-group-list" className={`nav-group-list ${groupOpen ? "is-open" : ""}`}>
                  {item.items.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={l.href === pathname ? "page" : undefined}
                        onClick={() => {
                          setGroupOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === pathname ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
            ),
          )}
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

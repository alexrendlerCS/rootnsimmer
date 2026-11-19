"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, type NavLink } from "@/content/site";
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
          <Image src="/oak-mark.jpg" alt="Root & Simmer Hospitality Co. live-oak logo, Lincolnville" width={52} height={52} className="identity-mark" priority />
          <span className="identity-name">
            Root <span className="amp">&amp;</span> Simmer
            <small>Hospitality Co.</small>
          </span>
        </Link>

        <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) =>
            item.items ? (
              <NavGroup key={item.label} label={item.label} items={item.items} pathname={pathname} onNavigate={() => setMenuOpen(false)} />
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

/** One drop-down in the top menu (Our Story, Membership). On phones its links show as an indented list. */
function NavGroup({ label, items, pathname, onNavigate }: { label: string; items: NavLink[]; pathname: string; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listId = `nav-group-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;

  // Close on Escape or a click elsewhere.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div
      className="nav-group"
      ref={ref}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="nav-group-button"
        aria-expanded={open}
        aria-controls={listId}
        aria-current={items.some((l) => { const h = l.href.split("#")[0]; return h !== "/" && h === pathname; }) ? "page" : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <ul id={listId} className={`nav-group-list ${open ? "is-open" : ""}`}>
        {items.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={l.href === pathname ? "page" : undefined}
              onClick={() => {
                setOpen(false);
                onNavigate();
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

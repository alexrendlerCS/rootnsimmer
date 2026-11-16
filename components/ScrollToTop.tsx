"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Next.js keeps the scroll position when the new page is "still visible",
 * so a footer link clicked at the bottom of one page opened the next page at
 * its bottom. Start every new page at the top, unless the link points to a
 * section (#something).
 */
export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

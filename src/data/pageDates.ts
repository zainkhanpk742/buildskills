/**
 * Last real content update for pages that are not guides, as YYYY-MM-DD.
 * Update an entry only when the visible content of that page changes, so the
 * sitemap's lastmod stays truthful. Guides use their own `checkedDate`.
 */
export const pageDates: Record<string, string> = {
  "/": "2026-10-07",
  "/learn": "2026-09-30",
  "/questions": "2026-09-30",
  "/tools": "2026-09-30",
  "/resources": "2026-09-30",
  "/projects": "2026-09-30",
  "/about": "2026-10-03",
  "/contact": "2026-10-03",
  "/services": "2026-10-03",
  "/privacy-policy": "2026-09-30",
  "/terms": "2026-09-30",
  "/disclaimer": "2026-09-30",
  "/editorial-policy": "2026-09-30",
  "/learn/seo/what-are-good-backlinks": "2026-10-07",
  "/learn/youtube": "2026-10-02",
  "/learn/x-twitter": "2026-09-30",
};

/** Fallback for guides that do not set `checkedDate` (their last edit). */
export const defaultGuideDate = "2026-09-30";

/** Hub pages without their own entry use the newest of this and their guides. */
export const defaultHubDate = "2026-09-30";

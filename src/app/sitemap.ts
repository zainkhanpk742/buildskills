import type { MetadataRoute } from "next";
import { areas, guidePath, guides, guidesInArea, hubGuides } from "@/data/site";
import { defaultGuideDate, defaultHubDate, pageDates } from "@/data/pageDates";

const SITE = "https://buildskills.com.pk";

function latest(dates: string[]): string {
  return [...dates].sort().pop() ?? defaultHubDate;
}

const LEGAL = new Set(["/privacy-policy", "/terms", "/disclaimer", "/editorial-policy", "/contact"]);

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (LEGAL.has(path)) return 0.3;
  if (path === "/learn" || /^\/learn\/[^/]+$/.test(path)) return 0.8;
  if (path.startsWith("/learn/")) return 0.7;
  return 0.5;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = new Map<string, string>();

  for (const [path, date] of Object.entries(pageDates)) entries.set(path, date);

  for (const area of areas) {
    const inArea = guidesInArea(area.title);
    if (inArea.length === 0) continue;
    const path = `/learn/${area.slug}`;
    const guideDates = inArea.map((guide) => guide.checkedDate ?? defaultGuideDate);
    entries.set(path, latest([pageDates[path] ?? defaultHubDate, ...guideDates]));
  }

  const hubGuideSlugs = new Set(Object.values(hubGuides));
  for (const guide of guides) {
    // Guides shown on a hub share the hub URL; their deeper URL redirects there.
    if (hubGuideSlugs.has(guide.slug)) continue;
    entries.set(guidePath(guide.slug), guide.checkedDate ?? defaultGuideDate);
  }

  return [...entries].map(([path, lastModified]) => ({
    url: path === "/" ? SITE : `${SITE}${path}`,
    lastModified,
    priority: priorityFor(path),
  }));
}

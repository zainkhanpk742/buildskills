import type { MetadataRoute } from "next";
import { areas, guidePath, guides, guidesInArea, hubGuides } from "@/data/site";
import { defaultGuideDate, defaultHubDate, pageDates } from "@/data/pageDates";

const SITE = "https://buildskills.com.pk";

function latest(dates: string[]): string {
  return [...dates].sort().pop() ?? defaultHubDate;
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
  }));
}

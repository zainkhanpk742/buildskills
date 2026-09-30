import type { MetadataRoute } from "next";
import { areas, guides, guidesInArea } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/learn",
    ...areas
      .filter((area) => guidesInArea(area.title).length > 0)
      .map((area) => `/learn/${area.slug}`),
    "/learn/seo/what-are-good-backlinks",
    "/questions",
    "/tools",
    "/resources",
    "/projects",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/editorial-policy",
    ...guides.map((guide) => `/learn/${guide.slug}`),
  ];

  return [...new Set(pages)].map((path) => {
    const guide = guides.find((item) => `/learn/${item.slug}` === path);
    return {
      url: path === "/" ? "https://buildskills.com.pk" : `https://buildskills.com.pk${path}`,
      ...(guide?.checkedDate ? { lastModified: guide.checkedDate } : {}),
    };
  });
}
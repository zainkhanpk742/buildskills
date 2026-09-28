import type { MetadataRoute } from "next";
import { areas, guides, guidesInArea } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/learn",
    ...areas
      .filter((area) => guidesInArea(area.title).length > 0)
      .map((area) => `/learn/${area.slug}`),
    "/learn/make-money-online",
    "/learn/seo/what-are-good-backlinks",
    "/questions",
    "/services",
    "/tools",
    "/resources",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    ...guides.map((guide) => `/learn/${guide.slug}`),
  ];

  return [...new Set(pages)].map((path) => ({
    url: `https://buildskills.com.pk${path}`,
  }));
}
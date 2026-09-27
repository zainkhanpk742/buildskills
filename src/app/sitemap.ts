import type { MetadataRoute } from "next";
import { areas, guides } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    "",
    "/learn",
    "/questions",
    "/services",
    "/tools",
    "/resources",
    "/portfolio",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const areaUrls = areas.map((area) => `/learn/${area.slug}`);
  const guideUrls = guides.map((guide) => `/learn/${guide.slug}`);

  return [...new Set([...staticUrls, ...areaUrls, ...guideUrls])].map((path) => ({
    url: `https://buildskills.com.pk${path}`,
    lastModified: new Date(),
  }));
}

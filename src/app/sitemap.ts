import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "", "/learn", "/learn/websites", "/learn/seo", "/learn/mobile-apps",
    "/learn/databases", "/learn/business-software", "/learn/youtube",
    "/learn/x-twitter", "/learn/make-money-online", "/questions", "/services",
    "/tools", "/resources", "/portfolio", "/about", "/contact",
    "/privacy-policy", "/terms"
  ];
  return urls.map((path) => ({
    url: `https://buildskills.com.pk${path}`,
    lastModified: new Date()
  }));
}
import type { MetadataRoute } from "next";
import { guides } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "", "/learn", "/learn/websites", "/learn/seo", "/learn/mobile-apps",
    "/learn/databases", "/learn/business-software", "/learn/youtube",
    "/learn/x-twitter", "/learn/facebook", "/learn/instagram", "/learn/tiktok", "/learn/linkedin", "/learn/make-money-online", "/questions", "/services",
    "/tools", "/resources", "/portfolio", "/about", "/contact",
    "/learn/websites/what-is-a-website", "/learn/websites/how-websites-work", "/learn/websites/domain-vs-hosting", "/learn/websites/html-css-javascript", "/learn/websites/responsive-web-design", "/learn/websites/website-vs-web-app", "/learn/websites/website-structure", "/learn/websites/business-website", "/learn/websites/website-cost", "/learn/websites/publish-a-website", "/learn/websites/website-maintenance", "/privacy-policy", "/terms"
  ];
  const guideUrls = guides.map((guide) => `/learn/${guide.slug}`);
  const allUrls = [...new Set([...urls, ...guideUrls])];
  return allUrls.map((path) => ({
    url: `https://buildskills.com.pk${path}`,
    lastModified: new Date()
  }));
}
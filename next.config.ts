import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/services/seo", destination: "/learn/seo", permanent: true },
      { source: "/services/mobile-apps", destination: "/learn/mobile-apps", permanent: true },
      { source: "/services/software", destination: "/learn/business-software", permanent: true },
      { source: "/portfolio", destination: "/projects", permanent: true },
      { source: "/learn/make-money-online", destination: "/learn/freelancing/how-to-make-money-online", permanent: true },
      { source: "/learn/ai", destination: "/learn/ai-productivity", permanent: true },
      { source: "/learn/ai/:slug", destination: "/learn/ai-productivity/:slug", permanent: true },
      // Guides shown on their hub page: one public URL each (no duplicate content).
      { source: "/learn/chatgpt-prompts/useful-chatgpt-prompts", destination: "/learn/chatgpt-prompts", statusCode: 301 },
      { source: "/learn/high-paid-skills/highest-paid-skills", destination: "/learn/high-paid-skills", statusCode: 301 },
      { source: "/learn/high-demand-skills-usa/high-demand-skills-in-the-usa", destination: "/learn/high-demand-skills-usa", statusCode: 301 },
      { source: "/learn/high-demand-skills-india/high-demand-skills-in-india", destination: "/learn/high-demand-skills-india", statusCode: 301 },
      { source: "/learn/high-demand-skills-pakistan/high-demand-skills-in-pakistan", destination: "/learn/high-demand-skills-pakistan", statusCode: 301 },
      { source: "/learn/high-demand-skills-uk/high-demand-skills-in-the-uk", destination: "/learn/high-demand-skills-uk", statusCode: 301 },
      { source: "/learn/high-demand-skills-uae/high-demand-skills-in-the-uae", destination: "/learn/high-demand-skills-uae", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        // Build assets and icons are files, not pages: keep them crawlable
        // (CSS/JS/fonts are needed for rendering) but out of the index.
        source: "/_next/static/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/:file(favicon\\.ico|icon\\.png|icon\\.svg|apple-icon\\.png)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        // Search-style URLs such as /?q=... are not separate pages.
        source: "/:path*",
        has: [{ type: "query", key: "q" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
      {
        // The *.vercel.app copies of the site must not be indexed; the custom
        // domain is the only public address. Canonicals already point there.
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
    ];
  },
};

export default nextConfig;
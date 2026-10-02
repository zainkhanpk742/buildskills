import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/services", destination: "/learn", permanent: true },
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
    ];
  },
  async headers() {
    return [
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
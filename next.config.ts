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
      { source: "/learn/make-money-online", destination: "/learn/freelancing/how-to-make-money-online-safely", permanent: true },
      { source: "/learn/ai", destination: "/learn/ai-productivity", permanent: true },
      { source: "/learn/ai/:slug", destination: "/learn/ai-productivity/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
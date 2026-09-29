import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "BuildSkills — Practical digital skills for young people" },
  description:
    "Learn practical digital skills, discover useful tools, and follow clear guides for AI, websites, creative software, online work, and more.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BuildSkills — Practical digital skills for young people",
    description: "Learn practical digital skills, discover useful tools, and follow clear guides.",
    url: "/",
    siteName: "BuildSkills",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}

import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "BuildSkills — Practical digital skills for young people",
  description:
    "Learn practical digital skills, discover useful tools, and follow clear guides for AI, websites, creative software, online work, and more.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}

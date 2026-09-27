import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "BuildSkills \u2014 Learn something useful. Build something real." },
  description:
    "Find a straight answer, follow a learning path, or have the work built. BuildSkills covers websites, SEO, apps, and business software.",
};

export default function Page() {
  return <HomePage />;
}

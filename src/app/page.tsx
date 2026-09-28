import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "BuildSkills — Learn something useful. Build something real." },
  description:
    "Learn about websites, SEO, creator platforms, apps, and business software—or get a practical project built with BuildSkills.",
};

export default function Page() {
  return <HomePage />;
}

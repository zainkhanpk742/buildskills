import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "BuildSkills — Learn digital skills. Build something real." },
  description:
    "Ask a real question, follow a learning path, or have the work built. BuildSkills is a knowledge studio for websites, SEO, apps, and business software.",
};

export default function Page() {
  return <HomePage />;
}

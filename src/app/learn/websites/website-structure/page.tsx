import type { Metadata } from "next";
import { GuideView } from "@/components/library";
import { guideBySlug } from "@/data/site";

const guide = guideBySlug("websites/website-structure")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.summary,
};

export default function Page() {
  return <GuideView slug="websites/website-structure" />;
}

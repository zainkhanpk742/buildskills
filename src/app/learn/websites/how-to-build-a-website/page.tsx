import type { Metadata } from "next";
import { GuideView } from "@/components/library";
import { guideBySlug } from "@/data/site";

const guide = guideBySlug("websites/how-to-build-a-website")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.summary,
};

export default function Page() {
  return <GuideView slug="websites/how-to-build-a-website" />;
}

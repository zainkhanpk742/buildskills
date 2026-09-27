import type { Metadata } from "next";
import { GuideView } from "@/components/library";
import { guideBySlug } from "@/data/site";

const guide = guideBySlug("seo/what-is-seo")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.summary,
};

export default function Page() {
  return <GuideView slug="seo/what-is-seo" />;
}

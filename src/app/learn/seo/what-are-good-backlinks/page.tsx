import type { Metadata } from "next";
import { GuideView } from "@/components/library";
import { guideBySlug } from "@/data/site";

const guide = guideBySlug("seo/what-are-good-backlinks")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.summary,
  alternates: { canonical: "/learn/seo/what-are-good-backlinks" },
};

export default function Page() {
  return <GuideView slug={guide.slug} />;
}

import type { Metadata } from "next";
import { GuideView } from "@/components/library";
import { guideBySlug } from "@/data/site";

const guide = guideBySlug("business-software/software-for-your-business")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.summary,
};

export default function Page() {
  return <GuideView slug="business-software/software-for-your-business" />;
}

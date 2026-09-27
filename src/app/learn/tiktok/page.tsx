import type { Metadata } from "next";
import { AreaView } from "@/components/library";
import { areaBySlug } from "@/data/site";

const area = areaBySlug("tiktok")!;

export const metadata: Metadata = {
  title: area.title,
  description: "Learn TikTok content, short-form video, audience growth and monetization.",
};

export default function Page() {
  return <AreaView slug="tiktok" />;
}

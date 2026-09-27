import type { Metadata } from "next";
import { AreaView } from "@/components/library";
import { areaBySlug } from "@/data/site";

const area = areaBySlug("instagram")!;

export const metadata: Metadata = {
  title: area.title,
  description: "Learn Instagram profiles, content, Reels, Stories, audience growth and monetization.",
};

export default function Page() {
  return <AreaView slug="instagram" />;
}

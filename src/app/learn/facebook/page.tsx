import type { Metadata } from "next";
import { AreaView } from "@/components/library";
import { areaBySlug } from "@/data/site";

const area = areaBySlug("facebook")!;

export const metadata: Metadata = {
  title: area.title,
  description: "Learn Facebook pages, content, audience growth, advertising, leads and monetization.",
};

export default function Page() {
  return <AreaView slug="facebook" />;
}

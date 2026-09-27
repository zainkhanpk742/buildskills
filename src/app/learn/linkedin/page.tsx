import type { Metadata } from "next";
import { AreaView } from "@/components/library";
import { areaBySlug } from "@/data/site";

const area = areaBySlug("linkedin")!;

export const metadata: Metadata = {
  title: area.title,
  description: "Learn LinkedIn profiles, networking, content, jobs, clients and professional growth.",
};

export default function Page() {
  return <AreaView slug="linkedin" />;
}

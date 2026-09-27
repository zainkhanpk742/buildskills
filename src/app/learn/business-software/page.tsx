import type { Metadata } from "next";
import { AreaView } from "@/components/library";
import { areaBySlug } from "@/data/site";

const area = areaBySlug("business-software")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
};

export default function Page() {
  return <AreaView slug="business-software" />;
}

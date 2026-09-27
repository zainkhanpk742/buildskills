import type { Metadata } from "next";
import { QuestionExplorer } from "@/components/home/Interactive";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Questions",
  description: "Start with a real question. SEO, websites, apps, business software, and freelancing — answered as guides you can use.",
};

export default function Page() {
  return (
    <Interior
      kicker="Questions"
      title="Start with the problem in front of you."
      lede="Search engines are full of fragments. These are complete starting points: a direct answer, the field it belongs to, and where to go next."
    >
      <QuestionExplorer />
    </Interior>
  );
}

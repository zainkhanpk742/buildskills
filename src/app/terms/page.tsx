import type { Metadata } from "next";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using BuildSkills educational guides and learning resources.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <Interior kicker="Legal" title="Terms" lede="BuildSkills content is provided for general educational use.">
      <div className="prose">
        <p>Guides are general educational information, not professional, legal, financial, or safety advice. Tools, platform rules, and guidance can change. Check current official information and use your judgment before acting.</p>
        <p>BuildSkills does not promise rankings, revenue, employment, or any particular outcome from using the learning materials. You are responsible for checking whether a tool or workflow is suitable for your needs.</p>
        <p>The writing, the design of the site, and the name BuildSkills belong to BuildSkills. You may use the ideas. You may not republish the pages as your own.</p>
      </div>
    </Interior>
  );
}

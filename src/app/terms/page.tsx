import type { Metadata } from "next";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the BuildSkills library and for studio work, which is scoped separately.",
};

export default function Page() {
  return (
    <Interior kicker="Legal" title="Terms" lede="Guides are educational. Studio work is a separate agreement.">
      <div className="prose">
        <p>The guides are written to be useful. They are not a promise of rankings, revenue, clients, or a particular outcome. Search, software, and markets change. Use the material with judgment.</p>
        <p>Commissioned work — a website, an application, a search program, or anything else — is scoped in its own agreement. Nothing on this site is that agreement.</p>
        <p>The writing, the design of the site, and the name BuildSkills belong to BuildSkills. You may use the ideas. You may not republish the pages as your own.</p>
      </div>
    </Interior>
  );
}

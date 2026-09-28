import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Tools",
  description: "Practical planning resources and learning guides for website and search projects.",
};

const tools = [
  ["Project enquiry", "Describe your goal, current setup, audience, and what a successful result means.", "/contact", "Contact form"],
  ["Search intent", "Understand the task behind a search and choose a page that can answer it.", "/learn/seo/search-intent", "Learning guide"],
  ["Website structure", "Plan the pages and navigation around what visitors need to do.", "/learn/websites/website-structure", "Learning guide"],
];

export default function Page() {
  return (
    <Interior
      kicker="Tools"
      title="Practical resources for the work."
      lede="This page links to useful planning guides and the project enquiry form. It does not claim to offer interactive calculators or generators."
    >
      <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
        {tools.map(([title, detail, href, state], index) => (
          <li key={title}>
            <Link href={href} className="index-row">
              <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="title" style={{ display: "block" }}>{title}</span>
                <span className="meta" style={{ display: "block", marginTop: "0.25rem" }}>{detail}</span>
              </span>
              <span className="kicker plain faint">{state}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Interior>
  );
}

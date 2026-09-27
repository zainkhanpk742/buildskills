import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Tools",
  description: "Small utilities that sit beside the BuildSkills guides. The project brief is available now.",
};

const tools = [
  ["Project brief", "Turn a vague idea into a short, copyable brief.", "/contact", "Ready"],
  ["Search intent notes", "Name the query, the intent, and the page that should answer it.", "/learn/seo", "With the guide"],
  ["Page outline", "Heading, point, proof, and the next action — before any visual design.", "/learn/websites", "With the guide"],
];

export default function Page() {
  return (
    <Interior
      kicker="Tools"
      title="Utilities for the work, not a drawer of gadgets."
      lede="Tools belong next to the guides. The brief builder is live. The others open as each one is actually useful."
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

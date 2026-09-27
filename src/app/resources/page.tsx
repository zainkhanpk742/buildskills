import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/site";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Resources",
  description: "A reading list of BuildSkills guides: SEO, websites, apps, business software, and freelancing.",
};

export default function Page() {
  return (
    <Interior
      kicker="Resources"
      title="Read the guides in an order that builds."
      lede="Start with the question you have. If you want the long path, SEO is the complete sequence."
    >
      <ol className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
        {guides.map((guide, index) => (
          <li key={guide.slug}>
            <Link href={"/learn/" + guide.slug} className="index-row">
              <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="title" style={{ display: "block" }}>{guide.title}</span>
                <span className="meta" style={{ display: "block", marginTop: "0.25rem" }}>{guide.summary}</span>
              </span>
              <span className="meta">{guide.area}</span>
            </Link>
          </li>
        ))}
      </ol>
    </Interior>
  );
}

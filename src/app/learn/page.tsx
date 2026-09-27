import type { Metadata } from "next";
import Link from "next/link";
import { AreaIndex } from "@/components/indexes";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Learn",
  description: "Eleven fields of practical digital work. Start with the problem you have — websites, SEO, apps, software, design, and freelancing.",
};

export default function Page() {
  return (
    <Interior
      kicker="Learn"
      title="The library, arranged by the work."
      lede="Choose a field. Each one holds guides that answer a real question, and a way to keep going when the answer is not enough."
    >
      <div className="stack-8">
        <p className="muted" style={{ fontSize: "0.95rem", maxWidth: "40rem" }}>
          If you already have the question, start there. The SEO path is the fullest example of the order BuildSkills uses everywhere else.
        </p>
        <div className="actions">
          <ButtonLink href="/questions">Browse questions</ButtonLink>
          <ButtonLink href="/learn/seo" variant="secondary">
            SEO path
          </ButtonLink>
        </div>
      </div>
      <div className="stack-12">
        <AreaIndex />
      </div>
      <p className="muted stack-8" style={{ fontSize: "0.875rem" }}>
        Need the work done instead? <Link href="/services" style={{ fontWeight: 500, color: "var(--ink)" }}>See the studio.</Link>
      </p>
    </Interior>
  );
}

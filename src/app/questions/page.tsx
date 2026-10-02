import type { Metadata } from "next";
import Link from "next/link";
import { QuestionExplorer } from "@/components/home/Interactive";
import { Interior } from "@/components/library";
import { listedAreas as areas, featuredQuestions, guideLinks, guidePath, guidesInArea } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Questions and practical answers",
  description: "Browse practical questions and step-by-step guides about AI, websites, SEO, video, photo, design, coding, freelancing, and online work.",
  path: "/questions",
});

export default function Page() {
  return (
    <Interior
      kicker="Questions"
      title="Start with the problem in front of you."
      lede="Search engines are full of fragments. These are complete starting points: a direct answer, the field it belongs to, and where to go next."
    >
      <QuestionExplorer questions={guideLinks(featuredQuestions)} />
      <section className="stack-12" aria-labelledby="browse-questions-title">
        <h2 id="browse-questions-title" className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>Browse questions by topic</h2>
        <div className="stack-8">
          {areas.map((area) => {
            const guides = guidesInArea(area.title);
            if (guides.length === 0) return null;
            return (
              <section key={area.slug} aria-labelledby={`questions-${area.slug}`}>
                <h3 id={`questions-${area.slug}`}>
                  <Link href={`/learn/${area.slug}`}>{area.title}</Link>
                </h3>
                <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
                  {guides.map((guide) => (
                    <li key={guide.slug}>
                      <Link href={guidePath(guide.slug)} className="index-row">
                        <span className="title">{guide.title}</span>
                        <span className="meta">{guide.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
    </Interior>
  );
}

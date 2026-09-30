import type { Metadata } from "next";
import Link from "next/link";
import { AreaIndex } from "@/components/indexes";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";
import { learningPaths } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Learn practical digital skills",
  description: "Explore practical beginner guides for AI, websites, SEO, video and photo editing, freelancing, social platforms, and more.",
  path: "/learn",
});

export default function Page() {
  return (
    <Interior
      kicker="Learn"
      title="The library, organized around what you want to learn."
      lede="Choose a field. Each one holds guides that answer a real question, and a way to keep going when the answer is not enough."
    >
      <div className="stack-8">
        <p className="muted" style={{ fontSize: "0.95rem", maxWidth: "40rem" }}>
          If you already have a question, start there. Follow a topic from the basics to practical steps and related guides.
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
      <section className="stack-12" aria-labelledby="learning-paths-title">
        <div>
          <p className="kicker plain faint">Learning paths</p>
          <h2 id="learning-paths-title" className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>
            Follow a connected route through a skill.
          </h2>
        </div>
        <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
          {learningPaths.map((path, index) => (
            <li key={path.slug}>
              <div className="index-row">
                <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="title" style={{ margin: 0 }}>
                    <Link href={path.href}>{path.title}</Link>
                  </h3>
                  <p className="meta" style={{ margin: "0.35rem 0 0.75rem" }}>{path.description}</p>
                  <ol className="learning-path-steps">
                    {path.steps.map((step) => (
                      <li key={step.href}><Link href={step.href}>{step.title}</Link></li>
                    ))}
                  </ol>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Interior>
  );
}

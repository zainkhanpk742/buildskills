import type { Metadata } from "next";
import Link from "next/link";
import { areas, guideBySlug, guidePath, guidesInArea } from "@/data/site";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Digital learning resources",
  description: "Browse practical learning resources for websites, AI, SEO, creative tools, online work, and digital platforms.",
  path: "/resources",
});

const featuredResources = [
  { title: "Start with websites", slug: "websites/how-to-build-a-website" },
  { title: "Understand SEO", slug: "seo/what-is-seo" },
  { title: "Learn AI basics", slug: "ai-productivity/what-is-generative-ai" },
  { title: "Practice video editing", slug: "video-editing/how-to-edit-a-video" },
  { title: "Explore photo editing", slug: "photo-editing/how-to-edit-photos" },
  { title: "Learn about freelance work", slug: "freelancing/how-to-start-freelancing" },
];

const learningResources = [
  {
    title: "Khan Academy",
    description: "Lessons and practice across academic subjects and computing.",
    href: "https://www.khanacademy.org/",
  },
  {
    title: "freeCodeCamp",
    description: "Interactive coding lessons and learning projects.",
    href: "https://www.freecodecamp.org/learn/",
  },
  {
    title: "MDN Web Docs",
    description: "Reference material and learning guides for web technologies.",
    href: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
  },
  {
    title: "GitHub Skills",
    description: "Guided, practice-based learning for working with GitHub.",
    href: "https://skills.github.com/",
  },
  {
    title: "Google Search Central",
    description: "Official documentation for making sites understandable to Google Search.",
    href: "https://developers.google.com/search/docs",
  },
];

export default function Page() {
  return (
    <Interior
      kicker="Resources"
      title="A useful place to keep learning."
      lede="Start with one clear guide, explore its related topics, then use the learning areas to find what to study next."
    >
      <section aria-labelledby="start-guides">
        <h2 id="start-guides" className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>Start with a practical guide</h2>
        <ul className="index-list" style={{ borderTop: "1px solid var(--line)", marginTop: "1.5rem" }}>
          {featuredResources.map((resource, index) => {
            const guide = guideBySlug(resource.slug);
            if (!guide) return null;
            return (
              <li key={resource.slug}>
                <Link href={guidePath(guide.slug)} className="index-row">
                  <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="title" style={{ display: "block" }}>{resource.title}</span>
                    <span className="meta" style={{ display: "block", marginTop: "0.25rem" }}>{guide.summary}</span>
                  </span>
                  <span className="meta">{guide.area}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="stack-12" aria-labelledby="external-resources">
        <div>
          <h2 id="external-resources" className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>Learning and official documentation</h2>
          <p className="muted" style={{ maxWidth: "42rem" }}>
            These external references are useful starting points. Check each provider&apos;s current access, account, and usage requirements.
          </p>
        </div>
        <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
          {learningResources.map((resource) => (
            <li key={resource.href}>
              <a href={resource.href} target="_blank" rel="noreferrer" className="index-row">
                <span className="title">{resource.title}</span>
                <span className="meta">{resource.description}</span>
                <span className="meta" aria-label="Opens in a new tab">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="stack-12" aria-labelledby="resource-topics">
        <h2 id="resource-topics" className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>Explore by learning area</h2>
        <ul className="index-list" style={{ borderTop: "1px solid var(--line)", marginTop: "1.5rem" }}>
          {areas.map((area) => {
            const guides = guidesInArea(area.title);
            return (
              <li key={area.slug}>
                <Link href={`/learn/${area.slug}`} className="index-row">
                  <span className="title">{area.title}</span>
                  <span className="meta">{guides.length} {guides.length === 1 ? "guide" : "guides"}</span>
                  <span className="meta">{area.summary}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Interior>
  );
}

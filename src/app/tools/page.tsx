import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Digital tools directory",
  description: "Discover AI, design, video, photo, coding, website, productivity, and creator tools through practical learning guides.",
  path: "/tools",
});

const collections = [
  {
    id: "ai-tools",
    title: "All AI tools",
    description: "Explore AI for writing, study, coding, image and video creation, and productivity; compare options by task and privacy needs.",
    examples: "Chat assistants · writing and research · creative tools · coding assistants",
    href: "/learn/ai-productivity/how-to-choose-an-ai-tool",
    guide: "Learn how to choose an AI tool",
  },
  {
    id: "video-tools",
    title: "Video editing",
    description: "Compare mobile and desktop editing workflows by device, export needs, accessibility, and the kind of video you make.",
    examples: "CapCut · DaVinci Resolve · Adobe Premiere Pro",
    href: "/learn/video-editing/best-video-editing-apps",
    guide: "Compare video editing apps",
  },
  {
    id: "photo-tools",
    title: "Photo editing and design",
    description: "Explore image editors and design tools for photo adjustments, layouts, and visual content.",
    examples: "Canva · GIMP · Adobe Photoshop",
    href: "/learn/photo-editing/best-photo-editing-apps",
    guide: "Compare photo editing apps",
  },
  {
    id: "writing-tools",
    title: "Writing and study",
    description: "Use digital tools to practice, organize ideas, and improve drafts while keeping your own judgment central.",
    examples: "AI study workflows · writing prompts · revision practice",
    href: "/learn/ai-productivity/how-to-use-ai-for-studying",
    guide: "Learn about AI for studying",
  },
  {
    id: "website-coding",
    title: "Website and coding",
    description: "Understand website fundamentals, publishing, and how common web technologies fit together.",
    examples: "HTML · CSS · JavaScript · GitHub · Vercel",
    href: "/learn/websites/html-css-javascript",
    guide: "Learn web development basics",
  },
  {
    id: "productivity-tools",
    title: "Productivity and collaboration",
    description: "Choose tools around the task, the people involved, and the information that needs to be shared.",
    examples: "Notes · project planning · team collaboration",
    href: "/learn/ai-productivity",
    guide: "Explore productivity learning",
  },
  {
    id: "creator-platforms",
    title: "Creator platforms",
    description: "Learn the basics of creating, publishing, and reviewing content on common social platforms.",
    examples: "YouTube · Instagram · TikTok · LinkedIn",
    href: "/learn/youtube",
    guide: "Explore creator platform guides",
  },
  {
    id: "learning-platforms",
    title: "Learning platforms",
    description: "Explore established learning and documentation resources, then choose materials that match your level and goals.",
    examples: "Khan Academy · freeCodeCamp · MDN Web Docs",
    href: "/resources",
    guide: "Browse learning resources",
  },
  {
    id: "freelance-platforms",
    title: "Freelancing platforms",
    description: "Learn how to evaluate marketplace rules, profiles, payments, and safety before using a work platform.",
    examples: "Upwork · Fiverr · Freelancer · LinkedIn",
    href: "/learn/freelancing",
    guide: "Explore freelancing guides",
  },
  {
    id: "business-software",
    title: "Business software",
    description: "Learn to compare software around the workflow, people, data, and privacy requirements it needs to support.",
    examples: "Project planning · collaboration · databases · automation",
    href: "/learn/business-software",
    guide: "Learn about business software",
  },
];

export default function Page() {
  return (
    <Interior
      kicker="Tools"
      title="Explore tools by the work you want to do."
      lede="A practical directory to help you understand common digital tools, compare them against your needs, and learn the skills around them."
    >
      <div className="stack-8">
        <p className="muted" style={{ maxWidth: "42rem" }}>
          These examples are starting points, not endorsements or universal rankings. Features, availability, and pricing can change; check current details with the tool provider before choosing.
        </p>
        <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
          {collections.map((collection, index) => (
            <li key={collection.id} id={collection.id}>
              <div className="index-row">
                <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="title" style={{ margin: 0 }}>{collection.title}</h2>
                  <p className="meta" style={{ margin: "0.35rem 0" }}>{collection.description}</p>
                  <p className="meta" style={{ margin: "0.35rem 0" }}>{collection.examples}</p>
                  <Link href={collection.href} className="text-link">{collection.guide} →</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Interior>
  );
}

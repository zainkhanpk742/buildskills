import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Digital skills practice projects",
  description: "Try small, self-directed projects to practice website, coding, AI, design, and creator skills.",
  path: "/projects",
});

const practiceProjects = [
  {
    title: "Make a one-page portfolio",
    detail: "Plan a clear introduction, add two honest examples of your work, and publish a page that works on mobile.",
    href: "/learn/websites/how-to-build-a-website",
  },
  {
    title: "Create a short edited video",
    detail: "Choose a simple story, edit a few clips, add reviewed captions, and export a version you can watch on a phone.",
    href: "/learn/video-editing/how-to-edit-a-video",
  },
  {
    title: "Design a readable thumbnail",
    detail: "Build a small graphic with one focal point, clear contrast, and text that remains readable at a reduced size.",
    href: "/learn/photo-editing/how-to-make-a-thumbnail",
  },
  {
    title: "Build an AI-assisted study quiz",
    detail: "Use your own notes to draft practice questions, verify the answers, and then test yourself without the tool.",
    href: "/learn/ai-productivity/how-to-use-ai-for-studying",
  },
];

export default function Page() {
  return (
    <Interior
      kicker="Practice projects"
      title="Learn by making something small."
      lede="These are self-directed practice exercises, not case studies or promised outcomes. Choose one, follow its guide, and adapt the scope to your time and experience."
    >
      <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
        {practiceProjects.map((project, index) => (
          <li key={project.title}>
            <div className="index-row">
              <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="title" style={{ margin: 0 }}>{project.title}</h2>
                <p className="meta" style={{ margin: "0.35rem 0" }}>{project.detail}</p>
                <Link href={project.href} className="text-link">Open the learning guide →</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Interior>
  );
}

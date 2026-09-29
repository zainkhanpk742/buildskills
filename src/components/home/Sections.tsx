import Link from "next/link";
import {
  areas,
  featuredQuestions,
  guideBySlug,
  pathSteps,
  principles,
} from "@/data/site";
import { AreaIndex } from "@/components/indexes";
import { Arrow, ButtonLink, Kicker } from "@/components/ui";

function readingMinutes(parts: string[]) {
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const levels: Record<string, string> = {
  "seo/what-is-seo": "Beginner",
  "websites/how-to-build-a-website": "Practical",
  "seo/how-to-get-website-on-google": "Practical",
  "seo/how-to-increase-website-traffic": "Practical",
  "mobile-apps/how-to-build-a-mobile-app": "Beginner",
  "business-software/software-for-your-business": "Practical",
  "freelancing/how-to-start-freelancing": "Beginner",
};

const journey = [
  { n: "01", title: "Question", body: "Arrive with the problem, in your own words." },
  { n: "02", title: "Answer", body: "Start with a direct explanation and useful context." },
  { n: "03", title: "Learn", body: "Follow the skill in an order that builds." },
  { n: "04", title: "Explore", body: "Discover tools and related topics for the task." },
  { n: "05", title: "Practice", body: "Try the steps with a small, achievable exercise." },
  { n: "06", title: "Continue", body: "Follow the next guide and keep building confidence." },
];

export function KnowledgeMap() {
  const stations = [
    { n: "01", kicker: "Question", title: "What is SEO?", detail: "A direct answer." },
    { n: "02", kicker: "Path", title: "Eight lessons", detail: "Fundamentals through results." },
    { n: "03", kicker: "Practice", title: "Put it to use.", detail: "Apply the idea to a real page." },
  ];
  return (
    <div className="map" aria-hidden="true">
      <p className="map-label">One visit</p>
      <ol className="map-steps">
        {stations.map((station) => (
          <li key={station.n}>
            <span className="node">{station.n}</span>
            <div>
              <p>{station.kicker}</p>
              <strong>{station.title}</strong>
              <span>{station.detail}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section id="idea" className="section-pad band-sheet" aria-labelledby="idea-title">
      <div className="page-wrap">
        <div className="section-intro">
          <Kicker>What BuildSkills is</Kicker>
          <h2 id="idea-title" className="display-section balance">
            A question can become a skill.
          </h2>
          <p className="lede pretty">
            Find an answer, learn the skill behind it, and practice it with a useful project. One connected path from curiosity to confidence.
          </p>
        </div>
        <ol className="journey">
          {journey.map((step) => (
            <li key={step.n}>
              <span className="node">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AreaGrid() {
  return (
    <section id="fields" className="section-pad" aria-labelledby="fields-title">
      <div className="page-wrap">
        <div className="section-head">
          <div>
            <Kicker>Learning areas</Kicker>
            <h2 id="fields-title" className="display-section balance">
              {areas.length} learning areas. Pick the problem you have.
            </h2>
          </div>
          <p className="lede">
            Start with a real question. Each learning area has a practical guide, with more connected lessons to help you keep going.
          </p>
        </div>
        <AreaIndex />
      </div>
    </section>
  );
}

export function QuestionCards() {
  return (
    <section id="questions" className="section-pad band-mist" aria-labelledby="questions-title">
      <div className="page-wrap">
        <div className="section-head">
          <div>
            <Kicker>Popular questions</Kicker>
            <h2 id="questions-title" className="display-section balance">
              Start with the problem in front of you.
            </h2>
          </div>
          <p className="lede">Choose a practical question and follow its guide to a useful next step.</p>
        </div>
        <ul className="q-cards">
          {featuredQuestions.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const sectionText = guide.sections?.flatMap((section) => [
              section.heading,
              ...section.paragraphs,
              ...(section.bullets ?? []),
            ]) ?? [];
            const minutes = readingMinutes([guide.summary, ...guide.paragraphs, ...sectionText]);
            return (
              <li key={slug}>
                <Link href={`/learn/${guide.slug}`} className="q-card">
                  <span className="chip">Question</span>
                  <span className="q-title">{guide.title}</span>
                  <span className="q-summary">{guide.summary}</span>
                  <span className="q-meta">
                    <span>{guide.area}</span>
                    <span>{levels[slug] ?? "Guide"}</span>
                    <span>{minutes} min</span>
                  </span>
                  <span className="q-card-action">Read the guide <Arrow /></span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="more-link">
          <Link href="/questions" className="text-link">
            All questions <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}

export function PathRail() {
  return (
    <section id="path" className="section-pad band-navy" aria-labelledby="path-title">
      <div className="page-wrap path-layout">
        <div className="sticky-col">
          <Kicker tone="dark">Featured path</Kicker>
          <h2 id="path-title" className="display-section balance">
            Search, taught as a course.
          </h2>
          <p className="lede on-muted pretty">
            Eight lessons. From what SEO is, to whether the right people arrived. Not a pile of unrelated posts.
          </p>
          <dl className="path-facts">
            <div>
              <dt>Lessons</dt>
              <dd>8</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>Beginner to practical</dd>
            </div>
          </dl>
          <div className="actions">
            <ButtonLink href="/learn/seo" variant="inverse">
              Start learning
            </ButtonLink>
          </div>
        </div>
        <ol className="course">
          {pathSteps.map((step) => (
            <li key={step.n}>
              <span className="node">{step.n}</span>
              <div>
                <h3>
                  <Link href={step.href}>{step.title}</Link>
                </h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ToolDiscovery() {
  const collections = [
    ["AI tools", "Understand AI assistants, image tools, and safe ways to use them.", "/tools#ai-tools"],
    ["Video editing", "Compare editing workflows and learn the basics of a clear cut.", "/learn/video-editing"],
    ["Photo editing", "Explore image editing, design basics, and thumbnail skills.", "/learn/photo-editing"],
    ["Learning resources", "Find practical guides and places to keep learning.", "/resources"],
  ];
  return (
    <section id="discover" className="section-pad" aria-labelledby="discover-title">
      <div className="page-wrap">
        <div className="section-head">
          <div>
            <Kicker>Explore tools and skills</Kicker>
            <h2 id="discover-title" className="display-section balance">Find a useful place to start.</h2>
          </div>
          <p className="lede">Discover practical learning collections by the kind of work you want to do.</p>
        </div>
        <ul className="svc-grid">
          {collections.map(([title, summary, href], index) => (
            <li key={href} className="svc">
              <span className="area-num">{String(index + 1).padStart(2, "0")}</span>
              <h3><Link href={href}>{title}</Link></h3>
              <p>{summary}</p>
              <Link href={href} className="text-link">Explore guides <Arrow /></Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PrincipleGrid() {
  return (
    <section id="why" className="section-pad" aria-labelledby="why-title">
      <div className="page-wrap">
        <div className="section-intro">
          <Kicker>Why BuildSkills</Kicker>
          <h2 id="why-title" className="display-mid balance">
            Practical enough to use the same day.
          </h2>
        </div>
        <ul className="why-grid">
          {principles.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="finale" aria-labelledby="close-title">
      <div className="page-wrap">
        <h2 id="close-title" className="display-close balance">
          <span>Have a question? Learn it.</span>
          <span className="italic">Have a skill? Practice it.</span>
        </h2>
        <div className="actions">
          <ButtonLink href="/learn" variant="inverse">
            Explore learning
          </ButtonLink>
          <ButtonLink href="/questions" variant="ghost">
            Browse questions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

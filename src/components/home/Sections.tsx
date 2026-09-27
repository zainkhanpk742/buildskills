import Link from "next/link";
import {
  featuredQuestions,
  guideBySlug,
  pathSteps,
  principles,
} from "@/data/site";
import { AreaIndex, ServiceIndex } from "@/components/indexes";
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
  { n: "02", title: "Answer", body: "Read a direct guide, not a pile of fragments." },
  { n: "03", title: "Learn", body: "Follow the skill in an order that builds." },
  { n: "04", title: "Explore", body: "Move into the field around that question." },
  { n: "05", title: "Build", body: "Turn it into a page, a product, or a system." },
  { n: "06", title: "Hire", body: "Or have the studio do the work with you." },
];

export type ProjectSlot = {
  title: string;
  category: string;
  summary: string;
  tags: readonly string[];
  href: string;
  image?: string;
};

export const portfolioSlots: ProjectSlot[] = [
  {
    title: "Business websites",
    category: "Website development",
    summary: "A public site with one job: say what you do, who it is for, and how to begin.",
    tags: ["Websites", "Content"],
    href: "/services#website-development",
  },
  {
    title: "Operating software",
    category: "Business software",
    summary: "A tool that follows a workflow the team already has, instead of the other way around.",
    tags: ["Software", "Databases"],
    href: "/services#business-software",
  },
  {
    title: "Search programs",
    category: "SEO",
    summary: "Pages matched to real queries, structured so they can be found and used.",
    tags: ["SEO", "Content"],
    href: "/services#seo",
  },
];

export function KnowledgeMap() {
  return (
    <div className="map" aria-hidden="true">
      <svg className="map-line" viewBox="0 0 400 460" preserveAspectRatio="none">
        <path d="M110 100 C 190 130, 250 170, 290 220 S 210 340, 130 400" />
      </svg>
      <article className="map-card map-a">
        <p className="chip">Question</p>
        <h3>What is SEO?</h3>
        <p>A direct answer, then the next lesson.</p>
      </article>
      <article className="map-card map-b">
        <p className="chip">Path</p>
        <ol>
          <li>
            <span>01</span> Fundamentals
          </li>
          <li className="on">
            <span>02</span> How search works
          </li>
          <li>
            <span>03</span> Search intent
          </li>
        </ol>
      </article>
      <article className="map-card map-c">
        <p className="chip">Studio</p>
        <h3>Or have it built.</h3>
        <p>Same subject. Finished work.</p>
      </article>
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
            A question can become the work.
          </h2>
          <p className="lede pretty">
            Find an answer, learn the skill behind it, and hire the studio when you want the thing made. One progression, not four separate products.
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
              Eleven fields. Pick the problem you have.
            </h2>
          </div>
          <p className="lede">
            Each field is a shelf. The guides on it answer a real question, and the studio can build the same kind of work.
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
          <p className="lede">These are the questions people actually bring. Each one opens a guide you can use.</p>
        </div>
        <ul className="q-cards">
          {featuredQuestions.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const minutes = readingMinutes([guide.summary, ...guide.paragraphs]);
            return (
              <li key={slug}>
                <Link href={`/learn/${guide.slug}`} className="q-card">
                  <span className="chip">Question</span>
                  <span className="q-title">{guide.title}</span>
                  <span className="q-meta">
                    <span>{guide.area}</span>
                    <span>{levels[slug] ?? "Guide"}</span>
                    <span>{minutes} min</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
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

export function ServiceGrid() {
  return (
    <section id="studio" className="section-pad" aria-labelledby="studio-title">
      <div className="page-wrap">
        <div className="section-head">
          <div>
            <Kicker>Studio</Kicker>
            <h2 id="studio-title" className="display-section balance">
              Learn it yourself.
              <span className="italic" style={{ display: "block" }}>
                Or have us build it.
              </span>
            </h2>
          </div>
          <p className="lede">
            The same subjects, practiced as client work. Scoped, quiet, and finished. A studio, not a marketplace of strangers.
          </p>
        </div>
        <ServiceIndex />
      </div>
    </section>
  );
}

export function ProjectBoard({ items = portfolioSlots }: { items?: readonly ProjectSlot[] }) {
  return (
    <ul className="work-cards">
      {items.map((item) => (
        <li key={item.title} className="work-card">
          {item.image ? (
            <div className="shot">
              <img src={item.image} alt="" />
            </div>
          ) : (
            <div className="shot shot-empty">
              <span>Project image</span>
              <small>This frame is waiting for a real screenshot.</small>
            </div>
          )}
          <div className="work-body">
            <p className="chip">{item.category}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <ul className="tags">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <Link href={item.href} className="text-link">
              See the service <Arrow />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="section-pad band-sheet" aria-labelledby="work-title">
      <div className="page-wrap">
        <div className="section-head">
          <div>
            <Kicker>Work</Kicker>
            <h2 id="work-title" className="display-section balance">
              Places for real projects.
            </h2>
          </div>
          <p className="lede">
            Websites, software, and search programs. The frames are empty on purpose until a finished piece of work can sit in them.
          </p>
        </div>
        <ProjectBoard />
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
          <span className="italic">Have a project? Build it.</span>
        </h2>
        <div className="actions">
          <ButtonLink href="/learn" variant="inverse">
            Explore learning
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Start a project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

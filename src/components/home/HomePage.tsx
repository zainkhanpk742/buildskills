import Link from "next/link";
import type { ReactNode } from "react";
import { method, principles } from "@/data/site";
import { AreaIndex, ServiceIndex } from "@/components/indexes";
import { ButtonLink, Kicker } from "@/components/ui";
import { PathList, QuestionExplorer, SearchIndex } from "@/components/home/Interactive";

function WebsiteSpecimen() {
  return (
    <div className="frame">
      <p className="kicker plain tag">Specimen</p>
      <div className="sheet">
        <div className="chrome">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span>site / home</span>
        </div>
        <div className="sheet-body">
          <p className="kicker">A public website</p>
          <h3>Be found. Be understood.</h3>
          <div className="rules">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function SoftwareSpecimen() {
  const rows = ["Intake", "Review", "Assign", "Deliver"];
  return (
    <div className="frame">
      <p className="kicker plain tag">Specimen</p>
      <div className="ui">
        <div className="rail">
          <p className="kicker plain" style={{ color: "var(--on-dark-muted)" }}>
            Work
          </p>
          <ul>
            <li className="on">Today</li>
            <li>Queue</li>
            <li>Archive</li>
          </ul>
        </div>
        <div className="mainpane">
          <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 500 }}>Open jobs</p>
          <ul className="jobs">
            {rows.map((row, index) => (
              <li key={row}>
                <span>{row}</span>
                <span className="tabular">0{index + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SearchSpecimen() {
  const rows = [
    ["what is seo", "Definition", "Guide"],
    ["website on google", "Task", "Checklist"],
    ["increase traffic", "Strategy", "Path"],
    ["business software", "Commercial", "Page"],
  ];
  return (
    <div className="frame">
      <p className="kicker plain tag">Specimen</p>
      <div className="sheet">
        <div className="table-head">
          <span>Query</span>
          <span>Intent</span>
          <span>Page</span>
        </div>
        {rows.map((row) => (
          <div className="table-row" key={row[0]}>
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Project({
  specimen,
  index,
  title,
  meta,
  summary,
  href,
}: {
  specimen: ReactNode;
  index: string;
  title: string;
  meta: string;
  summary: string;
  href: string;
}) {
  return (
    <article className="project">
      {specimen}
      <div className="project-top">
        <h3>{title}</h3>
        <span className="kicker plain faint">{index}</span>
      </div>
      <p className="kind">{meta}</p>
      <p className="muted" style={{ fontSize: "0.875rem", maxWidth: "28rem" }}>
        {summary}
      </p>
      <Link href={href} className="search-submit">
        View in the studio <span style={{ display: "inline-flex" }}>→</span>
      </Link>
    </article>
  );
}

export function HomePage() {
  return (
    <main id="content">
      <section className="band" aria-labelledby="hero-title">
        <div className="page-wrap" style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}>
          <div className="hero-grid">
            <h1 id="hero-title" className="display balance">
              <span style={{ display: "block" }}>Learn digital skills.</span>
              <span className="italic" style={{ display: "block", marginTop: "0.25rem" }}>
                Build something real.
              </span>
            </h1>
            <div>
              <p className="lede pretty">
                A knowledge studio for practical digital work. Come with a real question. Leave with an answer, a path, or a project.
              </p>
              <div className="actions">
                <ButtonLink href="/learn">Explore BuildSkills</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Start a project
                </ButtonLink>
              </div>
            </div>
          </div>
          <SearchIndex />
        </div>
      </section>

      <section id="idea" className="section-pad" aria-labelledby="idea-title">
        <div className="page-wrap">
          <div className="max-3">
            <Kicker>The idea</Kicker>
            <h2 id="idea-title" className="display-section balance stack-4">
              Four moves. That is the whole studio.
            </h2>
            <p className="lede pretty stack-5">
              People arrive with a problem, not a curriculum. BuildSkills answers the question, teaches the skill behind it, and can build the work when learning is not the goal.
            </p>
          </div>
          <ol className="method">
            {method.map((step) => (
              <li key={step.n} className="method-item">
                <p className="num tabular" style={{ margin: 0 }}>
                  {step.n}
                </p>
                <h3>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="questions" className="section-pad band-soft" aria-labelledby="questions-title">
        <div className="page-wrap">
          <div className="max-3" style={{ marginBottom: "3rem" }}>
            <Kicker>Questions</Kicker>
            <h2 id="questions-title" className="display-section balance stack-4">
              Start with a question.
            </h2>
            <p className="lede pretty stack-5">
              These are the problems people actually bring. Each one opens a guide, and the guide sits inside a field you can keep following.
            </p>
          </div>
          <QuestionExplorer />
        </div>
      </section>

      <section id="fields" className="section-pad" aria-labelledby="fields-title">
        <div className="page-wrap split">
          <div className="sticky-col">
            <Kicker>Fields</Kicker>
            <h2 id="fields-title" className="display-section balance stack-4">
              Eleven areas. One way through.
            </h2>
            <p className="lede pretty stack-5">
              Pick the problem you have. The field is only the shelf it sits on. The order is always the same: question, skill, work.
            </p>
          </div>
          <AreaIndex />
        </div>
      </section>

      <section id="path" className="section-pad" style={{ borderTop: "1px solid var(--line)" }} aria-labelledby="path-title">
        <div className="page-wrap split even">
          <div className="sticky-col">
            <Kicker>Featured path</Kicker>
            <h2 id="path-title" className="display-section balance stack-4">
              Search, in the order it matters.
            </h2>
            <p className="lede pretty stack-5">
              Eight lessons. From what SEO is, to whether the right people arrived. Not a pile of unrelated posts.
            </p>
            <div className="actions">
              <ButtonLink href="/learn/seo">Open the SEO path</ButtonLink>
            </div>
          </div>
          <PathList />
        </div>
      </section>

      <section id="studio" className="section-pad band-dark" aria-labelledby="studio-title">
        <div className="page-wrap">
          <div className="split even" style={{ alignItems: "end" }}>
            <div>
              <p className="kicker muted-dark">Studio</p>
              <h2 id="studio-title" className="display-section balance stack-4">
                Learn it yourself.
                <span className="italic" style={{ display: "block", marginTop: "0.25rem" }}>
                  Or let us build it for you.
                </span>
              </h2>
            </div>
            <p className="lede on-muted pretty">
              The same subjects, practiced as client work. Websites, software, search, and the pieces around them — scoped, quiet, and finished.
            </p>
          </div>
          <div className="stack-12">
            <ServiceIndex dark />
          </div>
        </div>
      </section>

      <section id="work" className="section-pad" aria-labelledby="work-title">
        <div className="page-wrap">
          <div className="max-3">
            <Kicker>Work</Kicker>
            <h2 id="work-title" className="display-section balance stack-4">
              What the studio makes.
            </h2>
            <p className="lede pretty stack-5">
              Websites with a job. Software that follows the work. Search programs built around real queries.
            </p>
          </div>
          <div className="work-grid">
            <Project
              specimen={<WebsiteSpecimen />}
              index="01"
              title="Business websites"
              meta="Website development"
              summary="A public site with one job: say what you do, who it is for, and how to begin."
              href="/services#website-development"
            />
            <div className="work-side">
              <Project
                specimen={<SoftwareSpecimen />}
                index="02"
                title="Operating software"
                meta="Business software"
                summary="A tool that follows the workflow you already have, instead of asking the team to follow the tool."
                href="/services#business-software"
              />
              <Project
                specimen={<SearchSpecimen />}
                index="03"
                title="Search programs"
                meta="SEO"
                summary="Pages matched to real queries, structured so they can be found and used."
                href="/services#seo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section-pad" style={{ borderTop: "1px solid var(--line)" }} aria-labelledby="why-title">
        <div className="page-wrap">
          <Kicker>Why BuildSkills</Kicker>
          <h2 id="why-title" className="display-section balance stack-4 max-3">
            Practical. Clear. Useful. Connected.
          </h2>
          <dl className="principles">
            {principles.map((item) => (
              <div key={item.title} className="principle">
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band-dark" aria-labelledby="close-title">
        <div className="page-wrap section-pad">
          <h2 id="close-title" className="display-close balance" style={{ maxWidth: "52rem" }}>
            <span style={{ display: "block" }}>Have something you want to learn?</span>
            <span className="italic" style={{ display: "block", marginTop: "0.25rem" }}>
              Have something you want to build?
            </span>
          </h2>
          <div className="actions" style={{ marginTop: "2.5rem" }}>
            <ButtonLink href="/learn" variant="inverse">
              Explore BuildSkills
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Start a project
            </ButtonLink>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BuildSkills",
            url: "https://buildskills.com.pk/",
            description:
              "A knowledge studio for practical digital work. Ask a real question, follow a learning path, or have the work built.",
          }),
        }}
      />
    </main>
  );
}

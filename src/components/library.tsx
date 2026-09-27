import Link from "next/link";
import type { ReactNode } from "react";
import { areaBySlug, areas, guideBySlug, guidesInArea, pathSteps } from "@/data/site";
import { Kicker } from "@/components/ui";

export function Interior({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <main id="content">
      <header className="page-head">
        <div className="page-wrap">
          <Kicker>{kicker}</Kicker>
          <h1 className="display-section balance stack-4 max-3">{title}</h1>
          <p className="lede pretty stack-5">{lede}</p>
        </div>
      </header>
      {children ? <div className="page-wrap section-pad">{children}</div> : null}
    </main>
  );
}

export function GuideView({ slug }: { slug: string }) {
  const guide = guideBySlug(slug);
  if (!guide) return null;
  const field = areas.find((item) => item.title === guide.area);
  const siblings = guidesInArea(guide.area).filter((item) => item.slug !== guide.slug);
  return (
    <main id="content">
      <article>
        <header className="page-head">
          <div className="page-wrap">
            <p className="kicker plain" style={{ color: "var(--signal)" }}>
              {guide.area}
            </p>
            <h1 className="display-section balance stack-4 max-3">{guide.title}</h1>
            <p className="lede pretty stack-5">{guide.summary}</p>
          </div>
        </header>
        <div className="page-wrap article-grid section-pad">
          <div className="prose">
            {guide.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <div className="continue">
              <p className="kicker plain faint">Continue</p>
              <Link href={guide.next.href}>{guide.next.label}</Link>
            </div>
          </div>
          <aside>
            <p className="kicker plain faint">Also in {guide.area}</p>
            <ul className="index-list" style={{ borderTop: "1px solid var(--line)", marginTop: "1rem" }}>
              {siblings.length === 0 ? (
                <li className="index-row">
                  <span className="meta">More guides in this field are still being written.</span>
                </li>
              ) : (
                siblings.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/learn/${item.slug}`} className="index-row">
                      <span className="title">{item.title}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
            {field ? (
              <Link href={`/learn/${field.slug}`} className="search-submit stack-5" style={{ color: "var(--signal)" }}>
                All of {guide.area}
              </Link>
            ) : null}
          </aside>
        </div>
      </article>
    </main>
  );
}

export function AreaView({ slug }: { slug: string }) {
  const area = areaBySlug(slug);
  if (!area) return null;
  const related = guidesInArea(area.title);
  const isSeo = area.slug === "seo";
  return (
    <main id="content">
      <header className="page-head">
        <div className="page-wrap">
          <p className="kicker plain" style={{ color: "var(--signal)" }}>
            Field
          </p>
          <h1 className="display-section balance stack-4">{area.title}</h1>
          <p className="lede pretty stack-5">{area.description}</p>
        </div>
      </header>
      <div className="page-wrap area-grid section-pad">
        <div>
          <h2 className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>
            Guides
          </h2>
          {related.length === 0 ? (
            <p className="muted stack-4" style={{ maxWidth: "36rem" }}>
              Guides for {area.title} are being written in the same form as the SEO and website pieces: a real question, a direct answer, a next step.
            </p>
          ) : (
            <ul className="index-list" style={{ borderTop: "1px solid var(--line)", marginTop: "1.5rem" }}>
              {related.map((guide, index) => (
                <li key={guide.slug}>
                  <Link href={`/learn/${guide.slug}`} className="index-row">
                    <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="title" style={{ display: "block" }}>
                        {guide.title}
                      </span>
                      <span className="meta" style={{ display: "block", marginTop: "0.25rem" }}>
                        {guide.summary}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isSeo ? (
          <div>
            <h2 className="serif" style={{ fontSize: "1.875rem", margin: 0 }}>
              The path
            </h2>
            <ol className="index-list" style={{ borderTop: "1px solid var(--line)", marginTop: "1.5rem" }}>
              {pathSteps.map((step) => (
                <li key={step.n} className="index-row" style={{ display: "grid" }}>
                  <span className="num tabular">{step.n}</span>
                  <span>
                    <Link href={step.href} className="title">
                      {step.title}
                    </Link>
                    <span className="meta" style={{ display: "block", marginTop: "0.25rem" }}>
                      {step.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <aside>
            <p className="muted" style={{ fontSize: "0.875rem" }}>
              When the learning should become a finished piece of work, the studio takes the same subject and builds it.
            </p>
            <Link href="/services" className="search-submit stack-4">
              See services
            </Link>
          </aside>
        )}
      </div>
    </main>
  );
}

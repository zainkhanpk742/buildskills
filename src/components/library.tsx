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
  const related = (guide.related ?? [])
    .map((relatedSlug) => guideBySlug(relatedSlug))
    .filter((item) => item && item.slug !== guide.slug);
  const readingMinutes = guide.estimatedMinutes ??
    Math.max(1, Math.ceil(
      [
        guide.summary,
        ...guide.paragraphs,
        ...(guide.sections ?? []).flatMap((section) => [
          section.heading,
          ...section.paragraphs,
          ...(section.bullets ?? []),
        ]),
      ].join(" ").trim().split(/\s+/).filter(Boolean).length / 200,
    ));
  const pageUrl = `https://buildskills.com.pk/learn/${guide.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.summary,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      articleSection: guide.area,
      keywords: guide.topics,
      isAccessibleForFree: true,
      ...(guide.checkedDate ? { dateModified: guide.checkedDate } : {}),
      author: {
        "@type": "Organization",
        name: "BuildSkills",
        url: "https://buildskills.com.pk",
      },
      publisher: {
        "@type": "Organization",
        name: "BuildSkills",
        url: "https://buildskills.com.pk",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://buildskills.com.pk/" },
        { "@type": "ListItem", position: 2, name: "Learn", item: "https://buildskills.com.pk/learn" },
        { "@type": "ListItem", position: 3, name: guide.area, item: `https://buildskills.com.pk/learn/${field?.slug ?? guide.slug.split("/")[0]}` },
        { "@type": "ListItem", position: 4, name: guide.title, item: pageUrl },
      ],
    },
  ];
  return (
    <main id="content">
      <article>
        <header className="page-head">
          <div className="page-wrap">
            <nav aria-label="Breadcrumb" className="article-breadcrumb">
              <Link href="/learn">Learn</Link>
              <span aria-hidden="true"> / </span>
              {field ? <Link href={`/learn/${field.slug}`}>{guide.area}</Link> : <span>{guide.area}</span>}
            </nav>
            <p className="kicker plain" style={{ color: "var(--signal)" }}>
              {guide.area}
            </p>
            <h1 className="display-section balance stack-4 max-3">{guide.title}</h1>
            <p className="lede pretty stack-5">{guide.summary}</p>
            <p className="article-meta">
              BuildSkills Editorial Team <span aria-hidden="true">·</span> {guide.difficulty ?? "Practical guide"} <span aria-hidden="true">·</span> {readingMinutes} min read
              {guide.checkedDate ? <> <span aria-hidden="true">·</span> Updated {guide.checkedDate}</> : null}
            </p>
          </div>
        </header>
        <div className="page-wrap article-grid section-pad">
          <div className="prose">
            {guide.sections?.length
              ? guide.sections.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                    {section.bullets?.length ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))
              : guide.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
            {guide.sources?.length ? (
              <section className="article-sources" aria-labelledby="sources-title">
                <h2 id="sources-title">Sources and further reading</h2>
                <ul>
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            {guide.tools?.length ? (
              <section aria-labelledby="tools-title">
                <h2 id="tools-title">Tools mentioned</h2>
                <p>{guide.tools.join(", ")}. Features and availability can change; check each provider's official information before choosing a tool.</p>
              </section>
            ) : null}
            {guide.faqs?.length ? (
              <section aria-labelledby="faq-title">
                <h2 id="faq-title">Frequently asked questions</h2>
                {guide.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </section>
            ) : null}
            {related.length ? (
              <section aria-labelledby="related-title">
                <h2 id="related-title">Related guides</h2>
                <ul>
                  {related.map((item) => item ? (
                    <li key={item.slug}>
                      <Link href={`/learn/${item.slug}`}>{item.title}</Link>
                    </li>
                  ) : null)}
                </ul>
              </section>
            ) : null}
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
                  <span className="meta">This is a starting guide for {guide.area}. Browse the learning library for related subjects and practical next steps.</span>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
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
          <p className="kicker plain" style={{ color: "var(--signal)" }}>Learning area</p>
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
              Explore the related topics below or browse the complete question library to find another practical guide.
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
            <p className="kicker plain faint">Keep learning</p>
            <p className="muted" style={{ fontSize: "0.875rem" }}>
              Connect this topic to other practical skills and continue at your own pace.
            </p>
            <Link href="/questions" className="search-submit stack-4">
              Browse all questions
            </Link>
            <Link href="/tools" className="search-submit stack-4">
              Explore learning tools
            </Link>
          </aside>
        )}
      </div>
    </main>
  );
}

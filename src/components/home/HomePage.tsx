import { ButtonLink, Kicker } from "@/components/ui";
import { SearchIndex } from "@/components/home/Interactive";
import { AreaGrid, FinalCta, Journey, KnowledgeMap, PathRail, PrincipleGrid, QuestionCards, ServiceGrid } from "@/components/home/Sections";

export function HomePage() {
  return (
    <main id="content">
      <section className="hero hero-dashboard" aria-labelledby="hero-title">
        <div className="page-wrap hero-top">
          <div className="rise hero-copy">
            <div className="hero-welcome">
              <Kicker>Your practical learning space</Kicker>
              <span className="hero-status"><span aria-hidden="true" /> Guides for curious beginners</span>
            </div>
            <h1 id="hero-title" className="display balance">
              <span>What would you</span>
              <span className="hero-title-blue">like to learn today?</span>
            </h1>
            <p className="lede pretty">
              Find a clear answer, follow a step-by-step guide, or get help building a real project. Start with websites, SEO, creative work, social platforms, apps, or online business.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/learn" variant="accent">
                Browse learning paths <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get help with a project
              </ButtonLink>
            </div>
            <p className="hero-search-hint">Have a question in mind? Search the guide library.</p>
            <SearchIndex />
          </div>
          <div className="hero-side">
            <KnowledgeMap />
            <div className="hero-side-note">
              <span className="hero-note-icon" aria-hidden="true">✓</span>
              <p><strong>Learn it, then use it.</strong><span>Practical explanations, connected guides, and clear next steps.</span></p>
            </div>
          </div>
        </div>
      </section>

      <AreaGrid />
      <QuestionCards />
      <Journey />
      <PathRail />
      <ServiceGrid />
      <PrincipleGrid />
      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BuildSkills",
            url: "https://buildskills.com.pk/",
            description: "Find an answer, follow a learning path, or have the studio build it. Websites, SEO, creator platforms, apps, and business software.",
          }),
        }}
      />
    </main>
  );
}

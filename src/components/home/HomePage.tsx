import { ButtonLink, Kicker } from "@/components/ui";
import { SearchIndex } from "@/components/home/Interactive";
import { AreaGrid, FinalCta, Journey, KnowledgeMap, PathRail, PrincipleGrid, QuestionCards, ServiceGrid, WorkSection } from "@/components/home/Sections";

export function HomePage() {
  return (
    <main id="content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="page-wrap hero-top">
          <div className="rise hero-copy">
            <Kicker>Knowledge studio</Kicker>
            <h1 id="hero-title" className="display balance">
              <span>Learn something useful.</span>
              <span className="italic">Build something real.</span>
            </h1>
            <p className="lede pretty">
              Find a straight answer, follow a learning path, or have the work built. Websites, search, apps, and business software.
            </p>
            <div className="actions">
              <ButtonLink href="/learn">Explore learning</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a project
              </ButtonLink>
            </div>
            <SearchIndex />
          </div>
          <KnowledgeMap />
        </div>
      </section>

      <Journey />
      <AreaGrid />
      <QuestionCards />
      <PathRail />
      <ServiceGrid />
      <WorkSection />
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
            description: "Find an answer, follow a learning path, or have the studio build it. Websites, SEO, apps, and business software.",
          }),
        }}
      />
    </main>
  );
}

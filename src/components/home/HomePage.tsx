import { ButtonLink, Kicker } from "@/components/ui";
import { SearchIndex } from "@/components/home/Interactive";
import { AreaGrid, FinalCta, Journey, PathRail, PrincipleGrid, QuestionCards, ToolDiscovery } from "@/components/home/Sections";

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
              <span>BuildSkills is a practical learning hub</span>
              <span className="hero-title-blue">for young people and beginners.</span>
            </h1>
            <p className="lede pretty">
              Learn practical digital skills, discover useful tools, and follow clear guides you can put to work.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/learn" variant="accent">
                Browse learning paths <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/questions" variant="secondary">
                Explore questions
              </ButtonLink>
            </div>
            <p className="hero-search-hint">Have a question in mind? Search the guide library.</p>
            <SearchIndex />
          </div>
          <div className="hero-side">
            <div className="hero-side-image">
              <img src="https://images.unsplash.com/photo-1778489769184-45868633c527?auto=format&fit=crop&fm=jpg&q=82&w=1000" alt="Students learning programming in a classroom" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <AreaGrid />
      <QuestionCards />
      <Journey />
      <PathRail />
      <ToolDiscovery />
      <PrincipleGrid />
      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "BuildSkills",
                url: "https://buildskills.com.pk/",
              },
              {
                "@type": "WebSite",
                name: "BuildSkills",
                url: "https://buildskills.com.pk/",
                description: "Practical digital skills, clear learning guides, and useful tools for young people and beginners.",
                publisher: { "@type": "Organization", name: "BuildSkills", url: "https://buildskills.com.pk/" },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}

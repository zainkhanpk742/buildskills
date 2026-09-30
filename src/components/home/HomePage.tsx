import Image from "next/image";
import { ButtonLink, Kicker } from "@/components/ui";
import { SearchIndex } from "@/components/home/Interactive";
import { AreaGrid, FinalCta, Journey, PathRail, PrincipleGrid, QuestionCards, ToolDiscovery } from "@/components/home/Sections";

export function HomePage({ initialQuery = "" }: { initialQuery?: string }) {
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
            <p className="hero-trust">Free · Updated 2026 · Written for beginners worldwide</p>
            <p className="hero-search-hint">Have a question in mind? Search the guide library.</p>
            <SearchIndex initialQuery={initialQuery} />
          </div>
          <div className="hero-side">
            <div className="hero-photos">
              <figure className="hero-side-image">
                <Image
                  src="/hero.webp"
                  alt="Students learning together in a computer classroom"
                  fill
                  priority
                  sizes="(max-width: 900px) 68vw, 340px"
                />
              </figure>
              <figure className="hero-side-small">
                <Image
                  src="/hero-detail.webp"
                  alt="Hands writing notes beside a laptop"
                  fill
                  sizes="(max-width: 900px) 32vw, 160px"
                />
              </figure>
            </div>
            <p className="hero-caption">A practical place to learn a skill, then use it.</p>
          </div>
        </div>
      </section>

      <AreaGrid />
      <section className="home-photo" aria-label="Someone learning at a desk">
        <div className="page-wrap">
          <figure className="home-photo-frame">
            <Image
              src="/learn-wide.webp"
              alt="A student writing notes beside a laptop in warm daylight"
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
            />
            <figcaption>Learn one skill, then use it on a real piece of work.</figcaption>
          </figure>
        </div>
      </section>
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
                "@id": "https://buildskills.com.pk/#organization",
                name: "BuildSkills",
                url: "https://buildskills.com.pk/",
                email: "salimpk742@gmail.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://buildskills.com.pk/apple-touch-icon.png",
                  width: 180,
                  height: 180,
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://buildskills.com.pk/#website",
                name: "BuildSkills",
                url: "https://buildskills.com.pk/",
                description: "Practical digital skills, clear learning guides, and useful tools for young people and beginners.",
                publisher: { "@id": "https://buildskills.com.pk/#organization" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://buildskills.com.pk/?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}

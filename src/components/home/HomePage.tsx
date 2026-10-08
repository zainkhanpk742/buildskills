import Image from "next/image";
import { SocialIcon } from "@/components/SocialIcon";
import { socialProfiles, socialUrls } from "@/lib/social";
import { HOME_VIDEO, YOUTUBE_CHANNEL } from "@/data/guideVideos";
import { ButtonLink, Kicker } from "@/components/ui";
import { SearchIndex } from "@/components/home/Interactive";
import { HomeVideoPlayer } from "@/components/home/HomeVideo";
import { guideLinks, searchPrompts } from "@/data/site";
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
            <p className="hero-trust">
              Free · Updated 2026 · Written for beginners worldwide ·{" "}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", verticalAlign: "middle" }}>
                Follow us
                {socialProfiles.map((profile) => (
                  <a key={profile.url} href={profile.url} target="_blank" rel="noopener" aria-label={`BuildSkills on ${profile.label}`} title={profile.label} style={{ color: "inherit", display: "inline-flex" }}>
                    <SocialIcon label={profile.label} size={15} />
                  </a>
                ))}
              </span>
            </p>
            <p className="hero-search-hint">Have a question in mind? Search the guide library.</p>
            <SearchIndex chips={guideLinks(searchPrompts)} />
          </div>
          <div className="hero-side">
            <HomeVideoPlayer eager className="in-hero" />
            <div className="home-video-copy hero-video-copy">
              <Kicker>Start here</Kicker>
              <h2 id="home-video-title" className="balance">Watch: Welcome to BuildSkills</h2>
              <p>A 37-second look at what you can learn here, from SEO and websites to AI tools and freelancing. Free, step by step, in simple words.</p>
              <a href={`${YOUTUBE_CHANNEL}?sub_confirmation=1`} target="_blank" rel="noopener" className="btn btn-accent home-video-subscribe">
                <SocialIcon label="YouTube" size={18} /> Subscribe to our YouTube channel
              </a>
            </div>
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
                alternateName: ["Build Skills", "BuildSkills.com.pk"],
                url: "https://buildskills.com.pk/",
                email: "buildskillspk@gmail.com",
                sameAs: socialUrls,
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
                alternateName: ["Build Skills", "BuildSkills.com.pk"],
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
              {
                "@type": "VideoObject",
                "@id": "https://buildskills.com.pk/#intro-video",
                name: HOME_VIDEO.name,
                description: HOME_VIDEO.description,
                thumbnailUrl: [`https://i.ytimg.com/vi/${HOME_VIDEO.id}/hqdefault.jpg`],
                uploadDate: HOME_VIDEO.uploadDate,
                duration: HOME_VIDEO.duration,
                contentUrl: `https://www.youtube.com/watch?v=${HOME_VIDEO.id}`,
                embedUrl: `https://www.youtube-nocookie.com/embed/${HOME_VIDEO.id}`,
                publisher: { "@id": "https://buildskills.com.pk/#organization" },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}

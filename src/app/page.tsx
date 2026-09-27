import Link from "next/link";

const questions = [
  {
    number: "01",
    title: "What is SEO?",
    text: "Understand search engines, rankings, keywords and the basics of getting found online.",
    href: "/learn/seo/what-is-seo",
  },
  {
    number: "02",
    title: "How do I build a website?",
    text: "Go from an idea to a working website with a practical step-by-step process.",
    href: "/learn/websites/how-to-build-a-website",
  },
  {
    number: "03",
    title: "How do I get my website on Google?",
    text: "Learn what needs to happen before a new website can appear in Google Search.",
    href: "/learn/seo/how-to-get-website-on-google",
  },
  {
    number: "04",
    title: "How do I increase website traffic?",
    text: "Explore practical ways to attract people who are actually interested in what you offer.",
    href: "/learn/seo/how-to-increase-website-traffic",
  },
  {
    number: "05",
    title: "What are good backlinks?",
    text: "Understand relevance, quality, authority and what makes a backlink useful.",
    href: "/learn/seo/what-are-good-backlinks",
  },
  {
    number: "06",
    title: "How do I build a mobile app?",
    text: "Understand planning, design, development, testing and publishing.",
    href: "/learn/mobile-apps/how-to-build-a-mobile-app",
  },
];

const skills = [
  {
    number: "01",
    title: "Websites",
    text: "Plan, design, build and launch modern websites.",
    href: "/learn/websites",
  },
  {
    number: "02",
    title: "SEO",
    text: "Understand Google, search visibility, content and traffic.",
    href: "/learn/seo",
  },
  {
    number: "03",
    title: "Mobile Apps",
    text: "Learn how apps are planned, built and published.",
    href: "/learn/mobile-apps",
  },
  {
    number: "04",
    title: "Databases",
    text: "Build practical systems around real business data.",
    href: "/learn/databases",
  },
  {
    number: "05",
    title: "Business Software",
    text: "Explore automation, inventory and custom business systems.",
    href: "/learn/business-software",
  },
  {
    number: "06",
    title: "YouTube",
    text: "Learn channels, content, growth and monetization.",
    href: "/learn/youtube",
  },
  {
    number: "07",
    title: "Online Business",
    text: "Explore websites, services, content and online income models.",
    href: "/learn/make-money-online",
  },
  {
    number: "08",
    title: "Freelancing",
    text: "Learn skills, find clients and turn digital skills into services.",
    href: "/learn/freelancing",
  },
];

const services = [
  {
    label: "01",
    title: "Website Development",
    text: "Business websites and custom web applications.",
    href: "/services",
  },
  {
    label: "02",
    title: "SEO Services",
    text: "Technical, on-page and content-focused SEO.",
    href: "/services/seo",
  },
  {
    label: "03",
    title: "Mobile Apps",
    text: "Custom applications built around practical business needs.",
    href: "/services/mobile-apps",
  },
  {
    label: "04",
    title: "Business Software",
    text: "Databases, offline software and business automation.",
    href: "/services/software",
  },
];

const seoPath = [
  "What is SEO?",
  "How Google Search Works",
  "Keyword Research",
  "Search Intent",
  "On-Page SEO",
  "Technical SEO",
  "Backlinks",
  "SEO Auditing",
];

export default function Home() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bs-hero bs-hero-v2">
        <div className="bs-container">
          <div className="bs-hero-v2-grid">
            <div className="bs-hero-copy">
              <div className="bs-eyebrow">BUILDSKILLS.COM.PK</div>

              <h1>
                Learn digital skills.
                <span>Build something real.</span>
              </h1>

              <p className="bs-hero-text">
                Practical knowledge for websites, SEO, apps, software,
                online business, content creation and digital growth.
              </p>

              <div className="bs-search">
                <span>⌕</span>

                <input
                  type="search"
                  placeholder="What do you want to learn?"
                  aria-label="What do you want to learn?"
                />

                <Link href="/questions">Search</Link>
              </div>

              <div className="bs-popular">
                <span>Popular</span>

                <Link href="/learn/seo/what-is-seo">
                  What is SEO?
                </Link>

                <Link href="/learn/websites/how-to-build-a-website">
                  Build a website
                </Link>

                <Link href="/learn/seo/how-to-increase-website-traffic">
                  Increase traffic
                </Link>
              </div>

              <div className="bs-hero-actions">
                <Link
                  className="bs-button bs-button-primary"
                  href="/learn"
                >
                  Explore Learning
                </Link>

                <Link
                  className="bs-button bs-button-secondary"
                  href="/services"
                >
                  I Need a Digital Solution
                </Link>
              </div>
            </div>

            <div className="bs-hero-visual">
              <div className="bs-hero-visual-top">
                <span>BUILD A DIGITAL SKILL</span>
                <span>01 — 03</span>
              </div>

              <div className="bs-visual-title">
                Question
                <strong>→</strong>
                Knowledge
                <strong>→</strong>
                Action
              </div>

              <div className="bs-visual-question">
                <span>TRY A QUESTION</span>
                <strong>How do I increase website traffic?</strong>
                <Link href="/learn/seo/how-to-increase-website-traffic">
                  Explore the answer →
                </Link>
              </div>

              <div className="bs-visual-grid">
                <div>
                  <small>LEARN</small>
                  <strong>Understand</strong>
                  <span>Get the practical explanation.</span>
                </div>

                <div>
                  <small>BUILD</small>
                  <strong>Create</strong>
                  <span>Turn knowledge into something real.</span>
                </div>

                <div>
                  <small>GROW</small>
                  <strong>Improve</strong>
                  <span>Use digital skills to move forward.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bs-hero-bottom">
            <span>LEARN</span>
            <i />
            <span>BUILD</span>
            <i />
            <span>GROW</span>

            <p>
              One place for practical digital knowledge and professional
              technology services.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUESTIONS
      ===================================================== */}
      <section className="bs-section bs-question-section">
        <div className="bs-container">
          <div className="bs-section-heading">
            <div>
              <div className="bs-eyebrow">START WITH A QUESTION</div>

              <h2>What are you trying to figure out?</h2>

              <p>
                Search engines answer millions of questions every day.
                BuildSkills turns useful questions into practical learning.
              </p>
            </div>

            <Link className="bs-text-link" href="/questions">
              Explore all questions →
            </Link>
          </div>

          <div className="bs-question-grid bs-question-grid-v2">
            {questions.map((question) => (
              <Link
                href={question.href}
                className="bs-question-card bs-question-card-v2"
                key={question.title}
              >
                <div className="bs-question-top">
                  <span>{question.number}</span>
                  <b>↗</b>
                </div>

                <h3>{question.title}</h3>

                <p>{question.text}</p>

                <span className="bs-card-link">
                  Read the practical guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section className="bs-section bs-section-soft bs-skills-section">
        <div className="bs-container">
          <div className="bs-section-heading">
            <div>
              <div className="bs-eyebrow">EXPLORE</div>

              <h2>Digital skills, organized for humans.</h2>

              <p>
                Follow a topic and build understanding step by step instead
                of jumping between disconnected articles.
              </p>
            </div>

            <Link className="bs-text-link" href="/learn">
              Browse learning →
            </Link>
          </div>

          <div className="bs-skills-grid">
            {skills.map((skill) => (
              <Link
                href={skill.href}
                className="bs-skill-card"
                key={skill.title}
              >
                <span>{skill.number}</span>

                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                </div>

                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING PATH
      ===================================================== */}
      <section className="bs-section">
        <div className="bs-container">
          <div className="bs-path-v2">
            <div className="bs-path-v2-intro">
              <div className="bs-eyebrow">FEATURED LEARNING PATH</div>

              <h2>Learn SEO from the ground up.</h2>

              <p>
                Start with the fundamentals, understand how search works,
                then move into practical SEO techniques.
              </p>

              <Link
                href="/learn/seo"
                className="bs-button bs-button-primary"
              >
                Start the SEO path →
              </Link>
            </div>

            <div className="bs-path-v2-list">
              {seoPath.map((step, index) => (
                <Link
                  href="/learn/seo"
                  className="bs-path-v2-step"
                  key={step}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <strong>{step}</strong>

                  <b>→</b>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bs-section bs-section-dark bs-services-v2">
        <div className="bs-container">
          <div className="bs-section-heading bs-heading-light">
            <div>
              <div className="bs-eyebrow">FROM KNOWLEDGE TO ACTION</div>

              <h2>Know what you need? Let's build it.</h2>

              <p>
                BuildSkills also provides professional digital services for
                people and businesses that need something built.
              </p>
            </div>

            <Link
              className="bs-button bs-button-light"
              href="/services"
            >
              View all services →
            </Link>
          </div>

          <div className="bs-services-v2-grid">
            {services.map((service) => (
              <Link
                href={service.href}
                className="bs-service-v2-card"
                key={service.title}
              >
                <div className="bs-service-v2-top">
                  <span>{service.label}</span>
                  <b>↗</b>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <span>Explore service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SIMPLE PROOF / PORTFOLIO
      ===================================================== */}
      <section className="bs-section bs-proof-section">
        <div className="bs-container">
          <div className="bs-proof-grid">
            <div>
              <div className="bs-eyebrow">BUILD WITH CONFIDENCE</div>

              <h2>
                Learn how digital things work.
                <span>Then build the right thing.</span>
              </h2>

              <p>
                BuildSkills connects educational content with practical
                technology services. You can learn independently, explore
                an idea, or get help turning it into a working product.
              </p>

              <div className="bs-proof-actions">
                <Link
                  href="/portfolio"
                  className="bs-button bs-button-secondary"
                >
                  View portfolio
                </Link>

                <Link
                  href="/about"
                  className="bs-text-link"
                >
                  About BuildSkills →
                </Link>
              </div>
            </div>

            <div className="bs-proof-panel">
              <div>
                <span>01</span>
                <strong>Learn</strong>
                <p>Understand the problem.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Explore</strong>
                <p>Compare possible solutions.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Build</strong>
                <p>Turn the idea into reality.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Grow</strong>
                <p>Improve and keep learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bs-final-cta bs-final-cta-v2">
        <div className="bs-container">
          <div>
            <div className="bs-eyebrow">HAVE A PROJECT?</div>

            <h2>Let's build something useful.</h2>

            <p>
              Tell me what you're trying to accomplish and we'll find the
              right digital solution.
            </p>
          </div>

          <div className="bs-final-actions">
            <Link
              className="bs-button bs-button-primary"
              href="/contact"
            >
              Start a project →
            </Link>

            <Link
              className="bs-button bs-button-secondary"
              href="/portfolio"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

const questions = [
  ["What is SEO?", "A clear introduction to search engines, rankings, keywords and visibility.", "/learn/seo/what-is-seo"],
  ["How do I build a website?", "A practical route from planning and structure to a published site.", "/learn/websites/how-to-build-a-website"],
  ["How do I get my website on Google?", "Understand indexing, search visibility and the first steps that matter.", "/learn/seo/how-to-get-website-on-google"],
  ["How can I increase website traffic?", "Learn the main ways to attract useful visitors without chasing empty numbers.", "/learn/seo/how-to-increase-website-traffic"],
];

const skills = [
  ["01", "Websites", "Build and improve modern websites.", "/learn/websites"],
  ["02", "SEO", "Make useful pages easier to discover.", "/learn/seo"],
  ["03", "Apps", "Plan and build practical mobile products.", "/learn/mobile-apps"],
  ["04", "Business systems", "Turn repetitive work into better systems.", "/learn/business-software"],
  ["05", "Databases", "Organize information into reliable systems.", "/learn/databases"],
  ["06", "Marketing", "Reach the right people online.", "/learn/digital-marketing"],
  ["07", "Content", "Create content people actually need.", "/learn/content-creation"],
  ["08", "Freelancing", "Turn useful skills into paid work.", "/learn/freelancing"],
];

const services = [
  ["Websites & web apps", "From a focused business website to a custom web application.", "/services"],
  ["SEO & growth", "Technical SEO, content structure and search visibility.", "/services/seo"],
  ["Apps & software", "Mobile apps, databases and business software built around your workflow.", "/services/software"],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> BUILDSKILLS</div>
            <h1>Learn the skill.<br /><span>Build the thing.</span></h1>
            <p className="hero-lead">
              Practical digital knowledge for people who want to understand, create and improve real things online.
            </p>

            <div className="hero-actions">
              <Link href="/learn" className="button button-primary">Explore learning <span>→</span></Link>
              <Link href="/services" className="button button-secondary">Build with us</Link>
            </div>

            <div className="hero-search">
              <span className="search-icon">⌕</span>
              <input aria-label="Search BuildSkills" placeholder="What do you want to learn?" />
              <Link href="/questions">Search</Link>
            </div>
            <div className="hero-search-links">
              <span>Popular</span>
              <Link href="/learn/seo/what-is-seo">SEO</Link>
              <Link href="/learn/websites/how-to-build-a-website">Websites</Link>
              <Link href="/learn/freelancing">Freelancing</Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="BuildSkills learning flow">
            <div className="hero-panel-top">
              <span>THE BUILDSKILLS LOOP</span>
              <b>01 — 04</b>
            </div>
            <div className="flow">
              <div className="flow-item active"><span>01</span><div><strong>Question</strong><small>Start with what you need to know.</small></div></div>
              <div className="flow-line" />
              <div className="flow-item"><span>02</span><div><strong>Understand</strong><small>Get the idea in plain language.</small></div></div>
              <div className="flow-line" />
              <div className="flow-item"><span>03</span><div><strong>Build</strong><small>Turn knowledge into useful work.</small></div></div>
              <div className="flow-line" />
              <div className="flow-item"><span>04</span><div><strong>Grow</strong><small>Improve, publish and keep going.</small></div></div>
            </div>
            <div className="hero-panel-foot">QUESTION → ANSWER → ACTION</div>
          </div>
        </div>

        <div className="site-shell hero-bottom">
          <div><strong>01</strong><span>Clear explanations</span></div>
          <div><strong>02</strong><span>Practical learning paths</span></div>
          <div><strong>03</strong><span>Professional digital services</span></div>
        </div>
      </section>

      <section className="section section-questions">
        <div className="site-shell">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> START HERE</div>
              <h2>Real questions.<br /><em>Useful answers.</em></h2>
            </div>
            <div>
              <p>Search engines are full of fragments. BuildSkills is designed to give you a clear starting point, then show you what to do next.</p>
              <Link href="/questions" className="text-link">Browse all questions →</Link>
            </div>
          </div>

          <div className="question-grid">
            {questions.map(([title, text, href], index) => (
              <Link href={href} className="question-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <div className="card-arrow">↗</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-link">Read answer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-skills">
        <div className="site-shell">
          <div className="section-heading">
            <div className="eyebrow"><span /> EXPLORE</div>
            <h2>A digital skills library<br /><em>made for doing.</em></h2>
            <p>Choose a subject. Learn the fundamentals. Follow the practical path.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([number, title, text, href]) => (
              <Link href={href} className="skill-card" key={title}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-feature">
        <div className="site-shell feature-layout">
          <div className="feature-copy">
            <div className="eyebrow"><span /> FEATURED PATH</div>
            <h2>SEO, without<br /><em>the overwhelm.</em></h2>
            <p>A focused example of the BuildSkills approach: start with the basics, understand search, improve your pages, then build authority.</p>
            <Link href="/learn/seo" className="button button-primary">Open the SEO path <span>→</span></Link>
          </div>
          <div className="path-card">
            {[
              ["01", "What is SEO?", "The foundation"],
              ["02", "How Google works", "Discovery & indexing"],
              ["03", "Search intent", "What people need"],
              ["04", "Better pages", "Content & structure"],
              ["05", "Authority", "Links & promotion"],
            ].map(([n, title, text]) => (
              <Link href="/learn/seo" key={n} className="path-row"><span>{n}</span><div><strong>{title}</strong><small>{text}</small></div><b>→</b></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="site-shell">
          <div className="section-heading services-heading">
            <div>
              <div className="eyebrow light"><span /> BUILD WITH US</div>
              <h2>When learning becomes<br /><em>a real project.</em></h2>
            </div>
            <p>Need something built? BuildSkills also provides practical digital services for businesses and individuals.</p>
          </div>
          <div className="services-grid">
            {services.map(([title, text, href], index) => (
              <Link href={href} className="service-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>Explore service →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-final">
        <div className="site-shell final-card">
          <div>
            <div className="eyebrow"><span /> YOUR NEXT STEP</div>
            <h2>Have a question?<br /><em>Let's turn it into progress.</em></h2>
          </div>
          <div className="final-actions">
            <Link href="/questions" className="button button-primary">Find an answer →</Link>
            <Link href="/contact" className="button button-secondary">Start a project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

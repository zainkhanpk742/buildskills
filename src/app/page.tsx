import Link from "next/link";

const questions = [
  ["01", "What is SEO?", "Understand search engines, rankings, keywords and visibility.", "/learn/seo/what-is-seo"],
  ["02", "How do I build a website?", "A practical path from idea and structure to a working site.", "/learn/websites/how-to-build-a-website"],
  ["03", "How do I get my website on Google?", "Learn indexing, search visibility and the essential first steps.", "/learn/seo/how-to-get-website-on-google"],
  ["04", "How do I increase website traffic?", "Explore practical ways to attract the right visitors.", "/learn/seo/how-to-increase-website-traffic"],
  ["05", "What are good backlinks?", "Learn what makes links relevant, useful and trustworthy.", "/learn/seo/what-are-good-backlinks"],
  ["06", "How do I build a mobile app?", "Understand planning, design, development and launch.", "/learn/mobile-apps"],
];

const skills = [
  ["Websites", "Build modern websites and web applications.", "/learn/websites", "01"],
  ["SEO", "Learn search visibility, content and technical SEO.", "/learn/seo", "02"],
  ["Mobile Apps", "Understand how useful apps are planned and built.", "/learn/mobile-apps", "03"],
  ["Databases", "Turn business information into organized systems.", "/learn/databases", "04"],
  ["Business Software", "Explore automation and custom business tools.", "/learn/business-software", "05"],
  ["Digital Marketing", "Learn practical ways to reach customers online.", "/learn/digital-marketing", "06"],
  ["Content Creation", "Plan, create and improve useful digital content.", "/learn/content-creation", "07"],
  ["Freelancing", "Turn digital skills into real services and projects.", "/learn/freelancing", "08"],
];

const services = [
  ["Website Development", "Business websites and custom web applications.", "/services"],
  ["SEO Services", "Technical, on-page and content-focused SEO.", "/services/seo"],
  ["Mobile App Development", "Apps designed around practical business needs.", "/services/mobile-apps"],
  ["Business Software", "Databases, offline software and automation.", "/services/software"],
];

const path = [
  ["01", "Start with the basics", "What SEO is and why it matters."],
  ["02", "Understand Google", "How search engines discover and organize pages."],
  ["03", "Research demand", "Keywords, questions and search intent."],
  ["04", "Improve your pages", "Content, structure and on-page SEO."],
  ["05", "Build authority", "Useful links, reputation and promotion."],
];

export default function Home() {
  return (
    <main>
      <section className="bs-v3-hero"><div className="bs-container"><div className="bs-v3-hero-grid">
        <div className="bs-v3-hero-copy">
          <div className="bs-kicker"><span /> PRACTICAL DIGITAL KNOWLEDGE</div>
          <h1>Learn digital skills.<br /><em>Build something real.</em></h1>
          <p>Clear answers, practical learning paths and professional digital services — all in one place.</p>
          <div className="bs-v3-search"><span>⌕</span><input placeholder="Ask a question or search a skill..." aria-label="Search BuildSkills" /><Link href="/questions">Search</Link></div>
          <div className="bs-v3-popular"><span>Try:</span><Link href="/learn/seo/what-is-seo">What is SEO?</Link><Link href="/learn/websites/how-to-build-a-website">Build a website</Link><Link href="/learn/seo/how-to-increase-website-traffic">Get more traffic</Link></div>
          <div className="bs-v3-actions"><Link href="/learn" className="bs-btn bs-btn-dark">Start learning <span>↗</span></Link><Link href="/services" className="bs-btn bs-btn-outline">Need something built?</Link></div>
        </div>
        <div className="bs-v3-hero-art">
          <div className="bs-art-label">THE BUILDSKILLS METHOD</div>
          <div className="bs-art-orbit bs-art-orbit-one" /><div className="bs-art-orbit bs-art-orbit-two" />
          <div className="bs-art-center"><strong>?</strong><span>QUESTION</span></div>
          <div className="bs-art-node bs-art-node-one"><b>01</b><span>ANSWER</span></div>
          <div className="bs-art-node bs-art-node-two"><b>02</b><span>LEARN</span></div>
          <div className="bs-art-node bs-art-node-three"><b>03</b><span>BUILD</span></div>
          <div className="bs-art-node bs-art-node-four"><b>04</b><span>GROW</span></div>
          <div className="bs-art-bottom">QUESTION → ANSWER → ACTION</div>
        </div>
      </div>
      <div className="bs-v3-strip"><div><b>01</b><strong>Learn</strong><span>Understand the problem.</span></div><i /><div><b>02</b><strong>Build</strong><span>Turn knowledge into something real.</span></div><i /><div><b>03</b><strong>Grow</strong><span>Keep improving what you create.</span></div></div>
      </div></section>

      <section className="bs-v3-intro bs-container"><div className="bs-v3-intro-number">01 / QUESTIONS</div><div><h2>Start with the thing<br /><em>you want to figure out.</em></h2><p>BuildSkills is built around real questions. Find an answer, understand why it works, then use the knowledge to take action.</p><Link href="/questions" className="bs-inline-link">Explore the question library →</Link></div></section>

      <section className="bs-v3-questions bs-container">{questions.map(([n, title, text, href]) => <Link href={href} className="bs-q-card" key={title}><div><span>{n}</span><b>↗</b></div><h3>{title}</h3><p>{text}</p><small>Read the guide →</small></Link>)}</section>

      <section className="bs-v3-skills"><div className="bs-container"><div className="bs-v3-section-head"><div><div className="bs-kicker"><span /> EXPLORE</div><h2>Digital skills,<br /><em>without the confusion.</em></h2></div><p>Choose a subject and move from fundamentals to practical work through connected learning.</p></div><div className="bs-v3-skill-grid">{skills.map(([title, text, href, n]) => <Link href={href} className="bs-skill-v3" key={title}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></Link>)}</div></div></section>

      <section className="bs-v3-path bs-container"><div className="bs-path-intro"><div className="bs-kicker"><span /> FEATURED PATH</div><h2>Learn SEO.<br /><em>Step by step.</em></h2><p>One example of how BuildSkills turns a large subject into a practical sequence you can actually follow.</p><Link href="/learn/seo" className="bs-btn bs-btn-dark">Open SEO learning path <span>↗</span></Link></div><div className="bs-path-list">{path.map(([n, title, text]) => <Link href="/learn/seo" key={n} className="bs-path-row"><span>{n}</span><div><strong>{title}</strong><small>{text}</small></div><b>→</b></Link>)}</div></section>

      <section className="bs-v3-services"><div className="bs-container"><div className="bs-v3-section-head light"><div><div className="bs-kicker"><span /> BUILD WITH US</div><h2>Learn it.<br /><em>Or let us build it.</em></h2></div><p>When learning turns into a real project, BuildSkills can help with websites, apps, SEO and business systems.</p></div><div className="bs-service-v3-grid">{services.map(([title, text, href], i) => <Link href={href} className="bs-service-v3" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><b>Explore service →</b></Link>)}</div></div></section>

      <section className="bs-v3-belief bs-container"><div><div className="bs-kicker"><span /> WHY BUILDSKILLS</div><h2>Knowledge should lead<br />to <em>action.</em></h2></div><div className="bs-belief-points"><div><span>01</span><strong>Clear</strong><p>Useful explanations without unnecessary jargon.</p></div><div><span>02</span><strong>Practical</strong><p>Learning connected to real tools, examples and projects.</p></div><div><span>03</span><strong>Connected</strong><p>Questions, learning, tools and services work together.</p></div></div></section>

      <section className="bs-v3-cta"><div className="bs-container"><div><div className="bs-kicker"><span /> READY WHEN YOU ARE</div><h2>Have a question?<br /><em>Have an idea?</em></h2><p>Start exploring, or tell us what you want to build.</p></div><div className="bs-v3-cta-actions"><Link href="/questions" className="bs-btn bs-btn-light">Explore questions →</Link><Link href="/contact" className="bs-btn bs-btn-ghost">Start a project →</Link></div></div></section>
    </main>
  );
}
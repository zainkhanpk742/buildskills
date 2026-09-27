import Link from "next/link";

export const metadata = {
  title: "Learn",
  description: "Explore practical digital skills through clear guides and focused learning paths."
};

const categories = [
  ["01", "Websites", "Plan, design, build and improve websites.", "/learn/websites"],
  ["02", "SEO", "Understand search, content and visibility.", "/learn/seo"],
  ["03", "Mobile apps", "Learn how useful apps are planned and built.", "/learn/mobile-apps"],
  ["04", "Databases", "Organize information into reliable systems.", "/learn/databases"],
  ["05", "Business software", "Explore automation and custom business tools.", "/learn/business-software"],
  ["06", "Digital marketing", "Reach the right people and measure what works.", "/learn/digital-marketing"],
  ["07", "Content creation", "Plan and create useful digital content.", "/learn/content-creation"],
  ["08", "Graphic design", "Learn visual foundations, branding and design.", "/learn/graphic-design"],
  ["09", "Freelancing", "Turn a useful skill into a professional service.", "/learn/freelancing"],
  ["10", "Online business", "Understand models, offers, customers and growth.", "/learn/online-business"],
  ["11", "AI & productivity", "Use modern AI tools more effectively.", "/learn/ai-productivity"],
];

const featured = [
  ["What is SEO?", "Start with the core idea before getting into tactics.", "/learn/seo/what-is-seo"],
  ["How do I build a website?", "A practical overview from planning to launch.", "/learn/websites/how-to-build-a-website"],
  ["How do I get my website on Google?", "Learn the basics of crawling, indexing and visibility.", "/learn/seo/how-to-get-website-on-google"],
];

export default function LearnPage() {
  return (
    <>
      <section className="learn-hero">
        <div className="site-shell learn-hero-grid">
          <div>
            <div className="eyebrow"><span /> THE LEARNING LIBRARY</div>
            <h1>Learn something<br /><em>useful.</em></h1>
            <p>Clear guides for websites, SEO, apps, business systems, marketing, content, freelancing and more.</p>
            <div className="hero-actions">
              <Link href="/questions" className="button button-primary">Start with a question <span>→</span></Link>
              <Link href="/services" className="button button-secondary">Need something built?</Link>
            </div>
          </div>
          <div className="learn-note">
            <span>HOW TO USE BUILDSKILLS</span>
            <strong>Question → Guide → Action</strong>
            <p>Pick a topic below, open a guide, then use the related links to keep moving.</p>
          </div>
        </div>
      </section>

      <section className="learn-featured">
        <div className="site-shell">
          <div className="mini-heading"><span>START HERE</span><b>Featured guides</b></div>
          <div className="featured-grid">
            {featured.map(([title, text, href], index) => (
              <Link href={href} className="featured-card" key={title}>
                <span>0{index + 1}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <b>Read guide →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="learn-categories">
        <div className="site-shell">
          <div className="section-heading">
            <div className="eyebrow"><span /> ALL TOPICS</div>
            <h2>Choose your<br /><em>starting point.</em></h2>
          </div>
          <div className="category-grid">
            {categories.map(([number, title, text, href]) => (
              <Link href={href} className="category-card" key={title}>
                <span>{number}</span>
                <div><h2>{title}</h2><p>{text}</p></div>
                <b>→</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="learn-bottom">
        <div className="site-shell learn-bottom-inner">
          <div>
            <div className="eyebrow light"><span /> KEEP GOING</div>
            <h2>Don't just read it.<br /><em>Use it.</em></h2>
          </div>
          <p>BuildSkills connects learning with tools, projects and professional services so the next step is always close.</p>
          <Link href="/services" className="button button-light">See what we can build →</Link>
        </div>
      </section>
    </>
  );
}

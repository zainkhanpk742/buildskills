import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand footer-brand-link"><span className="brand-mark">B</span><span className="brand-name">build<span>skills</span><small>LEARN · BUILD · GROW</small></span></Link>
          <p>Practical digital knowledge and professional services for people who want to build useful things online.</p>
        </div>
        <div className="footer-links">
          <div><strong>Learn</strong><Link href="/learn">All topics</Link><Link href="/learn/websites">Websites</Link><Link href="/learn/seo">SEO</Link><Link href="/learn/freelancing">Freelancing</Link></div>
          <div><strong>Build</strong><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Start a project</Link></div>
          <div><strong>Explore</strong><Link href="/questions">Questions</Link><Link href="/tools">Tools</Link><Link href="/resources">Resources</Link></div>
        </div>
      </div>
      <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} BuildSkills.com.pk</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
    </footer>
  );
}

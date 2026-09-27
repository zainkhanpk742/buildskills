import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><Link className="logo footer-logo" href="/">BUILD<span>skills</span></Link><p>Learn. Build. Grow.</p><p className="footer-note">Practical digital knowledge and professional technology services.</p></div>
        <div><h4>Learn</h4><Link href="/learn/websites">Websites</Link><Link href="/learn/seo">SEO</Link><Link href="/learn/mobile-apps">Mobile Apps</Link><Link href="/learn/databases">Databases</Link></div>
        <div><h4>Services</h4><Link href="/services">Website Development</Link><Link href="/services/seo">SEO</Link><Link href="/services/mobile-apps">Mobile Apps</Link><Link href="/services/software">Business Software</Link></div>
        <div><h4>Company</h4><Link href="/portfolio">Portfolio</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link></div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} BuildSkills.com.pk. All rights reserved.</div>
    </footer>
  );
}
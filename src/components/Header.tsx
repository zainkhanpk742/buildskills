import Link from "next/link";

const nav = [
  ["Learn", "/learn"],
  ["Questions", "/questions"],
  ["Services", "/services"],
  ["Tools", "/tools"],
  ["Resources", "/resources"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">B</span>
          <span className="brand-name">build<span>skills</span><small>LEARN · BUILD · GROW</small></span>
        </Link>

        <nav className="desktop-nav">
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link href="/questions" className="header-search">⌕ <span>Search</span></Link>
          <Link href="/contact" className="header-cta">Start a project <span>↗</span></Link>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">☰</summary>
          <div className="mobile-menu-panel">
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/contact" className="mobile-menu-cta">Start a project →</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

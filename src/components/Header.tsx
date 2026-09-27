import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="logo" href="/">BUILD<span>skills</span></Link>
        <nav>
          <Link href="/learn">Learn</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/services">Services</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-search" href="/questions">⌕ <span>Search</span></Link>
        <button className="mobile-menu" aria-label="Open menu">☰</button>
      </div>
    </header>
  );
}
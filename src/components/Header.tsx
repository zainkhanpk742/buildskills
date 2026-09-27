import Link from "next/link";

const nav=[["Learn","/learn"],["Questions","/questions"],["Services","/services"],["Tools","/tools"],["Resources","/resources"],["Portfolio","/portfolio"]];

export function Header(){
  return <header className="bs-header-v3"><div className="bs-header-inner bs-container">
    <Link href="/" className="bs-brand-v3"><span className="bs-brand-mark">B</span><span><strong>BUILD<span>skills</span></strong><small>Learn. Build. Grow.</small></span></Link>
    <nav className="bs-nav-v3">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <div className="bs-header-right"><Link href="/questions" className="bs-header-search-v3">⌕ <span>Search</span></Link><Link href="/contact" className="bs-header-cta-v3">Start a project</Link></div>
    <button className="bs-mobile-v3" aria-label="Open navigation">☰</button>
  </div></header>
}
import Link from "next/link";
export const metadata = { title: "How to Build a Website", description: "A practical guide to planning, designing, developing, optimizing and launching a website." };
export default function Page() {
  return <article className="container" style={{maxWidth:"900px", padding:"70px 0"}}>
    <p className="eyebrow">WEBSITES</p>
    <h1 style={{fontSize:"clamp(42px,6vw,68px)", letterSpacing:"-.05em", lineHeight:1.03}}>How to Build a Website</h1>
    <div style={{background:"#eef4ff", border:"1px solid #dbe7ff", borderRadius:"18px", padding:"24px", margin:"28px 0"}}>
      <b>Quick answer</b><p style={{lineHeight:1.7}}>A website project normally moves through planning, content, design, development, testing, SEO, launch and ongoing maintenance.</p>
    </div>
    <h2>BuildSkills learning path</h2>
    <p style={{lineHeight:1.8,color:"#475467"}}>The complete production guide will cover domains, hosting, UX, HTML, CSS, JavaScript, backend systems, databases, responsive design, accessibility, performance, SEO, security, testing and deployment.</p>
    <Link className="primary-btn" href="/services">Need a website built? →</Link>
  </article>;
}
import Link from "next/link";
export const metadata = {
  title: "How Do I Get My Website on Google?",
  description: "A practical guide to making a website discoverable, crawlable and eligible to appear in Google Search."
};
export default function Page() {
  return <article className="container" style={{maxWidth:"900px", padding:"70px 0"}}>
    <p className="eyebrow">SEO & GOOGLE</p>
    <h1 style={{fontSize:"clamp(42px,6vw,68px)", letterSpacing:"-.05em", lineHeight:1.03, margin:"0 0 18px"}}>How Do I Get My Website on Google?</h1>
    <div style={{background:"#eef4ff", border:"1px solid #dbe7ff", borderRadius:"18px", padding:"24px", margin:"28px 0"}}>
      <b>Quick answer</b><p style={{lineHeight:1.7, marginBottom:0}}>A practical guide to making a website discoverable, crawlable and eligible to appear in Google Search.</p>
    </div>
    <h2>Understanding the topic</h2>
    <p style={{lineHeight:1.8, color:"#475467"}}>This starter article is a placeholder for the full BuildSkills knowledge experience. The production version will contain a reviewed explanation, examples, step-by-step guidance, common mistakes, related questions, sources, and a connected learning path.</p>
    <h2>Continue learning</h2>
    <div style={{display:"grid", gap:"10px"}}>
      <Link className="question-card" href="/learn/seo">SEO & Google →</Link>
      <Link className="question-card" href="/learn/websites/how-to-build-a-website">How to build a website →</Link>
      <Link className="question-card" href="/services/seo">Need professional SEO help? →</Link>
    </div>
  </article>;
}

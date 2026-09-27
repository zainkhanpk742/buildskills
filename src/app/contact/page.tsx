import Link from "next/link";
export const metadata = {
  title: "Contact",
  description: "Start a project, ask a question or get in touch."
};
export default function Page() {
  return <div className="container" style={{padding:"90px 0"}}>
    <p className="eyebrow">BUILDSKILLS</p>
    <h1 style={{fontSize:"clamp(42px,6vw,72px)", letterSpacing:"-.05em", margin:"0 0 18px"}}>Contact</h1>
    <p style={{maxWidth: "720px", color:"#667085", fontSize:"18px", lineHeight:1.7}}>Start a project, ask a question or get in touch.</p>
    <div style={{marginTop:"30px"}}><Link className="primary-btn" href="/">← Back to BuildSkills</Link></div>
  </div>;
}

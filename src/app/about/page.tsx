import Link from "next/link";
export const metadata = {
  title: "About BuildSkills",
  description: "Learn about BuildSkills and the person behind the platform and services."
};
export default function Page() {
  return <div className="container" style={{padding:"90px 0"}}>
    <p className="eyebrow">BUILDSKILLS</p>
    <h1 style={{fontSize:"clamp(42px,6vw,72px)", letterSpacing:"-.05em", margin:"0 0 18px"}}>About BuildSkills</h1>
    <p style={{maxWidth: "720px", color:"#667085", fontSize:"18px", lineHeight:1.7}}>Learn about BuildSkills and the person behind the platform and services.</p>
    <div style={{marginTop:"30px"}}><Link className="primary-btn" href="/">← Back to BuildSkills</Link></div>
  </div>;
}

import Link from "next/link";

export default function NotFound() {
  return <div className="container" style={{padding:"120px 0"}}>
    <p className="eyebrow">404</p>
    <h1>We couldn't find that page.</h1>
    <p>Try searching BuildSkills or return to the homepage.</p>
    <Link className="primary-btn" href="/">Go home →</Link>
  </div>;
}
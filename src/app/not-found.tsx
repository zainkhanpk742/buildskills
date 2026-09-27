import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="page-wrap section-pad">
      <p className="kicker">Missing</p>
      <h1 className="display-section balance stack-4 max-3">This page is not in the library.</h1>
      <p className="lede pretty stack-5">The address does not match a guide, a field, or a studio page.</p>
      <div className="actions">
        <Link href="/" className="btn btn-primary">Back to BuildSkills</Link>
        <Link href="/questions" className="btn btn-secondary">Browse questions</Link>
      </div>
    </main>
  );
}

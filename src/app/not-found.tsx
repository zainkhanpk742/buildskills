import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | BuildSkills" },
  description: "This address does not match a BuildSkills guide or topic. Go back to the library to find practical digital-skills guides.",
  // Next.js already adds <meta name="robots" content="noindex"> to 404s;
  // clearing the inherited robots value avoids a second, conflicting tag.
  robots: null,
};

export default function NotFound() {
  return (
    <main id="content" className="page-wrap section-pad">
      <p className="kicker">Missing</p>
      <h1 className="display-section balance stack-4 max-3">This page is not in the library.</h1>
      <p className="lede pretty stack-5">The address does not match a learning guide or topic.</p>
      <div className="actions">
        <Link href="/" className="btn btn-primary">Back to BuildSkills</Link>
        <Link href="/questions" className="btn btn-secondary">Browse questions</Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Makes a Good Backlink?",
  description:
    "Learn how useful, relevant links are earned, how to avoid link schemes, and what to do instead of buying backlinks.",
  alternates: { canonical: "/learn/seo/what-are-good-backlinks" },
  openGraph: {
    type: "article",
    title: "What makes a good backlink?",
    description: "Learn how useful, relevant links are earned and how to avoid link schemes.",
    url: "/learn/seo/what-are-good-backlinks",
    siteName: "BuildSkills",
  },
  twitter: {
    card: "summary",
    title: "What makes a good backlink?",
    description: "Learn how useful, relevant links are earned and how to avoid link schemes.",
  },
};

export default function Page() {
  return (
    <main id="content">
      <article className="container" style={{ maxWidth: "900px", padding: "70px 0" }}>
        <p className="eyebrow">LEARN · SEO</p>
        <h1 style={{ fontSize: "clamp(42px,6vw,68px)", letterSpacing: "-.05em", lineHeight: 1.03, margin: "0 0 18px" }}>
          What makes a good backlink?
        </h1>
        <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#475467" }}>
          A backlink is a link from another website to yours. A useful backlink
          is one that a real reader can follow to relevant information; it is
          earned because the destination is worth referencing, not manufactured
          to manipulate search rankings.
        </p>

        <h2>Why links matter—and what they cannot promise</h2>
        <p style={{ lineHeight: 1.8, color: "#475467" }}>
          Links help people discover related sources and can bring qualified
          referral visits. Search engines also use links as one way to discover
          pages and understand how resources relate. No particular link
          guarantees indexing, higher rankings, or traffic, and a large number
          of low-quality links is not a substitute for a useful website.
        </p>

        <h2>What makes a link useful?</h2>
        <ul style={{ lineHeight: 1.8, color: "#475467" }}>
          <li>
            <strong>It fits the context.</strong> The referring page and its
            readers have a genuine reason to point to your resource.
          </li>
          <li>
            <strong>It helps the reader.</strong> The destination adds
            information, evidence, a tool, or a next step that improves the
            referring page.
          </li>
          <li>
            <strong>It is editorially earned.</strong> The publisher chooses
            the reference because it is useful, not because you paid for
            ranking credit or required an optimized keyword link.
          </li>
          <li>
            <strong>The anchor describes the destination.</strong> Natural,
            concise link text helps a person know what to expect. Do not demand
            repeated exact-match phrases.
          </li>
        </ul>

        <h2>How to earn links without link schemes</h2>
        <ol style={{ lineHeight: 1.8, color: "#475467" }}>
          <li>
            Make something worth citing: original research, a clear guide, a
            useful calculator, a documented process, or a well-supported
            explanation.
          </li>
          <li>
            Share it with people who would genuinely use it, such as relevant
            professional communities, customers, educators, or publishers.
            Explain why it may help; let them decide whether to link.
          </li>
          <li>
            Build real relationships through useful participation and
            collaboration. Do not automate mass link requests or exchange links
            solely to influence rankings.
          </li>
          <li>
            If you sponsor a placement or accept user-generated links, use the
            appropriate link qualification and clearly disclose commercial
            relationships. Follow the relevant search engine and advertising
            rules.
          </li>
        </ol>

        <h2>Link practices to avoid</h2>
        <p style={{ lineHeight: 1.8, color: "#475467" }}>
          Avoid buying or selling links for ranking purposes, automated link
          building, excessive link exchanges, low-quality directory campaigns,
          and paid articles that pass ranking credit. These practices can
          violate Google&apos;s spam policies. If you already have suspicious
          links, investigate the actual source and impact before taking action;
          do not assume every unfamiliar link requires a disavow.
        </p>

        <h2>Keep the work focused on readers</h2>
        <p style={{ lineHeight: 1.8, color: "#475467" }}>
          A sensible link-building plan begins with the resource and audience,
          not a target count. Improve the page, make it easy to find through
          your own site, and share it in places where it can help. Links are a
          possible result of useful work, not a replacement for it.
        </p>

        <nav aria-label="Continue learning" style={{ display: "grid", gap: "10px", marginTop: "32px" }}>
          <Link className="question-card" href="/learn/seo/technical-seo">
            Learn technical SEO →
          </Link>
          <Link className="question-card" href="/learn/seo/internal-linking">
            Learn internal linking →
          </Link>
          <Link className="question-card" href="/learn/seo">
            Explore the complete SEO path →
          </Link>
        </nav>

        <h2>Official references</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>
            <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noreferrer">
              Google Search Central: Spam policies
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links" target="_blank" rel="noreferrer">
              Google Search Central: Qualify your outbound links
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noreferrer">
              Google Search Central: SEO Starter Guide
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}

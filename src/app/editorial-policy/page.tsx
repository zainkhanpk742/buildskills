import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Editorial Policy",
  description:
    "How BuildSkills checks guides, dates pages, cites official sources, and corrects mistakes. Contact buildskillspk@gmail.com.",
  path: "/editorial-policy",
});

export default function Page() {
  return (
    <Interior
      kicker="About"
      title="Editorial Policy"
      lede="BuildSkills publishes practical learning guides for beginners. The writing is by the BuildSkills Editorial Team. Last updated 30 September 2026."
    >
      <div className="prose">
        <h2>What we publish</h2>
        <p>
          Guides explain a skill or a public platform rule in plain language: websites, SEO, AI tools, video and photo editing, social media, freelancing, and online earning. The audience is global. Where a rule differs by country, the page says so.
        </p>
        <h2>How a fact gets in</h2>
        <p>
          Prices, eligibility, and monetization numbers are taken from the provider&apos;s own help center or pricing page, such as YouTube Help, TikTok, Meta, Google, Fiverr, Upwork, or Canva. The page links that source. If a number cannot be confirmed, it is left out. Each guide shows a last-checked date when one has been set.
        </p>
        <h2>What we do not do</h2>
        <p>
          We do not sell placements inside guides, invent earnings, or tell a reader a program is open in their country without a source. Sponsored wording, if it is ever used, will be labeled. Advertising, if shown, is separate from the article and is described in the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
        <h2>Corrections</h2>
        <p>
          If a page is wrong, email <a href="mailto:buildskillspk@gmail.com">buildskillspk@gmail.com</a> with the URL and the official source. We update the page and the last-checked date. The <Link href="/disclaimer">disclaimer</Link> explains the limits of educational content.
        </p>
        <h2>Who is responsible</h2>
        <p>
          Guides are credited to the BuildSkills Editorial Team. The site contact is{" "}
          <a href="mailto:buildskillspk@gmail.com">buildskillspk@gmail.com</a>. More about the project is on the <Link href="/about">about page</Link>.
        </p>
      </div>
    </Interior>
  );
}

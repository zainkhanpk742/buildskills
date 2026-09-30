import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "Terms for using BuildSkills guides. Educational content only, with no guarantee of earnings, rankings, or jobs.",
  path: "/terms",
});

export default function Page() {
  return (
    <Interior
      kicker="Legal"
      title="Terms of Use"
      lede="These terms apply when you use buildskills.com.pk. Last updated 30 September 2026."
    >
      <div className="prose">
        <p>
          BuildSkills publishes free educational guides about digital skills, websites, SEO, AI tools, editing, social platforms, freelancing, and online earning. The site is operated by BuildSkills. Contact{" "}
          <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a>.
        </p>
        <h2>Educational use</h2>
        <p>
          Guides are general information, not legal, financial, tax, medical, or professional advice. Platform rules, prices, and eligibility change. Check the official source linked on a page before you act, pay, or apply.
        </p>
        <h2>No guarantee of earnings</h2>
        <p>
          Nothing on this site promises income, clients, subscribers, rankings, certificates, or a job. Examples of freelancing, YouTube, TikTok, Fiverr, Upwork, and similar programs describe how those systems work. Results depend on your work, your country, and rules you do not control. Read the{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Do not misuse the site, attempt to break it, scrape it in a way that degrades service, or present the pages as your own product. You may share a link. You may not copy whole guides and republish them as yours.
        </p>
        <h2>Third-party sites</h2>
        <p>
          Guides link to YouTube, Google, TikTok, Meta, Canva, Fiverr, Upwork, and other services. Those sites have their own terms. BuildSkills is not those companies and does not control their accounts, payouts, or decisions.
        </p>
        <h2>Liability</h2>
        <p>
          The site is provided as available. To the extent the law allows, BuildSkills is not liable for decisions you make from a guide, for a platform rejecting an application, or for loss of income. Some places do not allow limits on liability; in those places the limit applies only as far as the law allows.
        </p>
        <p>
          How we edit pages is described in the <Link href="/editorial-policy">editorial policy</Link>. How data is handled is described in the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </Interior>
  );
}

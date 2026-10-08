import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer",
  description:
    "BuildSkills guides are educational. They do not guarantee earnings, clients, rankings, or acceptance into any platform program.",
  path: "/disclaimer",
});

export default function Page() {
  return (
    <Interior
      kicker="Legal"
      title="Disclaimer"
      lede="BuildSkills is an educational website. Reading a guide does not create a client relationship, and it does not promise a result. Last updated 30 September 2026."
    >
      <div className="prose">
        <h2>No guarantee of earnings</h2>
        <p>
          Pages about freelancing, online earning, YouTube, TikTok, Facebook, Fiverr, Upwork, and similar topics explain public rules and practical steps. They are not a promise that you will be paid, hired, monetized, or approved. Many programs are unavailable in some countries. Income, when it exists, varies and can be zero.
        </p>
        <h2>Not professional advice</h2>
        <p>
          Nothing here is legal, tax, immigration, financial, or medical advice. Prices, eligibility, and policies are checked against official pages when a fact is stated, and they can change after the &quot;last checked&quot; date on a guide. Confirm the current rule on the provider&apos;s own site before you pay or apply.
        </p>
        <h2>External sites and ads</h2>
        <p>
          Links leave BuildSkills. We do not control those sites. If advertising is shown, an advertiser&apos;s offer is not an endorsement and is not part of the guide. Advertising is covered in the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
        <p>
          Questions: <a href="mailto:buildskillspk@gmail.com">buildskillspk@gmail.com</a>.
        </p>
      </div>
    </Interior>
  );
}

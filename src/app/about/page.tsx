import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";
import { method, principles } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "About BuildSkills",
  description:
    "BuildSkills is a free beginner learning site for digital skills, run by the BuildSkills Editorial Team. Contact salimpk742@gmail.com.",
  path: "/about",
});

export default function Page() {
  return (
    <Interior
      kicker="About"
      title="Practical digital skills should be easier to learn."
      lede="BuildSkills is a free learning site for beginners worldwide. It turns questions about websites, SEO, AI tools, editing, social platforms, freelancing, and online earning into guides a person can follow."
    >
      <div className="prose" style={{ marginBottom: "3rem" }}>
        <h2>Who runs the site</h2>
        <p>
          The site is published by the BuildSkills Editorial Team. It is an independent educational project. It is not YouTube, Google, TikTok, Meta, Canva, Fiverr, or Upwork. The contact email is{" "}
          <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a>.
        </p>
        <h2>Mission</h2>
        <p>
          The job of the site is to give a beginner one accurate next step, with the official source linked when a rule or a price is stated. Pages are written for every country. When a program is missing in some places, including Creator Rewards in Pakistan, the page says so.
        </p>
        <h2>How pages are checked</h2>
        <p>
          A guide is updated when the underlying rule changes. The last-checked date on a guide is the date those facts were compared with the provider's own documentation. Corrections are welcome at the contact email. The full standard is the{" "}
          <Link href="/editorial-policy">editorial policy</Link>. Limits of the advice are in the <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </div>
      <ol className="method">
        {method.map((step) => (
          <li key={step.n} className="method-item">
            <p className="num tabular" style={{ margin: 0 }}>{step.n}</p>
            <h2>{step.title}</h2>
            <p style={{ fontSize: "0.875rem" }}>{step.body}</p>
          </li>
        ))}
      </ol>
      <dl className="principles">
        {principles.map((item) => (
          <div key={item.title} className="principle">
            <dt>{item.title}</dt>
            <dd>{item.body}</dd>
          </div>
        ))}
      </dl>
      <div className="actions" style={{ marginTop: "3rem" }}>
        <ButtonLink href="/learn">Explore the library</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
      </div>
    </Interior>
  );
}

import type { Metadata } from "next";
import { Interior } from "@/components/library";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites, business software, and search programs from the BuildSkills studio.",
};

export default function Page() {
  return (
    <Interior
      kicker="Work"
      title="Websites, software, and search."
      lede="Websites, operating software, and search programs. The frames on the homepage are the system these projects use."
    >
      <ul className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
        <li><Link className="index-row" href="/services#website-development"><span className="num tabular">01</span><span className="title">Business websites</span></Link></li>
        <li><Link className="index-row" href="/services#business-software"><span className="num tabular">02</span><span className="title">Operating software</span></Link></li>
        <li><Link className="index-row" href="/services#seo"><span className="num tabular">03</span><span className="title">Search programs</span></Link></li>
      </ul>
    </Interior>
  );
}

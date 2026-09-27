import type { Metadata } from "next";
import { ServiceIndex } from "@/components/indexes";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "A digital studio for websites, web applications, SEO, mobile apps, databases, business software, automation, design, content, and marketing.",
};

export default function Page() {
  return (
    <Interior
      kicker="Studio"
      title="Learn it yourself. Or let us build it."
      lede="BuildSkills practices the same subjects it teaches. The work is scoped, quiet, and finished — a studio, not a marketplace of strangers."
    >
      <ServiceIndex />
      <div className="actions" style={{ marginTop: "3rem" }}>
        <ButtonLink href="/contact">Start a project</ButtonLink>
        <ButtonLink href="/learn" variant="secondary">Learn it first</ButtonLink>
      </div>
    </Interior>
  );
}

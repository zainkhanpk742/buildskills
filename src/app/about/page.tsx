import type { Metadata } from "next";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";
import { method, principles } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "BuildSkills is a knowledge studio: practical answers, learning paths, and a digital studio for websites, SEO, apps, and software.",
};

export default function Page() {
  return (
    <Interior
      kicker="About"
      title="A serious place to learn the work, and to have it done."
      lede="BuildSkills is a hybrid. It is a knowledge library for people with a real question, and a studio for people who want the thing built. The two are the same subjects, at different distances."
    >
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
        <ButtonLink href="/contact" variant="secondary">Start a project</ButtonLink>
      </div>
    </Interior>
  );
}

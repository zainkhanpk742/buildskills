import type { Metadata } from "next";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";
import { method, principles } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "BuildSkills makes practical digital skills easier to understand for young people and beginners.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <Interior
      kicker="About"
      title="Practical digital skills should be easier to learn."
      lede="BuildSkills is a learning project for young people and beginners. It turns everyday questions about digital tools, online work, and creative skills into clear guides people can use."
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
        <ButtonLink href="/questions" variant="secondary">Browse questions</ButtonLink>
      </div>
    </Interior>
  );
}

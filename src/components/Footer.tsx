import Link from "next/link";
import { areas } from "@/data/site";
import { Mark } from "@/components/ui";

const columns = [
  {
    title: "Learn",
    links: [
      ["All fields", "/learn"],
      ["Questions", "/questions"],
      ["SEO path", "/learn/seo"],
      ["Websites", "/learn/websites"],
      ["Freelancing", "/learn/freelancing"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Studio", "/services"],
      ["Websites", "/services#website-development"],
      ["SEO", "/services#seo"],
      ["Software", "/services#business-software"],
      ["Start a project", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Reading list", "/resources"],
      ["Tools", "/tools"],
      ["Portfolio", "/portfolio"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Privacy", "/privacy-policy"],
      ["Terms", "/terms"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-grid section-pad">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="BuildSkills, home">
            <Mark onDark />
            <span className="wordmark">
              <b>Build</b>
              <em>Skills</em>
            </span>
          </Link>
          <p>Learn. Build. Grow.</p>
          <p>
            A knowledge studio for practical digital work — questions, learning paths, and the studio that can build the thing.
          </p>
        </div>
        <div className="footer-cols">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="kicker plain" style={{ color: "var(--on-dark-muted)" }}>{column.title}</p>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-base">
        <div className="page-wrap">
          <p>© {new Date().getFullYear()} BuildSkills</p>
          <p>{areas.length} fields of practice. One way through.</p>
        </div>
      </div>
    </footer>
  );
}

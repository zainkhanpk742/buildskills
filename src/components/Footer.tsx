import Link from "next/link";
import { areas } from "@/data/site";
import { Mark } from "@/components/ui";

const columns = [
  {
    title: "Learn",
    links: [
      ["All learning", "/learn"],
      ["Questions", "/questions"],
      ["Websites", "/learn/websites"],
      ["AI", "/learn/ai-productivity"],
      ["SEO", "/learn/seo"],
      ["Freelancing", "/learn/freelancing"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["AI tools", "/tools#ai-tools"],
      ["Video editing", "/learn/video-editing"],
      ["Photo editing", "/learn/photo-editing"],
      ["Tools", "/tools"],
      ["Resources", "/resources"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Projects", "/projects"],
      ["About", "/about"],
      ["Editorial policy", "/editorial-policy"],
      ["Contact", "/contact"],
      ["Privacy", "/privacy-policy"],
      ["Terms", "/terms"],
      ["Disclaimer", "/disclaimer"],
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
          <p>Learn. Practice. Grow.</p>
          <p>Clear answers and practical learning paths for digital skills, modern tools, and online work.</p>
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
          <p>{areas.length} learning areas. One way through.</p>
        </div>
      </div>
    </footer>
  );
}

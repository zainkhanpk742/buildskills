import Link from "next/link";
import { listedAreas } from "@/data/site";
import { Mark } from "@/components/ui";
import { SocialIcon } from "@/components/SocialIcon";
import { socialProfiles } from "@/lib/social";

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
      ["Services", "/services"],
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
          <ul aria-label="BuildSkills on social media" style={{ display: "flex", gap: "0.75rem", listStyle: "none", margin: "1rem 0 0", padding: 0 }}>
            {socialProfiles.map((profile) => (
              <li key={profile.url}>
                <a href={profile.url} target="_blank" rel="noopener" aria-label={`BuildSkills on ${profile.label}`} title={profile.label} style={{ color: "var(--on-dark-muted)", display: "inline-flex" }}>
                  <SocialIcon label={profile.label} size={20} />
                </a>
              </li>
            ))}
          </ul>
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
          <p>{listedAreas.length} learning areas. One way through.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { listedAreas } from "@/data/site";
import { Mark } from "@/components/ui";
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

const socialIcons: Record<string, string> = {
  Facebook: "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z",
  YouTube: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z",
};

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
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d={socialIcons[profile.label]} />
                  </svg>
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

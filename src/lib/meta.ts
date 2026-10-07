import type { Metadata } from "next";
import { seoMeta } from "@/data/seoMeta";

const BRAND = " | BuildSkills";
const SITE = "https://buildskills.com.pk";

/**
 * Build the document title. Hand-written titles in `seoMeta` win. Otherwise
 * the headline is used as written, with the brand appended only when the
 * result stays short. Titles are never padded with filler or cut mid-word.
 */
export function documentTitle(headline: string): string {
  const clean = headline.replace(/\s+/g, " ").trim();
  if (clean.includes("BuildSkills")) return clean;
  const branded = `${clean}${BRAND}`;
  return branded.length <= 60 ? branded : clean;
}

/**
 * Build the meta description from a summary. Hand-written descriptions in
 * `seoMeta` win. Otherwise the summary is used as written; if it is longer
 * than 160 characters it is shortened at the last full sentence that fits.
 */
export function metaDescription(summary: string): string {
  const text = summary.replace(/\s+/g, " ").trim();
  if (text.length <= 160) return text;
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [];
  let out = "";
  for (const sentence of sentences) {
    const next = `${out}${sentence}`.trim();
    if (next.length > 160) break;
    out = `${next} `;
  }
  out = out.trim();
  if (out.length >= 70) return out;
  const cut = text.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function pageMeta(options: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  canonicalPath?: string;
}): Metadata {
  const manual = seoMeta[options.path];
  const title = manual?.title ?? documentTitle(options.title);
  const description = manual?.description ?? metaDescription(options.description);
  const canonicalPath = options.canonicalPath ?? options.path;
  const url = canonicalPath === "/" ? SITE : `${SITE}${canonicalPath}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      url,
      siteName: "BuildSkills",
      type: options.type ?? "website",
      images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "BuildSkills: Learn digital skills free. SEO, websites, mobile apps, AI and freelancing guides at buildskills.com.pk" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "BuildSkills: Learn digital skills free. SEO, websites, mobile apps, AI and freelancing guides at buildskills.com.pk" }],
    },
  };
}

import type { Metadata } from "next";

const BRAND = " | BuildSkills";
const SITE = "https://buildskills.com.pk";

export function documentTitle(headline: string): string {
  const clean = headline.replace(/\s+/g, " ").trim();
  if (clean.includes("BuildSkills") && clean.length >= 50 && clean.length <= 60) return clean;
  const exact = `${clean}${BRAND}`;
  if (exact.length >= 50 && exact.length <= 60) return exact;
  if (exact.length > 60) {
    const maxHead = 60 - BRAND.length;
    let cut = clean.slice(0, maxHead);
    const space = cut.lastIndexOf(" ");
    if (space >= 28) cut = cut.slice(0, space);
    cut = cut.replace(/[\s:–—|-]+$/g, "").trim();
    let result = `${cut}${BRAND}`;
    if (result.length < 50) result = `${clean.slice(0, maxHead).replace(/[\s:–—|-]+$/g, "").trim()}${BRAND}`;
    if (result.length > 60) result = result.slice(0, 60).replace(/[\s:–—|-]+$/g, "");
    return result;
  }
  const tails = [" for beginners worldwide", ": a beginner guide", " beginner guide for young people"];
  for (const tail of tails) {
    const candidate = `${clean}${tail}${BRAND}`;
    if (candidate.length >= 50 && candidate.length <= 60) return candidate;
  }
  let body = `${clean} beginner guide for young people`;
  let result = `${body}${BRAND}`;
  if (result.length > 60) {
    body = body.slice(0, 60 - BRAND.length).replace(/[\s:–—|-]+$/g, "").trim();
    result = `${body}${BRAND}`;
  }
  if (result.length < 50) result = `${clean} for beginners worldwide today${BRAND}`;
  while (result.length < 50) result = result.replace(BRAND, ` guide${BRAND}`);
  if (result.length > 60) result = result.slice(0, 60).replace(/[\s:–—|-]+$/g, "");
  return result;
}

export function metaDescription(summary: string): string {
  let text = summary.replace(/\s+/g, " ").trim();
  const tails = [
    " A practical beginner guide for young people worldwide.",
    " Follow the steps, then check the official source.",
    " Start with one clear next step.",
  ];
  for (const tail of tails) {
    if (text.length >= 140) break;
    text = `${text}${tail}`.replace(/\s+/g, " ").trim();
  }
  if (text.length > 160) {
    const sliced = text.slice(0, 157);
    const space = sliced.lastIndexOf(" ");
    text = (space >= 140 ? sliced.slice(0, space) : text.slice(0, 160)).trim();
  }
  if (text.length < 140) text = `${text} Written for beginners in every country.`.trim();
  if (text.length > 160) text = text.slice(0, 160).trim();
  return text;
}

export function pageMeta(options: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const title = documentTitle(options.title);
  const description = metaDescription(options.description);
  const url = options.path === "/" ? SITE : `${SITE}${options.path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: options.path },
    openGraph: {
      title,
      description,
      url,
      siteName: "BuildSkills",
      type: options.type ?? "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "BuildSkills" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

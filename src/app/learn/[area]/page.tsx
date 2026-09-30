import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaView, GuideView } from "@/components/library";
import { areaBySlug, areas, guideBySlug } from "@/data/site";

const guideOnHub: Record<string, string> = {
  "chatgpt-prompts": "chatgpt-prompts/useful-chatgpt-prompts",
};

export function generateStaticParams() {
  return areas
    .filter((area) => area.slug !== "youtube" && area.slug !== "x-twitter")
    .map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const featured = guideOnHub[slug];
  if (featured) {
    const guide = guideBySlug(featured);
    if (!guide) return {};
    const canonical = `/learn/${slug}`;
    return {
      title: guide.title,
      description: guide.summary,
      alternates: { canonical },
      openGraph: {
        type: "article",
        title: guide.title,
        description: guide.summary,
        url: canonical,
        siteName: "BuildSkills",
      },
      twitter: { card: "summary", title: guide.title, description: guide.summary },
    };
  }
  const area = areaBySlug(slug);
  if (!area) return {};
  const canonical = `/learn/${area.slug}`;
  return {
    title: `${area.title} learning guides`,
    description: area.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: `${area.title} learning guides`,
      description: area.description,
      url: canonical,
      siteName: "BuildSkills",
    },
    twitter: {
      card: "summary",
      title: `${area.title} learning guides`,
      description: area.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const featured = guideOnHub[area];
  if (featured && guideBySlug(featured)) return <GuideView slug={featured} />;
  if (!areaBySlug(area)) notFound();
  return <AreaView slug={area} />;
}
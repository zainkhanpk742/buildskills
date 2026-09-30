import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaView, GuideView } from "@/components/library";
import { areaBySlug, areas, guideBySlug } from "@/data/site";
import { pageMeta } from "@/lib/meta";

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
    return pageMeta({
      title: guide.title,
      description: guide.summary,
      path: `/learn/${slug}`,
      type: "article",
    });
  }
  const area = areaBySlug(slug);
  if (!area) return {};
  return pageMeta({
    title: area.question,
    description: area.description,
    path: `/learn/${area.slug}`,
  });
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
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/library";
import { guideBySlug, guidePath, guides } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return guides.map((guide) => {
    const [area, ...rest] = guide.slug.split("/");
    return { area, slug: rest.join("/") };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; slug: string }>;
}): Promise<Metadata> {
  const { area, slug } = await params;
  const guide = guideBySlug(`${area}/${slug}`);
  if (!guide) return {};
  return pageMeta({
    title: guide.title,
    description: guide.summary,
    path: `/learn/${guide.slug}`,
    canonicalPath: guidePath(guide.slug),
    type: "article",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ area: string; slug: string }>;
}) {
  const { area, slug } = await params;
  const fullSlug = `${area}/${slug}`;
  if (!guideBySlug(fullSlug)) notFound();
  return <GuideView slug={fullSlug} />;
}

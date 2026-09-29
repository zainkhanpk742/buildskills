import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/library";
import { guideBySlug, guides } from "@/data/site";

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
  const canonical = `/learn/${guide.slug}`;
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
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.summary,
    },
  };
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

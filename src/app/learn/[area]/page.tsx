import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaView } from "@/components/library";
import { areaBySlug, areas } from "@/data/site";

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
  if (!areaBySlug(area)) notFound();
  return <AreaView slug={area} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/library";
import { areaBySlug, guides } from "@/data/site";

type Props = {
  params: Promise<{ area: string; slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => {
    const [area, slug] = guide.slug.split("/");
    return { area, slug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug, slug } = await params;
  const guide = guides.find((item) => item.slug === `${areaSlug}/${slug}`);
  if (!guide) return {};
  const area = areaBySlug(areaSlug);
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/learn/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      type: "article",
      url: `/learn/${guide.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { area, slug } = await params;
  const guide = guides.find((item) => item.slug === `${area}/${slug}`);
  if (!guide || !areaBySlug(area)) notFound();

  const url = `https://buildskills.com.pk/learn/${guide.slug}`;
  const breadcrumb = [
    { "@type": "ListItem", position: 1, name: "Learn", item: "https://buildskills.com.pk/learn" },
    { "@type": "ListItem", position: 2, name: guide.area, item: `https://buildskills.com.pk/learn/${area}` },
    { "@type": "ListItem", position: 3, name: guide.title, item: url },
  ];

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "BuildSkills",
      url: "https://buildskills.com.pk/about",
    },
    publisher: {
      "@type": "Organization",
      name: "BuildSkills",
      url: "https://buildskills.com.pk",
    },
  };

  return (
    <>
      <GuideView slug={guide.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumb,
          }),
        }}
      />
    </>
  );
}

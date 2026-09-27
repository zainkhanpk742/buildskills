import { websiteLessons } from "@/data/websiteLessons";

export const nav = [
  { label: "Learn", href: "/learn" },
  { label: "Questions", href: "/questions" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
] as const;

export type Area = {
  slug: string;
  title: string;
  summary: string;
  question: string;
  description: string;
};

export const areas: Area[] = [
  {
    slug: "websites",
    title: "Websites",
    question: "How do I build a website?",
    summary: "Plan, write, and publish a site that has a job.",
    description:
      "A website is a public structure. The useful order is the job, the pages, the words, then the build. This field covers that sequence without treating the tool as the point.",
  },
  {
    slug: "seo",
    title: "SEO",
    question: "How do I get my website found on Google?",
    summary: "Make useful pages easier to find in search.",
    description:
      "Search is a matching problem: a question, a page, and a reason to trust it. The path here runs from the definition to measurement, in the order the work actually happens.",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    question: "How do I make a mobile app?",
    summary: "Decide when an app is the right product, then shape it.",
    description:
      "An app earns its place when the job is repeated, personal, or tied to the phone. This field starts with that decision, then the workflow, the screens, and the data.",
  },
  {
    slug: "databases",
    title: "Databases",
    question: "How do I design a database?",
    summary: "Organize information so the rest of the system can trust it.",
    description:
      "Before tables and tools, name the things you need to remember and how they relate. A clear model saves more time than a clever query.",
  },
  {
    slug: "business-software",
    title: "Business Software",
    question: "How do I make software for my business?",
    summary: "Software shaped around a real workflow, not a generic suite.",
    description:
      "Business software should follow the work: who starts it, what they enter, what must be remembered, and what done looks like. The screens come after that description.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    question: "How do I market my business online?",
    summary: "Reach the people who already have the problem.",
    description:
      "Marketing is distribution with a point. Choose the audience, the offer, and one channel you can sustain. Noise is not a strategy.",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    question: "How do I create content people want?",
    summary: "Make pieces people needed, in a form they can use.",
    description:
      "Useful content answers a specific question or teaches a specific move. Topics, structure, and a reason to publish come before the posting schedule.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    question: "How do I design a logo and brand?",
    summary: "A visual system that makes the work recognizable.",
    description:
      "Design here means hierarchy, type, and a small set of decisions you can repeat. A logo is not a brand, and decoration is not a system.",
  },
  {
    slug: "freelancing",
    title: "Freelancing",
    question: "How do I start freelancing?",
    summary: "Turn a useful skill into paid, scoped work.",
    description:
      "Freelancing needs a skill someone will pay for, proof you can do it, and a way to start a conversation. The brand can be simple. The offer cannot be vague.",
  },
  {
    slug: "online-business",
    title: "Online Business",
    question: "How do I start an online business?",
    summary: "A offer, a way to deliver it, and a way to be found.",
    description:
      "An online business is an offer with a delivery system and a path to the right people. Start narrower than you want to. Breadth is what you earn.",
  },
  {
    slug: "facebook",
    title: "Facebook",
    question: "How do I grow and make money on Facebook?",
    summary: "Build a useful Facebook presence, reach the right audience, and understand routes to monetization.",
    description: "Learn Facebook through practical questions about pages, content, audience growth, advertising, leads, and monetization.",
  },
  {
    slug: "youtube",
    title: "YouTube",
    question: "How do I grow and make money on YouTube?",
    summary: "Build a channel around useful videos, an audience, and a sustainable way to earn.",
    description: "Learn YouTube through questions about channels, video ideas, titles, thumbnails, audience growth, analytics, and monetization.",
  },
  {
    slug: "x-twitter",
    title: "X / Twitter",
    question: "How do I grow and make money on X?",
    summary: "Turn useful ideas into posts, conversations, an audience, and business opportunities.",
    description: "Learn X through questions about profile setup, posting, audience growth, replies, communities, business use, and monetization.",
  },
  {
    slug: "instagram",
    title: "Instagram",
    question: "How do I grow and make money on Instagram?",
    summary: "Use posts, Reels, Stories, and a clear offer to build an audience and business.",
    description: "Learn Instagram through questions about profiles, content, Reels, Stories, reach, audience growth, and monetization.",
  },
  {
    slug: "tiktok",
    title: "TikTok",
    question: "How do I grow and make money on TikTok?",
    summary: "Create useful short-form content, understand distribution, and connect attention to an offer.",
    description: "Learn TikTok through questions about content ideas, short videos, audience growth, analytics, brand work, and monetization.",
  },
  {
    slug: "linkedin",
    title: "LinkedIn",
    question: "How do I use LinkedIn to get clients or a job?",
    summary: "Build a credible professional presence and turn useful conversations into opportunities.",
    description: "Learn LinkedIn through questions about profiles, networking, content, jobs, clients, and professional outreach.",
  },
  {
    slug: "ai-productivity",
    title: "AI & Productivity",
    question: "How do I use AI to get more done?",
    summary: "Use new tools on real work, without the theatre.",
    description:
      "AI is useful when it shortens a task you already understand. This field is about workflows, review, and judgment — not a pile of prompts with nowhere to go.",
  },
];

export type Guide = {
  slug: string;
  area: string;
  title: string;
  summary: string;
  paragraphs: string[];
  next: { href: string; label: string };
};

const detailedWebsiteGuides: Guide[] = websiteLessons.map((lesson) => ({
  slug: lesson.slug,
  area: lesson.area,
  title: lesson.title,
  summary: lesson.summary,
  paragraphs: [...lesson.paragraphs],
  next: { ...lesson.next },
}));

const websiteGuideSlugs = new Set(detailedWebsiteGuides.map((guide) => guide.slug));

export const guides: Guide[] = [
  ...guidesBase.filter((guide) => !websiteGuideSlugs.has(guide.slug)),
  ...detailedWebsiteGuides,
];

export const featuredQuestions = [
  "seo/what-is-seo",
  "websites/how-to-build-a-website",
  "seo/how-to-get-website-on-google",
  "seo/how-to-increase-website-traffic",
  "mobile-apps/how-to-build-a-mobile-app",
  "business-software/software-for-your-business",
  "freelancing/how-to-start-freelancing",
] as const;

export const pathSteps = [
  {
    n: "01",
    title: "Fundamentals",
    body: "What SEO is, and what it is not. A matching problem between a query and a useful page.",
    href: "/learn/seo/what-is-seo",
  },
  {
    n: "02",
    title: "How search engines work",
    body: "Crawl, index, rank. The only model you need before tactics.",
    href: "/learn/seo",
  },
  {
    n: "03",
    title: "Search intent",
    body: "Why the query exists, and what a good result is supposed to do.",
    href: "/learn/seo",
  },
  {
    n: "04",
    title: "Keyword research",
    body: "Finding the language people already use, then choosing what you can honestly answer.",
    href: "/learn/seo",
  },
  {
    n: "05",
    title: "On-page SEO",
    body: "Titles, structure, and pages that answer one thing cleanly.",
    href: "/learn/seo",
  },
  {
    n: "06",
    title: "Technical SEO",
    body: "The parts that let a good page be discovered, crawled, and kept.",
    href: "/learn/seo/how-to-get-website-on-google",
  },
  {
    n: "07",
    title: "Authority",
    body: "Why other pages point to you, and how that happens without theatre.",
    href: "/learn/seo",
  },
  {
    n: "08",
    title: "Measuring results",
    body: "The visits that matter, and whether people did the thing the page was for.",
    href: "/learn/seo/how-to-increase-website-traffic",
  },
] as const;

export type Service = {
  id: string;
  title: string;
  summary: string;
};

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    summary: "A business site with a clear structure, calm type, and a job to do.",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    summary: "Tools in the browser: workflows, accounts, and the screens people use.",
  },
  {
    id: "seo",
    title: "SEO",
    summary: "Search visibility from structure, content, and technical clarity.",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    summary: "Practical apps for a repeated workflow, not a feature tour.",
  },
  {
    id: "databases",
    title: "Databases",
    summary: "Information modeled so the rest of the system can trust it.",
  },
  {
    id: "business-software",
    title: "Business Software",
    summary: "Software shaped around how the work already happens.",
  },
  {
    id: "automation",
    title: "Automation",
    summary: "Repetitive steps handed to a process that does not drift.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    summary: "A visual system the work can repeat without starting over.",
  },
  {
    id: "content",
    title: "Content",
    summary: "Pages and pieces people needed, written to be found and used.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    summary: "Reaching the right people, without noise for its own sake.",
  },
];

export const method = [
  {
    n: "01",
    title: "Ask",
    body: "A real question, answered in plain language, with the next step named.",
  },
  {
    n: "02",
    title: "Learn",
    body: "The skill behind the answer, in an order that builds instead of scatters.",
  },
  {
    n: "03",
    title: "Build",
    body: "Turn the skill into a page, a product, a system, or a piece of work.",
  },
  {
    n: "04",
    title: "Grow",
    body: "See what happened. Improve the thing. Keep moving.",
  },
] as const;

export const principles = [
  {
    title: "Practical",
    body: "If you cannot use the answer, it is not finished.",
  },
  {
    title: "Clear",
    body: "Plain language. The hard part stays in the work, not the wording.",
  },
  {
    title: "Useful",
    body: "Every page points somewhere: a deeper guide, a path, or a project.",
  },
  {
    title: "Connected",
    body: "A question can become a skill. A skill can become something we build with you.",
  },
] as const;

export type SearchHit = {
  href: string;
  title: string;
  kind: "Question" | "Field" | "Studio" | "Path";
  detail: string;
  hay: string;
};

export function searchHits(): SearchHit[] {
  const questions: SearchHit[] = guides.map((guide) => ({
    href: `/learn/${guide.slug}`,
    title: guide.title,
    kind: "Question",
    detail: guide.area,
    hay: `${guide.title} ${guide.summary} ${guide.area}`.toLowerCase(),
  }));
  const fields: SearchHit[] = areas.map((area) => ({
    href: `/learn/${area.slug}`,
    title: area.title,
    kind: "Field",
    detail: "Learning area",
    hay: `${area.title} ${area.summary}`.toLowerCase(),
  }));
  const studio: SearchHit[] = services.map((service) => ({
    href: `/services#${service.id}`,
    title: service.title,
    kind: "Studio",
    detail: "Service",
    hay: `${service.title} ${service.summary}`.toLowerCase(),
  }));
  const path: SearchHit = {
    href: "/learn/seo",
    title: "SEO learning path",
    kind: "Path",
    detail: "8 lessons",
    hay: "seo learning path search engines keywords rankings",
  };
  return [...questions, path, ...fields, ...studio];
}

export function filterHits(query: string): SearchHit[] {
  const all = searchHits();
  const q = query.trim().toLowerCase();
  if (!q) {
    return featuredQuestions.map((slug) => {
      const guide = guides.find((item) => item.slug === slug)!;
      return {
        href: `/learn/${guide.slug}`,
        title: guide.title,
        kind: "Question" as const,
        detail: guide.area,
        hay: "",
      };
    });
  }
  return all.filter((hit) => hit.hay.includes(q)).slice(0, 8);
}

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function areaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function guidesInArea(title: string) {
  return guides.filter((guide) => guide.area === title);
}

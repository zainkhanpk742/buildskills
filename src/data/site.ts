import { websiteLessons } from "@/data/websiteLessons";
import { websiteGuides } from "@/data/websiteGuides";
import { seoSocialGuides } from "@/data/seoSocialGuides";
import { foundationGuides } from "@/data/foundationsGuides";
import { digitalSkillsGuides } from "@/data/digitalSkillsGuides";
import { aiVideoGenerationArea, aiVideoGuide } from "@/data/aiVideoGuide";
import { chatgptPromptsArea, chatgptPromptsGuide } from "@/data/chatgptPromptsGuide";
import { earningGuides } from "@/data/earningGuides";
import { addedFaqs } from "@/data/guideFaqs";
import { addedFaqsMore } from "@/data/guideFaqsMore";

export const nav = [
  { label: "Learn", href: "/learn" },
  { label: "Questions", href: "/questions" },
  { label: "AI", href: "/learn/ai-productivity" },
  { label: "Tools", href: "/tools" },
  { label: "Resources", href: "/resources" },
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
    summary: "Find the right audience, choose a channel, and measure useful results.",
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
    question: "How do I design a logo and brand identity?",
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
    summary: "Test a useful offer, learn the basics, and build a way to sell it.",
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
    question: "How can I use AI tools safely and productively?",
    summary: "Use new tools on real work, without the theatre.",
    description:
      "AI is useful when it shortens a task you already understand. This field is about workflows, review, and judgment — not a pile of prompts with nowhere to go.",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    question: "How do I edit a video?",
    summary: "Learn editing basics, choose software for your device, and make clear videos.",
    description:
      "Learn a repeatable editing workflow: organize footage, shape a story, improve sound, add captions, and export for the place people will watch.",
  },
  {
    slug: "photo-editing",
    title: "Photo Editing",
    question: "How do I edit a photo?",
    summary: "Improve photos and graphics with approachable editing workflows.",
    description:
      "Understand crops, light, color, image formats, and accessible design choices before you choose an editing app.",
  },
  aiVideoGenerationArea,
  chatgptPromptsArea,
];

export type Guide = {
  checkedDate?: string;
  difficulty?: "Beginner" | "Intermediate" | "Practical";
  estimatedMinutes?: number;
  faqs?: { question: string; answer: string }[];
  kind?: "Question" | "Guide";
  related?: string[];
  sources?: { label: string; url: string }[];
  sections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  slug: string;
  area: string;
  title: string;
  summary: string;
  paragraphs: string[];
  tools?: string[];
  topics?: string[];
  next: { href: string; label: string };
};

const guidesBase: Guide[] = [
  {
    slug: "seo/what-is-seo",
    area: "SEO",
    title: "What is SEO?",
    summary:
      "SEO is the work of helping a useful page get found for a question someone actually types.",
    paragraphs: [
      "Search engine optimization is not a trick, and it is not a traffic machine. A search engine tries to match a query with a page that answers it. SEO is how you make that match more likely: the language people use, the structure of the page, the ability to crawl it, and the reasons another page would treat yours as a source.",
      "Start with the question, not the tactic. If you cannot say who is searching and what a good answer does for them, keywords and plugins will not save the page. A clear page about one subject beats a vague page trying to rank for everything.",
      "The practical parts sit in a fixed order. Understand what search is. Learn how a page is discovered and indexed. Match the intent of the query. Write and structure the page. Remove technical barriers. Earn references. Then measure whether the right people arrived — not whether a chart went up.",
      "BuildSkills treats SEO as a learning path: understand how search works, make useful pages discoverable, and measure whether they help the people who find them.",
    ],
    next: { href: "/learn/seo", label: "Open the SEO path" },
  },
  {
    slug: "websites/how-to-build-a-website",
    area: "Websites",
    title: "How do I build a website?",
    summary:
      "Decide the job of the site before you pick a tool. Pages, words, then publish.",
    paragraphs: [
      "A website is a published structure with a job. Someone should be able to understand you, contact you, buy, book, or learn. If that job is fuzzy, the design will be fuzzy too. Write the job in one sentence before you open a builder.",
      "Then list only the pages that job requires. A focused business usually needs a homepage, a clear explanation of the work, proof or detail, and a way to start. Extra pages can wait. Each page needs a heading that says what it is, and text a person can skim.",
      "Layout comes after the words. Make the heading, the point, and the next action obvious. Choose type and spacing you can repeat. A quiet page that is easy to read will outperform a decorated page that is hard to finish.",
      "Publishing is the last step of the first version, not the first step. A domain, hosting, and a page you can edit later matter more than a stack you cannot maintain. When the site exists, the next field is usually search: can the right person find it?",
    ],
    next: { href: "/learn/seo/what-is-seo", label: "What is SEO?" },
  },
  {
    slug: "seo/how-to-get-website-on-google",
    area: "SEO",
    title: "How do I get my website on Google?",
    summary:
      "Google has to discover the site, be allowed to crawl it, and decide to keep it.",
    paragraphs: [
      "Publishing a website is not the same as being findable. Google has to discover a URL, be allowed to read it, and consider it worth storing in the index. Until that happens, rankings are not the problem. Discovery is.",
      "Give the site a public address. Make sure the important pages are linked from the homepage, not orphaned. A simple sitemap and a clear title on each page help a crawler understand what exists. Block nothing important with a stray noindex or a password wall.",
      "Search Console is the honest check. It tells you whether Google has seen the property, which pages it indexed, and which it refused. Submit the site, then read the coverage instead of guessing.",
      "After a page is indexed, you can work on whether it deserves to rank. That is a different job: intent, content, internal links, and technical health. Do not skip the first job to chase the second.",
    ],
    next: { href: "/learn/seo/how-to-increase-website-traffic", label: "How do I increase website traffic?" },
  },
  {
    slug: "seo/how-to-increase-website-traffic",
    area: "SEO",
    title: "How do I increase website traffic?",
    summary:
      "Choose the visits you want, then earn them with pages that answer specific questions.",
    paragraphs: [
      "More traffic is a result, not a task. The useful question is which visits you want, and which page should earn them. A hundred people with the problem you solve are worth more than a thousand who landed by accident.",
      "Most sites grow from a short list. Publish pages that answer specific questions. Title them the way a person would ask. Link those pages together so a crawler and a reader can move. Fix anything that blocks indexing. Then distribute: search, a place your audience already is, and a reason to pass the page on.",
      "Chasing every channel at once usually means finishing none of them. Pick one query you can answer better than the current results, and make that page the proof. Measure whether those people arrived and whether they did the thing the page was for.",
      "If the site has no clear offer, traffic will not know what to do when it arrives. Fix the page before you buy the audience.",
    ],
    next: { href: "/learn/seo", label: "Follow the full SEO path" },
  },
  {
    slug: "mobile-apps/how-to-build-a-mobile-app",
    area: "Mobile Apps",
    title: "How do I build a mobile app?",
    summary:
      "Build an app when the phone is part of the job. Otherwise start with a site.",
    paragraphs: [
      "A mobile app is worth building when the job is repeated, personal, or needs the phone itself: a camera, notifications, offline use, a workflow someone opens daily. If the job is to explain a service and take a message, a website is usually the right first product.",
      "If it is an app, name one workflow. Not a feature list. Who opens it, what they are trying to finish, and what the phone must remember. The screens are the steps of that workflow. Anything that does not serve the workflow waits.",
      "Then choose how to build: a native app, a cross-platform app, or a carefully made web app. The choice follows the workflow — performance, offline needs, and how often it will change — not whichever framework is fashionable.",
      "Write the workflow in plain language before you draw the interface. The drawing is easier when the sentences are already true.",
    ],
    next: { href: "/learn/business-software", label: "Business software" },
  },
  {
    slug: "business-software/software-for-your-business",
    area: "Business Software",
    title: "How do I create software for my business?",
    summary:
      "Describe the workflow first. The database and the screens are how you keep that promise.",
    paragraphs: [
      "Business software should match work you already do: the steps, the exceptions, and the facts people look up all day. A generic tool that almost fits will be routed around. The fit is the product.",
      "Write the workflow in sentences. Who starts it. What they enter. What the system must remember. What another person needs to see. What done looks like, including the cases that are not the happy path. If you cannot describe it, you cannot build it yet.",
      "The data model is that description made precise: the things, the relationships, and what must never be lost. Screens are how a person moves through the same description. Automation is only the steps that are boring and reliable enough to hand over.",
      "Build the smallest loop that a real person can finish. Use it. Then extend it. A wide system that nobody trusts is more expensive than a narrow one that is true.",
    ],
    next: { href: "/learn/business-software", label: "Learn about business software" },
  },
  {
    slug: "freelancing/how-to-start-freelancing",
    area: "Freelancing",
    title: "How can I start freelancing?",
    summary:
      "A paid skill, a few proofs, and a simple way for the right person to start a conversation.",
    paragraphs: [
      "Freelancing starts when someone will pay you for a skill they need and you can deliver. Websites, search, design, writing, and software are common because the output is visible. The skill comes first. The personal brand is a later refinement.",
      "Proof can be small. Three examples with a clear brief — what the work was for, what you did, what changed — are more convincing than a moodboard. Practice projects count if the brief is honest and the result is specific.",
      "You need a portfolio page that says what you do, who it is for, and what a client can expect. Then go where the problem already is. Waiting to be discovered is not a plan.",
      "Scope the work in writing. What is included, what is not, when it is done. Most early freelance pain is an unclear edge, not a weak logo.",
    ],
    next: { href: "/learn/websites", label: "Learn websites" },
  },
];


const structuredWebsiteGuides: Guide[] = websiteGuides.map((guide) => ({
  slug: guide.slug,
  area: guide.area,
  title: guide.title,
  summary: guide.summary,
  paragraphs: [],
  sections: guide.sections.map((section) => ({
    heading: section.heading,
    paragraphs: [...section.body],
    ...("bullets" in section && section.bullets ? { bullets: [...section.bullets] } : {}),
  })),
  ...("sources" in guide && guide.sources ? { sources: [...guide.sources] } : {}),
  ...("related" in guide && guide.related
    ? { related: guide.related.map((item) => item.href.replace(/^\/learn\//, "")) }
    : {}),
  next: { ...guide.next },
}));

const structuredWebsiteSlugs = new Set(structuredWebsiteGuides.map((guide) => guide.slug));
const supplementalWebsiteGuides: Guide[] = websiteLessons
  .filter((lesson) => !structuredWebsiteSlugs.has(lesson.slug))
  .map((lesson) => ({
    slug: lesson.slug,
    area: lesson.area,
    title: lesson.title,
    summary: lesson.summary,
    paragraphs: [...lesson.paragraphs],
    next: { ...lesson.next },
  }));

const websiteGuideSlugs = new Set([...structuredWebsiteGuides, ...supplementalWebsiteGuides].map((guide) => guide.slug));

const detailedSeoSocialGuides: Guide[] = seoSocialGuides.map((guide) => ({ ...guide }));
const detailedGuideSlugs = new Set(detailedSeoSocialGuides.map((guide) => guide.slug));
const detailedFoundationGuides: Guide[] = foundationGuides.map((guide) => ({
  ...guide,
  paragraphs: [],
}));

const earningSlugs = new Set(earningGuides.map((guide) => guide.slug));

export const guides: Guide[] = [
  ...guidesBase.filter((guide) => !websiteGuideSlugs.has(guide.slug) && !detailedGuideSlugs.has(guide.slug) && !earningSlugs.has(guide.slug)),
  ...structuredWebsiteGuides,
  ...supplementalWebsiteGuides,
  ...detailedSeoSocialGuides,
  ...detailedFoundationGuides,
  ...digitalSkillsGuides,
  aiVideoGuide,
  chatgptPromptsGuide,
  ...earningGuides,
].map((guide) => {
  const more = [...(addedFaqs[guide.slug] ?? []), ...(addedFaqsMore[guide.slug] ?? [])];
  if (!more.length) return guide;
  const seen = new Set((guide.faqs ?? []).map((item) => item.question));
  const faqs = [...(guide.faqs ?? [])];
  for (const item of more) {
    if (seen.has(item.question)) continue;
    seen.add(item.question);
    faqs.push(item);
  }
  return { ...guide, faqs };
});
export const featuredQuestions = [
  "seo/what-is-seo",
  "websites/how-to-build-a-website",
  "seo/how-to-get-website-on-google",
  "seo/how-to-increase-website-traffic",
  "mobile-apps/how-to-build-a-mobile-app",
  "business-software/software-for-your-business",
  "freelancing/how-to-start-freelancing",
  "freelancing/how-to-make-money-online-safely",
  "youtube/make-money-on-youtube",
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
    href: "/learn/seo/how-search-engines-work",
  },
  {
    n: "03",
    title: "Search intent",
    body: "Why the query exists, and what a good result is supposed to do.",
    href: "/learn/seo/search-intent",
  },
  {
    n: "04",
    title: "Keyword research",
    body: "Finding the language people already use, then choosing what you can honestly answer.",
    href: "/learn/seo/keyword-research",
  },
  {
    n: "05",
    title: "On-page SEO",
    body: "Titles, structure, and pages that answer one thing cleanly.",
    href: "/learn/seo/on-page-seo",
  },
  {
    n: "06",
    title: "Technical SEO",
    body: "The parts that let a good page be discovered, crawled, and kept.",
    href: "/learn/seo/technical-seo",
  },
  {
    n: "07",
    title: "Authority",
    body: "Why other pages point to you, and how that happens without theatre.",
    href: "/learn/seo/what-are-good-backlinks",
  },
  {
    n: "08",
    title: "Measuring results",
    body: "The visits that matter, and whether people did the thing the page was for.",
    href: "/learn/seo/search-console",
  },
] as const;

export const learningPaths = [
  {
    slug: "seo-basics",
    title: "Learn SEO step by step",
    href: "/learn/seo",
    description: "Understand how search works, make useful pages discoverable, and measure progress without ranking promises.",
    steps: pathSteps.map((step) => ({ title: step.title, href: step.href })),
  },
  {
    slug: "website-basics",
    title: "Build a website",
    href: "/learn/websites",
    description: "Go from the basics of the web to planning and publishing a first site.",
    steps: [
      { title: "What is a website?", href: "/learn/websites/what-is-a-website" },
      { title: "How websites work", href: "/learn/websites/how-websites-work" },
      { title: "Domain vs hosting", href: "/learn/websites/domain-vs-hosting" },
      { title: "HTML, CSS, and JavaScript", href: "/learn/websites/html-css-javascript" },
      { title: "Build and publish a website", href: "/learn/websites/how-to-build-a-website" },
      { title: "Learn SEO basics", href: "/learn/seo/what-is-seo" },
    ],
  },
  {
    slug: "ai-foundations",
    title: "Understand and use AI",
    href: "/learn/ai-productivity",
    description: "Learn the basics, write clearer instructions, practice with AI, and protect your privacy.",
    steps: [
      { title: "What is generative AI?", href: "/learn/ai-productivity/what-is-generative-ai" },
      { title: "How to write better AI prompts", href: "/learn/ai-productivity/how-to-write-ai-prompts" },
      { title: "How to use ChatGPT", href: "/learn/ai-productivity/how-to-use-chatgpt" },
      { title: "Use AI for studying", href: "/learn/ai-productivity/how-to-use-ai-for-studying" },
      { title: "AI safety and privacy", href: "/learn/ai-productivity/ai-safety-and-privacy" },
      { title: "Choose an AI tool", href: "/learn/ai-productivity/how-to-choose-an-ai-tool" },
    ],
  },
  {
    slug: "creator-skills",
    title: "Practice creator skills",
    href: "/learn/video-editing",
    description: "Connect visual design, editing, publishing, and platform learning.",
    steps: [
      { title: "Edit a photo", href: "/learn/photo-editing/how-to-edit-photos" },
      { title: "Make a video thumbnail", href: "/learn/photo-editing/how-to-make-a-thumbnail" },
      { title: "Edit a video", href: "/learn/video-editing/how-to-edit-a-video" },
      { title: "Add subtitles", href: "/learn/video-editing/how-to-add-subtitles" },
      { title: "Explore YouTube", href: "/learn/youtube" },
    ],
  },
  {
    slug: "online-work",
    title: "Learn about online work",
    href: "/learn/freelancing",
    description: "Build a skill, present your work honestly, and evaluate online opportunities carefully.",
    steps: [
      { title: "Choose a skill and build proof", href: "/learn/freelancing/how-to-start-freelancing" },
      { title: "Make money online safely", href: "/learn/freelancing/how-to-make-money-online-safely" },
      { title: "Build a portfolio website", href: "/learn/websites/how-to-build-a-website" },
      { title: "Explore freelancing guides", href: "/learn/freelancing" },
    ],
  },
] as const;

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
    body: "Every page points somewhere: a deeper guide, a path, or a chance to practice.",
  },
  {
    title: "Connected",
    body: "A question can become a skill. A skill can become a project you make yourself.",
  },
] as const;

export type SearchHitKind = "Question" | "Guide" | "Learning Path" | "Tool" | "Topic";

export type SearchHit = {
  href: string;
  title: string;
  kind: SearchHitKind;
  detail: string;
  hay: string;
};

export function searchHits(): SearchHit[] {
  const questions: SearchHit[] = guides.map((guide) => ({
    href: `/learn/${guide.slug}`,
    title: guide.title,
    kind: guide.kind ?? (guide.title.trim().endsWith("?") ? "Question" : "Guide"),
    detail: guide.area,
    hay: `${guide.title} ${guide.summary} ${guide.area} ${(guide.topics ?? []).join(" ")} ${(guide.tools ?? []).join(" ")} ${guide.paragraphs.join(" ")} ${guide.sections?.map((section) => `${section.heading} ${section.paragraphs.join(" ")} ${(section.bullets ?? []).join(" ")}`).join(" ") ?? ""}`.toLowerCase(),
  }));
  const fields: SearchHit[] = areas.map((area) => ({
    href: `/learn/${area.slug}`,
    title: area.title,
    kind: "Topic",
    detail: "Learning area",
    hay: `${area.title} ${area.question} ${area.summary} ${area.description}`.toLowerCase(),
  }));
  const paths: SearchHit[] = learningPaths.map((path) => ({
    href: path.href,
    title: path.title,
    kind: "Learning Path",
    detail: `${path.steps.length} lessons`,
    hay: `${path.title} ${path.description} ${path.steps.map((step) => step.title).join(" ")}`.toLowerCase(),
  }));
  const guideByTool = new Map<string, Guide>();
  for (const guide of guides) {
    for (const tool of guide.tools ?? []) {
      if (!tool.toLowerCase().includes("documentation") && !guideByTool.has(tool)) {
        guideByTool.set(tool, guide);
      }
    }
  }
  const tools: SearchHit[] = [...guideByTool].map(([tool, guide]) => ({
    href: `/learn/${guide.slug}`,
    title: tool,
    kind: "Tool",
    detail: `${guide.area} guide`,
    hay: `${tool} ${guide.title} ${guide.summary} ${guide.area}`.toLowerCase(),
  }));
  return [...questions, ...paths, ...fields, ...tools];
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
        kind: guide.kind ?? (guide.title.trim().endsWith("?") ? "Question" as const : "Guide" as const),
        detail: guide.area,
        hay: "",
      };
    });
  }
  const terms = q.split(/\s+/).filter(Boolean);
  return all
    .map((hit) => {
      const score = terms.reduce((count, term) => count + (hit.hay.includes(term) ? 1 : 0), 0);
      return { hit, score };
    })
    .filter(({ score }) => score > 0 && score / terms.length >= 0.6)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ hit }) => hit);
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

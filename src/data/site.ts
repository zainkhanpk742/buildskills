import { websiteLessons } from "@/data/websiteLessons";
import { websiteGuides } from "@/data/websiteGuides";
import { seoSocialGuides } from "@/data/seoSocialGuides";
import { foundationGuides } from "@/data/foundationsGuides";
import { digitalSkillsGuides } from "@/data/digitalSkillsGuides";
import { aiVideoGenerationArea, aiVideoGuide } from "@/data/aiVideoGuide";
import { chatgptPromptsArea, chatgptPromptsGuide } from "@/data/chatgptPromptsGuide";
import { earningGuides } from "@/data/earningGuides";
import { thinHubGuides } from "@/data/thinHubGuides";
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
      "SEO means search engine optimization: making a useful page easier to find in Google when someone searches for that topic. It is not an ad, and it is not a trick.",
    checkedDate: "2026-09-30",
    difficulty: "Beginner",
    paragraphs: [],
    sections: [
      {
        heading: "What does SEO mean?",
        paragraphs: [
          "SEO is the work of helping the right page show up when someone types a question into a search engine. Google tries to match that search with a page that answers it. You make the match more likely by using the words people actually type, structuring the page so it can be read, and not blocking the crawler.",
          "Search engine optimization is free to practice. You do not pay Google for an organic result. Google Ads is a separate product: you pay to show an ad. A page can do both, but they are not the same job.",
        ],
      },
      {
        heading: "How does SEO work?",
        paragraphs: [
          "Google finds pages by following links and by reading a sitemap. It then decides whether to keep the page in its index. Only an indexed page can appear in search. After that, many systems decide which indexed pages to show, and in what order, for a particular query.",
          "A beginner does the work in this order. Say who the page is for. Write one clear answer. Give the page a title and a heading that match the question. Link it from the rest of the site. Check in Google Search Console that Google can see it. Improve the page when the report shows people found it but did not click, or clicked and left.",
        ],
      },
      {
        heading: "What is not SEO?",
        paragraphs: [
          "Repeating a keyword, hiding text, buying links, or copying another site are not SEO. Google's spam policies treat those as abuse. A plugin cannot rank a page that does not answer anything. Nobody can honestly sell you a guaranteed position.",
          "The next pages in this path cover how search engines work, keyword research, on-page SEO, technical SEO, and Search Console. Start with the question your reader types. Then make one page that answers it.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central: How Search works", url: "https://developers.google.com/search/docs/fundamentals/how-search-works" },
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
      "Publish the site on a public address, let Google crawl it, and check the result in Search Console. Paying for an ad does not put the page in the free results.",
    checkedDate: "2026-09-30",
    difficulty: "Beginner",
    paragraphs: [],
    sections: [
      {
        heading: "How to get a website on Google",
        paragraphs: [
          "A new site is not in Google just because the host says it is live. Google has to discover the address, be allowed to read the page, and decide to keep it. Until that happens, rankings are not the problem. Discovery is.",
          "Put the important pages on a public URL that does not ask for a password. Link them from the homepage. Give each page its own title. Do not leave a noindex tag or a robots.txt block on a page you want found. A sitemap lists the URLs you care about. Submit that sitemap in Google Search Console after you verify that you own the site.",
        ],
      },
      {
        heading: "Indexing is not the same as ranking",
        paragraphs: [
          "Indexed means Google stored the page. Ranking means Google chose to show it for a search. You can ask Google to recrawl a URL in Search Console. That request does not guarantee the page will be kept, and it does not buy a position.",
          "If the site still does not appear, inspect the exact URL. Search Console will say whether the page is indexed or why it was left out. Common causes are a new site with no links, a block you added by accident, or a page with almost no text. Do not pay a service that claims it can force Google to index you.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Console", url: "https://search.google.com/search-console/about" },
      { label: "Google Search Central: sitemaps", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" },
    ],
    next: { href: "/learn/seo/how-to-increase-website-traffic", label: "How do I increase website traffic?" },
  },
  {
    slug: "seo/how-to-increase-website-traffic",
    area: "SEO",
    title: "How do I increase website traffic?",
    summary:
      "Increase website traffic by publishing pages that match real searches, earning clicks, and not buying fake visits.",
    checkedDate: "2026-09-30",
    difficulty: "Beginner",
    paragraphs: [],
    sections: [
      {
        heading: "How to increase website traffic from search",
        paragraphs: [
          "More traffic is a result, not a task. Decide which visits you want, then give each group a page. A hundred people who needed the answer are worth more than a thousand who arrived by accident.",
          "The usual path is simple. Find the question in your own words and in Search Console. Write one page that answers it in the title, the heading, and the first paragraph. Link that page from related guides. Share it where your readers already are. Then read the Performance report: impressions mean the page was shown, clicks mean someone chose it.",
        ],
      },
      {
        heading: "What does not increase useful traffic",
        paragraphs: [
          "Buying visitors, buying links, or publishing dozens of thin pages can raise a chart and still hurt the site. Google's spam policies cover link schemes and scaled pages that add nothing. Social posts can bring people in, but they do not replace a page that matches a search.",
          "If traffic falls, do not rewrite the whole site in one day. Check whether one page, one query, or the whole site changed, and whether you edited something that week. Fix the page people already find before you chase a bigger keyword.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Central: helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google Search Central: spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
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
  ...thinHubGuides,
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

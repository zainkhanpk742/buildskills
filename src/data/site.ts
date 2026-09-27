import { websiteGuides } from "./websiteGuides";
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
  description: string;
};

export const areas: Area[] = [
  {
    slug: "websites",
    title: "Websites",
    summary: "Plan, write, and publish a site that has a job.",
    description:
      "A website is a public structure. The useful order is the job, the pages, the words, then the build. This field covers that sequence without treating the tool as the point.",
  },
  {
    slug: "seo",
    title: "SEO",
    summary: "Make useful pages easier to find in search.",
    description:
      "Search is a matching problem: a question, a page, and a reason to trust it. The path here runs from the definition to measurement, in the order the work actually happens.",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    summary: "Decide when an app is the right product, then shape it.",
    description:
      "An app earns its place when the job is repeated, personal, or tied to the phone. This field starts with that decision, then the workflow, the screens, and the data.",
  },
  {
    slug: "databases",
    title: "Databases",
    summary: "Organize information so the rest of the system can trust it.",
    description:
      "Before tables and tools, name the things you need to remember and how they relate. A clear model saves more time than a clever query.",
  },
  {
    slug: "business-software",
    title: "Business Software",
    summary: "Software shaped around a real workflow, not a generic suite.",
    description:
      "Business software should follow the work: who starts it, what they enter, what must be remembered, and what done looks like. The screens come after that description.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "Reach the people who already have the problem.",
    description:
      "Marketing is distribution with a point. Choose the audience, the offer, and one channel you can sustain. Noise is not a strategy.",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    summary: "Make pieces people needed, in a form they can use.",
    description:
      "Useful content answers a specific question or teaches a specific move. Topics, structure, and a reason to publish come before the posting schedule.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "A visual system that makes the work recognizable.",
    description:
      "Design here means hierarchy, type, and a small set of decisions you can repeat. A logo is not a brand, and decoration is not a system.",
  },
  {
    slug: "freelancing",
    title: "Freelancing",
    summary: "Turn a useful skill into paid, scoped work.",
    description:
      "Freelancing needs a skill someone will pay for, proof you can do it, and a way to start a conversation. The brand can be simple. The offer cannot be vague.",
  },
  {
    slug: "online-business",
    title: "Online Business",
    summary: "A offer, a way to deliver it, and a way to be found.",
    description:
      "An online business is an offer with a delivery system and a path to the right people. Start narrower than you want to. Breadth is what you earn.",
  },
  {
    slug: "ai-productivity",
    title: "AI & Productivity",
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
  sections?: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  sources?: { label: string; url: string }[];
  related?: { href: string; label: string }[];
  lastReviewed?: string;
};

export const guides: Guide[] = [
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
      "BuildSkills treats SEO as that path. You can follow it yourself, or the studio can do the structural and content work with you.",
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
    next: { href: "/services", label: "Have the studio build it" },
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
      "You need a page that says what you do, who it is for, and how a project starts. A price, or a clear way you scope a price. Then go where the problem already is. Waiting to be discovered is not a plan.",
      "Scope the work in writing. What is included, what is not, when it is done. Most early freelance pain is an unclear edge, not a weak logo.",
    ],
    next: { href: "/learn/websites", label: "Learn websites" },
  },
  {
    slug: "seo/what-are-good-backlinks",
    area: "SEO",
    title: "What are good backlinks?",
    summary: "A useful backlink is a relevant, editorially earned link from a page that genuinely helps its readers; buying or manipulating links for rankings is a different practice and can violate Google's spam policies.",
    sections: [
      {
        heading: "What a backlink is",
        body: [
          "A backlink is a link from another website to a page on your site. Links can help people discover resources and can also help search engines understand relationships between pages.",
          "Not every link has the same context or value. A relevant link placed because it helps the reader is fundamentally different from a link created mainly to manipulate search rankings."
        ]
      },
      {
        heading: "What makes a backlink useful",
        body: [
          "The strongest reason to earn a link is that another publisher genuinely wants to reference your work. Relevance matters: a link makes more sense when the source and destination are connected by a real topic or purpose.",
          "Useful original resources, research, practical guides, tools, case studies, and genuinely noteworthy work can give other sites a reason to cite your page."
        ]
      },
      {
        heading: "What to avoid",
        body: [
          "Do not build a backlink strategy around buying links for ranking credit, automated link creation, excessive link exchanges, low-quality directories, or other schemes designed primarily to manipulate rankings.",
          "Google's spam policies specifically address link spam. A link strategy should therefore begin with creating something worth referencing and making the resource easy to discover."
        ],
        bullets: [
          "Avoid buying or selling links for ranking purposes.",
          "Avoid automated programs that create links.",
          "Avoid excessive link exchanges made primarily for SEO.",
          "Avoid low-quality directories or bookmark sites created mainly for links.",
          "Do not stuff keywords into anchor text unnaturally."
        ]
      },
      {
        heading: "A practical approach",
        body: [
          "Create a useful page, publish it on a site that is easy to crawl, and tell relevant people about it. If someone independently chooses to reference it because it helps their audience, that is a much healthier foundation than trying to manufacture link volume.",
          "Also use internal links on your own site. Google says links help it discover pages and understand the relationships between them, so important pages should be reachable through descriptive links."
        ]
      }
    ],
    sources: [
      { label: "Google Search Central: Link best practices", url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable" },
      { label: "Google Search Central: Spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }
    ],
    related: [
      { href: "/learn/seo/what-is-seo", label: "What is SEO?" },
      { href: "/learn/seo/how-to-get-website-on-google", label: "How do I get my website on Google?" },
      { href: "/learn/websites/website-structure", label: "How should I structure a website?" }
    ],
    next: { href: "/learn/seo/what-is-seo", label: "Return to the SEO foundation" }
  },
  ...websiteGuides,
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

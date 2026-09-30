export type DetailedGuide = {
  checkedDate?: string;
  difficulty?: "Beginner" | "Intermediate" | "Practical";
  faqs?: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
  sections?: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  slug: string;
  area: string;
  title: string;
  summary: string;
  paragraphs: string[];
  next: { href: string; label: string };
};

export const seoSocialGuides: DetailedGuide[] = [
  {
    slug: "seo/how-search-engines-work",
    area: "SEO",
    title: "How do search engines work?",
    summary: "Understand crawling, indexing, and serving before trying SEO tactics.",
    paragraphs: [
      "Search starts with discovery. Search engines use automated crawlers to find URLs through links, sitemaps, redirects, and other signals. A public page can exist without being indexed, so publishing alone does not guarantee visibility.",
      "Crawling is the process of fetching and processing a URL. Indexing is the process of deciding whether and how that content should be stored. Serving is the later step where the search engine selects and orders results for a query.",
      "Your job as a site owner is to make important content accessible, understandable, and useful. Pages should have stable URLs, crawlable links, meaningful titles and headings, and content that answers the user's need.",
      "Search Console helps you inspect individual URLs and monitor indexing and search performance. Use it to diagnose real problems instead of guessing from rankings alone.",
      "A useful mental model is: discover → crawl → understand → index → serve. SEO work becomes much easier once you know which stage you are actually trying to improve.",
    ],
    sources: [
      { label: "Google Search Central: How Search works", url: "https://developers.google.com/search/docs/fundamentals/how-search-works" },
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    ],
    next: { href: "/learn/seo/search-intent", label: "Learn search intent" }
  },
  {
    slug: "seo/search-intent",
    area: "SEO",
    title: "What is search intent and why does it matter?",
    summary: "Match a page to what the searcher is actually trying to accomplish.",
    paragraphs: [
      "Search intent is the underlying job behind a query. Someone searching for 'what is DNS' wants an explanation, while someone searching 'buy domain name' is trying to take a commercial action. The words may overlap, but the useful page is different.",
      "Before creating a page, write the question in plain language and describe the expected answer. Then inspect the kinds of results Google shows for that query. This gives you evidence about the format and depth people are being served.",
      "Common intents include learning, comparing, finding a specific site or service, evaluating an option, and completing a transaction. One page can support more than one intent, but it should have a clear primary job.",
      "Do not force a product page to answer a beginner question just because the keyword has volume. Build the page that genuinely satisfies the visitor, then connect it to the next commercial step with relevant internal links.",
      "For BuildSkills, this means a learning guide can answer the question thoroughly while a service page explains how the work can be done for a client. They support each other without becoming duplicate pages.",
    ],
    next: { href: "/learn/seo/keyword-research", label: "Learn keyword research" }
  },
  {
    slug: "seo/keyword-research",
    area: "SEO",
    title: "How do I do keyword research?",
    summary: "Find the language, questions, and topics that connect real people to useful pages.",
    paragraphs: [
      "Keyword research is not a hunt for magic words. It is a way to discover how people describe a problem, what they want to know, and which questions deserve a page.",
      "Start with your audience and offer. List the problems they experience, the tasks they need to complete, and the terms they might use. Add questions from customer conversations, support requests, forums, search suggestions, and your own expertise.",
      "Group related queries by intent rather than creating one thin page for every variation. Several phrases may belong on one authoritative guide. A separate page makes sense when the user needs a meaningfully different answer.",
      "Prioritize topics where you can provide something useful: first-hand experience, original examples, clearer explanations, better structure, or a practical tool. Search volume alone does not make a topic valuable.",
      "Build a content map: topic → primary question → authoritative URL → supporting questions → internal links → next action. This turns research into a publishing system instead of a spreadsheet of disconnected keywords.",
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    next: { href: "/learn/seo/on-page-seo", label: "Learn on-page SEO" }
  },
  {
    slug: "seo/on-page-seo",
    area: "SEO",
    title: "What is on-page SEO?",
    summary: "Improve the content and structure of individual pages so people and search engines can understand them.",
    paragraphs: [
      "On-page SEO is the work you do within a page: its subject, title, headings, visible content, links, images, and supporting metadata. The goal is clarity, not repeating a keyword as many times as possible.",
      "Give each important page a descriptive, unique title and a clear main heading. Explain the topic early, then organize the rest into sections that answer natural follow-up questions.",
      "Use the words people actually use when they make sense, but write for humans. Descriptive image alt text, useful link text, semantic HTML, and readable structure help both accessibility and search understanding.",
      "Internal links are part of on-page SEO. Link from relevant pages using anchor text that tells the visitor what they will find. Important pages should be reachable through normal crawlable links.",
      "Review the page as a visitor: Can I tell what this page answers in a few seconds? Can I find the next question without searching again? Does the page provide enough substance to finish the task?",
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central: Title links", url: "https://developers.google.com/search/docs/appearance/title-link" },
    ],
    next: { href: "/learn/seo/technical-seo", label: "Learn technical SEO" }
  },
  {
    slug: "seo/technical-seo",
    area: "SEO",
    title: "What is technical SEO?",
    summary: "Make a site accessible, crawlable, indexable, secure, and technically understandable.",
    paragraphs: [
      "Technical SEO covers the parts of a site that affect how search engines access and understand it. It includes crawlability, indexability, URLs, redirects, canonicalization, structured data where appropriate, mobile behavior, performance, and server responses.",
      "Start with fundamentals. Important pages should return successful responses, be publicly accessible, contain useful HTML, and be reachable through crawlable links. Do not accidentally block important pages with robots.txt, authentication, or noindex rules.",
      "Use a sitemap to help communicate the URLs you care about. Keep URLs stable and understandable. When content moves, use appropriate redirects and review canonical URLs rather than creating several competing versions.",
      "Technical SEO is not a license to add complexity. A simple site with clean HTML and clear links can be easier to crawl than an elaborate system full of unnecessary scripts and duplicate URLs.",
      "Use Search Console, browser tools, server logs, and URL inspection to diagnose actual problems. Fix the specific failure you can observe instead of applying a generic checklist to every page.",
    ],
    sources: [
      { label: "Google Search Central: Search Essentials", url: "https://developers.google.com/search/docs/essentials" },
      { label: "Google Search Central: Build and submit a sitemap", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" },
    ],
    next: { href: "/learn/seo/internal-linking", label: "Learn internal linking" }
  },
  {
    slug: "seo/internal-linking",
    area: "SEO",
    title: "How should I build internal links?",
    summary: "Connect related pages so visitors and search engines can discover the structure of your site.",
    paragraphs: [
      "An internal link connects one page on your site to another. Good internal linking helps a reader continue learning and helps search engines discover URLs and understand relationships between topics.",
      "Start with the pages that matter most. Give each important guide links from relevant hub pages and from other guides where the connection is genuinely useful. Avoid adding a giant list of unrelated links just to increase link counts.",
      "Use descriptive anchor text. 'Learn technical SEO' tells a reader what the destination is; 'click here' does not. Keep the surrounding sentence natural and make the relationship between the two pages obvious.",
      "Think in clusters. A broad SEO guide can link to search intent, keyword research, on-page SEO, technical SEO, and measurement. Each detailed guide can then link back to the hub and forward to the next useful concept.",
      "Audit for orphan pages: important URLs that have no useful internal links pointing to them. If a page matters enough to publish, it usually deserves a clear place in the site's navigation or content network.",
    ],
    next: { href: "/learn/seo/search-console", label: "Learn Search Console" }
  },
  {
    slug: "seo/search-console",
    area: "SEO",
    title: "How do I use Google Search Console?",
    summary: "Use Search Console to understand indexing, queries, clicks, impressions, and search problems.",
    paragraphs: [
      "Google Search Console is a diagnostic and measurement tool for website owners. It can help you understand whether Google can access pages, which queries and pages receive search traffic, and where technical or indexing issues need attention.",
      "Start by verifying the correct property. Submit your sitemap when appropriate, then use URL Inspection for important pages. Inspection can help you see indexing status and request crawling after meaningful changes.",
      "Performance reports show metrics such as clicks, impressions, click-through rate, and average position. Read these together. A page can receive many impressions without many clicks, or many clicks without converting into the action the business actually wants.",
      "When traffic changes, investigate before rewriting everything. Check whether the change affects one page, a topic cluster, a device type, a query group, or the whole site. Then compare the timing with site changes and search documentation.",
      "Search Console is not a ranking guarantee. It is evidence about Google's systems and your site's search performance. Use it alongside analytics, business outcomes, and direct review of the pages.",
    ],
    next: { href: "/learn/seo/seo-content-strategy", label: "Build an SEO content strategy" }
  },
  {
    slug: "seo/seo-content-strategy",
    area: "SEO",
    title: "How do I build an SEO content strategy?",
    summary: "Create a focused library of useful pages around the questions your audience actually has.",
    paragraphs: [
      "A content strategy starts with the audience, not a publishing quota. Identify the problems you can solve, the questions people ask before buying or learning, and the evidence or expertise you can bring to those questions.",
      "Create topic clusters. Give each major subject one strong hub or guide, then publish supporting pages for distinct questions. Link them together so a visitor can move from beginner concepts to practical tasks and finally to a relevant service or product.",
      "Use different page types deliberately. Definitions can attract beginners. Tutorials can help people act. Comparisons can support decisions. Case studies and portfolio pages can provide evidence. Service pages explain delivery. Mixing these roles on every page makes the site harder to understand.",
      "Update content when facts, tools, screenshots, policies, or procedures change. Do not manufacture freshness by changing dates without improving the content.",
      "Measure the strategy by useful outcomes: relevant search impressions, qualified visits, enquiries, sign-ups, completed tasks, and the growth of your authoritative topic coverage. Rankings are one signal, not the whole business.",
    ],
    sources: [
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google Search Central: Spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    ],
    next: { href: "/learn/seo/local-seo", label: "Learn local SEO" }
  },
  {
    slug: "seo/local-seo",
    area: "SEO",
    title: "How do I do local SEO for a business?",
    summary: "Make a local business easy to understand, verify, find, and contact.",
    paragraphs: [
      "Local SEO helps people find a business when location is part of the need. The fundamentals are still useful information, crawlable pages, clear business details, and a trustworthy presence across relevant local surfaces.",
      "Make the website clear about what the business does, where it serves customers, and how people can contact or visit it. Use a dedicated page when a location or service area deserves a genuinely useful explanation, not a collection of near-identical city pages.",
      "Keep business information consistent where it matters. Use the business's real name, address or service area, phone, hours, and website details. Claim and maintain the relevant business profile provided by the search platform.",
      "Create useful local content when you have something specific to say: service information, area-specific guidance, project examples, FAQs, or practical resources. Avoid doorway pages that exist only to capture location keywords.",
      "Ask for genuine customer feedback through legitimate channels and respond professionally. Never invent reviews or offer misleading incentives. Local trust is part of the product, not just a ranking tactic.",
    ],
    next: { href: "/learn/seo", label: "Return to the SEO path" }
  },

  {
    slug: "youtube/how-to-start-a-youtube-channel",
    area: "YouTube",
    title: "How do I start a YouTube channel?",
    summary: "Set up a channel around a clear audience, subject, and repeatable type of video.",
    paragraphs: [
      "A YouTube channel is a home for your videos, playlists, identity, and audience. You need a Google Account and a YouTube channel to upload videos, comment, or create playlists. A channel can be personal or use a different business name through the available channel setup options.",
      "Before publishing, define the channel promise: who is it for, what will they learn or experience, and why should they return? 'Technology' is broad; 'practical website tutorials for small businesses' is a usable editorial direction.",
      "Set up the profile so a visitor can understand the subject quickly. Use a recognizable name, profile image, banner, description, and useful links. Organize early videos into playlists when they form a learning sequence.",
      "Plan the first ten videos before obsessing over equipment. A phone, clear audio, good lighting, and useful teaching can be enough to begin. Improve production when the audience and workflow justify it.",
      "Your first goal is not to look like a large channel. It is to publish a repeatable format, learn from viewer behavior, and build a library that answers related questions.",
      "Think about the viewer's goal as well as subscribers. Someone starting a channel needs clear steps for choosing a subject, setting up the channel, and publishing a first video. Make the title and video match the actual task rather than forcing several related topics into one lesson.",
      "A useful beginner channel can be built with a simple workflow: choose the audience, choose the recurring topic, plan the first ten videos, record clearly, edit for understanding, write an accurate title and description, publish, then study the response in YouTube Analytics. That process matters more than expensive equipment."
    ],
    next: { href: "/learn/youtube/video-ideas", label: "Find YouTube video ideas" }
  },
  {
    slug: "youtube/video-ideas",
    area: "YouTube",
    title: "How do I find YouTube video ideas?",
    summary: "Turn real questions, problems, demonstrations, and audience feedback into a repeatable video pipeline.",
    paragraphs: [
      "Good video ideas usually begin with a problem. Collect questions from customers, comments, search suggestions, support conversations, communities, and your own work. If people repeatedly ask you to explain something, it may be a strong candidate.",
      "Build several formats around one subject: beginner explanation, step-by-step tutorial, mistakes to avoid, comparison, case study, workflow demonstration, and answer to a specific question.",
      "Package the idea before recording. Write the viewer's problem, the promised result, the three to five points you need to cover, and the action they should be able to take after watching.",
      "Avoid making every video a trend chase. Trends can be useful, but an evergreen library of practical answers can continue attracting viewers after publication.",
      "Keep an idea backlog with a reason for each idea. When analytics show that a topic attracts the right audience, expand that topic into related videos rather than starting from zero every week.",
      "Use keyword research as an idea source, not as a command to make thin videos. A search phrase such as how to make money on YouTube can lead to several genuinely different lessons: YouTube monetization requirements, ways to monetize a small channel, how ads work, how memberships work, how to sell a service, and how to avoid monetization problems.",
      "Build clusters around successful topics. If one video about website SEO attracts the right viewers, create connected videos that answer the next questions they are likely to have. This gives the channel a coherent subject and gives viewers a reason to watch more than one video."
    ],
    next: { href: "/learn/youtube/titles-thumbnails", label: "Learn titles and thumbnails" }
  },
  {
    slug: "youtube/titles-thumbnails",
    area: "YouTube",
    title: "How do I make better YouTube titles and thumbnails?",
    summary: "Make the promise of the video clear enough that the right viewer knows what they will get.",
    paragraphs: [
      "A title and thumbnail are the entry point to a video. They should accurately represent the content and make the intended viewer understand why the video is relevant.",
      "Start with one clear promise. A title such as 'How to build a website' is broad; 'How to build a small business website: pages, content, and launch' tells a more specific audience what they will learn.",
      "A thumbnail should support the same idea rather than repeating a paragraph of the title. Use one visual focal point, readable text when needed, and enough contrast for the small display sizes where thumbnails often appear.",
      "Avoid misleading packaging. A high click rate that creates immediate disappointment can hurt the viewing experience. YouTube's own retention guidance recommends reviewing the introduction and considering whether the title and thumbnail accurately reflect the video.",
      "Test ideas over time instead of judging a video only by its first hours. Compare packaging with the video's audience, topic, traffic source, and retention.",
      "Include the main search phrase when it naturally describes the video. For example, 'How to Monetize YouTube: 7 Ways Creators Can Earn Money' is clearer than a vague title such as 'My YouTube Income Secrets.' The important phrase should still match what the video actually teaches.",
      "Use a title that tells the right viewer what the video will help them do. Put useful context in the description and chapters where it helps navigation, not as a list of search terms."
    ],
    next: { href: "/learn/youtube/audience-retention", label: "Learn audience retention" }
  },
  {
    slug: "youtube/audience-retention",
    area: "YouTube",
    title: "How do I improve YouTube audience retention?",
    summary: "Make the promised value arrive early, remove unnecessary delay, and study where viewers stay or leave.",
    paragraphs: [
      "Audience retention describes how viewers continue through a video. It can reveal whether the introduction matches the promise, where attention drops, and which moments people rewatch or share.",
      "Open with the problem and the value of the video. Do not spend the first minute explaining why you made the video if the viewer came for an answer. Give enough context to understand the task, then start doing it.",
      "Use structure to maintain clarity: show the destination, move through logical steps, and use examples when an abstract explanation becomes difficult. Remove repeated phrases, long pauses, and sections that do not help the viewer finish the promised job.",
      "YouTube's retention guidance specifically highlights the first 30 seconds and recommends experimenting with the introduction and with title/thumbnail alignment. It also identifies spikes as moments that may have been rewatched or shared.",
      "Retention is not a single target percentage that every video must hit. Compare videos of similar type and ask what the audience behavior says about the structure.",
      "Retention begins before the video starts. If someone searched how to monetize YouTube and your title promises a monetization guide, answer that question early instead of spending the opening on a long introduction. Then move from the basic answer into examples, requirements, mistakes, and practical next steps.",
      "Use the retention graph to find repeated patterns. A sharp early drop can indicate a mismatch between the title, thumbnail, and opening. A later drop can reveal a section that is too slow or too detailed. Strong sections can become standalone videos, Shorts, or follow-up lessons."
    ],
    next: { href: "/learn/youtube/youtube-analytics", label: "Learn YouTube Analytics" }
  },
  {
    slug: "youtube/youtube-analytics",
    area: "YouTube",
    title: "How do I use YouTube Analytics?",
    summary: "Use impressions, traffic sources, watch behavior, and audience data to decide what to improve next.",
    paragraphs: [
      "YouTube Analytics gives channel and video-level information about how content is discovered and watched. The current YouTube Help documentation describes overview, content, reach, and audience-related reporting, with additional detail available in Advanced Mode.",
      "Start with a simple funnel: impressions or exposure → click → watch → useful action. If people see the video but do not click, review the topic and packaging. If they click but leave early, review the opening and delivery.",
      "Look at traffic sources to understand how viewers found the video. Search, suggested viewing, browse features, external links, and other sources can produce different audience behavior.",
      "Use the data to choose your next experiment. Change one major thing at a time when possible: topic, opening, title, thumbnail, length, format, or audience. Then compare with similar videos.",
      "Do not optimize for a dashboard number in isolation. A smaller video that reaches the exact people who need your service can be more useful to a business than a large unrelated audience.",
      "Connect analytics to search intent and business goals. Look at which topics bring viewers, where viewers come from, whether they continue watching, and whether the audience matches the people you want to reach. A video can have fewer views but still be valuable if it attracts customers or the right community.",
      "For monetization planning, do not focus only on subscriber count. Watch time, qualified Shorts views, audience geography, content type, advertiser suitability, and eligibility for individual YouTube monetization features all matter. YouTube reviews channels against its monetization policies, and individual features can have separate requirements."
    ],
    next: { href: "/learn/youtube/make-money-on-youtube", label: "Learn YouTube monetization" }
  },
  {
    slug: "youtube/make-money-on-youtube",
    area: "YouTube",
    title: "How can I make money on YouTube?",
    summary: "Understand advertising, memberships, products, services, sponsorships, and the requirements attached to each route.",
    checkedDate: "2026-09-30",
    paragraphs: [
      "YouTube income can come from more than advertising. Depending on eligibility and region, creators may use platform monetization features as well as sponsorships, affiliate relationships, products, courses, memberships, or their own services.",
      "Platform eligibility changes over time and can vary by country and program. Always check current YouTube Partner Program and monetization documentation before treating a threshold or feature as permanent.",
      "A business channel can monetize indirectly. A tutorial may bring a visitor who later buys a service, requests a quote, joins a mailing list, or uses a paid product. The video does not have to make money directly to have business value.",
      "Build the audience and the offer together. If you want clients, make videos that demonstrate expertise around the problems your service solves. If you want product sales, teach the surrounding problem and show how the product fits.",
      "Avoid shortcuts that create policy or trust problems. Do not buy fake engagement, reuse content without the necessary rights, or promise guaranteed income from a platform whose rules and distribution can change.",
      "Until 31 January 2027, YouTube's full ads and Premium threshold for new applicants remains 1,000 subscribers plus either 4,000 valid public watch hours in the previous 12 months or 10 million valid public Shorts views in the previous 90 days. On 10 August 2026, TeamYouTube announced that from 1 February 2027 new applicants need 1,000 subscribers plus either 8,000 qualified watch hours in the last 365 days or 20 million qualified Shorts views in the last 90 days. Channels already in the YouTube Partner Program are not removed, and do not lose long-form ads access, only because they are under those new entry numbers. Fan-funding features stay on the earlier tier: 500 subscribers and either 3,000 qualified watch hours in 365 days or 3 million qualified Shorts views in 90 days. From 1 February 2027, Shorts ads and subscription revenue also require 10 million qualified Shorts views in the previous 90 days; falling below that pauses Shorts revenue sharing but does not remove the channel from the program. Shorts Feed watch time does not count toward the long-form watch-hour threshold. Joining also requires an eligible country or region, no active Community Guidelines strikes, 2-Step Verification, access to advanced features, compliance with monetization policies, and an active AdSense for YouTube account. Existing members must accept the updated monetization terms by 31 January 2027 to keep earning from the related features. Confirm the live requirements in YouTube Studio before applying.",
      "Originality matters. YouTube says monetized content should be original and authentic, and its policies address mass-produced, repetitive, and reused content. A channel should add real educational, creative, or entertainment value rather than producing near-identical videos simply to capture search traffic."
    ],
    sources: [
      { label: "YouTube Help: Join the YouTube Partner Program", url: "https://support.google.com/youtube/answer/72851" },
      { label: "TeamYouTube: YPP updates announced 10 August 2026", url: "https://support.google.com/youtube/thread/451804019" },
      { label: "YouTube Help: Channel monetization policies", url: "https://support.google.com/youtube/answer/1311392" },
      { label: "YouTube Help: Ways to earn on YouTube", url: "https://support.google.com/youtube/answer/94522" },
    ],
    next: { href: "/learn/youtube", label: "Return to the YouTube path" }
  },

  {
    slug: "facebook/how-to-create-a-facebook-page",
    area: "Facebook",
    title: "How do I create a Facebook Page for a business?",
    summary: "Create a clear business presence with accurate information, useful content, and a defined customer action.",
    paragraphs: [
      "A Facebook Page gives a business or organization a public presence separate from a personal profile. Start with the real business identity, category, description, contact details, website, service area, and a profile image people can recognize.",
      "Complete the information that customers actually need. Explain what the business does, where it operates, how to contact it, and what someone can expect after sending a message or visiting the website.",
      "Choose a simple content role for the Page. It might answer customer questions, show work, announce updates, teach useful tips, or support a local community. The role should match the business rather than copying another Page.",
      "Connect the Page to the website and other relevant channels. Keep important business information consistent and review access so more than one trusted person can administer the Page when appropriate.",
      "Treat the Page as a customer-facing asset. Complete information, reliable replies, and useful posts matter more than filling every field with marketing language.",
      "Make the Page easy to understand and maintain. Use the business's real name, accurate contact details, a clear description, and secure access for the people who manage it.",
      "Before trying to grow or monetize Facebook, make the foundation trustworthy: correct business name, category, contact details, website, location where relevant, profile image, cover image, response process, and secure administrator access. A complete Page gives later content and advertising a clear destination."
    ],
    next: { href: "/learn/facebook/facebook-content-strategy", label: "Build a Facebook content strategy" }
  },
  {
    slug: "facebook/facebook-content-strategy",
    area: "Facebook",
    title: "What should I post on Facebook?",
    summary: "Use a mix of useful information, proof, conversation, and offers that fit the audience and business.",
    paragraphs: [
      "A Facebook content strategy begins with the audience's questions and the business's real expertise. Useful categories include educational posts, project examples, behind-the-scenes work, customer questions, community information, product updates, and clear offers.",
      "Create recurring formats so publishing does not require inventing a new strategy every day. For example: one practical tip, one project breakdown, one customer question, and one offer each week.",
      "Make posts self-contained when possible. Give enough context for someone seeing the post in their feed to understand the point, then link to a deeper page when the topic deserves more detail.",
      "Conversation can be valuable, but do not manufacture engagement with misleading questions or bait. Ask questions when the answers genuinely help you understand customers or the community.",
      "Review which topics produce meaningful actions: comments from the right people, visits to useful pages, enquiries, bookings, or sales. High reactions are not automatically business results.",
      "Build content around questions customers actually ask. A Facebook content plan can include educational posts, demonstrations, customer questions, project stories, product information, short videos, community posts, and offers. Use natural language that includes the subject people are looking for, such as Facebook marketing, Facebook Page growth, Facebook business, Facebook leads, or Facebook monetization, when those terms accurately describe the post.",
      "Turn strong questions into a content series. A post answering 'How do I get customers from Facebook?' can lead to a longer guide, a video, a case study, a lead-generation post, and a service page. This creates a connected content system instead of isolated social posts."
    ],
    next: { href: "/learn/facebook/facebook-page-growth", label: "Learn Facebook growth" }
  },
  {
    slug: "facebook/facebook-page-growth",
    area: "Facebook",
    title: "How do I grow a Facebook Page?",
    summary: "Grow by consistently publishing useful content, participating in relevant communities, and giving people a reason to follow.",
    paragraphs: [
      "Growth begins with a reason to follow. A Page should consistently deliver something the audience values: useful local information, education, entertainment, product updates, expertise, or community connection.",
      "Invite existing customers and relevant contacts to follow where appropriate, and connect the Page to your website, email signature, packaging, and other legitimate touchpoints.",
      "Use native content when it helps people consume the idea without leaving the platform, then link to deeper resources when a click has a clear purpose. Test different formats instead of assuming one format works for every audience.",
      "Participate in relevant communities according to their rules. Contribute useful answers instead of dropping promotional links everywhere. Trust built through useful participation can create stronger attention than repeated advertising.",
      "Paid promotion is a separate lever. Use it when you have a clear audience and offer worth promoting, and measure the business action rather than optimizing only for cheap impressions.",
      "Use questions from Page messages and comments as a starting point. Write each post to solve one of those problems, then make its next step clear instead of repeating phrases to chase reach.",
      "Growth should be measured against the purpose of the Page. For a local business, useful measures may include messages, calls, bookings, directions, website visits, and leads. For a creator, meaningful followers, video views, watch time, returning viewers, and eligible monetization opportunities may matter more."
    ],
    next: { href: "/learn/facebook/facebook-leads", label: "Learn Facebook lead generation" }
  },
  {
    slug: "facebook/facebook-leads",
    area: "Facebook",
    title: "How can I get customers from Facebook?",
    summary: "Turn attention into a clear next step: message, enquiry, booking, website visit, or purchase.",
    paragraphs: [
      "A social audience does not automatically become customers. The path needs a clear offer and a simple next action. Decide whether the goal is a message, lead form, website enquiry, booking, or purchase.",
      "Build content around the problem before pushing the offer. Explain common mistakes, show examples, answer objections, and demonstrate the process. Then connect those posts to the service that solves the problem.",
      "Make the landing experience match the post. If a post promises website development, the destination should explain that service clearly rather than sending the visitor to a generic homepage with no context.",
      "Respond to genuine enquiries promptly and professionally. Use a simple qualification process: what do they need, when, what already exists, and what outcome are they trying to achieve?",
      "Track the full path where possible. A post with fewer reactions but several qualified enquiries may be more useful than a viral post with no commercial relevance.",
      "Create a clear conversion path. A useful Facebook post can answer a problem, demonstrate a result, explain an offer, and send an interested person to a message, form, website page, booking flow, or product page. The destination should continue the same promise as the post.",
      "Keep each landing page focused on a genuinely different service or decision. Avoid creating several near-identical pages that differ only in wording; explain the offer and next step clearly on the page that best serves the customer."
    ],
    next: { href: "/learn/facebook/facebook-monetization", label: "Learn Facebook monetization" }
  },
  {
    slug: "facebook/facebook-monetization",
    area: "Facebook",
    title: "How can I make money on Facebook?",
    summary: "In 2026, Facebook pays invited creators through Content Monetization. In-stream ads, ads on Reels, and the Performance Bonus ended on 31 August 2025. A Page can still earn from your own product or service without an invite.",
    checkedDate: "2026-09-30",
    difficulty: "Beginner",
    paragraphs: [],
    sections: [
      {
        heading: "How do I get monetized on Facebook in 2026?",
        paragraphs: [
          "The current program is Facebook Content Monetization. Meta says it is invite-only. An invite comes from Facebook itself: the app, an email, Meta Business Suite, or the Professional dashboard. If you are not sure a message is real, look in the monetization section of those same places. Do not pay someone who says they can turn monetization on. Meta does not sell invites.",
          "If you have not been invited, you can tell Meta you are interested. On the Facebook mobile app, open the Professional dashboard, then Monetization, then Content Monetization. Meta also has an interest form. The form is not an application, and sending it does not mean you will be invited. There is no public follower number that guarantees a yes.",
        ],
      },
      {
        heading: "What content can earn, and what no longer pays?",
        paragraphs: [
          "In-stream ads, ads on Reels, and the Performance Bonus ended on 31 August 2025. That was the last day creators could earn from those programs. Meta also said in-stream ads for Live would end on 15 June 2026. After that, eligible creators earn through Facebook Content Monetization instead.",
          "Content that can earn, once you are in the program, includes public Reels, photos, Stories, and text posts that follow Meta's policies. A Reel must be at least 10 seconds. A Story must be at least 5 seconds. If people watch for less than 5 seconds, that view does not qualify. Meta also excludes repeat views from the same person in one session. The amount is based on qualified views and watch time, and Meta can change it.",
        ],
      },
      {
        heading: "Who is allowed to monetize?",
        paragraphs: [
          "Monetization is for public content on a Facebook Page, a profile in professional mode, an event, or a group. A personal profile that is not in professional mode cannot use these tools. Meta's partner rules also say you need an established presence of at least 30 days, and you must live in a country where the product is offered. The bank or payout account connected to you must be in an eligible country too.",
          "On 30 September 2026, Meta's published country list included India, Bangladesh, the United States, the United Kingdom, Nigeria, and the United Arab Emirates, among others. Pakistan was not on that list. Open the country page again before you plan on a payout. Bought likes, follows, or views can get monetization removed. Post for people who actually watch you.",
        ],
      },
      {
        heading: "What is Creator Fast Track?",
        paragraphs: [
          "On 18 March 2026, Meta announced Creator Fast Track for established creators who are new to Facebook or coming back. Creators with at least 100,000 followers on Instagram, TikTok, or YouTube could earn $1,000 a month for three months. Creators with more than 1 million followers on at least one of those platforms could earn $3,000 a month for three months. Meta said the program also gives immediate access to Facebook Content Monetization. Read the terms and apply only on Meta's own page. Do not assume the offer is still open, or that every country can join.",
          "Most beginners will not qualify for Fast Track. That is normal. Use the Page to explain a service or product you can deliver, and get paid by invoice or your own checkout. That income does not need an invite.",
        ],
      },
    ],
    faqs: [
      { question: "How do I get monetized on Facebook?", answer: "Facebook Content Monetization is invite-only. Watch for an invite in the app, email, Meta Business Suite, or the Professional dashboard. You can also submit Meta's interest form, but that is not an application and it does not guarantee an invite." },
      { question: "Did Facebook in-stream ads end?", answer: "Yes. In-stream ads, ads on Reels, and the Performance Bonus ended on 31 August 2025. In-stream ads for Live ended on 15 June 2026. The current program is Facebook Content Monetization." },
      { question: "How many followers do I need for Facebook monetization?", answer: "Meta has not published a follower number that guarantees an invite to Content Monetization. Ignore posts that invent one. Creator Fast Track is separate: it uses followers you already have on Instagram, TikTok, or YouTube." },
      { question: "Do Facebook Reels still pay?", answer: "Reels can earn inside Content Monetization if you are invited and the Reel is public and at least 10 seconds. A view under 5 seconds does not qualify. The old Ads on Reels program ended on 31 August 2025." },
      { question: "Can I monetize a Facebook Page from Pakistan?", answer: "Pakistan was not on Meta's published Content Monetization country list on 30 September 2026. India and Bangladesh were. Check the official country page, because the list changes. Your payout account must be in an eligible country too." },
      { question: "What is Facebook Creator Fast Track?", answer: "A March 2026 program for creators who already have 100,000 followers on Instagram, TikTok, or YouTube ($1,000 a month for three months) or more than 1 million ($3,000 a month). It includes access to Content Monetization. Confirm the offer is still open on Meta's page before you apply." },
      { question: "Can I make money on Facebook without an invite?", answer: "Yes. Use the Page to get customers for a service or product you control. That does not depend on Content Monetization or on living in a listed country." },
    ],
    sources: [
      { label: "Meta: About Facebook Content Monetization", url: "https://www.facebook.com/business/help/1049081556813520" },
      { label: "Meta: Content Monetization countries", url: "https://www.facebook.com/business/help/267128784014981" },
      { label: "Meta: Partner Monetization Policies", url: "https://www.facebook.com/business/help/169845596919485" },
      { label: "Meta news: Creator Fast Track, 18 March 2026", url: "https://about.fb.com/news/2026/03/creator-fast-track-grow-your-audience-earn-money-on-facebook/" },
    ],
    next: { href: "/learn/facebook", label: "Return to Facebook" },
  },

  {
    slug: "instagram/how-to-set-up-instagram-for-business",
    area: "Instagram",
    title: "How do I set up Instagram for a business?",
    summary: "Build a profile that immediately explains who you help, what you offer, and where to go next.",
    paragraphs: [
      "Start with a recognizable username, profile image, concise bio, and a link that leads to the most useful next step. A visitor should understand the account's subject without reading dozens of posts.",
      "Choose a visual identity you can maintain. Consistency does not require every post to look identical; it means the account feels like the same business through its subject, voice, typography, imagery, and recurring formats.",
      "Use the account type and contact features that fit the business. Add accurate contact information and review privacy, access, and security settings.",
      "Create a few content pillars before posting heavily. For a channel that teaches website skills, these might be beginner tips, demonstrations, before-and-after explanations, and practical learning resources.",
      "Treat the profile as a landing page. The bio and pinned content should answer the questions a new visitor has: what is this, is it for me, and what should I do next?",
    ],
    next: { href: "/learn/instagram/instagram-content-strategy", label: "Build an Instagram content strategy" }
  },
  {
    slug: "instagram/instagram-content-strategy",
    area: "Instagram",
    title: "What should I post on Instagram?",
    summary: "Build repeatable content pillars across posts, Reels, Stories, and other formats.",
    paragraphs: [
      "Start with a small number of content pillars connected to the audience's needs. Education, demonstrations, stories, proof, community, and offers are useful categories for many businesses.",
      "Use different formats for different jobs. A carousel can explain a process step by step. A Reel can demonstrate a transformation or quick concept. Stories can support ongoing conversation, updates, and behind-the-scenes context.",
      "Make the first frame or opening clear. People decide quickly whether the content is relevant, so lead with the question, result, or visual evidence rather than a long introduction.",
      "Write captions that add context rather than simply repeating the image. Use accessible language, descriptive text, and a clear call to action when an action is actually needed.",
      "Create series instead of isolated posts. A weekly 'website mistake' or 'SEO question' series makes the content easier to plan and gives the audience a reason to return.",
    ],
    next: { href: "/learn/instagram/instagram-reels", label: "Learn Instagram Reels" }
  },
  {
    slug: "instagram/instagram-reels",
    area: "Instagram",
    title: "How do I make useful Instagram Reels?",
    summary: "Turn a focused idea into a short, understandable video with a strong opening and a clear payoff.",
    paragraphs: [
      "A useful Reel has one job. Teach one concept, show one transformation, answer one question, or demonstrate one process. Trying to explain an entire subject in one short video usually creates a rushed result.",
      "Open with the problem or promise. For example: 'Your homepage has three problems' is clearer than a long greeting. Then show the evidence and explain the fix.",
      "Use readable on-screen text and captions where appropriate. Keep important information within the safe visual area and make the video understandable even when the viewer has limited context.",
      "Turn strong Reels into a series. If a website tip performs well with the right audience, create related examples rather than copying the same video repeatedly.",
      "Review performance and audience response, but do not chase every trend. A trend is useful when it helps communicate your subject; it is not a strategy by itself.",
    ],
    next: { href: "/learn/instagram/instagram-growth", label: "Learn Instagram growth" }
  },
  {
    slug: "instagram/instagram-growth",
    area: "Instagram",
    title: "How do I grow an Instagram account?",
    summary: "Give the right people a consistent reason to follow, save, share, or return.",
    paragraphs: [
      "Growth comes from relevance and repeated exposure. Define the audience narrowly enough that your content feels written for them, then publish around their recurring problems and interests.",
      "Make discovery easy with clear subjects, descriptive captions, relevant topics, and content people can understand when they encounter it without knowing your account.",
      "Engage genuinely. Reply to comments, participate in relevant conversations, and collaborate when there is a real shared audience. Do not use automated or purchased engagement as a substitute for useful content.",
      "Use profile structure to convert discovery into a relationship. Pinned posts, highlights, bio text, and the link should help a new visitor understand the account and take the next relevant step.",
      "Measure growth together with quality. Look at which content attracts the people you actually want, then build more of that subject and format.",
    ],
    next: { href: "/learn/instagram/instagram-monetization", label: "Learn Instagram monetization" }
  },
  {
    slug: "instagram/instagram-monetization",
    area: "Instagram",
    title: "How can I make money on Instagram?",
    summary: "Use Instagram to support products, services, partnerships, and eligible platform monetization features.",
    paragraphs: [
      "Instagram can support several business models: selling products, generating service enquiries, affiliate relationships, brand partnerships, subscriptions or other platform features where available, and sending an audience to another business asset.",
      "Eligibility and available monetization features can change by country, account type, and current platform rules. Treat official Instagram and Meta documentation as the source of truth for current requirements.",
      "For a service business, the simplest model may be lead generation. Teach the audience something useful, demonstrate your expertise, show real work, and give suitable prospects a clear way to contact you.",
      "For creators, sponsorships can be valuable when the audience and subject are a strong match. Disclose commercial relationships as required and protect audience trust.",
      "Do not measure monetization only by follower count. Measure enquiries, sales, qualified conversations, recurring customers, and revenue from the specific content or campaign when you can.",
    ],
    sources: [
      { label: "Instagram for Creators", url: "https://creators.instagram.com/" },
      { label: "Instagram Help Center", url: "https://help.instagram.com/" },
    ],
    next: { href: "/learn/instagram", label: "Return to Instagram" }
  },

  {
    slug: "tiktok/how-to-start-tiktok",
    area: "TikTok",
    title: "How do I start on TikTok?",
    summary: "Set up a clear profile and build a repeatable short-form content practice around a specific audience.",
    paragraphs: [
      "Start with a clear account subject and profile. Explain what you create, who it is for, and what viewers can expect. Use a recognizable profile image and a handle that is easy to remember.",
      "TikTok's own educational resources cover getting started, creation essentials, content strategy, safety, and ways creators can earn. The platform also maintains current help documentation for account and profile setup.",
      "Choose a format you can repeat. Talking to camera, screen demonstrations, tutorials, storytelling, product demonstrations, and short explanations can all work when the idea is clear.",
      "Record several ideas in one session when possible. A sustainable workflow is more useful than waiting for inspiration every day.",
      "Start with the audience problem rather than the platform feature. The app is the distribution environment; your useful idea is the product.",
    ],
    next: { href: "/learn/tiktok/tiktok-content-ideas", label: "Find TikTok content ideas" }
  },
  {
    slug: "tiktok/tiktok-content-ideas",
    area: "TikTok",
    title: "How do I find TikTok content ideas?",
    summary: "Build a list of short, focused ideas from questions, demonstrations, mistakes, stories, and recurring audience needs.",
    paragraphs: [
      "A strong TikTok idea can often be expressed as one sentence: a question, a surprising mistake, a before-and-after, a quick demonstration, or a useful opinion backed by experience.",
      "Collect questions from your customers and community. Turn one broad subject into many small videos. 'SEO' can become videos about titles, internal links, indexing, search intent, local pages, and common mistakes.",
      "Use series to reduce planning. A recurring format such as 'one website fix in 30 seconds' creates a clear promise and lets you build a library without inventing a new style every time.",
      "Trends can help with discovery, but adapt them only when they fit your subject. Do not let a trend replace the actual information or story.",
      "Keep a backlog with the hook, key point, proof or example, and desired next action. This makes recording faster and keeps the account focused.",
    ],
    next: { href: "/learn/tiktok/tiktok-growth", label: "Learn TikTok growth" }
  },
  {
    slug: "tiktok/tiktok-growth",
    area: "TikTok",
    title: "How do I grow on TikTok?",
    summary: "Improve the clarity, usefulness, and repeatability of your videos while learning from audience response.",
    paragraphs: [
      "Growth begins with making the content understandable to someone who has never seen your account. The opening should establish the problem or payoff quickly.",
      "Build around topics that attract the audience you want. If you want business clients, make content that demonstrates your understanding of business problems instead of only chasing broad entertainment.",
      "Use comments as research. Questions and disagreements can reveal the next video to make. Replying with a useful video can also turn one conversation into a small learning series.",
      "Keep quality sustainable. Clear audio, readable visuals, a focused script, and a strong example often matter more than expensive production.",
      "Review analytics regularly and compare similar videos. Look for topics and structures that hold attention and attract the right audience, then iterate instead of copying a viral clip.",
    ],
    next: { href: "/learn/tiktok/tiktok-analytics", label: "Learn TikTok analytics" }
  },
  {
    slug: "tiktok/tiktok-analytics",
    area: "TikTok",
    title: "How do I use TikTok analytics?",
    summary: "Use performance data to learn which topics, formats, and audiences are responding to your content.",
    paragraphs: [
      "Analytics should answer practical questions: Which videos get attention? Which hold viewers? Which attract profile visits or other useful actions? Which subjects repeatedly attract the audience you want?",
      "Compare videos by format and topic rather than treating the account as one number. A tutorial, story, trend, and product demonstration have different jobs and may have different normal behavior.",
      "Look for patterns in successful videos. Was the question clearer? Did the example arrive earlier? Was the audience more specific? Did the video come from a recurring series?",
      "Use analytics to choose experiments. Change one major element at a time where possible, publish enough examples to see a pattern, then keep or discard the approach based on evidence.",
      "Do not confuse reach with business value. If the purpose is lead generation, track whether viewers move from content to profile, website, message, or enquiry.",
    ],
    next: { href: "/learn/tiktok/tiktok-monetization", label: "Learn TikTok monetization" }
  },
  {
    slug: "tiktok/tiktok-monetization",
    area: "TikTok",
    title: "How can I make money on TikTok?",
    summary: "TikTok's Creator Rewards Program pays for original videos of at least one minute in eight countries. It replaced the Creator Fund. Pakistan and India are not on the list.",
    checkedDate: "2026-09-30",
    difficulty: "Beginner",
    paragraphs: [],
    sections: [
      {
        heading: "How do I get monetized on TikTok?",
        paragraphs: [
          "The view-based program is Creator Rewards. It replaced the Creator Fund, which TikTok's help pages say is no longer available. Money already earned in the old fund does not expire.",
          "TikTok's Creator Academy says the program is open to creators in the United States, the United Kingdom, Germany, Japan, South Korea, France, Mexico, and Brazil. You have to live in one of those places and use an account registered there. Pakistan and India are not on that list. Open TikTok Studio on your own account before you plan around a payout, because TikTok can change the list.",
        ],
      },
      {
        heading: "What does TikTok require?",
        paragraphs: [
          "Where the program is open, TikTok's terms, last updated 20 July 2026, and the Creator Academy say you need all of the following. Meeting them does not by itself pay you. The video still has to qualify.",
        ],
        bullets: [
          "Be 18 or older, or the age of majority where you live. The Creator Academy states 18.",
          "Use a personal account in good standing. Business accounts, organization accounts, and government or political accounts are not eligible.",
          "Have at least 10,000 authentic followers.",
          "Have at least 100,000 authentic video views in the 30 days before you apply or are invited.",
          "Link a payment account in your own name and finish the tax steps the app asks for.",
          "Post original videos. A video needs to be at least one minute, get at least 1,000 views on the For You feed, and not be a duet, a stitch, a photo-mode post, an ad, or sponsored.",
        ],
      },
      {
        heading: "Which views actually pay?",
        paragraphs: [
          "TikTok's Creator Academy says a qualified view is not every play. It needs at least five seconds of watch time. Views from the same account count once. A view does not count if the person taps Not interested. A view from Search needs at least 30 seconds. The viewer has to be in a Creator Rewards country: the United States, Mexico, Brazil, South Korea, Japan, Germany, the United Kingdom, or France. Bought views, fraud, ads, and sponsored posts do not count.",
          "The US program terms say rewards go through PayPal via Hyperwallet, on the 15th of the month, once the balance is at least $50. Other countries can show a different payout method. Read the screen in your own account.",
        ],
      },
      {
        heading: "What if my country is not on the list?",
        paragraphs: [
          "You cannot collect Creator Rewards from a country that is not on the list, even with 10,000 followers. Do not use a VPN or an account registered in another country. That breaks the rule that you live where the account is registered.",
          "You can still be paid by a client, for your own product, or for a sponsorship you disclose. Those payments do not go through Creator Rewards. LIVE gifts and other TikTok tools have separate country rules. Check them in the app instead of assuming they match this program.",
        ],
      },
    ],
    faqs: [
      { question: "How do I get monetized on TikTok in 2026?", answer: "Join Creator Rewards if you live in the United States, the United Kingdom, Germany, Japan, South Korea, France, Mexico, or Brazil, with a personal account, 10,000 followers, and 100,000 views in 30 days. Videos that earn are original and at least one minute." },
      { question: "Is the TikTok Creator Fund still open?", answer: "No. TikTok's help pages say the Creator Fund is no longer available and was replaced by Creator Rewards. Old fund balances do not expire." },
      { question: "Can I join Creator Rewards from Pakistan or India?", answer: "No. Neither country is on the eight-country list in TikTok's Creator Academy. Check TikTok Studio in case the list changes. Do not apply through another country." },
      { question: "How long does a TikTok video need to be to get paid?", answer: "At least one minute, plus at least 1,000 For You views. Duets, stitches, photo-mode posts, ads, and sponsored videos do not qualify." },
      { question: "Do all views count for TikTok pay?", answer: "No. A qualified view needs five seconds of watch time, and search views need 30 seconds. Repeat views from one account count once. The viewer must be in a Creator Rewards country." },
      { question: "How does TikTok pay?", answer: "The US terms, updated 20 July 2026, pay through PayPal via Hyperwallet on the 15th once you reach $50. Your country may show a different method in the app." },
      { question: "Can I earn on TikTok without Creator Rewards?", answer: "Yes. Sell your own product or service, or take a sponsorship you disclose. That does not require the eight-country program." },
    ],
    sources: [
      { label: "TikTok: Creator Rewards Program terms, updated 20 July 2026", url: "https://www.tiktok.com/legal/page/global/creator-rewards-program-us/en" },
      { label: "TikTok Creator Academy", url: "https://www.tiktok.com/creator-academy" },
      { label: "TikTok Support: Creator Fund replaced by Creator Rewards", url: "https://support.tiktok.com/en/business-and-creator/tiktok-creator-fund-us" },
    ],
    next: { href: "/learn/tiktok", label: "Return to TikTok" },
  },

  {
    slug: "linkedin/how-to-build-a-linkedin-profile",
    area: "LinkedIn",
    title: "How do I build a strong LinkedIn profile?",
    summary: "Make your profile clear about what you do, who you help, and the evidence behind your experience.",
    paragraphs: [
      "A useful LinkedIn profile answers three questions quickly: What do you do? Who is it relevant to? Why should someone trust your work? Use a clear headline, relevant about section, work history, skills, and evidence.",
      "Describe outcomes and responsibilities accurately. Instead of listing tools alone, explain the work you performed and the problem it addressed. Add projects, portfolio links, or other evidence when appropriate.",
      "Use a professional profile image and complete the information that matters to your audience. For a service provider, the profile should make it easy for a potential client to understand the offer and start a conversation.",
      "Do not turn the profile into a keyword wall. LinkedIn itself emphasizes clear organization information and relevant terms for Pages; the same principle of clarity applies to personal professional positioning.",
      "Review the profile from the perspective of a stranger who has just found you through a post. The next step should be obvious.",
    ],
    next: { href: "/learn/linkedin/linkedin-content-strategy", label: "Build a LinkedIn content strategy" }
  },
  {
    slug: "linkedin/linkedin-content-strategy",
    area: "LinkedIn",
    title: "What should I post on LinkedIn?",
    summary: "Share useful professional knowledge, experience, lessons, and evidence that start worthwhile conversations.",
    paragraphs: [
      "LinkedIn content works best when it has a professional reason to exist. Teach something you know, explain a lesson from real work, break down a project, discuss a problem, or share a useful framework.",
      "Use a clear opening. State the problem, observation, or lesson first, then support it with examples. Avoid long introductions before the reader reaches the point.",
      "Vary the format. LinkedIn's creator guidance has highlighted images and video, polls, and documents as ways to communicate different kinds of information.",
      "Treat posts as conversations rather than broadcasts. Respond to thoughtful comments, ask useful questions when you genuinely want responses, and add insight to other people's discussions.",
      "Keep your own perspective. LinkedIn's current guidance on AI-assisted content says AI can help refine writing, but the content should still reflect the member's own voice, perspective, and experience.",
    ],
    next: { href: "/learn/linkedin/get-clients", label: "Learn how to get clients" }
  },
  {
    slug: "linkedin/get-clients",
    area: "LinkedIn",
    title: "How do I get clients through LinkedIn?",
    summary: "Use expertise, proof, relevant conversations, and targeted outreach instead of sending generic pitches to everyone.",
    paragraphs: [
      "Start with a clear service and audience. 'I build websites' is broad. 'I build small-business websites that turn service questions into enquiries' gives your content and outreach a clearer purpose.",
      "Publish useful material that demonstrates how you think. Explain common problems, show before-and-after work, answer questions, and document real projects where you have permission to share them.",
      "Use networking deliberately. Connect with people who are genuinely relevant to your work, participate in their conversations, and learn what problems they are discussing before making an offer.",
      "When outreach is appropriate, make it specific. Explain why you contacted the person, what you noticed, and what you can help with. Avoid pretending you know details about their business that you have not actually checked.",
      "Move qualified conversations to a clear next step: a short discovery call, written brief, audit, proposal, or another process that fits the service. Keep scope and expectations explicit.",
    ],
    next: { href: "/learn/linkedin/linkedin-job-search", label: "Learn LinkedIn job search" }
  },
  {
    slug: "linkedin/linkedin-job-search",
    area: "LinkedIn",
    title: "How do I use LinkedIn to find a job?",
    summary: "Make your profile searchable and credible, then combine applications with relevant networking and evidence of your skills.",
    paragraphs: [
      "Start by making the profile accurately describe the role you want. Use the terminology that appears in relevant job descriptions when it genuinely matches your skills, while keeping the profile readable.",
      "Show evidence. Projects, work samples, certifications, case studies, open-source contributions, and clearly described responsibilities can make skills easier to evaluate.",
      "Use job search filters and alerts where available, but do not rely only on the application button. Research the role, understand the company, and use your network appropriately to learn about the work.",
      "When contacting someone, be respectful and specific. Ask for information or advice when that is what you need rather than immediately demanding a referral.",
      "Keep a simple record of applications, conversations, follow-ups, and outcomes. This turns job searching into a process you can improve rather than a stream of disconnected applications.",
    ],
    next: { href: "/learn/linkedin/linkedin-content-strategy", label: "Build your professional content" }
  },
  {
    slug: "linkedin/linkedin-page-for-business",
    area: "LinkedIn",
    title: "How do I create a LinkedIn Page for a business?",
    summary: "Build a complete company presence with accurate information, a clear value proposition, and consistent professional activity.",
    paragraphs: [
      "LinkedIn Pages are designed for organizations such as companies, universities, and schools. LinkedIn's current guidance recommends completing the Page's core information and using relevant terms so members can understand and find the organization.",
      "Add the real organization name, logo, overview, website, location, industry, and company size where applicable. Use a concise description that explains what the organization does and who it serves.",
      "Give the Page a clear role. It can publish company updates, explain products or services, share expertise, support hiring, and provide another place for customers or professionals to understand the organization.",
      "Invite appropriate employees to associate with the organization and add additional trusted administrators when necessary. Review security and access regularly.",
      "Keep the Page active enough to be useful. LinkedIn's business guidance suggests companies that post weekly can see stronger engagement, but the quality and relevance of the posts still matter more than posting for its own sake.",
    ],
    next: { href: "/learn/linkedin/linkedin-analytics", label: "Learn LinkedIn analytics" }
  },
  {
    slug: "linkedin/linkedin-analytics",
    area: "LinkedIn",
    title: "How do I measure LinkedIn content?",
    summary: "Measure whether your content reaches the right professional audience and creates useful actions.",
    paragraphs: [
      "Start with the goal. Awareness, professional reputation, hiring, lead generation, and website traffic require different measurements. A post does not need to maximize every metric.",
      "Review impressions and engagement to understand distribution and response, then look for meaningful actions such as profile visits, Page visits, link clicks, enquiries, applications, or conversations.",
      "Compare posts by topic and format. If practical educational posts consistently attract the right audience, build more around that subject. If a format produces attention but no useful action, decide whether awareness alone is actually the goal.",
      "Use LinkedIn analytics alongside your website analytics and CRM or enquiry records where possible. The platform dashboard cannot tell you the entire business story.",
      "Keep a monthly learning log: what you published, what audience responded, what generated meaningful conversations, and what you will test next.",
    ],
    next: { href: "/learn/linkedin", label: "Return to LinkedIn" }
  },

  {
    slug: "x-twitter/how-to-build-an-x-profile",
    area: "X / Twitter",
    title: "How do I build an X profile for business or professional use?",
    summary: "Make the profile explain your subject, credibility, and useful next step in seconds.",
    paragraphs: [
      "A useful X profile is specific. Choose a recognizable name and handle, a clear profile image, a concise bio, and a link that supports the account's purpose.",
      "State the subject you consistently discuss. If you want clients, make the relationship between your expertise and your service understandable without turning the bio into a sales paragraph.",
      "Pin a useful post when the feature is available and relevant. It can introduce your work, explain your approach, show a strong example, or direct visitors to a useful resource.",
      "Secure the account and review access settings. Use strong authentication practices and keep recovery information current.",
      "Your profile is the landing page for everything else you publish. Make sure a new visitor can understand why following you would be useful.",
      "Use clear profile language around the subject you want to be found for. A professional account might naturally describe itself with terms such as X marketing, Twitter marketing, X for business, Twitter for business, creator, SEO, web development, or consulting when those terms accurately describe the work.",
      "A profile should also support monetization later. If the goal is to monetize X or make money on Twitter, visitors need to understand what you know, what you create, and where they can go next. That next step could be a website, newsletter, product, service, or subscription."
    ],
    next: { href: "/learn/x-twitter/x-content-strategy", label: "Build an X content strategy" }
  },
  {
    slug: "x-twitter/x-content-strategy",
    area: "X / Twitter",
    title: "What should I post on X?",
    summary: "Turn expertise, observations, questions, and useful resources into clear posts and conversations.",
    paragraphs: [
      "Start with subjects you can discuss repeatedly. A freelancer might publish practical lessons, project breakdowns, mistakes to avoid, tools, explanations, and observations from real work.",
      "Write one idea per post when possible. Short posts can stand alone; longer threads or multi-post explanations should have a clear progression so the reader knows why to continue.",
      "Use replies as part of the strategy. Add useful information to conversations where you have something relevant to contribute. Do not treat every reply as a sales opportunity.",
      "Curate responsibly. If you share someone else's work, add context and credit rather than presenting it as your own.",
      "Build recurring themes instead of chasing every trending topic. A recognizable subject helps the right audience understand why they should follow.",
      "Create content in layers: short answer, example, deeper explanation, and resource. A strong X post can introduce a question; a longer article on BuildSkills can teach it fully; a service or project page can show how the skill becomes real work. This makes social content part of the wider learning system."
    ],
    next: { href: "/learn/x-twitter/x-growth", label: "Learn X growth" }
  },
  {
    slug: "x-twitter/x-growth",
    area: "X / Twitter",
    title: "How do I grow on X?",
    summary: "Build a recognizable subject, publish consistently, and participate in conversations where your expertise is useful.",
    paragraphs: [
      "Growth is easier when the account has a clear reason to exist. Choose a subject area and several recurring themes, then make it obvious from your profile and posts what followers will receive.",
      "Publish useful original ideas and participate in relevant conversations. Thoughtful replies can introduce your work to people who already care about the subject.",
      "Use examples and proof. Explain what you learned from a real project, show a process, or turn a common question into a concise lesson.",
      "Avoid follower exchanges, fake engagement, and automated behavior that creates low-value interactions. The goal is a relevant professional or community audience.",
      "Measure growth together with quality: relevant followers, meaningful conversations, profile visits, website clicks, enquiries, or other actions that match your goal.",
      "Growth is not just follower growth. Searchers looking for how to grow on X, how to grow on Twitter, how to get followers on X, or X audience growth usually need a repeatable system. Teach them how to choose a niche or subject, publish useful ideas, participate in relevant conversations, review analytics, and improve the profile.",
      "Do not buy followers or artificial engagement. A larger number with little relevance can make the account less useful for business. Track the actions that matter to your goal: profile visits, qualified followers, replies, website clicks, enquiries, subscribers, or sales."
    ],
    next: { href: "/learn/x-twitter/x-for-business", label: "Use X for business" }
  },
  {
    slug: "x-twitter/x-for-business",
    area: "X / Twitter",
    title: "How can I use X to get clients or business opportunities?",
    summary: "Use public expertise and conversations to make your capability visible to people who already care about the problem.",
    paragraphs: [
      "Use X as a public demonstration of expertise. If you build websites, discuss real website problems, explain decisions, show before-and-after improvements, and answer questions from business owners.",
      "Create a path from content to service. A useful post can link to a detailed guide, portfolio project, service page, or contact process when the destination genuinely expands on the topic.",
      "Listen before pitching. Look for conversations where someone has clearly described a problem you can solve. If you respond, add useful insight and let the person decide whether they want help.",
      "Build credibility over time. A profile with dozens of useful posts gives a prospect more evidence than a profile that appears only when you want to sell.",
      "Keep claims precise. Do not invent results, clients, or expertise. Professional trust is an asset that compounds slowly and can disappear quickly.",
      "Build a simple funnel: useful post → relevant profile → deeper resource → proof → enquiry or offer. This can work for freelancers, consultants, agencies, creators, and product businesses. The social post creates the conversation; the owned website or business system handles the deeper conversion."
    ],
    next: { href: "/learn/x-twitter", label: "Return to X / Twitter" }
  },
  {
    slug: "x-twitter/x-monetization",
    area: "X / Twitter",
    title: "How can I make money on X?",
    summary: "In 2026, X pays eligible creators through Original Content Rewards. Creator Revenue Sharing closed on 7 September 2026. Your own product or service does not need either program.",
    checkedDate: "2026-09-30",
    difficulty: "Beginner",
    paragraphs: [],
    sections: [
      {
        heading: "Which X program pays creators now?",
        paragraphs: [
          "The current platform payout is Original Content Rewards. X stopped taking new Creator Revenue Sharing enrollments on 7 August 2026. People already in that program earned through 7 September 2026, with a final payout expected on or around 11 September. From 8 September 2026, X began letting those members apply for Original Content Rewards. A new creator uses Original Content Rewards, not the old revenue-sharing page.",
          "The program pays for original posts, articles, images, and video that show your own voice or expertise. Commentary counts when you react, explain, or add a real point. A copied post, a repost of someone else's video, or a caption on someone else's clip does not.",
        ],
      },
      {
        heading: "What do I need before I apply?",
        paragraphs: [
          "X's help page, checked 30 September 2026, says you must meet every rule at the time you apply. Meeting them does not guarantee that X will accept you. Check the live list in Creator Studio, because X reviews applications.",
        ],
        bullets: [
          "Be 18 or older.",
          "Be in a country where Original Content Rewards is offered. On 30 September 2026 the published list included India, Bangladesh, Sri Lanka, the United States, the United Kingdom, Canada, Nigeria, and the United Arab Emirates. Pakistan was not on that list. Open the help page again before you plan around it.",
          "Use a personal or business account in good standing. Political and government accounts are not eligible.",
          "Keep an active X Premium, Premium+, or Premium Business subscription. Premium Basic is not the subscription that lets you apply.",
          "Have at least 500 verified followers.",
          "Have at least 500,000 Home Timeline impressions from verified users in the last 90 days. Impressions on replies do not count.",
          "Be actively posting original content, as X defines it on the same page.",
        ],
      },
      {
        heading: "How do I apply and get paid?",
        paragraphs: [
          "Open Creator Studio, then Original Content Rewards, and read the eligibility status on your own account. When every requirement is met, submit the application. X reviews it and tells you the result. Do not pay a stranger who offers to unlock the program. X does not do that.",
          "Payouts are currently processed every two weeks, and the minimum payout is $30. Creators outside the United States connect a Stripe account and complete identity verification in Stripe. Use the payout method Creator Studio shows for your country. Bought impressions, promoted impressions, and repeated views from the same account do not count as qualified impressions.",
        ],
      },
      {
        heading: "What if my country is not on the list?",
        paragraphs: [
          "You cannot join Original Content Rewards from a country X has not opened. Do not borrow an address or a payout account in another country. You can still earn from your own work: a service, a product, or a sponsorship you disclose. Those payments do not depend on this program.",
          "X also has Creator Subscriptions for accounts that qualify under a separate policy. Read that policy before you count on it. A client you find through a useful post is a more reliable first income than a platform payout.",
        ],
      },
    ],
    faqs: [
      { question: "How do I get monetized on X in 2026?", answer: "Apply for Original Content Rewards in Creator Studio after you meet every published rule: age, an eligible country, a personal or business account, X Premium or higher, 500 verified followers, and 500,000 Home Timeline impressions from verified users in 90 days. Approval is not automatic." },
      { question: "Is Creator Revenue Sharing still open?", answer: "No. New enrollments stopped on 7 August 2026, and earnings under that program stopped on 7 September 2026. The replacement is Original Content Rewards." },
      { question: "Does X Premium Basic let me apply?", answer: "No. X's help page says the creator needs Premium, Premium+, or Premium Business. Views from Premium Basic users can still count as qualified impressions on someone else's post." },
      { question: "Do replies count toward the 500,000 impressions?", answer: "No. X excludes impressions on replies. The count is Home Timeline impressions from verified users over the last 90 days." },
      { question: "Can I join from Pakistan?", answer: "Pakistan was not on X's published country list on 30 September 2026. India, Bangladesh, and several other countries were. Check the current list, because it can change. Do not apply through another country." },
      { question: "What content will X not pay for?", answer: "Copied posts, clips downloaded and reuploaded, small edits such as a filter or a text overlay, and compilations that add no real point of your own. Commentary you actually write can count." },
      { question: "How much does X pay?", answer: "X does not publish a rate per view. It says payouts run every two weeks and the minimum payout is $30. Qualified impressions are unique views by Premium users who see at least half the post in the Home Timeline." },
      { question: "Can I earn on X without the rewards program?", answer: "Yes. Sell a service or product you can deliver, or take a sponsorship you disclose. Those do not require Original Content Rewards or a particular country." },
    ],
    sources: [
      { label: "X Help: Original Content Rewards", url: "https://help.x.com/en/using-x/original-content-rewards" },
      { label: "X Help: Creator Revenue Sharing", url: "https://help.x.com/en/using-x/creator-revenue-sharing" },
      { label: "X Help: About X Premium", url: "https://help.x.com/en/using-x/x-premium" },
    ],
    next: { href: "/learn/x-twitter", label: "Return to X / Twitter" },
  },
];

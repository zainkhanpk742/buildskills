/**
 * Hand-written search titles and meta descriptions, keyed by route path.
 * Titles are used verbatim (no padding or truncation). Keep them under about
 * 60 characters and keep descriptions as complete sentences under about 160.
 * The visible H1 on each page is unchanged; this file only controls the
 * <title>, meta description, and social preview text.
 */
export type SeoMeta = { title: string; description: string };

export const seoMeta: Record<string, SeoMeta> = {
  "/": {
    title: "BuildSkills: Free Guides to Digital Skills, AI & Freelancing",
    description: "Free, beginner-friendly guides to AI tools, websites, SEO, video and photo editing, social media, freelancing, and earning online safely.",
  },
  "/learn": {
    title: "Learn Digital Skills Online Free: All Guides | BuildSkills",
    description: "Browse every free BuildSkills guide by topic: AI, ChatGPT prompts, websites, SEO, editing, YouTube, TikTok, freelancing, and online business.",
  },
  "/learn/websites": {
    title: "Website Building Guides for Beginners | BuildSkills",
    description: "Learn how websites work, the difference between a domain and hosting, what a site costs, and how to plan, build, and publish your first website.",
  },
  "/learn/seo": {
    title: "Learn SEO for Beginners: Free Step-by-Step Guides",
    description: "A free SEO path for beginners: how search works, search intent, keyword research, on-page and technical SEO, links, and Google Search Console.",
  },
  "/learn/mobile-apps": {
    title: "Mobile App Guides for Beginners | BuildSkills",
    description: "Decide whether you need an app or a website, then learn how Apple and Android apps are built and what the App Store and Google Play charge.",
  },
  "/learn/databases": {
    title: "Database Guides for Beginners | BuildSkills",
    description: "What a database is, when a spreadsheet is enough, and how to design tables and relationships before you choose a database tool.",
  },
  "/learn/business-software": {
    title: "Business Software Guides: Spreadsheet or Custom App?",
    description: "Learn when a spreadsheet is enough, when to build software for your business, and how to describe the workflow before anyone writes code.",
  },
  "/learn/digital-marketing": {
    title: "Digital Marketing for Beginners: Free Guides",
    description: "Free digital marketing guides for beginners: choose an audience and an offer, pick one channel you can keep up, and measure what actually works.",
  },
  "/learn/content-creation": {
    title: "Content Creation for Beginners: Free Guides",
    description: "Plan and make content people actually want: start from a real question, pick the right format, check your facts, and publish where your audience is.",
  },
  "/learn/graphic-design": {
    title: "Graphic Design for Beginners: Logos, Posters & Brands",
    description: "Free graphic design guides for beginners: hierarchy, type, colour, a simple poster, and how to design a logo and a brand identity you can reuse.",
  },
  "/learn/freelancing": {
    title: "Freelancing for Beginners: Free Step-by-Step Guides",
    description: "Start freelancing with no experience: pick a paid skill, build proof, set up Fiverr or Upwork, avoid scams, and get paid in your country.",
  },
  "/learn/online-business": {
    title: "Start an Online Business: Beginner Guides | BuildSkills",
    description: "Test a small online business idea before you spend money: choose a customer problem, shape an offer, set a price you can explain, and sell it.",
  },
  "/learn/facebook": {
    title: "Facebook for Beginners: Pages, Growth & Monetization",
    description: "Free Facebook guides: create a Page, decide what to post, grow an audience, get customers, and understand Facebook Content Monetization in 2026.",
  },
  "/learn/youtube": {
    title: "YouTube for Beginners: Grow a Channel & Get Monetized",
    description: "Start a YouTube channel, find video ideas, improve titles, thumbnails and retention, read YouTube Analytics, and meet the monetization rules.",
  },
  "/learn/x-twitter": {
    title: "X (Twitter) for Beginners: Grow & Get Paid in 2026",
    description: "Free X guides: build a profile, decide what to post, grow an audience, find clients, and understand Original Content Rewards and its rules.",
  },
  "/learn/instagram": {
    title: "Instagram for Beginners: Reels, Growth & Monetization",
    description: "Free Instagram guides: set up a business profile, plan posts and Reels, grow without fake followers, and see how Instagram pays creators in 2026.",
  },
  "/learn/tiktok": {
    title: "TikTok for Beginners: Ideas, Growth & Creator Rewards",
    description: "Free TikTok guides: start an account, find content ideas, grow, read analytics, and check Creator Rewards rules and eligible countries.",
  },
  "/learn/linkedin": {
    title: "LinkedIn for Beginners: Profile, Jobs & Clients",
    description: "Free LinkedIn guides: build a strong profile, post useful content, find a job, win clients, run a company Page, and measure what works.",
  },
  "/learn/ai-productivity": {
    title: "AI for Beginners: ChatGPT, Prompts & AI Tools",
    description: "Learn to use AI tools safely: what generative AI is, how to use ChatGPT, write better prompts, study with AI, and choose the right AI tool.",
  },
  "/learn/video-editing": {
    title: "Video Editing for Beginners: Free Guides & Tutorials",
    description: "Learn video editing step by step: organise footage, cut a story, fix sound, add subtitles, use CapCut, and pick the right editing app.",
  },
  "/learn/photo-editing": {
    title: "Photo Editing for Beginners: Canva & Free Guides",
    description: "Learn photo editing basics: crop, light, and colour, choose a photo editing app, follow a Canva tutorial, and make clear video thumbnails.",
  },
  "/learn/ai-video-generation": {
    title: "AI Video Generation for Beginners | BuildSkills",
    description: "How text-to-video, image-to-video, AI avatars, and AI editing work, with 20 AI video generators compared by use, free access, and price.",
  },
  "/learn/chatgpt-prompts": {
    title: "Useful ChatGPT Prompts for Beginners (Copy & Adapt)",
    description: "Practical ChatGPT prompts for studying, writing, planning, and everyday work, plus a simple way to check the answer before you rely on it.",
  },
  "/learn/high-paid-skills": {
    title: "Highest-Paying Skills in 2026 (Official US Wage Data)",
    description: "Ten high-paying computer and data skills with May 2025 median wages from the US Bureau of Labor Statistics, and how a beginner starts each one.",
  },
  "/learn/high-demand-skills-usa": {
    title: "In-Demand Skills in the USA (2026, Official Data)",
    description: "Ten skills US employers keep hiring for, with May 2025 BLS median pay and projected job openings, and what a beginner should learn first.",
  },
  "/learn/high-demand-skills-india": {
    title: "In-Demand Skills in India in 2026 (With Pay Bands)",
    description: "Ten skills Indian employers hire for in 2026, from software and AI to data, cloud and security, with published salary bands by experience.",
  },
  "/learn/high-demand-skills-pakistan": {
    title: "High-Paying Skills in Pakistan 2026 (With PKR Pay Data)",
    description: "Ten high-paying skills in Pakistan for 2026, with official labour data, record IT export figures, salaries in rupees where sourced, and free courses.",
  },
  "/learn/high-demand-skills-uk": {
    title: "In-Demand Skills in the UK 2026 (Official Salary Data)",
    description: "Ten in-demand skills in the UK for 2026, with Home Office going rates based on ONS pay data, the UK median wage, and free Skills Bootcamps.",
  },
  "/learn/high-demand-skills-uae": {
    title: "Highest-Paying Skills in the UAE 2026 (AED Salaries)",
    description: "Ten highest-paying skills in the UAE for 2026, with monthly salary ranges in AED, Golden and Green visa salary levels, and how to start each skill.",
  },
  "/learn/seo/what-are-good-backlinks": {
    title: "What Makes a Good Backlink? A Beginner's Guide",
    description: "What makes a backlink useful, how good links are earned, which link schemes Google treats as spam, and what to do instead of buying links.",
  },
  "/questions": {
    title: "Digital Skills Questions, Answered | BuildSkills",
    description: "Practical answers to beginner questions about AI, websites, SEO, video and photo editing, social media, freelancing, and online work.",
  },
  "/tools": {
    title: "Digital Tools Directory for Beginners | BuildSkills",
    description: "Find AI, design, video, photo, website, coding, and creator tools by the job you want to do, each linked to a practical beginner guide.",
  },
  "/resources": {
    title: "Free Learning Resources for Digital Skills | BuildSkills",
    description: "Hand-picked free resources for learning websites, AI, SEO, creative tools, online work, and digital platforms, linked to official sources.",
  },
  "/projects": {
    title: "Beginner Practice Projects for Digital Skills",
    description: "Small, self-directed projects to practise website, coding, AI, design, and creator skills, so you finish with real work you can show.",
  },
  "/about": {
    title: "About BuildSkills: Free Digital Skills Guides",
    description: "BuildSkills is an independent, free learning site for digital skills, written by the BuildSkills Editorial Team. Contact: salimpk742@gmail.com.",
  },
  "/services": {
    title: "Website Development & SEO Services | BuildSkills",
    description: "Website design and development with SEO, custom marketplace development, offline business software and digital marketing. Email to get a quote.",
  },
  "/contact": {
    title: "Contact BuildSkills | Suggest a Guide or Fix",
    description: "Email BuildSkills at salimpk742@gmail.com to suggest a guide, report outdated information or a broken link, or ask a question about the site.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | BuildSkills",
    description: "How BuildSkills uses cookies, Google Analytics, and Google AdSense, what data is collected, and how to opt out of personalised advertising.",
  },
  "/terms": {
    title: "Terms of Use | BuildSkills",
    description: "The terms for using BuildSkills guides: educational content only, with no guarantee of earnings, rankings, jobs, or platform approval.",
  },
  "/disclaimer": {
    title: "Disclaimer | BuildSkills",
    description: "BuildSkills guides are educational. They do not guarantee earnings, clients, rankings, or acceptance into any platform's monetization program.",
  },
  "/editorial-policy": {
    title: "Editorial Policy: How Guides Are Checked | BuildSkills",
    description: "How BuildSkills researches guides, uses official sources for prices and platform rules, dates every check, and corrects mistakes quickly.",
  },
  "/learn/seo/what-is-seo": {
    title: "What Is SEO? A Simple Explanation for Beginners",
    description: "SEO means making a useful page easier to find in Google's free results. Learn how it works, what it is not, and the first steps to take.",
  },
  "/learn/websites/how-to-build-a-website": {
    title: "How to Build a Website: A Step-by-Step Beginner Plan",
    description: "Build a website in the right order: decide the site's job, list the pages, write the words, choose a builder or code, then publish and improve.",
  },
  "/learn/seo/how-to-get-website-on-google": {
    title: "How to Get Your Website on Google (Step by Step)",
    description: "Get a new website on Google: publish it publicly, let Google crawl it, submit a sitemap, and check indexing in Search Console. Ads are separate.",
  },
  "/learn/seo/how-to-increase-website-traffic": {
    title: "How to Increase Website Traffic Without Shortcuts",
    description: "Increase website traffic with pages that match real searches, better titles that earn clicks, and internal links, without buying fake visits.",
  },
  "/learn/mobile-apps/how-to-build-a-mobile-app": {
    title: "How to Build a Mobile App: iPhone & Android Basics",
    description: "Build an iPhone app in Xcode or an Android app in Android Studio. Apple charges $99 a year and Google Play a one-time $25 (checked 30 Sep 2026).",
  },
  "/learn/business-software/software-for-your-business": {
    title: "How to Create Software for Your Business",
    description: "Describe the workflow first: who starts it, what must be remembered, and what done looks like. Then build the smallest version people can use.",
  },
  "/learn/websites/what-is-a-website": {
    title: "What Is a Website? Pages, Domains & Hosting Explained",
    description: "A website is a set of connected pages published at a web address. Learn its parts, how it differs from an app, and what you need to make one.",
  },
  "/learn/websites/how-websites-work": {
    title: "How Do Websites Work? A Plain-English Explanation",
    description: "How a browser turns a URL into a page: DNS, servers, HTTP requests, and the HTML, CSS, and JavaScript files that come back.",
  },
  "/learn/websites/domain-vs-hosting": {
    title: "Domain vs Hosting: What's the Difference?",
    description: "A domain is your site's address; hosting is the server that delivers its files. Learn how they connect and what to buy for a first website.",
  },
  "/learn/websites/html-css-javascript": {
    title: "HTML, CSS & JavaScript Explained for Beginners",
    description: "HTML structures a page, CSS styles it, and JavaScript makes it interactive. See what each one does and which to learn first.",
  },
  "/learn/websites/responsive-web-design": {
    title: "What Is Responsive Web Design? Beginner Guide",
    description: "Responsive design makes a website adapt to phones, tablets, and desktops. Learn the core ideas: fluid layouts, breakpoints, and readable text.",
  },
  "/learn/websites/website-vs-web-app": {
    title: "Website vs Web App: What's the Difference?",
    description: "A website mainly shares information; a web app is built around tasks, accounts, and data. Learn which one your project actually needs.",
  },
  "/learn/websites/website-structure": {
    title: "How to Structure a Website (Pages & Navigation)",
    description: "Plan a website structure around what visitors need to understand and do, give every page one job, and keep navigation simple to follow.",
  },
  "/learn/websites/business-website": {
    title: "How to Build a Business Website That Gets Enquiries",
    description: "Plan a business website from the goal, audience, offer, and proof, then build only the pages needed to turn a visitor into an enquiry.",
  },
  "/learn/websites/website-cost": {
    title: "How Much Does a Website Cost in 2026?",
    description: "What decides website cost: scope, design, content, features, hosting, and maintenance, and how to compare a DIY build with a paid one.",
  },
  "/learn/websites/publish-a-website": {
    title: "How to Publish a Website: Hosting, Domain & Go-Live",
    description: "Publish a website by putting it on public hosting, connecting a domain, turning on HTTPS, and checking the live site before you share it.",
  },
  "/learn/websites/website-maintenance": {
    title: "What Website Maintenance Includes (Checklist)",
    description: "Website maintenance means keeping content, software, links, security, speed, backups, and integrations working after launch. Here is what to check.",
  },
  "/learn/seo/how-search-engines-work": {
    title: "How Do Search Engines Work? Crawl, Index, Rank",
    description: "How Google finds pages, decides what to index, and chooses results, explained simply, so SEO tactics finally make sense.",
  },
  "/learn/seo/search-intent": {
    title: "What Is Search Intent? Examples for Beginners",
    description: "Search intent is what a searcher is trying to do. Learn the main types with examples and how to match a page to the intent behind a query.",
  },
  "/learn/seo/keyword-research": {
    title: "Keyword Research for Beginners: Step by Step",
    description: "Find the words and questions real people search, judge which ones you can answer well, and turn them into a plan for useful pages.",
  },
  "/learn/seo/on-page-seo": {
    title: "On-Page SEO for Beginners: Titles, Headings & Content",
    description: "On-page SEO is the work you do on the page itself: a clear title, a matching heading, a direct answer, good structure, and helpful links.",
  },
  "/learn/seo/technical-seo": {
    title: "Technical SEO for Beginners: Crawl, Index & Speed",
    description: "Technical SEO makes a site crawlable, indexable, secure, and fast. Learn the basics: robots.txt, sitemaps, canonicals, HTTPS, and mobile.",
  },
  "/learn/seo/internal-linking": {
    title: "Internal Linking for SEO: A Beginner's Guide",
    description: "Link related pages with descriptive anchor text so visitors and Google can find your best content and understand how your site fits together.",
  },
  "/learn/seo/search-console": {
    title: "Google Search Console Tutorial for Beginners",
    description: "Set up Google Search Console, submit a sitemap, inspect URLs, read the Page indexing report, and use Performance data to improve pages.",
  },
  "/learn/seo/seo-content-strategy": {
    title: "SEO Content Strategy for Beginners (Simple Plan)",
    description: "Build a focused library of pages around the questions your audience actually asks, link them into clusters, and improve what already works.",
  },
  "/learn/seo/local-seo": {
    title: "Local SEO for Small Businesses: Beginner Guide",
    description: "Help local customers find your business: a complete Google Business Profile, consistent details, real reviews, and a useful local page.",
  },
  "/learn/youtube/how-to-start-a-youtube-channel": {
    title: "How to Start a YouTube Channel in 2026 (Step by Step)",
    description: "Start a YouTube channel around a clear audience and a repeatable video type: set it up, plan your first videos, and learn what to measure.",
  },
  "/learn/youtube/video-ideas": {
    title: "How to Find YouTube Video Ideas That Get Watched",
    description: "Turn real questions, problems, demonstrations, and comments into a steady list of YouTube video ideas your audience actually wants.",
  },
  "/learn/youtube/titles-thumbnails": {
    title: "YouTube Titles and Thumbnails: How to Get Clicks",
    description: "Write YouTube titles and design thumbnails that make the video's promise clear, so the right viewers click and stay, without clickbait.",
  },
  "/learn/youtube/audience-retention": {
    title: "How to Improve YouTube Audience Retention",
    description: "Keep viewers watching: deliver the promised value early, cut slow parts, and use the retention graph to see exactly where people leave.",
  },
  "/learn/youtube/youtube-analytics": {
    title: "YouTube Analytics for Beginners: What to Check",
    description: "Use impressions, click-through rate, traffic sources, watch time, and audience data in YouTube Analytics to decide what to improve next.",
  },
  "/learn/youtube/make-money-on-youtube": {
    title: "How to Make Money on YouTube in 2026",
    description: "How to make money on YouTube: ads and Premium revenue, fan funding, sponsorships, affiliates, and your own products, with the 2026 and 2027 rules.",
  },
  "/learn/facebook/how-to-create-a-facebook-page": {
    title: "How to Create a Facebook Page for Your Business",
    description: "Create a Facebook business Page with accurate details, a clear description, useful first posts, and one action you want customers to take.",
  },
  "/learn/facebook/facebook-content-strategy": {
    title: "What to Post on Facebook: A Simple Content Plan",
    description: "A practical Facebook content plan: a mix of useful information, proof, conversation, and offers that fits your audience and your business.",
  },
  "/learn/facebook/facebook-page-growth": {
    title: "How to Grow a Facebook Page Without Buying Likes",
    description: "Grow a Facebook Page by posting useful content consistently, joining relevant communities, and giving people a real reason to follow.",
  },
  "/learn/facebook/facebook-leads": {
    title: "How to Get Customers from Facebook",
    description: "Turn Facebook attention into customers with one clear next step: a message, enquiry, booking, website visit, or purchase you can track.",
  },
  "/learn/facebook/facebook-monetization": {
    title: "Facebook Monetization 2026: Requirements & Countries",
    description: "How Facebook Content Monetization works in 2026: invite-only access, eligible content, country rules, Creator Fast Track, and what ended in 2025.",
  },
  "/learn/instagram/how-to-set-up-instagram-for-business": {
    title: "How to Set Up Instagram for Business",
    description: "Set up an Instagram professional account with a profile that explains who you help, what you offer, and where people should go next.",
  },
  "/learn/instagram/instagram-content-strategy": {
    title: "What to Post on Instagram: Content Pillars That Work",
    description: "Build a few repeatable content pillars across posts, Reels, and Stories so you always know what to post and why it helps your audience.",
  },
  "/learn/instagram/instagram-reels": {
    title: "How to Make Instagram Reels People Watch",
    description: "Turn one focused idea into a short Reel with a strong opening, a clear payoff, readable captions, and the right format for the feed.",
  },
  "/learn/instagram/instagram-growth": {
    title: "How to Grow on Instagram in 2026 (No Fake Followers)",
    description: "Grow an Instagram account by giving the right people a reason to follow, save, share, and come back, and learn what to stop doing.",
  },
  "/learn/instagram/instagram-monetization": {
    title: "How to Make Money on Instagram in 2026",
    description: "Instagram pays creators through Gifts, Subscriptions, badges, and invite-only bonuses. Learn the rules and why brand deals usually pay more.",
  },
  "/learn/tiktok/how-to-start-tiktok": {
    title: "How to Start on TikTok: A Beginner's Plan",
    description: "Start on TikTok with a clear profile, a specific audience, and a simple routine for making short videos you can keep up every week.",
  },
  "/learn/tiktok/tiktok-content-ideas": {
    title: "TikTok Content Ideas for Beginners",
    description: "Build a list of TikTok ideas from questions, demonstrations, mistakes, stories, and what your audience keeps asking for.",
  },
  "/learn/tiktok/tiktok-growth": {
    title: "How to Grow on TikTok: What Actually Helps",
    description: "Grow on TikTok by making each video clearer, more useful, and easier to repeat, and by learning from how your audience responds.",
  },
  "/learn/tiktok/tiktok-analytics": {
    title: "TikTok Analytics for Beginners: What to Check",
    description: "Use TikTok analytics to see which topics, hooks, formats, and audiences respond, then decide what your next videos should be.",
  },
  "/learn/tiktok/tiktok-monetization": {
    title: "TikTok Monetization 2026: Requirements & Countries",
    description: "TikTok Creator Rewards pays for original videos over one minute in eight countries. See the follower, view, and age rules and other ways to earn.",
  },
  "/learn/linkedin/how-to-build-a-linkedin-profile": {
    title: "How to Build a Strong LinkedIn Profile",
    description: "Write a LinkedIn headline, About section, and experience that make clear what you do, who you help, and the proof behind it.",
  },
  "/learn/linkedin/linkedin-content-strategy": {
    title: "What to Post on LinkedIn: A Beginner's Plan",
    description: "Share useful professional knowledge, lessons, and evidence that start the right conversations, with a simple plan you can keep up.",
  },
  "/learn/linkedin/get-clients": {
    title: "How to Get Clients on LinkedIn (Without Spam)",
    description: "Get clients on LinkedIn with a clear profile, proof of your work, useful posts, and targeted, personal outreach instead of generic pitches.",
  },
  "/learn/linkedin/linkedin-job-search": {
    title: "How to Use LinkedIn to Find a Job",
    description: "Make your LinkedIn profile searchable and credible, set job alerts, and combine applications with networking and proof of your skills.",
  },
  "/learn/linkedin/linkedin-page-for-business": {
    title: "How to Create a LinkedIn Company Page",
    description: "Create a LinkedIn Page for your business with complete details, a clear value proposition, and a steady rhythm of useful updates.",
  },
  "/learn/linkedin/linkedin-analytics": {
    title: "LinkedIn Analytics: How to Measure Your Posts",
    description: "Measure whether your LinkedIn content reaches the right people and leads to profile views, conversations, and real opportunities.",
  },
  "/learn/x-twitter/how-to-build-an-x-profile": {
    title: "How to Build an X Profile for Professional Use",
    description: "Set up an X (Twitter) profile that explains your subject, credibility, and next step in seconds: name, bio, photo, banner, and pinned post.",
  },
  "/learn/x-twitter/x-content-strategy": {
    title: "What to Post on X: A Content Plan for Beginners",
    description: "Turn your expertise, observations, questions, and useful resources into clear X posts and threads that start real conversations.",
  },
  "/learn/x-twitter/x-growth": {
    title: "How to Grow on X (Twitter) in 2026",
    description: "Grow on X with a recognisable subject, consistent original posts, and useful replies in conversations where your expertise helps.",
  },
  "/learn/x-twitter/x-for-business": {
    title: "How to Use X to Get Clients and Opportunities",
    description: "Use public expertise and conversations on X to make your skills visible to people who already care about the problem you solve.",
  },
  "/learn/x-twitter/x-monetization": {
    title: "X Monetization 2026: Original Content Rewards Explained",
    description: "How X's Original Content Rewards works: Premium, 500 verified followers, 500,000 impressions in 90 days, eligible countries, and payouts.",
  },
  "/learn/databases/how-to-design-a-database": {
    title: "How to Design a Database: A Beginner's Method",
    description: "List what your app must remember, model the relationships between those facts, then choose a database that fits the job.",
  },
  "/learn/digital-marketing/how-to-market-a-business-online": {
    title: "How to Market a Business Online: Beginner Plan",
    description: "Define the customer and the offer, choose a channel they already use, publish a clear message, and measure the actions that matter.",
  },
  "/learn/content-creation/how-to-create-useful-content": {
    title: "How to Create Useful Content People Want",
    description: "Choose one audience question, make a clear and original answer, check the facts, and publish it in a format people can actually use.",
  },
  "/learn/graphic-design/how-to-design-a-clear-brand": {
    title: "How to Design a Logo and Brand Identity",
    description: "Define the audience and message first, then choose a logo, colours, and type you can repeat everywhere. A step-by-step beginner method.",
  },
  "/learn/online-business/how-to-start-an-online-business": {
    title: "How to Start an Online Business (Test Before You Spend)",
    description: "Start an online business by testing a specific customer problem and a small offer before you pay for a big website, stock, or ads.",
  },
  "/learn/ai-productivity/how-to-use-ai-productively": {
    title: "How to Use AI to Get More Done (Safely)",
    description: "Use AI to speed up tasks you already understand, protect sensitive information, and check every result before you rely on it.",
  },
  "/learn/ai-productivity/what-is-generative-ai": {
    title: "What Is Generative AI? A Simple Explanation",
    description: "Generative AI creates new text, images, audio, and video from patterns learned in data. Learn how it works, where it helps, and its limits.",
  },
  "/learn/ai-productivity/how-to-use-chatgpt": {
    title: "How to Use ChatGPT: A Beginner's Guide",
    description: "Use ChatGPT well: start with a task you understand, give context and constraints, and check the answer before you rely on it.",
  },
  "/learn/ai-productivity/how-to-write-ai-prompts": {
    title: "How to Write Better AI Prompts (With Examples)",
    description: "Write clearer AI prompts: state the task, add the context it needs, describe the format you want, then test and refine the result.",
  },
  "/learn/ai-productivity/how-to-use-ai-for-studying": {
    title: "How to Use AI for Studying (Without Cheating)",
    description: "Use AI to explain topics, quiz yourself, and organise notes while keeping your own reasoning central and following your school's rules.",
  },
  "/learn/ai-productivity/ai-safety-and-privacy": {
    title: "How to Use AI Tools Safely and Protect Your Privacy",
    description: "Share only what is necessary, check AI answers, and understand each tool's data controls before you paste personal or client information.",
  },
  "/learn/ai-productivity/how-to-choose-an-ai-tool": {
    title: "How to Choose the Right AI Tool for a Task",
    description: "Choose an AI tool by the job, output quality, privacy needs, accessibility, and the current price and limits of the free and paid plans.",
  },
  "/learn/freelancing/how-to-make-money-online-safely": {
    title: "Online Money Scams: How to Spot Them and Earn Safely",
    description: "Task apps, guaranteed daily pay, and fees to withdraw are scam patterns. Learn the warning signs and the safe ways to earn money online.",
  },
  "/learn/video-editing/how-to-edit-a-video": {
    title: "How to Edit a Video: Step-by-Step for Beginners",
    description: "Edit a video step by step: organise footage, build a clear sequence, cut pauses, fix the sound, add captions, and export for the platform.",
  },
  "/learn/video-editing/best-video-editing-apps": {
    title: "Best Video Editing Apps for Beginners (2026)",
    description: "Compare video editing apps by device, learning curve, free features, export needs, and the kind of videos you want to make.",
  },
  "/learn/video-editing/how-to-add-subtitles": {
    title: "How to Add Subtitles to a Video (Step by Step)",
    description: "Add subtitles to a video: create or check a transcript, sync captions with speech, choose burned-in or closed captions, and review the result.",
  },
  "/learn/photo-editing/how-to-edit-photos": {
    title: "How to Edit Photos: A Beginner's Workflow",
    description: "Edit photos step by step: keep the original, straighten and crop, fix exposure and colour, and export the right file for where it will be used.",
  },
  "/learn/photo-editing/best-photo-editing-apps": {
    title: "Best Photo Editing Apps for Beginners (2026)",
    description: "Choose a photo editing app by device, editing goals, file formats, accessibility, and how much control you need, from free apps to pro tools.",
  },
  "/learn/photo-editing/how-to-make-a-thumbnail": {
    title: "How to Make a YouTube Thumbnail That Gets Clicks",
    description: "Make a clear video thumbnail with one focal point, a few readable words, strong contrast, and a design that still works at small sizes.",
  },
  "/learn/ai-video-generation/best-ai-video-generators": {
    title: "Best AI Video Generators 2026: 20 Tools Compared",
    description: "Compare 20 AI video generators for text-to-video, image-to-video, avatars, and editing, with free access and prices checked in 2026.",
  },
  "/learn/chatgpt-prompts/useful-chatgpt-prompts": {
    title: "Useful ChatGPT Prompts for Beginners (Copy & Adapt)",
    description: "Practical ChatGPT prompts for studying, writing, planning, and everyday work, plus a simple way to check the answer before you rely on it.",
  },
  "/learn/high-paid-skills/highest-paid-skills": {
    title: "Highest-Paying Skills in 2026 (Official US Wage Data)",
    description: "Ten high-paying computer and data skills with May 2025 median wages from the US Bureau of Labor Statistics, and how a beginner starts each one.",
  },
  "/learn/high-demand-skills-usa/high-demand-skills-in-the-usa": {
    title: "In-Demand Skills in the USA (2026, Official Data)",
    description: "Ten skills US employers keep hiring for, with May 2025 BLS median pay and projected job openings, and what a beginner should learn first.",
  },
  "/learn/high-demand-skills-india/high-demand-skills-in-india": {
    title: "In-Demand Skills in India in 2026 (With Pay Bands)",
    description: "Ten skills Indian employers hire for in 2026, from software and AI to data, cloud and security, with published salary bands by experience.",
  },
  "/learn/freelancing/how-to-start-freelancing": {
    title: "How to Start Freelancing with No Experience (2026)",
    description: "Start freelancing step by step: pick one paid skill, make three samples, write a clear offer, find a first client, and get paid safely.",
  },
  "/learn/freelancing/how-to-make-money-online": {
    title: "How to Make Money Online: Real Ways for Beginners",
    description: "Real ways to make money online for beginners: freelance services, products, tutoring, and content, plus how to spot scams before you pay.",
  },
  "/learn/freelancing/fiverr-for-beginners": {
    title: "Fiverr for Beginners: Create a Gig & Get First Orders",
    description: "Start on Fiverr: set up a seller profile, write one specific gig, price your packages, and understand Fiverr's fees and payouts.",
  },
  "/learn/freelancing/upwork-for-beginners": {
    title: "Upwork for Beginners: Profile, Proposals & Fees",
    description: "Start on Upwork: a profile that shows proof, proposals that answer the client's job, and how Upwork's service fee affects what you keep.",
  },
  "/learn/ai-productivity/best-skills-to-learn-2026": {
    title: "Best Skills to Learn in 2026 to Earn Online",
    description: "The best skills to learn in 2026 if you want paid work: writing, websites, SEO, design, video editing, and using AI well, and how to start.",
  },
  "/learn/ai-productivity/free-online-courses-with-certificates": {
    title: "Free Online Courses with Certificates (2026 Guide)",
    description: "Where to find free online courses with certificates, which certificates are free or paid, what they prove, and how to turn a course into work.",
  },
  "/learn/youtube/youtube-monetization-requirements-2026": {
    title: "YouTube Monetization Requirements 2026 (+ 2027 Changes)",
    description: "YouTube Partner Program rules now and from 1 Feb 2027: 1,000 subscribers plus 8,000 watch hours or 20M Shorts views, and the 500-subscriber tier.",
  },
  "/learn/photo-editing/canva-tutorial": {
    title: "Canva Tutorial for Beginners: Design Basics (2026)",
    description: "A Canva tutorial for beginners: pick the right size, set up text and images, design a clear graphic, export the right file, and know what Pro adds.",
  },
  "/learn/video-editing/capcut-tutorial": {
    title: "CapCut Tutorial for Beginners: Edit Your First Video",
    description: "A CapCut tutorial for beginners: import clips, cut pauses, add captions and music safely, and export the right format for each platform.",
  },
  "/learn/mobile-apps/do-i-need-an-app": {
    title: "Do I Need an App or a Website? How to Decide",
    description: "Choose an app only when the job lives on the phone: logins, the camera, offline use, or notifications. For most beginners a website comes first.",
  },
  "/learn/databases/what-is-a-database": {
    title: "What Is a Database? A Simple Explanation",
    description: "A database is organised memory for a product: the facts it must remember, stored so they can be found and updated safely. Here is how it works.",
  },
  "/learn/business-software/spreadsheet-or-software": {
    title: "Spreadsheet or Custom Software? How to Decide",
    description: "Stay with a spreadsheet while one person can keep it accurate. Build software when a shared, live list has become how the work gets done.",
  },
  "/learn/digital-marketing/choose-a-channel": {
    title: "How to Choose a Marketing Channel as a Beginner",
    description: "Pick one marketing channel your audience already uses and that you can update every week. Here is how to compare channels and start.",
  },
  "/learn/content-creation/plan-one-piece": {
    title: "How to Plan a Piece of Content (Step by Step)",
    description: "Plan one piece of content: start from a real question, choose the format that fits the answer, and publish it where those people already are.",
  },
  "/learn/graphic-design/design-a-simple-poster": {
    title: "How to Design a Simple Poster: Beginner Steps",
    description: "Design a clear poster: write the headline first, make it the biggest element, and use one typeface, a few colours, and plenty of space.",
  },
  "/learn/online-business/how-to-price-an-offer": {
    title: "How to Price an Online Offer or Service",
    description: "Price an online offer from your time, your costs, and the result for the buyer, so you can explain the number and attract the right clients.",
  },
  "/learn/ai-productivity/how-to-make-money-with-ai": {
    title: "How to Make Money with AI in 2026 (Real Ways, No Hype)",
    description: "Seven realistic ways to earn with AI tools, the YouTube and TikTok rules on AI content, the scams to avoid, and a 30-day plan to a first payment.",
  },
  "/learn/ai-productivity/free-ai-tools": {
    title: "Free AI Tools in 2026 for Students and Beginners",
    description: "Free AI tools for chat, research, writing, design, and video: ChatGPT, Gemini, Claude, Copilot, NotebookLM, Canva and more, checked October 2026.",
  },
  "/learn/chatgpt-prompts/chatgpt-prompts-for-students": {
    title: "ChatGPT Prompts for Students: Study, Essays & Exams",
    description: "Copy-and-adapt ChatGPT prompts for students: understand topics, revise for exams, plan essays, practise languages, and stay within school AI rules.",
  },
  "/learn/freelancing/make-money-online-as-a-teenager": {
    title: "How to Make Money Online as a Teenager (Safe Ways)",
    description: "Real age rules for Fiverr, Upwork, YouTube, TikTok and X, checked October 2026, plus safe ways for teens to earn with a parent and the scams to avoid.",
  },
  "/learn/freelancing/freelancing-websites-for-beginners": {
    title: "Best Freelancing Websites for Beginners (Fees Compared)",
    description: "Fiverr, Upwork, Freelancer.com, PeoplePerHour and Contra compared: freelancer fees checked October 2026, how each finds you work, and which to pick.",
  },
  "/learn/freelancing/remote-jobs-for-beginners": {
    title: "Remote Jobs for Beginners with No Experience (Worldwide)",
    description: "Entry-level remote jobs that hire beginners, trusted job boards, how to apply with no experience, and how to spot the fake jobs that target newcomers.",
  },
  "/learn/youtube/youtube-shorts-monetization": {
    title: "YouTube Shorts Monetization 2026-2027: Rules & Revenue Share",
    description: "How YouTube pays for Shorts (45% of the Creator Pool), the 10M and 20M view thresholds, the 1 February 2027 changes, and ways to earn below them.",
  },
  "/learn/freelancing/fiverr-gig-ideas": {
    title: "30 Fiverr Gig Ideas for Beginners (With Example Titles)",
    description: "30 beginner-friendly Fiverr gig ideas in writing, design, video, data and languages, each with an example title, plus how to price after the 20% fee.",
  },
  "/learn/seo/ai-search-optimization": {
    title: "SEO for AI Search: AI Overviews, AI Mode & Chatbots",
    description: "What Google says about AI Overviews and AI Mode, what you can skip (llms.txt, chunking), how to get cited by AI assistants, and how to measure it.",
  },
  "/learn/seo/free-seo-course": {
    title: "Free SEO Course for Beginners: 12 Lessons (2026)",
    description: "A free 12-lesson SEO course: lesson order, practice tasks and self-checks, using free Google tools, plus a final project checklist and an AI search bonus.",
  },
  "/learn/video-editing/davinci-resolve-for-beginners": {
    title: "DaVinci Resolve for Beginners: Free Pro Video Editing",
    description: "Edit your first video in DaVinci Resolve's free version: free vs Studio (US$295), system requirements, the pages, a step-by-step edit, and export.",
  },
  "/learn/video-editing/edit-videos-for-tiktok-and-reels": {
    title: "How to Edit Videos for TikTok, Reels and Shorts (2026)",
    description: "Edit one vertical video for TikTok, Instagram Reels and YouTube Shorts: 9:16 settings, official length rules, a step-by-step workflow and safe zones.",
  },
  "/learn/chatgpt-prompts/chatgpt-image-prompts": {
    title: "ChatGPT Image Prompts: 30 Examples and a Simple Formula",
    description: "A simple formula for ChatGPT image prompts plus 30 examples for thumbnails, posts, products, logos and study diagrams, with editing tips and usage rules.",
  },
};

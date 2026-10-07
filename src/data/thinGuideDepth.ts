import type { GuideDepth } from "@/data/guideDepth";

/**
 * Added depth for the shortest platform guides (checked 7 October 2026).
 * Facts about a platform come only from the official pages listed in each
 * entry's sources; everything else is method, not a claimed number.
 */
const OCT7 = "2026-10-07";

const tiktokRecommends = {
  label: "TikTok Support: How TikTok recommends content (checked 7 Oct 2026)",
  url: "https://support.tiktok.com/en/using-tiktok/exploring-videos/how-tiktok-recommends-content",
};
const tiktokGuidelines = {
  label: "TikTok Community Guidelines (checked 7 Oct 2026)",
  url: "https://www.tiktok.com/community-guidelines/en",
};
const tiktokAnalytics = {
  label: "TikTok Support: Using TikTok analytics (checked 7 Oct 2026)",
  url: "https://support.tiktok.com/en/using-tiktok/growing-your-audience/using-tiktok-analytics",
};
const igPro = {
  label: "Instagram Help: Set up a professional Instagram account (checked 7 Oct 2026)",
  url: "https://help.instagram.com/502981923235522",
};
const liMedia = {
  label: "LinkedIn Help: Media file types supported on LinkedIn (checked 7 Oct 2026)",
  url: "https://www.linkedin.com/help/linkedin/answer/a564109",
};
const liFeed = {
  label: "LinkedIn Help: Manage your LinkedIn feed preferences (checked 7 Oct 2026)",
  url: "https://www.linkedin.com/help/linkedin/answer/a527144",
};
const liPageActivity = {
  label: "LinkedIn Help: View and engage with your LinkedIn Page activity (checked 7 Oct 2026)",
  url: "https://www.linkedin.com/help/linkedin/answer/a568255",
};

export const thinGuideDepth: Record<string, GuideDepth> = {
  "tiktok/tiktok-growth": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "What TikTok says decides who sees a post",
        paragraphs: [
          "TikTok's own help page explains that its recommender systems suggest content based on each viewer's interactions, such as following an account or liking a post, and that new viewers are first shown popular content suited to a broad audience, influenced by their location and language settings. It also says the weight of each factor can change over time, and that it generally avoids showing people content they have already seen.",
          "For a small account this means growth comes from earning interactions from the right viewers, one post at a time, not from a trick. A clear topic helps the system match your posts to people who already interact with similar content.",
        ],
        bullets: [
          "Pick one topic for your next 10 posts so viewers who like one post have a reason to watch the next.",
          "Make the first seconds show what the post is about, so the right viewers keep watching and the wrong ones skip quickly.",
          "Reply to real comments; a reply video turns a question into the next post.",
          "Stay inside the Community Guidelines: TikTok says it removes violating content and does not recommend it.",
        ],
      },
      {
        heading: "A simple 4-week growth routine",
        paragraphs: [
          "Week 1: post three times on one topic and write down, for each post, the hook you used. Week 2: repeat the format of your best post with a new example. Week 3: answer the most common comment question in its own post. Week 4: compare the four weeks in your analytics and keep only the formats that held viewers' attention.",
        ],
      },
    ],
    sources: [tiktokRecommends, tiktokGuidelines],
  },
  "tiktok/tiktok-content-ideas": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Where good ideas come from (without copying)",
        paragraphs: [
          "The most reliable idea source is your own audience: the questions people ask in comments and messages are topics they already want. A second source is your own work, shown as a process, such as a before and after, a mistake and its fix, or a one-minute tutorial.",
          "TikTok says new viewers are first shown popular content that suits a broad audience, so ideas that make sense without any context travel further than inside jokes. Trends are fine to join, but add your own topic to them instead of re-uploading someone else's video.",
        ],
        bullets: [
          "Question post: \"How do I ...?\" answered in one clear step.",
          "Myth post: one common mistake in your topic and what to do instead.",
          "Process post: the same task shown from start to finish in under a minute.",
          "Series post: part 1, 2, 3 of one bigger lesson, so viewers come back.",
        ],
      },
      {
        heading: "Keep an idea bank",
        paragraphs: [
          "Keep a note with three columns: the idea, the hook sentence, and the result after posting. When a post does well, add two new ideas that use the same format with a different example. This turns one good post into a plan instead of a lucky moment.",
        ],
      },
    ],
    sources: [tiktokRecommends, tiktokGuidelines],
  },
  "tiktok/how-to-start-tiktok": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Your first week, step by step",
        paragraphs: [
          "According to TikTok, when you first sign up it may ask you to choose categories of interest, and if you skip that it starts by showing recent popular posts. Spend your first days watching and following accounts in the topic you want to post about: your own feed then shows you what already works there.",
        ],
        bullets: [
          "Day 1: set a clear username, a profile photo and a one-line bio that says what you post.",
          "Days 2–3: watch and save 20 posts in your topic and note what each does in its first seconds.",
          "Days 4–7: post three short videos on the same topic, each with one clear point.",
          "Read the Community Guidelines once before posting, so a first video is not removed for something avoidable.",
        ],
      },
      {
        heading: "Common beginner mistakes",
        paragraphs: [
          "Deleting and re-posting the same video, posting on many unrelated topics, and buying followers are the usual mistakes. Bought or fake followers do not watch your posts, so they make your real results harder to read. Start small, stay on one topic, and judge results after several posts, not one.",
        ],
      },
    ],
    sources: [tiktokRecommends, tiktokGuidelines],
  },
  "tiktok/tiktok-analytics": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "How to read your numbers without guessing",
        paragraphs: [
          "TikTok's help centre has a page on using analytics for your account. Whatever screen you use, the useful habit is the same: compare posts with each other, not with famous accounts, and look at more than views.",
        ],
        bullets: [
          "Views tell you how widely a post was shown.",
          "Watch time and the share of viewers who watched to the end tell you whether the post held attention, which is the part you control.",
          "Follows, comments, shares and saves after a post tell you whether viewers wanted more from you.",
          "Traffic sources tell you whether people found the post in the For You feed, your profile, search, or elsewhere.",
        ],
      },
      {
        heading: "A monthly review in 15 minutes",
        paragraphs: [
          "Once a month, list your three best and three weakest posts. For each one write the topic, the first sentence and the length. Look for the pattern the best posts share, and plan next month's posts around it. Change one thing at a time, so you can tell what made the difference.",
        ],
      },
    ],
    sources: [tiktokAnalytics, tiktokRecommends],
  },
  "instagram/instagram-growth": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Set up the account so growth can be measured",
        paragraphs: [
          "Instagram's help centre explains that switching to a professional account (business or creator) gives you a professional dashboard with insights, plus tools for ads and messages. It also warns that if your personal account is private, switching makes it public and automatically accepts pending follow requests, so check that before you switch.",
        ],
        bullets: [
          "Choose Creator if you are a person sharing work or content, and Business for a shop, brand or service.",
          "Write a bio that says who the account is for and what they get from following.",
          "Use the dashboard insights monthly to see which posts brought new followers.",
        ],
      },
      {
        heading: "A growth plan you can repeat",
        paragraphs: [
          "Pick two or three content pillars, such as tutorials, behind the scenes and results. Post a mix of Reels for reach, carousels for saves and Stories for people who already follow you. Each month keep the formats that brought followers and drop the ones that did not. Buying followers or using follow-for-follow groups adds accounts that never engage, which makes your insights less useful.",
        ],
      },
    ],
    sources: [igPro],
  },
  "instagram/instagram-content-strategy": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Build a simple content calendar",
        paragraphs: [
          "A strategy is just a repeatable plan: who the posts are for, what each post helps them do, and when you post. Write one sentence for each: \"I post [topic] for [audience] so they can [result].\" Then plan two weeks of posts at a time.",
        ],
        bullets: [
          "Monday: a how-to Reel that solves one small problem.",
          "Wednesday: a carousel that lists steps or examples people will save.",
          "Friday: behind-the-scenes or a customer result.",
          "Daily (optional): a Story that answers a question or shows work in progress.",
        ],
      },
      {
        heading: "Measure with insights, then adjust",
        paragraphs: [
          "Instagram gives professional accounts a dashboard with insights. Use it to compare reach, saves, shares and follows across your pillars. If one pillar keeps bringing saves but few followers, keep it for loyalty and pair it with a format that reaches new people.",
        ],
      },
    ],
    sources: [igPro],
  },
  "linkedin/linkedin-analytics": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "What to check on a profile and on a Page",
        paragraphs: [
          "On a personal profile, look at who viewed your profile and how your posts performed. On a LinkedIn Page, LinkedIn's help centre explains that admins can open the Activity tab to filter comments, mentions, posts, reposts and reactions, and that the Post highlights module shows the most commented, shared and reacted-to posts.",
        ],
        bullets: [
          "Reactions show interest; comments and reposts show the post started a conversation.",
          "Profile views after a post suggest the post made people curious about you.",
          "Follower growth over a month matters more than a single post's numbers.",
        ],
      },
      {
        heading: "Turn the numbers into a decision",
        paragraphs: [
          "Every month, take your top three posts from Post highlights or your own post list. Note the topic, the format (text, image, document or video) and the first line. Make two new posts in the winning format, and stop the format that never earns comments.",
        ],
      },
    ],
    sources: [liPageActivity, liFeed],
  },
  "linkedin/linkedin-content-strategy": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Formats LinkedIn supports",
        paragraphs: [
          "LinkedIn's help centre lists the files you can post: images such as JPEG, PNG, GIF and WEBP; documents such as PDF, DOC/DOCX and PPT/PPTX; and video such as MP4 and MOV. It notes a 100 MB file size limit and a 300-page limit for documents (checked 7 October 2026). A short PDF carousel of five to ten slides is an easy way to share a step-by-step lesson.",
        ],
      },
      {
        heading: "A weekly rhythm that builds trust",
        paragraphs: [
          "LinkedIn says that if you regularly post content that is engaging and professionally relevant, it may recommend you to other members as someone to follow, and that followers see the posts you share publicly. So consistency on one professional topic matters more than volume.",
        ],
        bullets: [
          "One lesson post: something you learned at work and how others can use it.",
          "One proof post: a project, result or case study with real details you are allowed to share.",
          "Comment thoughtfully on three posts by people in your field every week.",
        ],
      },
    ],
    sources: [liMedia, liFeed],
  },
  "linkedin/how-to-build-a-linkedin-profile": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Profile checklist",
        paragraphs: [
          "A good profile answers three questions in seconds: who you are, what you do, and why someone should contact you. Fill in each section with the reader in mind, not as a copy of your CV.",
        ],
        bullets: [
          "Photo: a clear, recent photo of your face with a plain background.",
          "Headline: your role or skill and who you help, such as \"Junior web developer | building fast sites for small businesses\".",
          "About: three short paragraphs: what you do, proof (projects or results), and how to reach you.",
          "Experience: for each role, one line on the job and two lines on results.",
          "Featured: add work samples. LinkedIn supports documents such as PDF and PPTX, images and video, with a 100 MB file limit (checked 7 October 2026).",
        ],
      },
      {
        heading: "After the profile is ready",
        paragraphs: [
          "LinkedIn notes that people who follow you see what you share publicly, and that members who regularly post relevant content may be recommended to others to follow. A finished profile plus one useful post a week is enough to start being found.",
        ],
      },
    ],
    sources: [liMedia, liFeed],
  },
  "business-software/software-for-your-business": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Before you build: a one-page brief",
        paragraphs: [
          "Most business software projects go wrong because nobody wrote down what the software must do. Before talking to a developer or trying a no-code tool, write one page that a stranger could understand.",
        ],
        bullets: [
          "The problem: what takes too long or goes wrong today, in one sentence.",
          "Users: who will use it (staff, customers, managers) and on which devices.",
          "Must-have tasks: the five to ten actions it must support on day one.",
          "Data: what information it stores, who can see it, and how it is backed up.",
          "Success: how you will know it worked, such as hours saved per week.",
        ],
      },
      {
        heading: "Buy, configure or build?",
        paragraphs: [
          "Check first whether an existing product (accounting, booking, inventory or CRM software) already does most of the job; configuring it is usually faster and cheaper than building. Build custom software only for the part that is truly specific to your business. Whatever you choose, plan for security from the start: the OWASP Top 10 is a free, widely used list of the most common web application security risks to discuss with your developer.",
        ],
      },
    ],
    sources: [
      { label: "OWASP Top 10 web application security risks (checked 7 Oct 2026)", url: "https://owasp.org/www-project-top-ten/" },
    ],
  },
};

const igReels = {
  label: "Instagram Help: Record a reel on Instagram (checked 7 Oct 2026)",
  url: "https://help.instagram.com/2720958398006062/",
};
const liCreatePage = {
  label: "LinkedIn Help: Create a LinkedIn Page (checked 7 Oct 2026)",
  url: "https://www.linkedin.com/help/linkedin/answer/a543852",
};
const liOpenToWork = {
  label: "LinkedIn Help: Let recruiters know you're Open to Work (checked 7 Oct 2026)",
  url: "https://www.linkedin.com/help/linkedin/answer/a507508",
};
const liJobAlerts = {
  label: "LinkedIn Help: Job alerts on LinkedIn (checked 7 Oct 2026)",
  url: "https://www.linkedin.com/help/linkedin/answer/a511279",
};
const xPost = {
  label: "X Help Center: How to post (checked 7 Oct 2026)",
  url: "https://help.x.com/en/using-x/how-to-post",
};

export const thinGuideDepth2: Record<string, GuideDepth> = {
  "linkedin/linkedin-page-for-business": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Create the Page: what LinkedIn asks for",
        paragraphs: [
          "LinkedIn's help centre says a Page is free, that you need a personal LinkedIn account to create one, and that Pages can be created on desktop or in the iOS app but not on Android (checked 7 October 2026). You choose a Page type (Company, Showcase page or Educational institution), fill in the Page identity and details, and tick a box confirming you have the right to act for the organisation.",
          "A Page is different from your profile: a profile is you as a person, a Page is the business. Customers and job seekers look at the Page to check the business is real, so finish it before you invite anyone.",
        ],
        bullets: [
          "Name and URL: the exact business name customers search for.",
          "Logo and cover image: the same logo you use on your website and invoices.",
          "Tagline and About: what you sell, to whom, and where you work.",
          "Website and contact details that actually reach you.",
        ],
      },
      {
        heading: "Run the Page week to week",
        paragraphs: [
          "LinkedIn says Page admins can use the Activity tab to see and reply to comments, mentions, reposts and reactions. Check it after each post and reply the same day. A simple rhythm is one post a week about your work (a project, a tip from your field, or a team update) and one reply session where you answer every comment.",
        ],
      },
    ],
    sources: [liCreatePage, liPageActivity],
  },
  "linkedin/linkedin-job-search": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Use the two job tools LinkedIn gives you",
        paragraphs: [
          "Open to Work: LinkedIn explains that when you state the jobs and locations you want, it helps your profile appear when recruiters search. You can show this to all members (which adds the #OpenToWork photo frame and includes people at your current company), to recruiters only, or keep it visible only to you. LinkedIn says it takes steps to hide this from recruiters at your current employer but cannot guarantee complete privacy, so choose carefully if you are employed.",
          "Job alerts: after a job search, switch the job alert toggle on to be told about new postings that match, by email, app notification or both, daily or weekly. LinkedIn's help page says you can have up to 20 alerts at once (checked 7 October 2026).",
        ],
      },
      {
        heading: "A weekly job-search routine",
        paragraphs: [
          "Set three alerts: your exact target title, a nearby title, and the same title in a second city or remote. Each week, apply to the best matches the day they appear, and for each application change the first lines of your profile About and your message so they match the job description.",
        ],
        bullets: [
          "Keep a list of every application: company, role, date, and the person you contacted.",
          "Follow the companies you apply to and comment usefully on their posts.",
          "Ask one person a week for a short informational chat instead of a job.",
        ],
      },
    ],
    sources: [liOpenToWork, liJobAlerts],
  },
  "linkedin/get-clients": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Turn your profile into a client-ready page",
        paragraphs: [
          "Clients decide in seconds whether you can solve their problem. Write the headline for them, not for an employer: the service, who it is for, and the result. Use the Featured section for proof: LinkedIn accepts PDFs, slides, images and video up to 100 MB (checked 7 October 2026), so a two-page case study works well.",
        ],
        bullets: [
          "Case study format: the client's problem, what you did, and the result they agreed you can share.",
          "Ask past clients for a written recommendation that names the work you did.",
          "Put a clear next step in your About: how to book a call or ask for a quote.",
        ],
      },
      {
        heading: "Outreach that does not feel like spam",
        paragraphs: [
          "Connect with people in one industry you understand. Before you message, read their recent posts and comment on one with a useful point. When you do message, mention something specific about their business, offer one small idea, and ask a simple question. Never paste the same pitch to everyone, and stop after one polite follow-up if there is no reply.",
        ],
      },
    ],
    sources: [liMedia, liFeed],
  },
  "x-twitter/x-content-strategy": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "What a post on X can hold",
        paragraphs: [
          "X's help centre says a standard post can have up to 280 characters and up to 4 media items, such as photos, a GIF or a video. Longer posts, up to 4,000 characters, are an X Premium feature (checked 7 October 2026). That limit is why X rewards one clear idea per post, while threads and longer posts carry the detail.",
        ],
      },
      {
        heading: "Formats that suit X (and differ from Instagram or LinkedIn)",
        paragraphs: [
          "X moves fast and is text-first, so the strategy is conversation, not polished visuals. Plan posts around opinions you can back up, quick lessons, and replies to people in your field.",
        ],
        bullets: [
          "One-line lesson: a single useful idea in plain words.",
          "Thread: a step-by-step guide where each post makes sense on its own.",
          "Reply strategy: thoughtful replies under bigger accounts in your topic, which is where many small accounts are first noticed.",
          "Weekly recap: link to your best post of the week, or to your site, in a pinned post.",
        ],
      },
    ],
    sources: [xPost],
  },
  "instagram/instagram-reels": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "How long a Reel can be, and what gets recommended",
        paragraphs: [
          "Instagram's help centre says you can record one or more clips that add up to 20 minutes, but that reels over 3 minutes will not be recommended to new audiences, and that longer recording is not yet available to every account (checked 7 October 2026). If you want new viewers to find a Reel, keep it at 3 minutes or less.",
        ],
      },
      {
        heading: "A simple Reel structure",
        paragraphs: [
          "Most useful Reels follow the same shape: show the result first, then the steps, then what to do next. Write the on-screen text before filming, so every clip has a job.",
        ],
        bullets: [
          "First second: the finished result or the question you answer.",
          "Middle: three to five quick steps, each one clip.",
          "End: one clear call to action, such as saving the Reel or reading a guide.",
          "Add captions or on-screen text, because many people watch with the sound off.",
          "Use your own original audio or audio from Instagram's library, not a song you ripped from elsewhere.",
        ],
      },
    ],
    sources: [igReels],
  },
  "instagram/how-to-set-up-instagram-for-business": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "Switch to a professional account, step by step",
        paragraphs: [
          "From Instagram's help centre (checked 7 October 2026): in the app, go to your profile, tap More, then under For professionals tap Account type and tools, and choose Switch to professional account. Pick a category, choose Business (shops, brands, local businesses, service providers) or Creator (public figures, content producers, artists), then add contact details. Connecting a Facebook Page is optional and helps with shared posts, ads and shopping tools.",
          "Two things to know first: if your personal account is private, switching makes it public and accepts all pending follow requests; and if you later switch back to personal, you lose access to ads and some tools, and any connected Facebook Page is disconnected.",
        ],
      },
      {
        heading: "Make the profile ready for customers",
        paragraphs: [
          "Instagram lets you choose whether to show the category label and contact details on your profile. Show them if customers should call or message you. Then pin three posts that explain what you sell, show real work, and answer the most common customer question.",
        ],
      },
    ],
    sources: [igPro],
  },
  "content-creation/plan-one-piece": {
    checkedDate: OCT7,
    sections: [
      {
        heading: "A one-page plan you can reuse",
        paragraphs: [
          "Before you write or film anything, answer these questions in a note. It takes ten minutes and stops most rewrites.",
        ],
        bullets: [
          "Audience: who exactly is this for, and what do they already know?",
          "Promise: the one thing they will be able to do or understand at the end.",
          "Format: article, short video, carousel or thread, chosen for where your audience already is.",
          "Outline: three to five points in order, each one sentence.",
          "Proof: an example, screenshot or result that shows the point is true.",
          "Next step: what the reader or viewer should do after.",
        ],
      },
      {
        heading: "Turn one piece into several, without copying",
        paragraphs: [
          "Once the main piece is done, adapt it to each platform's format instead of posting the same file everywhere. Platforms have their own limits: for example, X's help centre gives a standard post as 280 characters, and Instagram says reels over 3 minutes are not recommended to new audiences (both checked 7 October 2026). So a long article might become one short Reel, one X thread and one carousel, each written for that place.",
        ],
      },
    ],
    sources: [xPost, igReels],
  },
};

import type { Guide } from "@/data/site";

type GuideSection = NonNullable<Guide["sections"]>[number];
type Faq = NonNullable<Guide["faqs"]>[number];
type Source = NonNullable<Guide["sources"]>[number];

/**
 * Extra depth for existing guides, merged in site.ts:
 * - h1: keyword-focused page heading (the card title elsewhere stays `title`)
 * - sections/faqs/sources: appended after the guide's own content
 * - checkedDate: the day the added facts were checked
 * Every number here carries the date it was checked and a source in `sources`.
 */
export type GuideDepth = {
  h1?: string;
  checkedDate?: string;
  sections?: GuideSection[];
  faqs?: Faq[];
  sources?: Source[];
};

const OCT2 = "2026-10-02";

export const guideDepth: Record<string, GuideDepth> = {
  // ---------------------------------------------------------------- Fiverr
  "freelancing/fiverr-for-beginners": {
    h1: "Fiverr for beginners: create a gig and get your first order",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Fiverr fees in 2026 (checked 2 October 2026)",
        paragraphs: [
          "Sellers: Fiverr keeps 20% of each order, including extras and tips, so you receive 80%. A US$50 order pays you US$40 before any payout or currency fee from your payout method.",
          "Buyers: Fiverr adds a service fee of 5.5% to the buyer's payment, plus US$3.50 on payments under US$200. That fee is paid by the buyer, not taken from your 80%. It matters because the buyer sees a higher total than your gig price, so a cheap gig is not as cheap for them as it looks.",
          "Money is not withdrawable the moment an order completes. Fiverr holds earnings for a clearance period first, and the payout methods offered (for example bank transfer, PayPal, or Payoneer) depend on your country. Open the Earnings page in your own account to see both.",
        ],
      },
      {
        heading: "Step by step: publish your first gig",
        paragraphs: [
          "Fiverr asks for the gig in a fixed order. Prepare each part in a document first, so you are not writing under pressure inside the form.",
        ],
        bullets: [
          "Overview: a title that starts with \"I will\" and names one deliverable, the category and subcategory that match it, and search tags a buyer would type.",
          "Pricing: up to three packages (Basic, Standard, Premium). Each one states what is delivered, the delivery time, and the number of revisions.",
          "Description and FAQ: who the gig is for, what you need from the buyer, what is included, and what is not.",
          "Requirements: the questions the buyer must answer before you start, such as brand colours, a script, or the raw files.",
          "Gallery: images or a short video of real work you made. Do not use another person's portfolio or stock mock-ups that you did not design.",
          "Publish: Fiverr may ask you to verify your identity or phone number before the gig goes live.",
        ],
      },
      {
        heading: "Worked example: a beginner video-editing gig",
        paragraphs: [
          "Title: \"I will edit your short video for TikTok, Reels or Shorts with captions\". It names the format, the platforms, and the extra value (captions) in under 80 characters.",
          "Description opening: \"Send me up to 3 minutes of raw footage and I will return a 30 to 60 second vertical video with cuts, captions, background music from a licensed library, and a cover frame. Delivery in 3 days.\"",
          "What makes it work is that a buyer can predict the result. Change the details to match a skill you can actually deliver, and price the smallest package at a level where the work is still worth doing well after the 20% fee.",
        ],
        bullets: [
          "Basic: one video up to 30 seconds, captions, 1 revision, 3-day delivery.",
          "Standard: one video up to 60 seconds, captions, music, cover frame, 2 revisions, 3-day delivery.",
          "Premium: three videos up to 60 seconds each, captions, music, cover frames, 2 revisions each, 5-day delivery.",
        ],
      },
      {
        heading: "Mistakes that slow new sellers down",
        paragraphs: [
          "Most new gigs fail for ordinary reasons, not because Fiverr hides them. Check your gig against this list before you publish and again after the first week.",
        ],
        bullets: [
          "A vague title that lists several services instead of one result.",
          "Samples that do not match the gig, or samples you did not make.",
          "Delivery times you cannot keep. Late delivery and cancellations hurt your seller metrics.",
          "Replying slowly to the first messages. Buyers often contact several sellers at once.",
          "Asking for contact details or payment outside Fiverr, which its terms do not allow.",
        ],
      },
    ],
    faqs: [
      { question: "What fee does a Fiverr buyer pay?", answer: "A 5.5% service fee on the payment, plus US$3.50 when the payment is under US$200 (checked 2 October 2026). It is added to the buyer's total." },
      { question: "How many gigs should a beginner create?", answer: "Start with one or two gigs that each sell a single, clear result. More gigs on unrelated skills make the profile harder to trust." },
    ],
    sources: [
      { label: "Fiverr Help: paying for orders, extras, or custom offers (buyer fees)", url: "https://help.fiverr.com/hc/en-us/articles/360050216133-Paying-for-orders-extras-or-custom-offers" },
      { label: "Fiverr Help: managing payments and billing", url: "https://help.fiverr.com/hc/en-us/articles/37554110679441-Managing-payments-and-billing" },
    ],
  },

  // ---------------------------------------------------------------- Upwork
  "freelancing/upwork-for-beginners": {
    h1: "Upwork for beginners: profile, proposals and fees",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Upwork fees and Connects (checked 2 October 2026)",
        paragraphs: [
          "Upwork is free to join. Its own pricing guide, updated 23 July 2026, lists these costs for freelancers:",
        ],
        bullets: [
          "Service fee: 0% to 15% per contract, depending on the contract type and on supply and demand. Upwork shows the exact rate before you submit a proposal or accept an offer, and the rate stays fixed for that contract.",
          "Connects: the credits you spend to send proposals. Extra Connects cost US$0.15 each, with a minimum purchase of 10. A Basic account may receive 10 free Connects a month; the number a job needs varies.",
          "Freelancer Plus: an optional US$19.99/month plan with 100 Connects a month, job alerts, more profile options, and 0% fees on direct contracts (Basic pays 5% on direct contracts).",
          "Payout methods vary by location and can include bank transfer, PayPal, Payoneer, and M-Pesa.",
        ],
      },
      {
        heading: "Worked example: a profile title and overview",
        paragraphs: [
          "Weak title: \"Freelancer | Hard Worker | Many Skills\". Strong title: \"Shopify Product Page Copywriter for Skincare Brands\". The strong version names the service, the platform, and the client type, which is how clients search.",
          "Overview opening (the first two lines show in search): \"I write Shopify product pages that answer the questions skincare buyers ask before they add to cart. Recent sample: a 5-product launch for a small serum brand, linked in my portfolio.\"",
          "Then add three short lines: what you deliver, how you work (turnaround, revisions, the tools you use), and what you need from the client. End with a plain invitation to message you with the product link.",
        ],
      },
      {
        heading: "Worked example: a proposal that answers the job",
        paragraphs: [
          "Job post: \"Need 10 product descriptions for an online tea shop, 150 words each.\" A proposal that gets read starts with the client's problem, not with your biography:",
          "\"Hi, you need 10 tea descriptions that help a buyer choose between flavours. I would start with your two best sellers so you can approve the tone before I write the rest. Here is a 150-word sample I wrote for a coffee brand: [link]. Could you share who usually buys from you, gift buyers or tea regulars?\"",
          "That proposal shows the first step, one relevant sample, and one smart question. It is short enough to read on a phone, and it costs the same Connects as a long generic letter.",
        ],
      },
      {
        heading: "Step by step: your first two weeks",
        paragraphs: [
          "A realistic plan for a new account, assuming the profile is approved.",
        ],
        bullets: [
          "Day 1 to 2: finish the profile at 100%, with a real photo, the specific title, the overview, and two or three portfolio pieces.",
          "Day 3 to 7: send three to five proposals a day only to jobs that match a sample you already have. Prefer posts with a verified payment method and a clear brief.",
          "Day 8 to 14: review which proposals were viewed. Rewrite the first two lines of the ones that were opened but not answered.",
          "After the first contract: deliver early, ask for feedback inside Upwork, and add the result to your portfolio with the client's permission.",
        ],
      },
    ],
    faqs: [
      { question: "How much do Upwork Connects cost?", answer: "US$0.15 each, with a minimum purchase of 10 (checked 2 October 2026). Freelancer Plus, at US$19.99 a month, includes 100 Connects a month." },
      { question: "Is Freelancer Plus worth it for a beginner?", answer: "Usually not in the first weeks. Start on Basic, send fewer and better proposals, and upgrade only if you run out of Connects on jobs you are a good match for." },
    ],
    sources: [
      { label: "Upwork: Is Upwork free to join? Pricing breakdown (updated 23 July 2026)", url: "https://www.upwork.com/resources/is-upwork-free" },
      { label: "Upwork: Connects calculator", url: "https://www.upwork.com/tools/connects-calculator" },
      { label: "Upwork: fee calculator", url: "https://www.upwork.com/tools/upwork-fee-calculator" },
    ],
  },

  // ---------------------------------------------------------------- ChatGPT
  "ai-productivity/how-to-use-chatgpt": {
    h1: "How to use ChatGPT: a beginner's guide (free and paid)",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Step by step: your first useful chat",
        paragraphs: [
          "You can use ChatGPT in a web browser at chatgpt.com or in the official ChatGPT apps for iPhone, Android, Windows, and Mac. Download the app only from the App Store, Google Play, or OpenAI's own site; look-alike apps that ask for payment up front are a common trap.",
        ],
        bullets: [
          "Create a free account with an email address, or a Google, Apple, or Microsoft sign-in. OpenAI's terms require users to be at least 13, and under-18s need a parent or guardian's permission.",
          "Type one specific request in the message box, for example: \"I have a biology test on cell division on Friday. Make a 10-question quiz from these notes and give the answers at the end.\" Then paste your notes.",
          "Read the answer and reply with what to change: \"Make questions 6 to 10 harder and add one diagram-based question.\" Follow-ups are where most of the value is.",
          "Use the paperclip or + button to add a file or image when the task depends on it, such as a PDF worksheet or a screenshot of an error.",
          "Start a new chat for an unrelated task, so old context does not confuse the new answer.",
        ],
      },
      {
        heading: "ChatGPT plans and prices (checked 2 October 2026)",
        paragraphs: [
          "OpenAI's published US prices on 2 October 2026 were as follows. Prices outside the US can be different, taxes may be added, and the features in each plan change often, so treat the plan page in your own account as the final word.",
        ],
        bullets: [
          "Free: US$0. Enough for learning, everyday writing help, and trying features, with lower usage limits.",
          "Go: US$8 a month. Higher limits than Free at a low price.",
          "Plus: US$20 a month. The usual choice for people who use ChatGPT most days.",
          "Pro: US$100, US$200, or US$500 a month, for very heavy use. Most beginners do not need it.",
          "Business and Enterprise: per-seat plans for teams, with admin controls; business data is not used for training by default.",
        ],
      },
      {
        heading: "Five everyday tasks to practise",
        paragraphs: [
          "Practise on tasks where you can judge the result. These five work in any country and any plan.",
        ],
        bullets: [
          "Explain: \"Explain compound interest to a 15-year-old with one worked example in my currency.\"",
          "Rewrite: \"Make this email to my landlord polite but firm. Keep it under 120 words.\" Paste your draft.",
          "Plan: \"I have 45 minutes a day for 4 weeks to learn basic Excel. Make a weekly plan with one practice task per day.\"",
          "Check: \"List the claims in this paragraph that I should verify, and say what kind of source would confirm each one.\"",
          "Practise: \"Interview me for a junior customer-support job. Ask one question at a time and give feedback after each answer.\"",
        ],
      },
      {
        heading: "Privacy settings worth knowing",
        paragraphs: [
          "In Settings, Data controls, you can choose whether your chats are used to improve OpenAI's models. Temporary Chat starts a conversation that is not saved to your history. Neither setting makes it safe to paste passwords, bank details, ID numbers, or someone else's private information, so leave those out of every chat.",
          "If you use ChatGPT for school or work, follow the rules of that place. Many schools allow AI for practice and feedback but not for writing graded work, and many employers limit what company data may be pasted into outside tools.",
        ],
      },
    ],
    faqs: [
      { question: "Is ChatGPT free to use?", answer: "Yes. The Free plan costs nothing and needs only an account. Paid plans on 2 October 2026 were Go (US$8 a month), Plus (US$20), and Pro (US$100 to US$500) in the US; local prices can differ." },
      { question: "What is the difference between ChatGPT Go and Plus?", answer: "Both raise the limits of the Free plan. Go (US$8 a month in the US) is the budget option; Plus (US$20) gives higher limits and more advanced features. Compare the current plan page before you pay, because features move between plans." },
      { question: "How old do you have to be to use ChatGPT?", answer: "OpenAI's terms say at least 13, and users under 18 need permission from a parent or guardian. Some countries and schools set stricter rules." },
    ],
    sources: [
      { label: "OpenAI: ChatGPT pricing", url: "https://chatgpt.com/pricing" },
      { label: "OpenAI: ChatGPT plan pricing and usage (ChatGPT Learn)", url: "https://learn.chatgpt.com/docs/pricing" },
      { label: "OpenAI: Terms of Use (age requirements)", url: "https://openai.com/policies/terms-of-use/" },
      { label: "OpenAI Help: data controls", url: "https://help.openai.com/en/articles/7730893-data-controls-faq" },
    ],
  },

  // ---------------------------------------------------------------- Free courses
  "ai-productivity/free-online-courses-with-certificates": {
    h1: "Free online courses with certificates: a verified list",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Verified providers (checked 2 October 2026)",
        paragraphs: [
          "Each line says what is free and what is not. All of these are run by the organisation that issues the certificate, so you are not paying a reseller. Offers change; the course page is the final word.",
        ],
        bullets: [
          "Harvard CS50 (computer science): the course is free at cs50.harvard.edu, and Harvard issues a free CS50 certificate if you score at least 70% on every required problem set and the final project. A verified certificate through edX is a separate paid option.",
          "freeCodeCamp (web development, JavaScript, Python, data): free lessons and free certifications earned by completing the required projects.",
          "HubSpot Academy (marketing, sales, content, customer service): free courses with free certificates.",
          "Google Skillshop (Google Ads, Google Analytics and other Google tools): free training and free product certifications.",
          "IBM SkillsBuild (AI, data, cybersecurity, workplace skills): free courses with free digital credentials (badges).",
          "Microsoft Learn (Azure, Microsoft 365, Power Platform, AI): free training modules and learning paths. Formal Microsoft Certification exams are paid, and the price depends on the exam and country.",
          "Kaggle Learn (Python, machine learning, data visualisation): short free courses with a free completion certificate.",
          "Google Career Certificates (IT support, data analytics, UX design and others): the main ones are sold through Coursera by subscription; Google lists US$49 a month in the US and Canada. Coursera offers financial aid you can apply for.",
        ],
      },
      {
        heading: "Pick a course by goal",
        paragraphs: [
          "Choose the course that leads to something you can show. A rough match:",
        ],
        bullets: [
          "Build websites or start coding: freeCodeCamp, then CS50 if you want the computer-science foundations.",
          "Digital marketing or social media jobs: HubSpot Academy for content and inbound marketing, Google Skillshop for Ads and Analytics.",
          "Data and AI basics: Kaggle Learn for hands-on Python and machine learning, IBM SkillsBuild for broader AI literacy.",
          "IT and cloud roles: Microsoft Learn paths, followed by a paid exam only when an employer you are targeting asks for it.",
        ],
      },
      {
        heading: "How to make the certificate count",
        paragraphs: [
          "Put the certificate on LinkedIn under Licenses and certifications with the issuer's verification link, so an employer can check it. Next to it, link one project you built with the skill: a website, a dashboard, a campaign plan, or a notebook.",
          "Finish one course before you start the next. A single completed certificate with a project beats five half-finished courses, and most of these providers show your progress so you can return later.",
        ],
      },
    ],
    faqs: [
      { question: "Which free online courses give a free certificate?", answer: "On 2 October 2026: Harvard CS50 (free CS50 certificate), freeCodeCamp, HubSpot Academy, Google Skillshop, IBM SkillsBuild (digital badges), and Kaggle Learn. Microsoft Learn training is free but its certification exams are paid." },
      { question: "Is the Google Career Certificate free?", answer: "Not usually. Google sells it through Coursera by subscription, listed at US$49 a month in the US and Canada on 2 October 2026. You can apply for Coursera financial aid." },
    ],
    sources: [
      { label: "CS50x: certificate rules", url: "https://cs50.harvard.edu/x/certificate/" },
      { label: "freeCodeCamp: learn and certifications", url: "https://www.freecodecamp.org/learn/" },
      { label: "HubSpot Academy", url: "https://academy.hubspot.com/" },
      { label: "Google Skillshop", url: "https://skillshop.withgoogle.com/" },
      { label: "IBM SkillsBuild", url: "https://skillsbuild.org/" },
      { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { label: "Grow with Google: Career Certificates", url: "https://grow.google/certificates/" },
    ],
  },

  // ---------------------------------------------------------------- Skills
  "ai-productivity/best-skills-to-learn-2026": {
    h1: "Best skills to learn in 2026 (and how to start each one free)",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Ten skills, a free way to start, and a first project",
        paragraphs: [
          "Each skill below can be practised on a laptop or phone, delivered online, and shown in a portfolio. The first project is the proof a client or employer will ask for.",
        ],
        bullets: [
          "Writing for the web: start with free guides from HubSpot Academy; first project, rewrite three product pages for a local shop.",
          "Website building: freeCodeCamp's HTML and CSS lessons or a website builder; first project, a one-page site for a real person or club.",
          "SEO: Google Search Central's SEO Starter Guide; first project, fix titles and headings on your own site and track it in Search Console.",
          "Graphic design: Canva's free plan; first project, a consistent set of five social posts for one brand.",
          "Video editing: CapCut or DaVinci Resolve (free versions); first project, cut a 60-second vertical video with captions.",
          "Data analysis: spreadsheets plus Kaggle Learn; first project, a cleaned dataset and a one-page chart summary.",
          "Using AI tools well: practise prompting and checking on real tasks; first project, a documented workflow that saves you an hour a week.",
          "Customer support: practise written replies and help-desk tools; first project, a mini FAQ for a small business.",
          "Digital marketing: Google Skillshop and HubSpot Academy certificates; first project, a 30-day content plan with goals.",
          "Basic coding: CS50 or freeCodeCamp JavaScript; first project, a small tool such as a budget calculator.",
        ],
      },
      {
        heading: "What the wage data says about demand",
        paragraphs: [
          "The US Bureau of Labor Statistics publishes median wages and 10-year job outlooks for related occupations. In its May 2025 data, data scientists earned a median US$120,230 a year, with 35% projected growth from 2025 to 2035. Those figures are for full-time US jobs, not for freelancers or for other countries, so use them as a demand signal, not a promise of income.",
          "For country-specific demand, read our guides to in-demand skills in the USA and in India, which use national data sources.",
        ],
      },
      {
        heading: "A 12-week plan for one skill",
        paragraphs: [
          "A realistic plan for 5 to 7 hours a week:",
        ],
        bullets: [
          "Weeks 1 to 4: one free course, taken in order, with notes in your own words.",
          "Weeks 5 to 8: three small practice projects, each one slightly harder than the last.",
          "Weeks 9 to 10: one real project for a real person, even unpaid, with their permission to show it.",
          "Weeks 11 to 12: a portfolio page or profile that shows the three best pieces and what each one achieved.",
        ],
      },
    ],
    faqs: [
      { question: "What is the easiest high-income skill to learn?", answer: "There is no easy shortcut, but writing, basic design, and video editing have the lowest start-up cost: free tools and a phone or laptop. Income comes from proof and clients, which takes months, not days." },
      { question: "Which skills are in demand in 2026?", answer: "Data and AI-related skills, software development, digital marketing, and clear writing show steady demand in national labour data such as the US Bureau of Labor Statistics. Demand differs by country, so check local job boards too." },
    ],
    sources: [
      { label: "US Bureau of Labor Statistics: Occupational Outlook Handbook (data scientists)", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/" },
      { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
    ],
  },

  // ---------------------------------------------------------------- Canva
  "photo-editing/canva-tutorial": {
    h1: "Canva tutorial for beginners: design basics step by step",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Step by step: design your first social post",
        paragraphs: [
          "This walk-through uses the Free plan in a browser or the Canva app. Menu names can move slightly between updates, but the steps stay the same.",
        ],
        bullets: [
          "Create the design: choose Create (or Create a design), then pick the format, such as Instagram post or YouTube thumbnail, or enter a custom size in pixels.",
          "Pick a starting point: a blank page, or a template from the Templates tab. Free templates have no crown or Pro label.",
          "Set the message: click the main text box and write the one sentence the viewer must read. Make it the largest text on the page.",
          "Add an image: upload your own photo from Uploads, or choose one from Elements or Photos. Drag it onto a frame or grid so it crops neatly.",
          "Fix contrast: if the text is hard to read, add a solid shape behind it or change the text colour until it stands out on a phone screen.",
          "Check alignment: drag elements until the purple guide lines appear, so edges and centres line up.",
          "Download: choose Share, then Download, then the file type: PNG for graphics with text, JPG for photos, PDF Print for printing, MP4 for animated designs.",
        ],
      },
      {
        heading: "Common sizes to start from",
        paragraphs: [
          "Set the size before you design. Resizing a finished design changes the layout, and the one-click Resize tool is a Pro feature.",
        ],
        bullets: [
          "Vertical video or Story (TikTok, Reels, Shorts, Stories): 1080 x 1920 pixels, a 9:16 ratio.",
          "YouTube thumbnail: a 16:9 image. YouTube's help page (checked 2 October 2026) recommends 3840 x 2160 pixels, with a minimum width of 640, and allows up to 50 MB from a computer or 2 MB from a phone. In Canva, a 1920 x 1080 custom size is a practical 16:9 choice.",
          "Presentation: 1920 x 1080 pixels, a 16:9 ratio.",
          "Printed A4 flyer: 210 x 297 mm; download as PDF Print.",
        ],
      },
      {
        heading: "Free vs Pro: what beginners actually miss",
        paragraphs: [
          "The Free plan covers everything in the steps above. Pro adds the premium template and stock library, one-click background removal, Resize to switch a design between formats, Brand Kits for saved fonts and colours, and larger allowances for Canva's AI tools. On 2 October 2026 the US price was US$18 a month on monthly billing, with a cheaper yearly plan.",
          "Students and teachers at eligible schools can get Canva for Education at no cost, and eligible non-profits can apply for Canva for Nonprofits. Check eligibility on Canva's own pages rather than buying a \"cheap Pro\" invite from a stranger, which can be revoked.",
        ],
      },
    ],
    faqs: [
      { question: "How do I remove a background in Canva for free?", answer: "One-click background removal is a Pro feature. On the Free plan you can crop the photo into a frame, or use a photo that already has a plain background. Students at eligible schools get it through Canva for Education." },
      { question: "What file type should I download from Canva?", answer: "PNG for graphics with text or logos, JPG for photos, PDF Print for anything that will be printed, and MP4 for designs with animation or video." },
    ],
    sources: [
      { label: "Canva pricing", url: "https://www.canva.com/pricing/" },
      { label: "Canva for Education", url: "https://www.canva.com/education/" },
      { label: "Canva for Nonprofits", url: "https://www.canva.com/canva-for-nonprofits/" },
      { label: "YouTube Help: add video thumbnails (recommended size)", url: "https://support.google.com/youtube/answer/72431" },
    ],
  },

  // ---------------------------------------------------------------- CapCut
  "video-editing/capcut-tutorial": {
    h1: "CapCut tutorial for beginners: edit your first video",
    checkedDate: OCT2,
    sections: [
      {
        heading: "Step by step: a 30-second vertical video",
        paragraphs: [
          "These steps follow the CapCut phone app; the desktop and web versions use the same ideas with a bigger timeline. Button names can differ slightly between versions.",
        ],
        bullets: [
          "Tap New project and select your clips in the order you want them. CapCut places them on the timeline from left to right.",
          "Set the shape first: tap Ratio (or Aspect ratio) and choose 9:16 for TikTok, Reels, and Shorts.",
          "Cut the dead air: move the white playhead to the start of a pause, tap the clip, tap Split, then select the unwanted piece and tap Delete.",
          "Fix the sound: tap a clip and lower its Volume if music or background noise competes with the voice.",
          "Add captions: open Text and use Auto captions if your version offers it, then read every line and correct names and numbers. In some versions and regions this is a Pro feature; typing text manually is always free.",
          "Add music: use Audio, then Sounds, and check the licence note for commercial use if the video is for a business or an ad.",
          "Export: tap the export or resolution button in the top corner, choose 1080p and 30 fps for most social platforms, and export.",
        ],
      },
      {
        heading: "Five edits that make a beginner video look better",
        paragraphs: [
          "Most of the improvement comes from removing things, not adding effects.",
        ],
        bullets: [
          "Show the subject in the first second; cut any slow introduction.",
          "Keep each shot short enough that something changes every few seconds.",
          "Use one font and one caption style for the whole video.",
          "Keep music quieter than speech, and fade it out at the end.",
          "Watch the export once on a phone with the sound off, the way many people first see it.",
        ],
      },
      {
        heading: "Free vs Pro and account safety",
        paragraphs: [
          "CapCut's free tools cover cutting, text, audio, speed, and export. Pro features carry a Pro label inside the app, and if you use one, CapCut asks you to subscribe or remove it before export. CapCut says the Pro price depends on your country and app store, so read the price in your own app before you subscribe.",
          "Install CapCut only from the official app store or capcut.com. Modified \"Pro unlocked\" downloads are a common source of malware and can get an account banned.",
        ],
      },
    ],
    faqs: [
      { question: "How do I cut a clip in CapCut?", answer: "Move the playhead to the point where you want the cut, tap the clip, and tap Split. Select the part you do not want and tap Delete." },
      { question: "What export settings should I use in CapCut for TikTok or Reels?", answer: "A 9:16 project exported at 1080p and 30 frames per second suits most short-video platforms. Use a higher setting only if your phone can finish the export and the platform supports it." },
    ],
    sources: [
      { label: "CapCut", url: "https://www.capcut.com/" },
      { label: "CapCut: how much does CapCut Pro cost", url: "https://www.capcut.com/help/how-much-does-capcut-pro-cost" },
    ],
  },

  // ---------------------------------------------------------------- Page headings only
  "freelancing/how-to-start-freelancing": { h1: "How to start freelancing with no experience" },
  "freelancing/how-to-make-money-online": { h1: "How to make money online: real ways, no scams" },
  "freelancing/how-to-make-money-online-safely": { h1: "How to make money online safely and spot job scams" },
  "ai-productivity/how-to-write-ai-prompts": { h1: "How to write better AI prompts (with examples)" },
  "chatgpt-prompts/useful-chatgpt-prompts": { h1: "Useful ChatGPT prompts to copy and adapt" },
  "high-paid-skills/highest-paid-skills": { h1: "Highest-paid skills in 2026, with wage data" },
  "high-demand-skills-usa/high-demand-skills-in-the-usa": { h1: "In-demand skills in the USA: 2026 wage data" },
  "high-demand-skills-india/high-demand-skills-in-india": { h1: "In-demand skills in India in 2026" },
  "seo/what-is-seo": { h1: "What is SEO? A simple explanation for beginners" },
  "seo/keyword-research": { h1: "How to do keyword research, step by step" },
  "seo/how-to-get-website-on-google": { h1: "How to get your website on Google" },
  "seo/search-console": { h1: "How to use Google Search Console" },
  "video-editing/how-to-edit-a-video": { h1: "How to edit a video: steps for beginners" },
  "video-editing/best-video-editing-apps": { h1: "Best video editing apps for beginners" },
  "photo-editing/best-photo-editing-apps": { h1: "Best photo editing apps, free and paid" },
  "ai-video-generation/best-ai-video-generators": { h1: "Best AI video generators in 2026" },
  "youtube/youtube-monetization-requirements-2026": { h1: "YouTube monetization requirements: 2026 rules and 2027 changes" },
  "youtube/make-money-on-youtube": { h1: "How to make money on YouTube" },
  "youtube/how-to-start-a-youtube-channel": { h1: "How to start a YouTube channel" },
  "tiktok/tiktok-monetization": { h1: "TikTok monetization requirements and countries" },
  "facebook/facebook-monetization": { h1: "How Facebook monetization works" },
  "x-twitter/x-monetization": { h1: "How to make money on X" },
  "instagram/instagram-monetization": { h1: "How to make money on Instagram" },
  "instagram/instagram-growth": { h1: "How to grow on Instagram" },
  "websites/how-to-build-a-website": { h1: "How to build a website: free and paid options" },
};

import type { Guide } from "@/data/site";

/**
 * New guides added after the October 2026 audit. Every number carries the date
 * it was checked; every rule links to the organisation that sets it.
 */
const OCT2 = "2026-10-02";

export const newGuides: Guide[] = [
  // ------------------------------------------------------------------ AI money
  {
    slug: "ai-productivity/how-to-make-money-with-ai",
    area: "AI & Productivity",
    title: "How to Make Money with AI (Real Ways, No Hype)",
    h1: "How to make money with AI: real ways, no hype",
    summary:
      "You make money with AI the same way as without it: by selling a useful result to someone who pays. AI makes the work faster. It does not replace the skill, the client, or the rules each platform sets.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["make money with AI", "AI side hustle", "AI freelancing", "AI content rules"],
    tools: ["ChatGPT", "Gemini", "Claude", "Canva", "CapCut"],
    sections: [
      {
        heading: "What \"making money with AI\" really means",
        paragraphs: [
          "Almost every honest AI income story fits one pattern: a person already offers a service or product, and AI tools help them deliver it faster or better. A video editor uses AI captions. A copywriter uses a chatbot to draft variations and then edits them. A small agency builds simple automations for local businesses. The customer pays for the result, not for the fact that AI was used.",
          "The opposite pattern, \"let AI do everything and get paid for traffic\", is where most people lose time or money. Platforms now restrict mass-produced, low-effort AI content, and regulators have taken action against companies that sold AI-powered get-rich schemes.",
        ],
      },
      {
        heading: "Seven realistic ways to earn with AI",
        paragraphs: [
          "Each of these is a normal job or small business where AI is a tool. Start with the one closest to a skill you have or can practise.",
        ],
        bullets: [
          "Writing and editing services: product descriptions, emails, and blog posts drafted with AI and edited by you for accuracy, tone, and the client's facts.",
          "Short-video editing: cutting, captions, and thumbnails for creators and shops, using AI captions and background removal to save time.",
          "Design for small businesses: social posts, menus, and flyers made in Canva or similar tools, with AI used for first drafts and image clean-up.",
          "Automation for small teams: setting up simple workflows such as form-to-spreadsheet, email follow-ups, or a FAQ assistant, then documenting how they work.",
          "Tutoring and study support: teaching a subject you know, with AI used to generate practice questions you check first.",
          "Translation and localisation review: checking machine translations for people who need them to read naturally. You must be fluent in both languages.",
          "Selling templates or guides you created: prompt packs, planners, or spreadsheets that solve a specific problem, sold on your own site or an established marketplace.",
        ],
      },
      {
        heading: "Platform rules you have to follow",
        paragraphs: [
          "YouTube requires creators to disclose realistic content that was altered or synthetically generated, such as a realistic AI voice of a real person or a made-up event that looks real, and it does not pay for mass-produced or repetitive content under its monetization policies. TikTok asks creators to label realistic AI-generated content and can add the label itself.",
          "On freelance marketplaces, the client is buying your judgement. Say when and how you use AI if the client asks, never submit AI output you have not checked, and respect any brief that says no AI. Do not use AI to copy another person's voice, face, art style for passing off, or copyrighted material you have no rights to.",
        ],
      },
      {
        heading: "AI money scams to avoid",
        paragraphs: [
          "In September 2024 the US Federal Trade Commission announced Operation AI Comply, a set of cases against companies that used AI hype to sell deceptive products, including business-opportunity schemes that promised passive income from AI-powered online stores. The warning signs are the same in every country.",
        ],
        bullets: [
          "Guaranteed income, or screenshots of earnings instead of a clear description of the work.",
          "A paid course or \"done-for-you\" store as the first step, before you have learned any skill.",
          "\"AI trading bots\" or crypto tools that promise daily returns.",
          "Pressure to recruit friends, or to pay again to unlock withdrawals.",
          "Requests for your ID, bank login, or seed phrase in a chat.",
        ],
      },
      {
        heading: "A 30-day plan to earn your first payment",
        paragraphs: [
          "This plan assumes a few hours a week and no budget beyond free tool plans.",
        ],
        bullets: [
          "Week 1: choose one service from the list above. Learn the basic skill and the free AI tools that support it.",
          "Week 2: make three sample pieces for imaginary or real clients, and write down the time each one took with and without AI.",
          "Week 3: publish one clear offer: a Fiverr gig, an Upwork profile, a LinkedIn post, or a message to five local businesses you know.",
          "Week 4: deliver the first job carefully, ask for feedback, and turn the result into a portfolio piece with the client's permission.",
        ],
      },
    ],
    faqs: [
      { question: "Can you really make money with AI?", answer: "Yes, when AI helps you deliver a service or product people already pay for, such as editing, writing, design, or automation. Income still depends on skill, clients, and time. Promises of passive AI income are a common scam pattern." },
      { question: "How can a beginner make money with AI with no experience?", answer: "Pick one simple service, learn the skill and the free AI tools for it, make three samples, and offer it on a marketplace or to people you know. Expect the first payment to take weeks, not days." },
      { question: "Is it allowed to sell AI-generated work?", answer: "Often, yes, but rules differ. Follow the client's brief, the marketplace's terms, and copyright law, and check the AI tool's own terms for commercial use. Disclose AI use when a platform or client requires it." },
      { question: "Can I monetize an AI-generated YouTube channel?", answer: "Only if the content is original and adds value. YouTube's monetization policies exclude mass-produced or repetitive content, and realistic synthetic content must be disclosed." },
      { question: "What is the best AI tool for making money?", answer: "The one that speeds up the service you sell. A general chatbot (ChatGPT, Gemini, or Claude) helps with writing and planning; Canva and CapCut help with design and video. All have free plans to start." },
    ],
    sources: [
      { label: "FTC: Operation AI Comply (25 September 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes" },
      { label: "YouTube Help: disclosing altered or synthetic content", url: "https://support.google.com/youtube/answer/14328491" },
      { label: "YouTube Help: channel monetization policies", url: "https://support.google.com/youtube/answer/1311392" },
      { label: "TikTok Support: AI-generated content", url: "https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content" },
    ],
    related: ["freelancing/how-to-make-money-online", "freelancing/how-to-start-freelancing", "ai-productivity/how-to-use-chatgpt", "freelancing/how-to-make-money-online-safely"],
    next: { href: "/learn/freelancing/how-to-start-freelancing", label: "How to start freelancing" },
  },

  // ------------------------------------------------------------------ Free AI tools
  {
    slug: "ai-productivity/free-ai-tools",
    area: "AI & Productivity",
    title: "Free AI Tools for Students and Beginners",
    h1: "Free AI tools for students and beginners (2026)",
    summary:
      "The best free AI tools in 2026 cover chat, research, writing, design, video, and translation. All of the tools below have a free plan from the company that makes them; free plans have usage limits that change, so check the plan page before you rely on one.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["free AI tools", "AI tools for students", "free ChatGPT alternatives", "AI apps"],
    tools: ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot", "Perplexity", "NotebookLM", "Canva", "CapCut", "Adobe Firefly", "DeepL", "Grammarly"],
    sections: [
      {
        heading: "AI chat assistants (free plans)",
        paragraphs: [
          "A chat assistant is the most flexible free AI tool: it explains, drafts, summarises, and plans. All four below had a free plan on 2 October 2026. Paid plans mainly raise usage limits and unlock newer models.",
        ],
        bullets: [
          "ChatGPT (OpenAI): strong all-rounder for explanations, writing, and planning. Free plan; paid plans start at US$8 a month (Go) in the US.",
          "Gemini (Google): works well with Google accounts and can help inside Gmail and Docs on some plans. Free plan; Google AI Plus is US$7.99 a month in the US.",
          "Claude (Anthropic): good at long documents and careful writing. Free plan with usage limits.",
          "Microsoft Copilot: free in a browser, on Windows, and in its mobile app with a Microsoft account.",
        ],
      },
      {
        heading: "Research and study tools",
        paragraphs: [
          "For school and research, prefer tools that show where an answer came from, so you can check it.",
        ],
        bullets: [
          "Perplexity: an AI search engine that answers with numbered source links. Free plan.",
          "NotebookLM (Google): upload your own notes, PDFs, or slides and ask questions about them; answers cite the passages they used. It can also make study guides and audio overviews. Free with a Google account.",
          "Google Scholar and your library database: not AI chatbots, but still the place to confirm a citation an AI tool suggests.",
        ],
      },
      {
        heading: "Writing, translation, and language tools",
        paragraphs: [
          "These help you write more clearly in your own words. Use them to check and improve your work, not to submit text you did not write when the rules forbid it.",
        ],
        bullets: [
          "Grammarly: free grammar, spelling, and clarity suggestions in the browser and many apps.",
          "DeepL: free translator with natural-sounding output for many languages, plus a free writing assistant for some languages.",
          "Google Translate: free, covers the widest range of languages, and works offline on phones after you download a language.",
        ],
      },
      {
        heading: "Design, image, and video tools",
        paragraphs: [
          "Creative tools usually give a free monthly or daily allowance for their AI features, and keep the basic editing free.",
        ],
        bullets: [
          "Canva: free design tool with templates and a limited allowance of AI features; free for students and teachers at eligible schools through Canva for Education.",
          "Adobe Firefly: free plan with a limited number of AI image and video generations; paid Firefly plans started at US$9.99 a month when we checked on 29 September 2026.",
          "CapCut: free video editor with AI features such as captions and background removal; some tools are marked Pro.",
          "DaVinci Resolve: a free professional video editor for Windows, Mac, and Linux; not an AI tool first, but its free version includes powerful editing and colour tools.",
        ],
      },
      {
        heading: "How to choose and use free AI tools safely",
        paragraphs: [
          "Start with one chat assistant and one creative tool, and learn them well before adding more. Most people need no more than three AI tools for everyday study and work.",
        ],
        bullets: [
          "Check the age rule. Many AI tools require users to be at least 13, and some ask under-18s to have a parent's permission.",
          "Read the data settings. Several tools let you opt out of having your chats used for training; none are a safe place for passwords, ID numbers, or other people's private information.",
          "Verify facts. AI tools can state wrong information confidently. Check names, numbers, dates, and quotations against a reliable source.",
          "Follow school and work rules. A tool being free does not make every use allowed.",
          "Download apps only from official app stores or the company's own site. Fake \"AI\" apps that charge weekly subscriptions are common.",
        ],
      },
    ],
    faqs: [
      { question: "What is the best free AI tool?", answer: "For most people, a free chat assistant such as ChatGPT, Gemini, Claude, or Microsoft Copilot covers the most tasks. Add NotebookLM or Perplexity for research and Canva or CapCut for design and video." },
      { question: "Are free AI tools really free?", answer: "Yes, the plans listed here cost nothing, but they limit how much you can use each day or month and sometimes which models you can use. Paid plans raise those limits." },
      { question: "What free AI tools are good for students?", answer: "NotebookLM for studying your own notes, Perplexity for sourced answers, a chat assistant for explanations and practice questions, Grammarly or DeepL for writing, and Canva for presentations." },
      { question: "Is there a free alternative to ChatGPT?", answer: "Google Gemini, Claude, and Microsoft Copilot all have free plans with similar everyday features. ChatGPT itself also has a free plan." },
      { question: "Are free AI tools safe to use?", answer: "The tools from established companies listed here are widely used, but treat every chat as something that could be stored. Do not paste private information, and check each tool's data settings." },
    ],
    sources: [
      { label: "OpenAI: ChatGPT pricing", url: "https://chatgpt.com/pricing" },
      { label: "Google AI plans (US prices)", url: "https://one.google.com/intl/en_us/about/google-ai-plans/" },
      { label: "Anthropic: Claude plans", url: "https://claude.com/pricing" },
      { label: "Microsoft Copilot", url: "https://copilot.microsoft.com/" },
      { label: "Google NotebookLM", url: "https://notebooklm.google/" },
      { label: "Perplexity", url: "https://www.perplexity.ai/" },
      { label: "Adobe Firefly plans", url: "https://www.adobe.com/products/firefly/plans.html" },
      { label: "Canva for Education", url: "https://www.canva.com/education/" },
      { label: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
    ],
    related: ["ai-productivity/how-to-choose-an-ai-tool", "ai-productivity/how-to-use-chatgpt", "ai-productivity/how-to-use-ai-for-studying", "ai-productivity/ai-safety-and-privacy"],
    next: { href: "/learn/ai-productivity/how-to-choose-an-ai-tool", label: "How to choose an AI tool" },
  },

  // ------------------------------------------------------------------ Student prompts
  {
    slug: "chatgpt-prompts/chatgpt-prompts-for-students",
    area: "ChatGPT Prompts",
    title: "ChatGPT Prompts for Students (Study, Essays, Exams)",
    h1: "ChatGPT prompts for students: study, essays, and exams",
    summary:
      "These ChatGPT prompts help students understand topics, revise for exams, plan essays, and practise languages without handing in AI-written work. Copy a prompt, replace the brackets, and check every answer against your notes or textbook.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["ChatGPT prompts for students", "ChatGPT for studying", "AI study prompts", "exam revision"],
    tools: ["ChatGPT", "Gemini", "Claude", "NotebookLM"],
    sections: [
      {
        heading: "Before you start: the rules that keep you safe",
        paragraphs: [
          "Find out your school's AI policy first. Many schools allow AI for explanations, practice, and feedback but not for producing graded work, and some require you to say when you used it. UNESCO's guidance on generative AI in education also recommends age-appropriate, supervised use.",
          "Every prompt below asks the AI to help you think, not to think for you. Paste your own notes when you can, because answers based on your class material are more accurate than general answers. Never paste other students' work or personal information.",
        ],
      },
      {
        heading: "Prompts to understand a topic",
        paragraphs: ["Use these when a lesson did not make sense the first time."],
        bullets: [
          "\"Explain [topic] to me as if I am in year [X]. Use one everyday example, then define the key terms in a short list.\"",
          "\"I think [topic] means [your explanation]. Tell me what I got right, what I got wrong, and what I missed.\"",
          "\"Give me three different analogies for [concept] and say where each analogy breaks down.\"",
          "\"What are the three most common misunderstandings students have about [topic]? Give a question that tests each one.\"",
          "\"Here are my class notes on [topic]: [paste]. Turn them into a one-page summary with headings, keeping my teacher's terms.\"",
        ],
      },
      {
        heading: "Prompts for exam revision",
        paragraphs: ["Active recall and spaced practice work better than rereading. These prompts turn the AI into a quiz partner."],
        bullets: [
          "\"Quiz me on [topic] with 10 questions, one at a time. Wait for my answer, then tell me if it is right and why.\"",
          "\"Make 15 flashcards from these notes in the format Question | Answer: [paste].\"",
          "\"Write five exam-style questions on [topic] for [exam board or level], with a mark scheme for each.\"",
          "\"I have [number] days before my [subject] exam and [hours] hours a day. Build a revision timetable that repeats each topic at least twice.\"",
          "\"Here is my answer to a past-paper question: [paste]. Mark it against this mark scheme: [paste], and tell me how to gain the missing marks.\"",
        ],
      },
      {
        heading: "Prompts for essays and assignments (without cheating)",
        paragraphs: ["These help you plan and improve your own writing. Do not paste the generated text into work you hand in unless your teacher allows it."],
        bullets: [
          "\"I need to write an essay on [question]. Ask me five questions that help me decide my argument. Do not write the essay.\"",
          "\"Here is my essay plan: [paste]. Point out any gaps in the argument and any counter-arguments I should address.\"",
          "\"Here is my paragraph: [paste]. Give feedback on clarity, evidence, and structure as a list. Do not rewrite it.\"",
          "\"Which claims in my draft need a source? List them so I can find evidence myself.\"",
          "\"Explain the difference between summarising, paraphrasing, and quoting, with an example of each from this text: [paste].\"",
        ],
      },
      {
        heading: "Prompts for maths and science",
        paragraphs: ["AI chatbots can make arithmetic and logic mistakes, so check every step and use a calculator for numbers."],
        bullets: [
          "\"Here is my working for this problem: [paste]. Find the first step where I went wrong, but do not give the final answer.\"",
          "\"Give me a similar problem to this one, with different numbers, so I can practise: [paste problem].\"",
          "\"Explain why [formula] works, step by step, with a diagram described in words.\"",
          "\"Describe how to set up an experiment to test [hypothesis], including variables to control.\"",
        ],
      },
      {
        heading: "Prompts for languages",
        paragraphs: ["Use these to practise speaking and writing in a language you are learning."],
        bullets: [
          "\"Let's have a conversation in [language] at [beginner or intermediate] level about [topic]. Correct my mistakes after each reply.\"",
          "\"Give me 10 useful phrases in [language] for [situation], with pronunciation tips.\"",
          "\"Here is a short text I wrote in [language]: [paste]. List the grammar mistakes and explain each rule.\"",
        ],
      },
      {
        heading: "Prompts for planning and focus",
        paragraphs: [],
        bullets: [
          "\"Break this assignment into steps with a deadline for each: [paste brief and due date].\"",
          "\"I keep putting off [task]. Suggest a 25-minute first step that is small enough to start right now.\"",
          "\"Help me write a polite email to my teacher asking for an extension because [reason].\"",
        ],
      },
    ],
    faqs: [
      { question: "Is it cheating to use ChatGPT for school?", answer: "It depends on your school's policy and the task. Using it to understand a topic or quiz yourself is usually allowed; submitting AI-written work as your own usually is not. Ask your teacher when you are unsure." },
      { question: "What is the best ChatGPT prompt for studying?", answer: "\"Quiz me on [topic] with 10 questions, one at a time, and explain each answer\" is one of the most useful, because testing yourself works better than rereading." },
      { question: "Can ChatGPT make flashcards?", answer: "Yes. Paste your notes and ask for flashcards in a Question | Answer format, then copy them into a flashcard app. Check each card against your notes." },
      { question: "Can teachers tell if you used ChatGPT?", answer: "Detection tools are unreliable, but teachers often notice writing that does not match your usual work. The safer approach is to use AI for practice and feedback and to write graded work yourself." },
      { question: "Are these prompts only for ChatGPT?", answer: "No. They work in Gemini, Claude, Microsoft Copilot, and similar assistants. For questions about your own notes, NotebookLM is a good choice because it cites your documents." },
    ],
    sources: [
      { label: "UNESCO: Guidance for generative AI in education and research", url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" },
      { label: "OpenAI: Terms of Use (age requirements)", url: "https://openai.com/policies/terms-of-use/" },
    ],
    related: ["chatgpt-prompts/useful-chatgpt-prompts", "ai-productivity/how-to-use-ai-for-studying", "ai-productivity/how-to-write-ai-prompts", "ai-productivity/free-ai-tools"],
    next: { href: "/learn/ai-productivity/how-to-use-ai-for-studying", label: "How to use AI for studying" },
  },
  // ------------------------------------------------------------------ Teenagers
  {
    slug: "freelancing/make-money-online-as-a-teenager",
    area: "Freelancing",
    title: "How to Make Money Online as a Teenager (Safe, Legal Ways)",
    h1: "How to make money online as a teenager: safe, legal ways",
    summary:
      "Teenagers can earn online, but most platforms set an age limit of 18 for payouts, so the safest routes are services you sell with a parent's help, creator channels with a guardian's payment account, and skills that pay off later. This guide lists the real age rules, checked on 2 October 2026.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["make money online as a teenager", "jobs for teens online", "how to make money at 15", "teen side hustle"],
    tools: ["Canva", "CapCut", "Google Docs"],
    sections: [
      {
        heading: "Age rules on popular platforms (checked 2 October 2026)",
        paragraphs: [
          "Read these before you sign up. Lying about your age breaks the terms of every platform below and can mean a closed account and lost earnings.",
        ],
        bullets: [
          "Fiverr: you must be 18 or legally able to form a contract. Teens aged 13 to 17 may only use Fiverr through a parent's or legal guardian's account, under their supervision. Under-13s cannot use it.",
          "Upwork: 18 or the age of majority where you live, whichever is older. There is no teen option.",
          "YouTube: you can have a channel from 13 (younger with a supervised Google account). Payments go through AdSense, which needs an adult: an under-18 creator's parent or guardian can link their own AdSense account, and the money is paid to them.",
          "TikTok: the Creator Rewards Program requires you to be 18 (or the local age of majority), and going LIVE also requires you to be 18.",
          "X: Original Content Rewards requires you to be 18 or older.",
          "Facebook Creator Fast Track: 18 or older.",
        ],
      },
      {
        heading: "Ways to earn under 18 (with a parent involved)",
        paragraphs: [
          "These work in most countries because the customer pays for a simple, visible result. Agree with a parent or guardian on which customers you will work with, how you get paid, and what you will never share online.",
        ],
        bullets: [
          "Design small graphics: birthday invitations, menus, or social posts for family businesses and neighbours, made in Canva's free plan.",
          "Edit short videos: cut clips and add captions for a relative's shop or a local club, using CapCut or another free editor.",
          "Tutor younger students: help with reading, maths, or a language over a supervised video call. Many families prefer someone they already know.",
          "Tech help for older relatives and neighbours: setting up phones, video calls, or online banking safety settings, in person or remotely.",
          "Sell things you make: art, crafts, or printables, listed through a parent's account on an established marketplace.",
          "Grow a YouTube channel about something you know well, with your parent's AdSense account for any future earnings. Plan for it to take a long time: from 1 February 2027, new channels need 1,000 subscribers plus 8,000 watch hours or 20 million Shorts views to join the Partner Program.",
        ],
      },
      {
        heading: "Local labour laws still apply",
        paragraphs: [
          "Online work is still work. Many countries limit the hours and types of work for people under 16 or 18, and taxes can apply to earnings at any age. In the United States, for example, the Department of Labor's YouthRules site explains that 14 is generally the minimum age for most non-farm jobs, with hour limits until 16, while work such as babysitting and newspaper delivery is exempt. Ask a parent to check the rules where you live.",
        ],
      },
      {
        heading: "Scams that target teenagers",
        paragraphs: [
          "Scammers know teenagers want to earn and may not have seen these tricks before. Stop and tell an adult if you see any of the following.",
        ],
        bullets: [
          "\"Easy money\" for liking videos, rating products, or completing tasks, which later asks you to deposit money to unlock your earnings.",
          "Requests to receive money into your bank account or payment app and send it on. This is money laundering (often called being a \"money mule\") and is a crime.",
          "Modelling, gaming, or influencer \"contracts\" that ask for a fee, private photos, or your ID.",
          "Gift-card or crypto payments for anything, from a stranger.",
          "Anyone who asks you to keep the job secret from your parents.",
        ],
      },
      {
        heading: "Build skills now that pay later",
        paragraphs: [
          "The biggest advantage a teenager has is time. Two or three years of practice in one skill, such as video editing, design, writing, or coding, means you can start freelancing at 18 with a real portfolio instead of an empty profile.",
          "Free courses from Harvard CS50, freeCodeCamp, and Kaggle Learn are open to teenagers, and many tools have free plans. Keep a folder of every project you finish, with a note on what you learned, and you will have a portfolio by the time you are old enough to sign up on Fiverr or Upwork yourself.",
        ],
      },
    ],
    faqs: [
      { question: "How can a 13 to 15-year-old make money online?", answer: "Through services a parent helps you sell, such as design, video editing, tutoring younger students, or tech help, or a creator channel whose earnings go to a parent's account. Most platforms do not pay under-18s directly." },
      { question: "Can I use Fiverr if I am under 18?", answer: "Only through a parent's or legal guardian's account and under their supervision, if you are 13 to 17 (Fiverr Help, checked 2 October 2026). Under-13s cannot use Fiverr." },
      { question: "Can I use Upwork at 16?", answer: "No. Upwork requires you to be 18 or the age of majority where you live, whichever is older." },
      { question: "Can I make money on YouTube at 15?", answer: "Yes, if your parent or guardian links their own AdSense account to your channel and your channel meets the YouTube Partner Program requirements. The payments go to the adult's account." },
      { question: "Is it safe for teens to make money online?", answer: "It can be, with a parent involved, payments through known platforms, and no sharing of ID, photos, or bank details with strangers. Treat any offer of easy money as a likely scam." },
    ],
    sources: [
      { label: "Fiverr Help: navigating Fiverr as a minor", url: "https://help.fiverr.com/hc/en-us/articles/32567580782609-Navigating-Fiverr-as-a-minor-How-to-stay-safe-and-compliant" },
      { label: "Upwork Help: who's eligible to join and use Upwork", url: "https://support.upwork.com/hc/en-us/articles/211067778-Who-s-eligible-to-join-and-use-Upwork" },
      { label: "Google AdSense Help: age requirement", url: "https://support.google.com/adsense/answer/14230" },
      { label: "TikTok: Creator Rewards Program", url: "https://www.tiktok.com/creator-academy/en/article/creator-rewards-program" },
      { label: "X Help: Original Content Rewards", url: "https://help.x.com/en/using-x/original-content-rewards" },
      { label: "US Department of Labor: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" },
      { label: "FTC: job scams", url: "https://consumer.ftc.gov/articles/job-scams" },
    ],
    related: ["freelancing/how-to-make-money-online-safely", "freelancing/how-to-make-money-online", "youtube/youtube-monetization-requirements-2026", "ai-productivity/free-online-courses-with-certificates"],
    next: { href: "/learn/freelancing/how-to-make-money-online-safely", label: "How to make money online safely" },
  },

  // ------------------------------------------------------------------ Freelancing websites
  {
    slug: "freelancing/freelancing-websites-for-beginners",
    area: "Freelancing",
    title: "Best Freelancing Websites for Beginners (Fees Compared)",
    h1: "Best freelancing websites for beginners: fees compared",
    summary:
      "For most beginners, Fiverr and Upwork are the best freelancing websites to start, with Freelancer.com, PeoplePerHour, and Contra as alternatives. They differ most in how clients find you and how much they keep: from 0% to 20% of what you earn, as checked on 2 October 2026.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["freelancing websites for beginners", "Fiverr vs Upwork", "freelancer fees", "best freelance platforms"],
    tools: ["Fiverr", "Upwork", "Freelancer.com", "PeoplePerHour", "Contra", "LinkedIn"],
    sections: [
      {
        heading: "Freelancer fees compared (checked 2 October 2026)",
        paragraphs: [
          "These are the fees the platform takes from the freelancer. Payout methods can add their own fees, and every platform can change its pricing, so confirm on the official page before you quote a client.",
        ],
        bullets: [
          "Fiverr: 20% of every order, extra, and tip. Buyers also pay their own service fee on top.",
          "Upwork: 0% to 15% per contract, shown before you send a proposal and fixed for that contract. Proposals cost Connects (US$0.15 each).",
          "Freelancer.com: 10% of a fixed-price project or US$5, whichever is greater; 10% of each hourly payment.",
          "PeoplePerHour: a sliding fee per client based on what you have billed them in total: 20% up to £250, 7.5% from £250 to £5,000, and 3.5% above £5,000.",
          "Contra: no commission for freelancers on payments through Contra; clients pay a processing fee instead.",
          "LinkedIn and direct clients: no platform commission, but also no built-in payment protection, so use written agreements and invoices.",
        ],
      },
      {
        heading: "How each platform finds you work",
        paragraphs: [
          "The fee matters less at the start than how clients find you, because that decides how much effort the first job takes.",
        ],
        bullets: [
          "Fiverr: you publish fixed packages (gigs) and buyers come to you through search. Good for clearly defined services such as logo design or video edits.",
          "Upwork: clients post jobs and you send proposals. Good for project and long-term work, and for skills that need a conversation before a quote.",
          "Freelancer.com: you bid on posted projects and contests. Very competitive on price for beginners.",
          "PeoplePerHour: a mix of posted jobs and fixed-price offers, with a strong UK client base.",
          "Contra: a portfolio-first profile you share yourself; fewer clients browse it, so it suits people who bring their own leads.",
        ],
      },
      {
        heading: "Which one should a beginner choose?",
        paragraphs: [
          "Pick by the kind of work and how you like to sell.",
        ],
        bullets: [
          "You can describe your service as a fixed package with a price: start on Fiverr.",
          "Your work changes from client to client, or you prefer writing proposals: start on Upwork.",
          "Your clients are mostly in the UK: add PeoplePerHour.",
          "You already get leads from social media or friends: use Contra or direct invoices to keep the full fee.",
          "Do not join five platforms at once. Build one complete profile with real samples, then add a second platform after your first few reviews.",
        ],
      },
      {
        heading: "Before you sign up: country and payout checks",
        paragraphs: [
          "Every platform supports different countries and payout methods, such as bank transfer, PayPal, Payoneer, or local options. Open the payout or withdrawal help page for your country first. If the only way to get paid is a method you cannot open, choose a different platform rather than borrowing someone else's account, which breaks the terms and can freeze your money.",
          "All of these platforms require identity checks for sellers, and most require you to be 18. Never pay anyone to create, verify, or \"boost\" an account for you.",
        ],
      },
      {
        heading: "Profile checklist for your first platform",
        paragraphs: [
          "Whichever site you choose, the same profile basics decide whether a client clicks. Finish all of them before you send a proposal or publish a gig.",
        ],
        bullets: [
          "A clear, friendly photo of your face. No logos, group photos, or AI portraits that do not look like you.",
          "A title that names one service and one client type, such as \"Product photo editing for online shops\".",
          "An overview whose first two lines say what you deliver and for whom, followed by how you work and what you need from the client.",
          "Two or three portfolio pieces that match the title exactly. Mock projects are fine if you label them as samples.",
          "A starting price you can sustain after the platform's fee. Work out what you keep at 80% (Fiverr) or after the fee Upwork shows you.",
          "Your languages, time zone, and usual reply time, so clients in other countries know when to expect you.",
          "Completed identity verification and payout setup, so your first payment is not delayed.",
        ],
      },
      {
        heading: "What to expect in the first month",
        paragraphs: [
          "New profiles usually wait before the first order or reply, because clients prefer sellers with reviews. Use that time to improve samples and send a few careful proposals each day, rather than lowering your price to almost nothing. A first small job delivered well, with a review, does more for a new profile than any setting.",
          "Keep every conversation and payment on the platform until you know its rules. Moving a client off-platform early breaks most terms of service and removes the dispute protection that makes these sites safer than working with strangers directly.",
        ],
      },
    ],
    faqs: [
      { question: "Which freelancing website is best for beginners?", answer: "Fiverr if you can sell a fixed package, Upwork if you prefer applying to posted jobs. Both have large numbers of clients. Start with one and add a second later." },
      { question: "Fiverr or Upwork: which takes less in fees?", answer: "Upwork's fee is 0% to 15% per contract, while Fiverr takes a flat 20% (checked 2 October 2026). Upwork proposals also cost Connects at US$0.15 each, so compare what you actually keep." },
      { question: "Which freelance platform has no fees?", answer: "Contra charges freelancers no commission on payments made through it; clients pay a processing fee. Working with direct clients through LinkedIn or your own site has no platform fee, but also no payment protection." },
      { question: "Can I use freelancing websites from any country?", answer: "Most large platforms accept freelancers from many countries, but supported payout methods vary. Check the withdrawal options for your country before you build a profile." },
      { question: "Do I need experience to join a freelancing website?", answer: "No formal experience is required, but you need samples. Make two or three portfolio pieces before you sign up, so your first gig or proposal has proof." },
    ],
    sources: [
      { label: "Fiverr Help: paying for orders, extras, or custom offers", url: "https://help.fiverr.com/hc/en-us/articles/360050216133-Paying-for-orders-extras-or-custom-offers" },
      { label: "Upwork: Is Upwork free to join? Pricing breakdown (updated 23 July 2026)", url: "https://www.upwork.com/resources/is-upwork-free" },
      { label: "Freelancer.com: fees and charges", url: "https://www.freelancer.com/feesandcharges" },
      { label: "PeoplePerHour Support: freelancer commission fees", url: "https://support.peopleperhour.com/hc/en-us/articles/205218337-Freelancer-commission-fees" },
      { label: "Contra Help: paid projects", url: "https://help.contra.com/en/articles/9322763-paid-projects" },
    ],
    related: ["freelancing/fiverr-for-beginners", "freelancing/upwork-for-beginners", "freelancing/how-to-start-freelancing", "online-business/how-to-price-an-offer"],
    next: { href: "/learn/freelancing/fiverr-for-beginners", label: "Fiverr for beginners" },
  },

  // ------------------------------------------------------------------ Remote jobs
  {
    slug: "freelancing/remote-jobs-for-beginners",
    area: "Freelancing",
    title: "Remote Jobs for Beginners with No Experience",
    h1: "Remote jobs for beginners with no experience",
    summary:
      "Entry-level remote jobs exist in customer support, virtual assistance, data entry and annotation, content moderation, transcription, and junior marketing roles. Search trusted job boards with a remote filter, apply with a short tailored CV, and learn the signs of the fake jobs that target beginners.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["remote jobs for beginners", "work from home jobs no experience", "entry level remote jobs", "remote job scams"],
    tools: ["LinkedIn", "Indeed", "We Work Remotely", "Remote OK", "Remotive", "Wellfound"],
    sections: [
      {
        heading: "Remote jobs that hire beginners",
        paragraphs: [
          "These roles often list no degree or one year of experience, and train new hires. Clear written English (or the job's language), reliable internet, and a quiet place to work matter more than a long CV.",
        ],
        bullets: [
          "Customer support representative: answering customer questions by chat, email, or phone. The most common entry-level remote job.",
          "Virtual assistant: managing email, calendars, research, and simple bookkeeping for a business owner.",
          "Data entry and data annotation: entering information or labelling text, images, and audio, including for AI training. Quality and accuracy are tested.",
          "Content moderator: reviewing posts against a platform's rules. The work can be emotionally hard; ask about support before you accept.",
          "Transcription and captioning: turning audio into text. Speed and accuracy tests are common.",
          "Junior social media or marketing assistant: scheduling posts, replying to comments, and simple reporting.",
          "Online tutor or teaching assistant: for school subjects or languages you know well.",
        ],
      },
      {
        heading: "Where to find real remote jobs",
        paragraphs: [
          "Use job boards where companies post directly, and apply on the company's own careers page when you can. Always check whether a \"remote\" job is limited to certain countries or time zones; many are.",
        ],
        bullets: [
          "LinkedIn Jobs and Indeed: set the location filter to Remote, and the experience filter to Entry level or Internship.",
          "We Work Remotely, Remote OK, and Remotive: boards that list only remote jobs, many open worldwide.",
          "Wellfound: jobs at start-ups, often remote, with the salary range shown on many listings.",
          "Company careers pages: large companies with remote customer-support teams post roles there first.",
          "Paid job boards exist, but you never need to pay to apply for a job. Try the free boards first.",
        ],
      },
      {
        heading: "How to apply with no experience",
        paragraphs: [
          "Beginners get interviews by showing they can do the work, not by listing every school subject.",
        ],
        bullets: [
          "Write a one-page CV focused on relevant skills: typing speed, languages, tools you use (Google Workspace, Microsoft 365, Canva), and any volunteering or school projects.",
          "Tailor the first three lines to each job. Repeat the main requirement from the posting and show one example of it.",
          "Make one small proof for the role, such as three sample customer replies, a cleaned spreadsheet, or a short transcript, and link it.",
          "Prepare for a video interview: test your camera and microphone, sit in a quiet place, and practise answering \"Tell me about a time you solved a problem.\"",
          "Apply to 5 to 10 well-matched jobs a week and track them in a spreadsheet, rather than sending 100 identical applications.",
        ],
      },
      {
        heading: "How to spot a fake remote job",
        paragraphs: [
          "The US Federal Trade Commission warns that job scams often promise high pay for easy work and then ask for money or personal information. The same patterns appear worldwide.",
        ],
        bullets: [
          "You are hired after a short chat, with no real interview, often on WhatsApp or Telegram.",
          "They ask you to pay for training, equipment, or a starter kit, or send you a cheque to buy equipment and return the difference.",
          "The \"job\" is liking videos, rating products, or completing tasks that later require you to deposit money.",
          "They want your bank login, ID photos, or tax number before there is a written offer from a verifiable company.",
          "The recruiter's email uses a free email address or a domain that does not match the company's website.",
        ],
      },
      {
        heading: "Your home setup and working across time zones",
        paragraphs: [
          "Most entry-level remote employers list basic requirements in the posting. Check them before you apply, because some run a technical test of your connection during hiring.",
        ],
        bullets: [
          "A computer (many support roles do not allow phones or tablets) and a stable internet connection, plus a backup such as mobile data.",
          "A headset with a microphone for calls, and a quiet space without background noise.",
          "Comfort with common tools: Google Workspace or Microsoft 365, a chat tool such as Slack or Teams, and video calls on Zoom or Google Meet.",
          "Working hours that overlap with the team. Many roles that are \"remote\" still expect you online during the company's business hours.",
        ],
      },
      {
        heading: "Contracts, pay, and taxes",
        paragraphs: [
          "A remote job can be employment, where the company runs payroll and you get a contract with benefits, or contract work, where you invoice and handle your own taxes. Companies hiring abroad often use an employer-of-record service that employs you locally on their behalf. Read which one you are offered, because it changes your pay, taxes, and protections.",
          "Ask how and when you will be paid (bank transfer, a payroll provider, or a service such as Payoneer or Wise) before you sign. A real employer gives you a written offer that names the company, the role, the pay, and the start date.",
        ],
      },
    ],
    faqs: [
      { question: "What remote jobs can I get with no experience?", answer: "Customer support, virtual assistance, data entry and annotation, content moderation, transcription, and junior social media roles often hire beginners. Many train new staff." },
      { question: "Where can I find legitimate remote jobs worldwide?", answer: "LinkedIn and Indeed with the Remote filter, and remote-only boards such as We Work Remotely, Remote OK, and Remotive. Check each posting for country or time-zone limits." },
      { question: "Do I have to pay to get a remote job?", answer: "No. A real employer does not charge you to apply, train, or start. Requests for money are one of the clearest signs of a job scam." },
      { question: "Can I work remotely for a company in another country?", answer: "Often yes, as a contractor or through an employer-of-record service, but tax and payment rules depend on both countries. Many remote jobs are limited to specific countries; read the location line." },
      { question: "Are data annotation jobs real?", answer: "Many are, because AI companies need people to label and review data. Fake versions ask for upfront fees or deposits. Apply through the company's official site and never pay to start." },
    ],
    sources: [
      { label: "FTC: job scams", url: "https://consumer.ftc.gov/articles/job-scams" },
      { label: "We Work Remotely", url: "https://weworkremotely.com/" },
      { label: "Remote OK", url: "https://remoteok.com/" },
      { label: "Remotive", url: "https://remotive.com/" },
      { label: "Wellfound", url: "https://wellfound.com/jobs" },
    ],
    related: ["freelancing/how-to-make-money-online-safely", "freelancing/how-to-start-freelancing", "linkedin/linkedin-job-search", "linkedin/how-to-build-a-linkedin-profile"],
    next: { href: "/learn/linkedin/linkedin-job-search", label: "How to use LinkedIn to find a job" },
  },
  // ------------------------------------------------------------------ Shorts money
  {
    slug: "youtube/youtube-shorts-monetization",
    area: "YouTube",
    title: "YouTube Shorts Monetization Explained (2026 and 2027)",
    h1: "YouTube Shorts monetization: how it works in 2026 and what changes in 2027",
    summary:
      "YouTube pays Shorts creators from a shared pool of ad revenue, and creators in the Partner Program keep 45% of their share. To join through Shorts today you need 1,000 subscribers and 10 million Shorts views in 90 days; from 1 February 2027 new channels need 20 million, and Shorts revenue itself requires 10 million views every 90 days.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["YouTube Shorts monetization", "Shorts monetization requirements", "make money on YouTube Shorts", "Shorts revenue share"],
    tools: ["YouTube Studio", "YouTube Shorts", "CapCut"],
    sections: [
      {
        heading: "How YouTube pays for Shorts",
        paragraphs: [
          "Shorts are not paid per view in the way long videos with their own ads are. YouTube's Shorts monetization policy explains that ads shown between Shorts in the Shorts feed are pooled each month, by country. Part of that pool is set aside to cover music licensing for Shorts that use music; the rest becomes the Creator Pool.",
          "The Creator Pool is shared between monetizing creators according to each creator's share of engaged views in that country. You keep 45% of the revenue allocated to you, whether or not your Shorts used music. YouTube Premium and Premium Lite subscriptions add a second pool: creators get a 45% share for Shorts watched by subscribers (55% for long-form videos), according to YouTube's 10 August 2026 announcement.",
        ],
      },
      {
        heading: "Requirements today (until 31 January 2027)",
        paragraphs: [
          "To earn a share of Shorts ad revenue, a channel must be in the YouTube Partner Program with ads and Premium revenue sharing, and accept the Shorts Monetization Module in YouTube Studio.",
        ],
        bullets: [
          "1,000 subscribers.",
          "Either 10 million valid public Shorts views in the last 90 days, or 4,000 valid public watch hours on long-form videos in the last 12 months.",
          "Live in a country where the Partner Program is available, follow the monetization policies, have no active Community Guidelines strikes, turn on 2-Step Verification, and link an AdSense account.",
          "A lower tier, 500 subscribers and 3 public uploads in the last 90 days plus 3 million Shorts views in 90 days (or 3,000 watch hours in 12 months), unlocks fan funding and shopping features but not Shorts ad revenue.",
        ],
      },
      {
        heading: "What changes on 1 February 2027",
        paragraphs: [
          "YouTube announced the biggest Partner Program changes since 2018 on 10 August 2026. They take effect on 1 February 2027, and channels already in the program must accept the new terms in YouTube Studio by 31 January 2027 to keep earning.",
        ],
        bullets: [
          "New channels joining for ads and Premium revenue need 1,000 subscribers plus 20 million qualified Shorts views in 90 days, or 8,000 qualified watch hours in 365 days.",
          "Shorts revenue sharing needs 10 million qualified Shorts views in the last 90 days, for every channel. Below that, the channel stays in the program and keeps long-form earnings, and Shorts sharing restarts automatically when it is back above 10 million.",
          "YouTube said it will add incentive programs for channels below the threshold, such as bonuses for YouTube Shopping, brand-deal incentives, and boosts for starting trends, with details to come.",
          "A channel must also stay active: 1,000 qualified watch hours in 365 days, 1 million Shorts views in 90 days, or two long-form or five Shorts uploads every 90 days.",
          "The fan-funding and shopping entry tier does not change.",
        ],
      },
      {
        heading: "Ways to earn from Shorts below the thresholds",
        paragraphs: [
          "Most new channels will not reach 10 or 20 million Shorts views quickly. These routes do not depend on the Shorts revenue pool:",
        ],
        bullets: [
          "Use Shorts to grow subscribers for long-form videos, which still earn with 4,000 watch hours (8,000 for new channels from February 2027).",
          "Fan funding from 500 subscribers: channel memberships, Super Thanks, and Super Chat on live streams, where available.",
          "YouTube Shopping: tag products you sell or affiliate products where the program is offered.",
          "Brand deals and your own products or services, promoted in Shorts with the paid-promotion disclosure turned on.",
        ],
      },
      {
        heading: "What makes Shorts count as qualified and original",
        paragraphs: [
          "YouTube does not pay for reused or mass-produced content. Compilations of other people's clips, re-uploads, and repetitive AI-generated videos are the usual reasons Shorts channels are refused or demonetized. Original footage, your own voice and commentary, and real editing are what the policies reward.",
          "Views from artificial traffic, such as bought views or click farms, are not valid views and can lead to the channel being removed. Grow by posting regularly, opening with the subject in the first second, and checking retention in YouTube Studio's analytics.",
        ],
      },
    ],
    faqs: [
      { question: "How much does YouTube pay for 1,000 Shorts views?", answer: "There is no fixed rate. Shorts revenue is pooled by country and shared by engaged views, and creators keep 45% of their allocation, so earnings per 1,000 views vary by country, month, and audience." },
      { question: "How many views do you need to monetize YouTube Shorts?", answer: "Until 31 January 2027, 10 million valid public Shorts views in 90 days plus 1,000 subscribers to join through Shorts. From 1 February 2027, new channels need 20 million, and every channel needs 10 million views in 90 days to receive Shorts revenue." },
      { question: "Do Shorts views count toward the 4,000 watch hours?", answer: "No. Watch time from the Shorts feed does not count toward the long-form watch-hour requirement. Shorts views have their own route into the program." },
      { question: "Can I monetize Shorts with music?", answer: "Yes. YouTube sets aside part of the revenue for music licensing based on how many tracks a Short uses, but your 45% share of what is allocated to you is the same." },
      { question: "Will my channel be removed if I drop below 10 million Shorts views?", answer: "No. From 1 February 2027, dropping below 10 million qualified Shorts views in 90 days pauses Shorts revenue only. The channel stays in the Partner Program and keeps long-form earnings." },
    ],
    sources: [
      { label: "YouTube Help: YouTube Shorts monetization policies", url: "https://support.google.com/youtube/answer/12504220" },
      { label: "YouTube Official Blog: changes to the YouTube Partner Program (10 August 2026)", url: "https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/" },
      { label: "YouTube Help: YouTube Partner Program overview and eligibility", url: "https://support.google.com/youtube/answer/72851" },
      { label: "YouTube Help: channel monetization policies", url: "https://support.google.com/youtube/answer/1311392" },
    ],
    related: ["youtube/youtube-monetization-requirements-2026", "youtube/make-money-on-youtube", "video-editing/capcut-tutorial", "tiktok/tiktok-monetization"],
    next: { href: "/learn/youtube/youtube-monetization-requirements-2026", label: "YouTube monetization requirements" },
  },

  // ------------------------------------------------------------------ Fiverr gig ideas
  {
    slug: "freelancing/fiverr-gig-ideas",
    area: "Freelancing",
    title: "Fiverr Gig Ideas for Beginners (With Example Titles)",
    h1: "30 Fiverr gig ideas for beginners, with example titles",
    summary:
      "The best Fiverr gigs for beginners sell one small, clear result you can deliver well with free tools: a caption edit, a resume rewrite, a social media graphic. Here are 30 ideas grouped by skill, each with an example gig title, plus how to choose one and price it after Fiverr's 20% fee.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["Fiverr gig ideas", "Fiverr gigs for beginners", "Fiverr skills for beginners", "easy Fiverr gigs"],
    tools: ["Fiverr", "Canva", "CapCut", "Google Docs", "Google Sheets"],
    sections: [
      {
        heading: "How to choose a gig you can actually deliver",
        paragraphs: [
          "A gig idea is only good if three things are true: you can deliver it well today, you can show a sample, and buyers search for it. Pick from the lists below with that test, not by which sounds most profitable. Each example title starts with \"I will\", as Fiverr's gig titles do.",
        ],
      },
      {
        heading: "Writing and editing gigs",
        paragraphs: [],
        bullets: [
          "\"I will proofread and edit your English blog post up to 1,000 words\"",
          "\"I will rewrite your resume for entry-level jobs in a clean ATS-friendly format\"",
          "\"I will write 5 product descriptions for your online store\"",
          "\"I will write a LinkedIn About section that explains what you do\"",
          "\"I will turn your notes into a clear step-by-step guide or SOP\"",
          "\"I will write captions for 15 Instagram posts in your brand voice\"",
        ],
      },
      {
        heading: "Design gigs (free tools are enough to start)",
        paragraphs: [],
        bullets: [
          "\"I will design 5 matching social media posts for your brand in Canva\"",
          "\"I will design a YouTube thumbnail that is readable on a phone\"",
          "\"I will design a one-page restaurant or cafe menu\"",
          "\"I will create a simple, editable Canva template for your Instagram\"",
          "\"I will design a professional presentation of up to 10 slides\"",
          "\"I will design a printable event poster or flyer\"",
        ],
      },
      {
        heading: "Video and audio gigs",
        paragraphs: [],
        bullets: [
          "\"I will edit your short video for TikTok, Reels, or Shorts with captions\"",
          "\"I will add accurate English subtitles to your video\"",
          "\"I will remove background noise and level the audio in your podcast episode\"",
          "\"I will cut your long video into 5 short vertical clips\"",
          "\"I will create a simple animated intro with your logo\"",
          "\"I will transcribe up to 30 minutes of clear English audio\"",
        ],
      },
      {
        heading: "Data, admin, and tech gigs",
        paragraphs: [],
        bullets: [
          "\"I will clean and organise your messy Excel or Google Sheets data\"",
          "\"I will build a simple budget or inventory spreadsheet with formulas\"",
          "\"I will research and compile a list of 50 leads with public contact details\"",
          "\"I will set up your Google Business Profile correctly\"",
          "\"I will make small fixes to your WordPress or Wix website\"",
          "\"I will convert your PDF into an editable Word or Google Docs file\"",
        ],
      },
      {
        heading: "Language and teaching gigs",
        paragraphs: [],
        bullets: [
          "\"I will translate your document between English and [your language]\"",
          "\"I will be your conversation partner for [language] practice\"",
          "\"I will tutor you in [subject] for school-level exams\"",
          "\"I will review your app or website translation for natural [language]\"",
          "\"I will record a clear voice-over in [language or accent] up to 150 words\"",
          "\"I will create a quiz or worksheet set for your class or course\"",
        ],
      },
      {
        heading: "Price a beginner gig after the fee",
        paragraphs: [
          "Fiverr keeps 20% of each order (checked 2 October 2026), so a US$25 package pays you US$20. Time a sample job, then set the Basic package so the US$20 you keep is worth that time. Use the Standard and Premium packages for bigger versions of the same job, such as more videos or faster delivery, rather than unrelated extras.",
          "Avoid gigs that rely on rules you cannot meet: fake reviews, followers, or engagement are against Fiverr's terms, and academic gigs that complete graded work for students are not allowed either.",
        ],
      },
    ],
    faqs: [
      { question: "What is the easiest gig to start on Fiverr?", answer: "One you can already do well with free tools, such as proofreading, subtitles, social media graphics in Canva, or spreadsheet clean-up. Easy to deliver does not mean easy to win, so strong samples matter." },
      { question: "Which Fiverr gigs are in demand?", answer: "Video editing for short-form platforms, design for small businesses, writing and editing, and data or spreadsheet help have steady demand. Search Fiverr for your idea and look at how many gigs and reviews already exist." },
      { question: "How many gigs should a beginner make on Fiverr?", answer: "Start with one or two gigs that belong to the same skill. A focused profile is easier for buyers to trust than many unrelated gigs." },
      { question: "Can I do Fiverr gigs with AI?", answer: "You can use AI tools to work faster, but you are responsible for the quality and accuracy of what you deliver. Follow the buyer's brief and Fiverr's rules, and never deliver unchecked AI output." },
      { question: "How much should a beginner charge on Fiverr?", answer: "Enough that what you keep after the 20% fee pays for your time on a small, well-defined package. Low prices bring more messages but also more difficult briefs." },
    ],
    sources: [
      { label: "Fiverr Help: paying for orders, extras, or custom offers", url: "https://help.fiverr.com/hc/en-us/articles/360050216133-Paying-for-orders-extras-or-custom-offers" },
      { label: "Fiverr: Terms of Service", url: "https://www.fiverr.com/legal-portal/legal-terms/terms-of-service" },
      { label: "Fiverr Help Center", url: "https://help.fiverr.com/" },
    ],
    related: ["freelancing/fiverr-for-beginners", "freelancing/freelancing-websites-for-beginners", "online-business/how-to-price-an-offer", "photo-editing/canva-tutorial"],
    next: { href: "/learn/freelancing/fiverr-for-beginners", label: "Fiverr for beginners" },
  },
  // ------------------------------------------------------------------ AI search
  {
    slug: "seo/ai-search-optimization",
    area: "SEO",
    title: "SEO for AI Search: AI Overviews, AI Mode and Chatbots",
    h1: "SEO for AI search: how to show up in AI Overviews, AI Mode, and chatbots",
    summary:
      "Google says there is no special trick for its AI features: AI Overviews and AI Mode are built on its normal ranking systems, so a page must be indexed and eligible for a snippet, and the usual SEO basics apply. This guide explains what that means in practice, what you can skip, and how to measure AI visibility.",
    checkedDate: OCT2,
    difficulty: "Intermediate",
    kind: "Guide",
    paragraphs: [],
    topics: ["AI search optimization", "generative engine optimization", "GEO", "AI Overviews SEO", "AI Mode"],
    tools: ["Google Search Console", "Bing Webmaster Tools"],
    sections: [
      {
        heading: "What Google officially says (checked 2 October 2026)",
        paragraphs: [
          "Google Search Central publishes two pages for site owners: \"AI features and your website\" and a guide to optimizing for generative AI features. Both say the best practices for SEO remain relevant, because AI Overviews and AI Mode use Google's core ranking and quality systems to pick the pages they link to.",
        ],
        bullets: [
          "To appear as a supporting link, a page must be indexed and eligible to be shown in Google Search with a snippet. Google says there are no additional technical requirements.",
          "The site must also be included in the Search generative AI features setting in Search Console. Inclusion is the default.",
          "You do not need new machine-readable files, AI text files such as llms.txt, special markup, or a special schema.org type to appear in these features.",
          "You do not need to split content into tiny chunks or rewrite it in a special style for AI; Google says there is no ideal page length.",
          "robots.txt rules for Googlebot, and snippet controls such as nosnippet, data-nosnippet, max-snippet, and noindex, are how you limit what appears.",
        ],
      },
      {
        heading: "The SEO basics that matter most for AI answers",
        paragraphs: [
          "Google's own list of fundamentals that \"continue to be worthwhile\" for AI features is short and practical:",
        ],
        bullets: [
          "Allow crawling in robots.txt and in your CDN or hosting firewall.",
          "Make pages easy to find through internal links.",
          "Provide a good page experience on phones and desktops.",
          "Put important content in text, not only inside images or video.",
          "Support text with high-quality images and video where they help.",
          "Keep structured data accurate and matching the visible text.",
          "Keep Merchant Center and Business Profile information up to date if you sell products or serve a local area.",
        ],
      },
      {
        heading: "Write pages that AI answers can cite",
        paragraphs: [
          "AI answers link to pages that answer a question clearly and can be trusted. That is the same writing that works for people, and none of it requires a special format.",
        ],
        bullets: [
          "Answer the main question near the top in one or two plain sentences, then explain the details.",
          "Use descriptive headings that match the questions people ask, such as \"How much does it cost?\".",
          "Show where facts come from: name the source and the date you checked it, and link to it.",
          "Add what only you can add: first-hand testing, your own examples, photos you took, local knowledge, or original data.",
          "Keep facts current. Update prices, rules, and dates when they change, and say when the page was last checked.",
          "Say who wrote the page and why they can be trusted, and make contact information easy to find.",
        ],
      },
      {
        heading: "Other AI search tools: ChatGPT, Copilot, and Perplexity",
        paragraphs: [
          "AI assistants with web search, such as ChatGPT search, Microsoft Copilot, and Perplexity, also read public web pages and link to sources. Each has its own crawler, and you control access through robots.txt using the user-agent names each company publishes, such as OAI-SearchBot for ChatGPT search. Blocking a search crawler can stop your pages being shown as sources in that tool.",
          "Microsoft's Copilot uses Bing's index, so verifying your site in Bing Webmaster Tools and submitting your sitemap there helps it find your pages. The same people-first content that ranks in Google is what these tools tend to cite.",
        ],
      },
      {
        heading: "How to measure AI visibility",
        paragraphs: [
          "Search Console includes a Generative AI performance report showing impressions in AI Overviews and AI Mode by page, country, device, and date, with a separate report for Discover. These impressions are also counted in the normal Performance report, so do not add the two together.",
          "Clicks from AI features are counted as Google Search traffic, so watch whether the pages that appear in the AI report also bring visits and sign-ups in your analytics. For other assistants, look for referral visits from their domains in your analytics tool.",
        ],
      },
    ],
    faqs: [
      { question: "What is generative engine optimization (GEO)?", answer: "A name for optimizing content to be cited in AI-generated answers. Google's guidance says it is still SEO: indexable, crawlable, helpful pages with clear text. It says special files, markup, or chunking are not needed." },
      { question: "Do I need an llms.txt file?", answer: "Not for Google. Google's generative AI optimization guide says you do not need new machine-readable or AI text files, because Google Search does not use them." },
      { question: "How do I get my website into Google AI Overviews?", answer: "Make sure the page is indexed and eligible for a snippet, keep the Search generative AI features setting on in Search Console, and publish a clear, accurate answer to the question. Inclusion makes a page eligible; it does not guarantee it will be shown." },
      { question: "Can I stop my content appearing in AI Overviews?", answer: "Google points to its normal controls: nosnippet, data-nosnippet, max-snippet, and noindex limit what is shown, and Search Console has a setting for Search generative AI features. Blocking Googlebot in robots.txt removes the page from Search as a whole." },
      { question: "Does structured data help with AI search?", answer: "It is not required, and Google says there is no special schema for AI features. Accurate structured data that matches the page still helps Search understand it." },
    ],
    sources: [
      { label: "Google Search Central: AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google Search Central: optimizing for generative AI features on Google Search", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
      { label: "Google Search Central: creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "OpenAI: crawlers and user agents", url: "https://platform.openai.com/docs/bots" },
      { label: "Bing Webmaster Tools", url: "https://www.bing.com/webmasters" },
    ],
    related: ["seo/what-is-seo", "seo/technical-seo", "seo/search-console", "seo/seo-content-strategy"],
    next: { href: "/learn/seo/search-console", label: "How to use Google Search Console" },
  },

  // ------------------------------------------------------------------ SEO course
  {
    slug: "seo/free-seo-course",
    area: "SEO",
    title: "Free SEO Course for Beginners: 12 Lessons",
    h1: "Free SEO course for beginners: 12 lessons, in order",
    summary:
      "This free SEO course puts BuildSkills' twelve SEO guides in a learning order, with a goal, a practice task, and a self-check for each lesson. Most people can finish it in two to four weeks at 30 to 60 minutes a day, using only free tools from Google.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["free SEO course", "learn SEO free", "SEO for beginners", "SEO training"],
    tools: ["Google Search Console", "Google Search", "Google Trends", "PageSpeed Insights"],
    sections: [
      {
        heading: "How the course works",
        paragraphs: [
          "Each lesson links to a full guide in the Related guides list at the end of this page. Read the guide, do the practice task on a real website (your own, a friend's, or a free test site), and answer the self-check before you move on. The course is free, needs no sign-up, and does not issue a certificate; your proof is the improved website.",
          "You need a website you can edit and, from lesson 3, a Google Search Console property for it. The time per lesson is our estimate for a beginner and includes the practice task.",
        ],
      },
      {
        heading: "Module 1: How search works (lessons 1 to 3)",
        paragraphs: [],
        bullets: [
          "Lesson 1, What is SEO (30 minutes): learn what SEO can and cannot do. Practice: write one sentence describing who your site is for and what they search. Self-check: can you explain the difference between SEO and ads?",
          "Lesson 2, How search engines work (40 minutes): crawling, indexing, and ranking. Practice: search site:yourdomain.com to see which pages Google has indexed. Self-check: what stops a page being indexed?",
          "Lesson 3, How to get your website on Google (60 minutes): verify your site in Search Console and submit a sitemap. Practice: request indexing for your homepage. Self-check: where do you see whether a URL is indexed?",
        ],
      },
      {
        heading: "Module 2: Choosing what to write (lessons 4 to 6)",
        paragraphs: [],
        bullets: [
          "Lesson 4, Search intent (40 minutes): what the searcher actually wants. Practice: search three of your target phrases and note whether the results are guides, products, or local listings. Self-check: does your page match the type of result Google shows?",
          "Lesson 5, Keyword research (60 minutes): find real questions with free tools such as Google autocomplete, People also ask, and Google Trends. Practice: list 20 questions your audience asks, grouped by topic. Self-check: which three would you write first, and why?",
          "Lesson 6, SEO content strategy (45 minutes): turn the list into a plan of main pages and supporting pages. Practice: map each question to one page. Self-check: does any question map to two pages that would compete?",
        ],
      },
      {
        heading: "Module 3: Improving your pages (lessons 7 to 9)",
        paragraphs: [],
        bullets: [
          "Lesson 7, On-page SEO (60 minutes): titles, headings, descriptions, images, and answering the question early. Practice: rewrite the title and first paragraph of your most important page. Self-check: is the title unique and under about 60 characters?",
          "Lesson 8, Internal linking (40 minutes): connect related pages with descriptive links. Practice: add three links from older pages to your newest page. Self-check: can every important page be reached in a few clicks from the homepage?",
          "Lesson 9, Technical SEO (60 minutes): mobile layout, speed, HTTPS, canonical URLs, and robots rules. Practice: test one page in PageSpeed Insights and fix the top issue you can. Self-check: does every page have exactly one canonical URL?",
        ],
      },
      {
        heading: "Module 4: Growing and measuring (lessons 10 to 12)",
        paragraphs: [],
        bullets: [
          "Lesson 10, Google Search Console (45 minutes): read the Performance and Pages reports. Practice: find the query with the most impressions and the lowest click rate. Self-check: what would you change to earn more clicks for it?",
          "Lesson 11, Increase website traffic (45 minutes): combine search with email, social, and partnerships, and earn links honestly. Practice: list five sites that might link to a useful page of yours. Self-check: are any of your ideas paid or manipulative links?",
          "Lesson 12, Local SEO (45 minutes, for businesses that serve an area): Google Business Profile, reviews, and consistent contact details. Practice: check that your name, address, and phone match everywhere. Self-check: what does a customer see when they search your business name?",
        ],
      },
      {
        heading: "Bonus lesson: SEO for AI search",
        paragraphs: [
          "Once the basics are in place, read our guide to SEO for AI search. Google says AI Overviews and AI Mode use the same ranking systems and that pages must be indexed and eligible for a snippet, so the twelve lessons above are also the foundation for showing up in AI answers.",
        ],
      },
      {
        heading: "Final project and checklist",
        paragraphs: [
          "Finish the course by improving one real page from start to end and recording the before and after in Search Console over the following four to eight weeks. Rankings take time to change, so judge the work by whether the page is indexed, its impressions, and its click rate, not by a single day's position.",
        ],
        bullets: [
          "The page answers one clear question and matches the search intent.",
          "It has a unique title, one H1, descriptive headings, and an honest description.",
          "Its main content is text, with images that have useful alt text.",
          "At least three related pages link to it, and it links to them.",
          "It is mobile-friendly, loads quickly, and is indexed in Search Console.",
          "Facts are sourced and dated, and the page says who wrote it.",
        ],
      },
    ],
    faqs: [
      { question: "Can I learn SEO for free?", answer: "Yes. The core knowledge is free in Google Search Central's documentation, and the main tools, Google Search Console and PageSpeed Insights, are free. This 12-lesson course links them together in order." },
      { question: "How long does it take to learn SEO?", answer: "The basics in this course take two to four weeks at 30 to 60 minutes a day. Getting good takes months of practice on real sites, because results take weeks to show." },
      { question: "Do I need a website to learn SEO?", answer: "It helps a lot. Use your own site, a free website builder, or help a friend's or a local organisation's site, so you can practise every lesson on real pages." },
      { question: "Does this free SEO course give a certificate?", answer: "No. If you want a certificate, providers such as HubSpot Academy and Google Skillshop offer free ones for related marketing skills. For SEO work, a portfolio of improved pages is stronger proof." },
      { question: "Is SEO still worth learning with AI search?", answer: "Yes. Google says its AI features are built on its core ranking systems and that SEO best practices remain relevant, so the same skills help pages appear in AI answers." },
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Console", url: "https://search.google.com/search-console/about" },
      { label: "PageSpeed Insights", url: "https://pagespeed.web.dev/" },
      { label: "Google Trends", url: "https://trends.google.com/" },
      { label: "Google Search Central: AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    ],
    related: [
      "seo/what-is-seo",
      "seo/how-search-engines-work",
      "seo/how-to-get-website-on-google",
      "seo/search-intent",
      "seo/keyword-research",
      "seo/seo-content-strategy",
      "seo/on-page-seo",
      "seo/internal-linking",
      "seo/technical-seo",
      "seo/search-console",
      "seo/how-to-increase-website-traffic",
      "seo/local-seo",
      "seo/ai-search-optimization",
    ],
    next: { href: "/learn/seo/what-is-seo", label: "Lesson 1: What is SEO?" },
  },
  // ------------------------------------------------------------------ DaVinci Resolve
  {
    slug: "video-editing/davinci-resolve-for-beginners",
    area: "Video Editing",
    title: "DaVinci Resolve for Beginners: Free Pro Video Editing",
    h1: "DaVinci Resolve for beginners: edit your first video in the free version",
    summary:
      "DaVinci Resolve is a free, professional video editor for Windows, Mac, and Linux from Blackmagic Design. The free version edits most 8-bit video up to Ultra HD 3840 x 2160 at 60 fps; the paid Studio version is a one-time US$295 licence (checked 2 October 2026). This guide walks through a first edit, page by page.",
    checkedDate: OCT2,
    difficulty: "Beginner",
    kind: "Guide",
    paragraphs: [],
    topics: ["DaVinci Resolve tutorial", "DaVinci Resolve for beginners", "free video editing software for PC", "DaVinci Resolve free vs Studio"],
    tools: ["DaVinci Resolve", "DaVinci Resolve Studio"],
    sections: [
      {
        heading: "Free vs Studio (checked 2 October 2026)",
        paragraphs: [
          "Blackmagic Design's product page describes two versions of DaVinci Resolve 21. Download either only from blackmagicdesign.com.",
        ],
        bullets: [
          "DaVinci Resolve (free): editing, colour, visual effects, motion graphics, and audio in one app. Works with virtually all 8-bit video formats up to 60 fps at resolutions up to Ultra HD 3840 x 2160, and includes multi-user collaboration and HDR grading.",
          "DaVinci Resolve Studio (US$295, one-time, no subscription): adds the DaVinci Neural Engine AI tools, dozens more effects, AI noise reduction, text-based editing, magic mask, 10-bit video up to 120 fps, resolutions beyond 4K, and multi-GPU support.",
          "For learning and for most YouTube, social, and client videos at 1080p or 4K, the free version is enough.",
        ],
      },
      {
        heading: "Will it run on my computer?",
        paragraphs: [
          "Resolve needs more power than phone apps. Blackmagic's minimum requirements for version 21.1 include:",
        ],
        bullets: [
          "Windows: Windows 10 Creators Update or later, 16 GB of memory (32 GB with Fusion effects), and a GPU with at least 4 GB of VRAM.",
          "Mac: an Apple silicon Mac with macOS 15 Sequoia or later and 8 GB of memory (16 GB with Fusion).",
          "Linux: Rocky Linux 8.6, 32 GB of memory, and a discrete GPU with at least 4 GB of VRAM.",
          "If your computer is below this, try a lighter editor such as CapCut first, or edit at 1080p with optimised media turned on.",
        ],
      },
      {
        heading: "The pages, in the order you use them",
        paragraphs: [
          "Resolve splits the work into pages, shown as buttons along the bottom of the window. A beginner needs four of them.",
        ],
        bullets: [
          "Media: bring your clips, music, and images into the project.",
          "Cut or Edit: arrange and trim clips on the timeline. The Cut page is faster for simple videos; the Edit page gives a traditional timeline with more control.",
          "Color: correct exposure and white balance, then add a look.",
          "Fairlight: clean up and balance audio.",
          "Deliver: export the finished video.",
          "Fusion (visual effects) can wait until you are comfortable with the rest.",
        ],
      },
      {
        heading: "Step by step: your first edit",
        paragraphs: [
          "This walk-through makes a simple 1080p video for YouTube. Keyboard shortcuts are for Windows; on a Mac, use Cmd instead of Ctrl.",
        ],
        bullets: [
          "Create a project: open Resolve, click New Project in the Project Manager, and name it.",
          "Set the timeline: open File, Project Settings, and set the timeline resolution to 1920 x 1080 and the frame rate to match your footage (often 30 or 25 fps). For a vertical video, set 1080 x 1920.",
          "Import: on the Media page, drag your clips and music into the Media Pool.",
          "Build the rough cut: on the Edit page, drag clips onto the timeline in story order.",
          "Trim: press B for the Blade tool to cut a clip, press A to go back to selection, select the unwanted piece, and press Delete. Ctrl+Z undoes a mistake.",
          "Add titles: open the Effects library, choose Titles, and drag a Text title above your clip on the timeline. Edit the words in the Inspector.",
          "Fix colour: on the Color page, use the primary wheels to brighten a dark shot or warm a blue one. Small changes look best.",
          "Balance audio: on the Edit page or Fairlight, lower the music so speech stays clearly louder, and keep the meter out of the red so nothing clips.",
          "Export: on the Deliver page, choose the YouTube preset (or H.264 at 1080p), pick a file name and location, click Add to Render Queue, then Render All.",
        ],
      },
      {
        heading: "Five beginner mistakes to avoid",
        paragraphs: [],
        bullets: [
          "Mixing frame rates without setting the project first, which can make motion look jerky. Set the timeline frame rate before you import.",
          "Editing large 4K or phone HEVC files on a slow computer. Right-click the clips in the Media Pool and generate optimised media for smoother playback.",
          "Forgetting where the project is saved. Resolve stores projects in its database; use File, Export Project to keep a backup copy.",
          "Using music you have no licence for. Use your own, royalty-free libraries whose terms you have read, or the client's licensed tracks.",
          "Rendering before checking the whole timeline once at full screen with the sound on.",
        ],
      },
    ],
    faqs: [
      { question: "Is DaVinci Resolve really free?", answer: "Yes. The free version has no watermark and no time limit, and supports most 8-bit video up to Ultra HD 3840 x 2160 at 60 fps. The paid Studio version (US$295 one-time, checked 2 October 2026) adds AI tools, more effects, and higher formats." },
      { question: "Is DaVinci Resolve good for beginners?", answer: "Yes, if your computer meets the requirements. Start on the Cut or Edit page and ignore the advanced pages until you are comfortable. It takes longer to learn than phone apps but grows with you." },
      { question: "DaVinci Resolve or CapCut: which should I use?", answer: "CapCut is quicker for short vertical videos on a phone. DaVinci Resolve is better for longer videos, colour correction, and audio work on a computer, and its free version is a professional tool." },
      { question: "What computer do I need for DaVinci Resolve?", answer: "For version 21.1: Windows 10 or later with 16 GB of memory and a 4 GB GPU, an Apple silicon Mac on macOS 15 or later with 8 GB, or Rocky Linux 8.6 with 32 GB and a 4 GB discrete GPU. More memory makes editing smoother." },
      { question: "How do I export a video for YouTube in DaVinci Resolve?", answer: "On the Deliver page, choose the YouTube preset or H.264 at your timeline resolution, name the file, click Add to Render Queue, and then Render All." },
    ],
    sources: [
      { label: "Blackmagic Design: DaVinci Resolve (free and Studio)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
      { label: "Blackmagic Design: DaVinci Resolve training", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
    ],
    related: ["video-editing/how-to-edit-a-video", "video-editing/best-video-editing-apps", "video-editing/capcut-tutorial", "video-editing/how-to-add-subtitles"],
    next: { href: "/learn/video-editing/how-to-edit-a-video", label: "How to edit a video" },
  },
];

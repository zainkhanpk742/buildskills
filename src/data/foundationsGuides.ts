export type FoundationSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FoundationGuide = {
  slug: string;
  area: string;
  title: string;
  summary: string;
  sections: FoundationSection[];
  sources: { label: string; url: string }[];
  next: { href: string; label: string };
};

export const foundationGuides: FoundationGuide[] = [
  {
    slug: "databases/how-to-design-a-database",
    area: "Databases",
    title: "How do I design a database?",
    summary:
      "Start with the information your app must remember, model how those facts relate, then choose a database that fits the job.",
    sections: [
      {
        heading: "Start with the work, not the database product",
        paragraphs: [
          "A database stores information so an application can find and update it consistently. Before choosing PostgreSQL, MySQL, SQLite, MongoDB, or a hosted service, write down the real questions the system must answer: which orders are waiting, who owns each task, or when a booking begins.",
          "Those questions reveal the facts worth storing and how long the information needs to remain available. A class project, a public directory, and a payment system have different needs for access, reliability, privacy, and backups.",
        ],
      },
      {
        heading: "Turn real things into a data model",
        paragraphs: [
          "List the important things your system needs to remember, such as customers, orders, and products. For each, identify the facts that describe it and a stable identifier that distinguishes one record from another.",
          "Then describe the relationships in plain language. One customer can place many orders; each order can contain several products. In a relational database, separate tables represent these different entities, while keys connect related rows.",
          "Do not create a table for every screen or store the same fact in several places without a reason. Repetition leads to update mistakes. A normalized relational design stores each fact in an appropriate place and relates it through keys.",
        ],
      },
      {
        heading: "Choose a database for the requirements",
        paragraphs: [
          "A relational database is a strong fit when the data has clear relationships and the application needs structured queries and transactions. A document database can suit records with flexible, nested shapes, but flexibility does not remove the need to decide how data will be queried and validated.",
          "For a small single-device application, a local database may be enough. A shared web application usually needs a managed or server-based database, access controls, backups, and a migration plan. Estimate expected data, concurrent users, operational skills, and cost before selecting a service.",
        ],
      },
      {
        heading: "Protect data and test the model",
        paragraphs: [
          "Use constraints to prevent invalid states where the database can enforce them: required fields, unique values, valid references, and sensible checks. Add indexes for common lookup and join patterns after you understand the queries; unnecessary indexes consume storage and slow writes.",
          "Only collect information the product needs. Restrict access by role, use secure connections and managed secrets, and make backups that you have actually tested restoring. Personal information may have legal requirements that depend on where your users live and where you operate.",
          "Try the model with realistic examples, including awkward cases such as cancellations, duplicate submissions, missing optional information, and changes to a customer's details. If the model makes a normal task confusing, revise it before building more screens.",
        ],
      },
      {
        heading: "A beginner's first database design",
        paragraphs: [
          "For a basic booking tool, begin with customers, services, and appointments. Give each record an ID, store only the details needed to complete the booking, and define which customer and service belong to each appointment. Decide how a booking changes when someone cancels or reschedules.",
          "Draw the entities and relationships, write down a few real questions the app must answer, then test those questions against the proposed tables. This small exercise catches missing relationships earlier than starting with a framework or schema generator.",
        ],
      },
    ],
    sources: [
      { label: "PostgreSQL documentation: Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
      { label: "PostgreSQL documentation: Constraints", url: "https://www.postgresql.org/docs/current/ddl-constraints.html" },
    ],
    next: { href: "/learn/business-software/software-for-your-business", label: "Plan software around a business workflow" },
  },
  {
    slug: "digital-marketing/how-to-market-a-business-online",
    area: "Digital Marketing",
    title: "How do I market a business online?",
    summary:
      "Define the customer and offer, choose a channel they already use, publish a clear message, and measure meaningful actions.",
    sections: [
      {
        heading: "Get clear about the customer and the offer",
        paragraphs: [
          "Digital marketing is the work of helping the right people discover and understand an offer through online channels. The first useful step is not opening an advertising account; it is describing who needs the product, what problem it solves, and why someone would choose it.",
          "Talk to existing or potential customers. Ask how they handle the problem now, what makes a solution trustworthy, and what could stop them from buying. Their own language is a more honest source for page and campaign copy than a list of fashionable marketing phrases.",
        ],
      },
      {
        heading: "Choose a channel that fits the decision",
        paragraphs: [
          "Search can help when people actively look for a solution. Social content can be useful for discovery, community, and showing how something works. Email can support ongoing communication with people who chose to hear from you. Paid ads can test or extend a sound offer, but spend alone cannot fix a weak landing page.",
          "A small business usually learns more by doing one channel consistently than by posting everywhere without a purpose. Choose a channel based on how customers discover and evaluate this kind of product, then give them a relevant next step.",
        ],
      },
      {
        heading: "Build a simple path from interest to action",
        paragraphs: [
          "Each campaign needs a clear promise, a destination that continues that promise, and one action a person can take. For example, a local repair service can explain the service area, show what repairs it handles, state how estimates work, and provide a contact method.",
          "Make the page usable on a phone, give people enough information to decide, and do not claim results or guarantees you cannot support. If you use customer reviews, endorsements, or affiliate recommendations, follow the rules that apply in your country and disclose relevant relationships.",
        ],
      },
      {
        heading: "Measure useful outcomes and improve",
        paragraphs: [
          "Pick a measure that reflects the goal: qualified enquiries, booked appointments, completed purchases, repeat customers, or a useful email sign-up. Impressions and followers can help explain distribution, but they are not the business result by themselves.",
          "Use analytics and records you can trust. Compare a change with a clear baseline, give it enough time to collect meaningful observations, and change one major element at a time where practical. Respect consent and privacy requirements when collecting data.",
          "If an idea attracts attention but not the right customers, check the audience, offer, page, and call to action before increasing the budget. Marketing is a learning loop, not a promise of guaranteed traffic or sales.",
        ],
      },
      {
        heading: "A one-page marketing plan",
        paragraphs: [
          "Write down the customer, the problem, your offer, one channel, the page or destination, the next action, the budget or time available, and the result you will measure. Review the plan after real people have encountered it.",
          "This short plan keeps a small team focused and makes it easier to learn what worked. Add channels when there is a reason, not just because another business uses them.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "U.S. Small Business Administration: Market research and competitive analysis", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
    ],
    next: { href: "/learn/seo/keyword-research", label: "Learn how to research search topics" },
  },
  {
    slug: "content-creation/how-to-create-useful-content",
    area: "Content Creation",
    title: "How do I create useful content?",
    summary:
      "Choose one audience question, make a clear and original answer, check the facts, then publish it in a format people can use.",
    sections: [
      {
        heading: "Start with a real audience question",
        paragraphs: [
          "Useful content helps a particular reader understand something, make a decision, or complete a task. Start with questions you have heard from customers, classmates, colleagues, community members, or your own experience.",
          "Before drafting, finish this sentence: after reading or watching this, the person will be able to ____. If the result is hard to name, the topic may be too broad or the format may not fit the job.",
        ],
      },
      {
        heading: "Choose a format and give it a shape",
        paragraphs: [
          "A comparison may work as a short table, a process may need numbered steps, and a demonstration may be easier to follow in a video. Choose the format that makes the information easiest to understand rather than the one that is currently fashionable.",
          "A practical outline is: the direct answer, the context a beginner needs, steps or examples, common mistakes, and what to do next. Use headings that describe what the section actually explains.",
        ],
      },
      {
        heading: "Add firsthand value and verify claims",
        paragraphs: [
          "Readers can usually find a generic definition elsewhere. Add value through a worked example, your own observations, an original checklist, a clear explanation of trade-offs, or an honest account of what you tested and what you did not test.",
          "Check facts against dependable primary sources when a claim concerns a product, policy, safety issue, money, or a changing platform rule. Link to the source and say when time-sensitive details were checked. If you are unsure, narrow the claim or explain what remains uncertain.",
          "Do not copy another creator's writing, images, music, or video without permission or a valid legal basis. Credit alone does not grant copyright permission. Check licenses and use material you have the right to publish.",
        ],
      },
      {
        heading: "Make it easy to read, watch, and use",
        paragraphs: [
          "Use plain language, short paragraphs, useful labels, readable type, descriptive links, and meaningful image descriptions. Add captions or transcripts to video when possible. Good structure helps people scan without leaving out the full explanation.",
          "Edit for clarity rather than for a target word count. Remove repeated points, explain jargon when it first appears, and check spelling, links, dates, and examples before publishing.",
        ],
      },
      {
        heading: "Publish, learn, and update honestly",
        paragraphs: [
          "Share the work where the intended audience can reasonably find it. Invite useful feedback and observe whether readers can complete the intended task. Traffic is only one signal; questions, corrections, completed actions, and return visits can also show whether the content helped.",
          "Review content when its sources, instructions, or real-world details change. Update a date only when you have made a meaningful update, and do not create many near-identical pages just to target variations of the same search.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Central: Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google Search Central: Spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
      { label: "W3C: Introduction to Web Accessibility", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
    ],
    next: { href: "/learn/youtube", label: "Explore the practical YouTube learning path" },
  },
  {
    slug: "graphic-design/how-to-design-a-clear-brand",
    area: "Graphic Design",
    title: "How do I design a logo and brand identity?",
    summary:
      "Build a recognizable visual identity by defining the audience and message first, then choosing a flexible set of design elements.",
    sections: [
      {
        heading: "A logo is one part of a brand",
        paragraphs: [
          "A logo is a visual identifier. A brand is the collection of experiences and expectations people associate with an organization. A polished mark cannot compensate for confusing service, inconsistent communication, or a website that does not explain what the business does.",
          "Design begins with a practical brief: who the organization serves, what it offers, what should feel distinctive, where the identity will appear, and what it must avoid. Keep the brief grounded in the actual business rather than generic adjectives.",
        ],
      },
      {
        heading: "Choose a small, flexible visual system",
        paragraphs: [
          "A basic identity often needs a primary logo, a compact version for small spaces, a restrained color palette, type choices, and simple guidance for imagery and layouts. Make sure the mark works in one color as well as in full color.",
          "Test the design where people will see it: a phone screen, a website header, a social profile, a printed document, or packaging. A design that only works as a large presentation mock-up is not ready to use.",
          "Confirm that fonts, photographs, icons, and illustrations are licensed for the intended use. Save editable source files and export common formats so the organization can use and maintain its identity.",
        ],
      },
      {
        heading: "Make layouts clear and accessible",
        paragraphs: [
          "Use size, spacing, alignment, and contrast to show people what to look at first. Color alone should not carry essential information: pair it with labels, symbols, or another visible cue.",
          "Check text contrast against its background, especially for smaller text and interactive controls. WCAG provides contrast criteria and measurement guidance; color choice by itself is not enough to determine readability.",
          "Design for small screens and zoom. Keep labels readable, tap targets practical, and important content in a predictable order. Accessibility supports people with different abilities and often makes the design clearer for everyone.",
        ],
      },
      {
        heading: "A simple design process",
        paragraphs: [
          "Collect a small set of real references, sketch multiple directions, and test the strongest ones against the brief. Ask people in the intended audience what they think the organization does when they see the design; do not lead them toward your preferred answer.",
          "Refine one direction, document how to use it, and apply it consistently. Before launch, check contrast, legibility at small sizes, color and black-and-white versions, file formats, and licensing.",
        ],
      },
    ],
    sources: [
      { label: "W3C: Understanding WCAG 2.2 contrast minimum", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" },
      { label: "W3C: Introduction to Web Accessibility", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
    ],
    next: { href: "/learn/websites/responsive-web-design", label: "Learn how to design for different screens" },
  },
  {
    slug: "online-business/how-to-start-an-online-business",
    area: "Online Business",
    title: "How do I start an online business?",
    summary:
      "Test a specific customer problem and offer before investing in a large website, inventory, or advertising campaign.",
    sections: [
      {
        heading: "Find a problem people will pay to solve",
        paragraphs: [
          "An online business still needs a customer, a useful offer, a way to deliver it, and a way to cover its costs. Selling on the internet changes how people discover and receive the offer; it does not remove the need to understand demand.",
          "Speak with people who might use the product or service. Ask how they solve the problem today, what frustrates them, what they have already tried, and how they decide whether a provider is trustworthy. A positive reaction to an idea is not the same as evidence that someone will buy.",
        ],
      },
      {
        heading: "Choose a model you can deliver",
        paragraphs: [
          "Common models include services, digital products, physical products, subscriptions, marketplaces, and educational material. Each has different work behind the sale: support, fulfillment, refunds, inventory, recurring billing, or updating the content.",
          "Start with the smallest offer you can deliver responsibly. Write down what is included, who it is for, how delivery works, what it costs to provide, and what happens if something goes wrong.",
        ],
      },
      {
        heading: "Check the numbers and local requirements",
        paragraphs: [
          "Estimate the cost of making and delivering the offer, payment processing, returns or cancellations, customer support, marketing, and taxes. Include your own time. Revenue is not profit, and a price is not sustainable just because a competitor uses it.",
          "Business registration, consumer rights, privacy, tax, payment, and product rules differ by country and sometimes by industry. Check the rules where you operate and where customers are located, and seek qualified local advice for legal or tax decisions. Do not rely on a generic online checklist as legal advice.",
        ],
      },
      {
        heading: "Set up a trustworthy way to sell",
        paragraphs: [
          "A first version can be simple: a clear website or shop page, accurate product details, total pricing and delivery terms, a secure payment method, a way to contact you, and a process for handling orders. Do not collect personal information you do not need.",
          "Explain what a buyer gets and when they get it. For services, set scope, milestones, revisions, and payment terms in writing. For physical goods, state shipping, returns, and relevant restrictions accurately.",
        ],
      },
      {
        heading: "Test before you scale",
        paragraphs: [
          "Ask a small group of potential customers to try the offer or buy it under clear, honest terms. Record what confused them, what they valued, how long fulfillment took, and whether the economics worked.",
          "Improve the offer and delivery before spending heavily on growth. A useful early measure is whether a real customer can understand, buy, and receive what you promised—not how many followers or page visits you can collect.",
        ],
      },
    ],
    sources: [
      { label: "U.S. Small Business Administration: Plan your business", url: "https://www.sba.gov/business-guide/plan-your-business" },
      { label: "U.S. Small Business Administration: Market research", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
    ],
    next: { href: "/learn/websites/business-website", label: "Plan a website for your business" },
  },
  {
    slug: "ai-productivity/how-to-use-ai-productively",
    area: "AI & Productivity",
    title: "How do I use AI to get more done?",
    summary:
      "Use AI to speed up a task you understand, protect sensitive information, and check every result before relying on it.",
    sections: [
      {
        heading: "Choose a task where a mistake is easy to catch",
        paragraphs: [
          "Generative AI tools can help draft, summarize, brainstorm, classify, and transform information. They can also make up facts, miss context, reflect bias, or produce a confident answer that is wrong.",
          "Good early uses have a clear input, a clear expected output, and a person who can check the result: turning your own notes into an outline, generating test cases from requirements, or rewriting a draft for a different reading level.",
          "Do not hand off high-impact decisions just because an AI tool can produce an answer quickly. Health, legal, financial, hiring, safety, and other consequential work needs appropriate qualified human judgment and controls.",
        ],
      },
      {
        heading: "Give it context and a specific job",
        paragraphs: [
          "A useful request says what the tool should do, who the output is for, what information it can use, what format you need, and what it should not assume. Provide only context you are allowed to share.",
          "For example, ask for a short outline based only on a provided project brief, with unknown details marked as questions. This is safer and easier to check than asking a model to invent a complete plan from a vague prompt.",
        ],
      },
      {
        heading: "Check facts, calculations, and permissions",
        paragraphs: [
          "Verify important claims against primary sources. Recalculate numbers with a dependable tool, run generated code in a safe test environment, and compare summaries with the original document before sharing them.",
          "Do not paste confidential business information, personal data, credentials, private customer messages, or unpublished work into a tool unless your organization has approved that use and the service's data terms are appropriate.",
          "You remain responsible for what you publish or decide. Review copyright, attribution, privacy, and workplace rules; AI output is not automatically accurate, original, legally safe, or ready for use.",
        ],
      },
      {
        heading: "Build a repeatable workflow",
        paragraphs: [
          "Use a simple loop: define the task, choose whether AI is suitable, provide approved input, review the output, correct it, and record any recurring failure. Keep a manual way to finish the task if the service is unavailable.",
          "Measure time saved and error rates, not just how much text or code the model produced. If reviewing the output takes longer than doing the task, the workflow is not helping yet.",
        ],
      },
      {
        heading: "Use stronger safeguards as the stakes rise",
        paragraphs: [
          "For a personal brainstorming task, a quick review may be enough. For work that affects customers, employees, money, safety, or access to services, define an accountable reviewer, document what the tool is allowed to do, test failure cases, and follow applicable laws and organizational policies.",
          "AI systems and their terms change quickly. Check the current tool documentation, privacy settings, and your organization's guidance before building a process around a particular feature.",
        ],
      },
    ],
    sources: [
      { label: "NIST: AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    next: { href: "/learn/content-creation/how-to-create-useful-content", label: "Learn how to create useful content" },
  },
];

import type { Guide } from "@/data/site";

const checked = "2026-09-30";

export const thinHubGuides: Guide[] = [
  {
    slug: "mobile-apps/do-i-need-an-app",
    area: "Mobile Apps",
    title: "Do I need an app or a website?",
    summary: "Choose an app only when the job lives on the phone. A website is the better first product for most beginners.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "Do I need an app or a website?",
        paragraphs: [
          "Most beginners do not need an app first. A website can explain a service, take a message, and be found in search. An app earns its place when people repeat a job on the phone: a login, offline use, the camera, or a notification they must see.",
          "Write the job in one sentence. If that sentence is \"read this\" or \"contact us,\" build the site. If it is \"open this every day and update a record,\" an app may be the product. The store listing comes after that decision, not before.",
        ],
      },
      {
        heading: "What a first version should include",
        paragraphs: [
          "One path a person can finish on a phone, including the usual failure, such as no network. Extra tabs, accounts, and payments can wait. Test on a real phone, not only a desktop preview.",
          "Apple and Google charge for developer accounts, and the fees change. Read the current price on their own developer sites before you budget. A web page you can open on a phone is a valid launch in every country that can reach your site.",
        ],
      },
    ],
    faqs: [
      { question: "When is an app the wrong first product?", answer: "When people only need to read, book, or send a message. A website does that with less cost and no store review." },
      { question: "Can I turn a website into an app later?", answer: "Yes. Start with the pages. Add an installable app when the phone job is real and people are already using the site." },
      { question: "Do I need both iPhone and Android?", answer: "Not on day one. Ship the path on the phone your users actually have, or as a website both can open." },
      { question: "What does a store review check?", answer: "Apple and Google publish their own guidelines. They look at whether the app works, whether it is honest, and whether it follows their rules. Read the current guidelines before you submit." },
      { question: "Can I build this without coding?", answer: "A no-code tool can ship a simple app. You still need the screens, the data, and a test on a phone." },
      { question: "Are store fees the same worldwide?", answer: "The review rules are global. The account fee, tax, and payout country list are not. Check the official console for your country." },
    ],
    sources: [
      { label: "Apple Developer", url: "https://developer.apple.com/" },
      { label: "Google Play Console", url: "https://play.google.com/console/" },
    ],
    next: { href: "/learn/mobile-apps/how-to-build-a-mobile-app", label: "How to build a mobile app" },
  },
  {
    slug: "databases/what-is-a-database",
    area: "Databases",
    title: "What is a database?",
    summary: "A database is organized memory: the things a product must remember, stored so they can be found and updated without losing the truth.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "What is a database?",
        paragraphs: [
          "A database stores facts a product must not lose: people, orders, lessons, scores. A spreadsheet is a list you edit. A database is that list with rules, so two people cannot quietly create two different versions of the same fact.",
          "Beginners should name the things first. One student has many results. One order has many items. Those sentences become tables. The software, whether SQLite or a hosted service, is how you keep the sentences true.",
        ],
      },
      {
        heading: "What to store, and what to leave out",
        paragraphs: [
          "Store the facts you will look up again. Do not collect personal data you have no use for. Passwords are never stored as plain text. Practice on fake rows before you import anyone real.",
          "Privacy rules differ by country. The habit does not: collect less, limit who can open the file, and do not publish a demo full of real names. Back up the file before you experiment.",
        ],
      },
    ],
    faqs: [
      { question: "Is Excel a database?", answer: "It can hold a list. It becomes painful when many people edit it or the same fact is copied into many rows. That is when a database helps." },
      { question: "What is a row?", answer: "One item, such as one student or one order. Columns are the facts about that item." },
      { question: "What is a relationship?", answer: "A link between things, such as which orders belong to which customer. The link is usually an ID, not a copied name." },
      { question: "Which database should I learn first?", answer: "SQLite is enough on your own computer. The names of the things matter more than the brand." },
      { question: "Can a website work without a database?", answer: "Yes, if the pages do not remember visitors or records. A contact form that only sends email does not need one." },
      { question: "What is a backup?", answer: "A copy you can restore. Make one before you change a live list, and try the restore once so you know it works." },
    ],
    next: { href: "/learn/databases/how-to-design-a-database", label: "How to design a database" },
  },
  {
    slug: "business-software/spreadsheet-or-software",
    area: "Business Software",
    title: "Should I use a spreadsheet or build software?",
    summary: "Stay with a spreadsheet while one person can keep it true. Build software when the same live list is how the work gets done.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "Should I use a spreadsheet or build software?",
        paragraphs: [
          "A spreadsheet is the right tool when one person maintains a list and the columns stay stable. Custom software is the right tool when several people need the same live status, or when a step keeps getting skipped because the sheet cannot enforce it.",
          "Write the workflow before you choose. Who starts the task, what they type, what must be remembered, and what done looks like, including the usual exception such as a cancellation. If you cannot write that, software will not invent it.",
        ],
      },
      {
        heading: "How to keep the first version small",
        paragraphs: [
          "Build one loop a colleague can finish. A form, a list, and a status are enough. Reports can wait until the loop is trusted. Show it to the person who does the work, and rename buttons to their words.",
          "Know how you will export the records if you leave the tool. The business owns the data. Prices for builders change by country, so read the vendor's current page. This is not accounting or legal advice.",
        ],
      },
    ],
    faqs: [
      { question: "When is a spreadsheet enough?", answer: "When one person edits it, the list is short, and a mistake is easy to see. Many real businesses run this way for years." },
      { question: "When does a spreadsheet fail?", answer: "When two people overwrite each other, when the same address is typed in many places, or when the team skips steps the sheet cannot check." },
      { question: "What should version one do?", answer: "One task from start to done, including one common exception. Nothing else." },
      { question: "Should I buy a famous tool first?", answer: "Buy it if it already matches the workflow. Do not buy it because the logo is familiar and then force the work to fit." },
      { question: "Who should test it?", answer: "The person who does the job, not only the person who asked for the software." },
      { question: "What if we outgrow the tool?", answer: "Export the records first. A tool you cannot leave is a risk, even if it is cheap today." },
    ],
    next: { href: "/learn/business-software/software-for-your-business", label: "How to create software for a business" },
  },
  {
    slug: "digital-marketing/choose-a-channel",
    area: "Digital Marketing",
    title: "How do I choose a marketing channel?",
    summary: "Pick one place your audience already is, and that you can update every week. A second channel can wait.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "How do I choose a marketing channel?",
        paragraphs: [
          "A channel is a place people already look: search, a social app, email they asked for, or a marketplace. Choose the one where your audience asks the question you can answer, and that you can keep going for a month.",
          "Search fits when people type the problem. A social app fits when they already follow that topic. Email fits after they asked to hear from you. Ads rent attention. Learn the free version of one channel before you pay.",
        ],
      },
      {
        heading: "How to judge a month",
        paragraphs: [
          "Week one, write the offer in one sentence. Week two, publish one page or one video that answers a real question. Week three, share it where those people are. Week four, count enquiries, not likes.",
          "Rules differ. Some ad products are missing in some countries. Marketing email often needs consent. Do not buy address lists. Read the platform's current policy before you spend.",
        ],
      },
    ],
    faqs: [
      { question: "Should I be on every platform?", answer: "No. One channel you maintain beats six empty profiles." },
      { question: "Is the best channel the same in every country?", answer: "No. Use the place your customers actually open. A popular app in one country can be irrelevant in another." },
      { question: "When should I pay for ads?", answer: "After the page or profile explains the offer. Set a limit you can afford to lose, and read the ad rules first." },
      { question: "What number should I track?", answer: "Messages, bookings, or orders from the right people. A rising follower count without those is not the result." },
      { question: "Can I copy a competitor's channel?", answer: "You can note where their audience is. Your posts still have to be your offer and your proof." },
      { question: "Where does SEO fit?", answer: "It is the search channel. It needs a page that answers the query. It does not replace a clear offer." },
    ],
    next: { href: "/learn/digital-marketing/how-to-market-a-business-online", label: "How to market a business online" },
  },
  {
    slug: "content-creation/plan-one-piece",
    area: "Content Creation",
    title: "How do I plan one piece of content?",
    summary: "Start from a question someone asked, pick the format that fits the answer, and publish it where those people already are.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "How do I plan one piece of content?",
        paragraphs: [
          "Write the question in the reader's words. Decide what they should be able to do after the piece. Then choose the format: a short video if you must show a motion, a post if you have one argument, a guide if they will follow steps later.",
          "The first lines should state the point. A posting schedule does not rescue a piece nobody needed. One finished answer is the plan. The next piece should be the next question, linked from this one.",
        ],
      },
      {
        heading: "Rights, labels, and language",
        paragraphs: [
          "Use words, music, and photos you have the right to publish. If you draft with AI, check the facts and follow the platform's current label rules. Do not present a generated scene as proof of a real event.",
          "Write in the language your audience reads. A machine translation you have not read is not ready. Disclose a paid mention when the platform or the law requires it.",
        ],
      },
    ],
    faqs: [
      { question: "How do I pick the topic?", answer: "Use a question you have already been asked. If you cannot name the person, the topic is still too vague." },
      { question: "How long should it be?", answer: "Long enough to answer, and no longer. A short complete piece beats a long one that hides the point." },
      { question: "Do I need a content calendar?", answer: "A short list of questions is enough. A calendar of empty slots creates filler." },
      { question: "Should I post the same piece everywhere?", answer: "You can adapt it. A raw copy often looks wrong because each app crops and cuts differently." },
      { question: "How do I know it worked?", answer: "The right people finished it or asked the next question. A view from the wrong audience is a weak success." },
      { question: "Can I use AI to plan?", answer: "It can list angles. You still choose the question, check the facts, and use material you have rights to." },
    ],
    next: { href: "/learn/content-creation/how-to-create-useful-content", label: "How to create useful content" },
  },
  {
    slug: "graphic-design/design-a-simple-poster",
    area: "Graphic Design",
    title: "How do I design a simple poster?",
    summary: "Write the headline first, make it the largest element, and use one typeface and a small set of colors.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "How do I design a simple poster?",
        paragraphs: [
          "A poster has one job: the reader sees the most important words first, then what to do. Write that headline before you open a tool. If the words are vague, no typeface will save them.",
          "Limit the system. One typeface. A few colors that still work in black and white. The same spacing. A logo is optional. Decoration that competes with the headline is the usual beginner mistake.",
        ],
      },
      {
        heading: "Type, photos, and export",
        paragraphs: [
          "Keep text large enough for a phone if the poster will be posted there. Do not put the only copy of the message inside an image if a screen reader should read it. Use photos you made, the client supplied, or assets whose license allows the use.",
          "Canva's free plan is enough to practice. Paid plans and prices differ by country and tax. Check canva.com/pricing before you subscribe. Export the size the destination asked for, not a guess.",
        ],
      },
    ],
    faqs: [
      { question: "What comes first, the words or the colors?", answer: "The words. Color and type support the headline. They do not replace it." },
      { question: "How many fonts should I use?", answer: "One is enough. Two if you need a contrast. More than that usually looks unfinished." },
      { question: "How do I check contrast?", answer: "Squint. If the headline disappears, it is too close to the background. Also look at it in grayscale." },
      { question: "Can I use any image from a search?", answer: "No. Use an image you have a license for. A search result is not a license." },
      { question: "What size should I export?", answer: "The size of the place it will appear. A phone post, a print flyer, and a thumbnail are different files." },
      { question: "Do I need a paid design app?", answer: "Not to learn. A free plan that sets type, alignment, and export is enough until a specific paid feature blocks real work." },
    ],
    sources: [{ label: "Canva pricing", url: "https://www.canva.com/pricing/" }],
    next: { href: "/learn/graphic-design/how-to-design-a-clear-brand", label: "How to design a clear brand" },
  },
  {
    slug: "online-business/how-to-price-an-offer",
    area: "Online Business",
    title: "How do I price an online offer?",
    summary: "Price from the time, the costs, and the result. A number you cannot explain will attract the wrong buyer.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 8,
    paragraphs: [],
    sections: [
      {
        heading: "How do I price an online offer?",
        paragraphs: [
          "An offer is what the buyer gets, how long it takes, and what it costs. Write those three before you look at anyone else's screenshot. A very low price you cannot sustain teaches the wrong lesson and attracts unclear work.",
          "Add the costs you actually pay: tools, files, transaction fees, and your time. Marketplace fees are real and they change, so read Fiverr, Upwork, or your payment provider before you promise a take-home number. Tax depends on your country. This page is not tax advice.",
        ],
      },
      {
        heading: "How buyers pay, in different countries",
        paragraphs: [
          "Cards, bank transfer, PayPal, and Payoneer are not all available everywhere. Use a method your buyer can finish and that pays you into an account you control. Do not route a customer's money through a stranger.",
          "Say what is included and what is not. Revisions, deadlines, and refunds belong in the same note as the price. Test the payment once yourself before you announce it.",
        ],
      },
    ],
    faqs: [
      { question: "How do beginners set a first price?", answer: "Estimate the hours, add the costs, and choose a number you can say out loud. Raise it after you have finished real work." },
      { question: "Should I copy a price from the internet?", answer: "No. That number may be another country, another scope, or a fiction. Use it only as a rough hint." },
      { question: "What if nobody buys?", answer: "Check the offer before you slash the price. People often refuse a vague deliverable, not a fair number." },
      { question: "Do I show the price on the page?", answer: "Show it when you are willing to be held to it. If the work varies, show a starting range and what changes it." },
      { question: "Which payment tool should I use?", answer: "The one that works for you and for the buyer. Check the provider's country list. There is no universal app." },
      { question: "Should the price include revisions?", answer: "Say how many are included. Unlimited changes are how a small job becomes unpaid work." },
    ],
    sources: [
      { label: "Fiverr help", url: "https://help.fiverr.com/" },
      { label: "Upwork help", url: "https://support.upwork.com/" },
    ],
    next: { href: "/learn/online-business/how-to-start-an-online-business", label: "How to start an online business" },
  },
];

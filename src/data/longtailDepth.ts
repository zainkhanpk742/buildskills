import type { GuideDepth } from "@/data/guideDepth";

/**
 * Long-tail and Pakistan sections for big guides that rank far down for head
 * terms (Search Console, 29 Sep to 5 Oct 2026). The main topic of each guide
 * stays; these add answers to narrower questions. Every number is sourced and
 * dated in `sources` (checked 8 October 2026).
 */
const OCT8 = "2026-10-08";

export const longtailDepth: Record<string, GuideDepth> = {
  "mobile-apps/how-to-build-a-mobile-app": {
    h1: "How to build a mobile app: steps for beginners, with or without coding",
    checkedDate: OCT8,
    sections: [
      {
        heading: "Steps to build a mobile app from scratch",
        paragraphs: [
          "Whatever tool you use, the order is the same. Skipping the first steps is the most common reason beginner apps are never finished.",
        ],
        bullets: [
          "1. Write the problem in one sentence and name who has it.",
          "2. List the three to five screens the first version needs, and draw them on paper.",
          "3. Decide the platform: Android, iPhone, or both. Android apps can be built and tested on Windows, Linux or Mac; iPhone apps built with Xcode need a Mac.",
          "4. Pick the build method: a no-code builder, or code with Android Studio (Android) or Xcode (iPhone, needs a Mac).",
          "5. Build the smallest working version and test it on a real phone.",
          "6. Ask five real users to try it and fix what confuses them.",
          "7. Publish: Google Play or the App Store, with screenshots, a privacy policy and an honest description.",
        ],
      },
      {
        heading: "How to make a mobile app without coding (free options)",
        paragraphs: [
          "No-code and low-code builders let you drag screens and buttons instead of writing code. MIT App Inventor is a free, browser-based tool from MIT for building Android apps with blocks. Commercial builders such as Thunkable and FlutterFlow also offer free plans with limits; their plans change, so check the current pricing page before you commit.",
          "No-code is good for learning, prototypes and simple apps. If your app needs complex logic, heavy offline use or tight performance, you will eventually need code or a developer. Building the no-code version first still helps: you will know exactly what to ask for.",
        ],
      },
      {
        heading: "Publishing costs to know (checked 8 October 2026)",
        paragraphs: [
          "Google Play: a one-time US$25 registration fee for a Play Console developer account, and you must be at least 18. Personal accounts created after 13 November 2023 must meet testing requirements before an app can go live. Google may ask for a government ID and a card in your legal name.",
          "Apple App Store: the Apple Developer Program costs US$99 a year (in local currency where available). You do not need to pay to learn: with a free Apple Account you can use Xcode and test apps on your own device.",
        ],
      },
      {
        heading: "How to make an app in Pakistan: practical notes",
        paragraphs: [
          "The steps are the same as anywhere, but plan for payments early. Google Play's registration fee must be paid by credit or debit card (prepaid cards are not accepted), and Apple asks for a card that can be charged in USD if local payment is not offered. Check with your bank that your card allows international online payments before you start.",
          "Plan for users on slower mobile connections and older phones: keep the app small, make it usable when the network is weak, and test on an older phone, not only the newest one.",
        ],
      },
    ],
    faqs: [
      { question: "Can I make a mobile app for free?", answer: "You can build and test an app for free with tools like MIT App Inventor, Android Studio or Xcode. Publishing costs money: Google Play charges a one-time US$25 and Apple US$99 a year (checked 8 October 2026)." },
      { question: "How long does it take to build a first app?", answer: "It depends on the number of screens and features. A simple one-screen app can be built in days by a beginner; an app with accounts, payments and a database takes much longer. Start with the smallest useful version." },
      { question: "Do I need a Mac to make an iPhone app?", answer: "To build with Apple's own tool, Xcode, yes. Some no-code builders publish to iOS without a Mac, but you still need an Apple Developer Program membership to put the app on the App Store." },
    ],
    sources: [
      { label: "Google Play Console Help: Get started with Play Console (checked 8 Oct 2026)", url: "https://support.google.com/googleplay/android-developer/answer/6112435" },
      { label: "Apple Developer: Program enrollment (checked 8 Oct 2026)", url: "https://developer.apple.com/support/enrollment/" },
      { label: "MIT App Inventor (checked 8 Oct 2026)", url: "https://appinventor.mit.edu/" },
    ],
  },
  "seo/how-to-get-website-on-google": {
    h1: "How to get your website on Google for free, step by step",
    checkedDate: OCT8,
    sections: [
      {
        heading: "Get your website on Google search for free",
        paragraphs: [
          "Appearing in Google's normal (organic) results is free. You do not pay Google to be indexed, and buying ads does not put a page in the free results. What you need is a public website, a way for Google to find it, and pages worth showing.",
        ],
        bullets: [
          "Make sure the site is public: no password, and no noindex tag on pages you want found.",
          "Add the site to Google Search Console and verify that you own it.",
          "Submit your sitemap in the Sitemaps report.",
          "Use the URL Inspection tool to request indexing for your most important pages.",
          "Link to new pages from pages that already exist, so Google can discover them.",
        ],
      },
      {
        heading: "How to submit your website to Google Search Console",
        paragraphs: [
          "Open Google Search Console and add a property. A Domain property covers every version of your site (with and without www, http and https) and is verified with a DNS TXT record at your domain provider. A URL-prefix property covers one exact address and can be verified in other ways, such as an HTML file or tag.",
          "After verification, open Sitemaps, enter your sitemap address (often /sitemap.xml) and submit. Then open URL Inspection, paste a page address and choose Request indexing. Google says there is a quota for individual requests, and asking again for the same URL does not make it faster.",
        ],
      },
      {
        heading: "How long does it take Google to index a new website?",
        paragraphs: [
          "Google's own documentation says crawling can take anywhere from a few days to a few weeks, and that requesting a crawl does not guarantee a page will be included in results quickly, or at all (checked 8 October 2026). New sites with few links pointing to them are usually at the slower end.",
          "While you wait, check the Pages report in Search Console. \"Discovered – currently not indexed\" and \"Crawled – currently not indexed\" are normal for new sites; improving the page and linking to it from other pages helps more than repeated requests.",
        ],
      },
    ],
    faqs: [
      { question: "Is it free to get my website on Google?", answer: "Yes. Being indexed in Google's organic results is free. Google Ads is a separate, paid product and does not affect whether your page appears in the free results." },
      { question: "How long does it take for Google to index a new website?", answer: "Google says crawling can take from a few days to a few weeks, and a request does not guarantee indexing (Google Search Central, checked 8 October 2026)." },
      { question: "Why is my site on Google but not ranking?", answer: "Being indexed only means Google can show the page. Ranking depends on how well the page answers the search, its usefulness compared with other pages, and signals such as links. Start with one clear page per question." },
    ],
    sources: [
      { label: "Google Search Central: Ask Google to recrawl your URLs (checked 8 Oct 2026)", url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" },
      { label: "Google Search Central: Build and submit a sitemap (checked 8 Oct 2026)", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" },
    ],
  },
  "photo-editing/how-to-edit-photos": {
    h1: "How to edit photos on your phone or computer: a beginner's workflow",
    checkedDate: OCT8,
    sections: [
      {
        heading: "How to edit photos on your phone",
        paragraphs: [
          "Your phone's own gallery or Photos app already has the tools most edits need. Open the photo, tap Edit, and work in this order:",
        ],
        bullets: [
          "Duplicate first, or make sure the app keeps the original, so you can undo everything.",
          "Straighten and crop: level the horizon and remove distractions at the edges.",
          "Light: adjust exposure or brightness, then shadows and highlights, until faces and details are visible.",
          "Colour: fix white balance (warmth) so white looks white, then add a little saturation only if needed.",
          "Sharpen lightly and stop. Heavy filters and over-smoothing of skin are the most common beginner mistakes.",
          "Export or share at full quality, and check the result on a second screen.",
        ],
      },
      {
        heading: "Free photo editing apps for beginners",
        paragraphs: [
          "Start with what is built into your phone. When you need more control, these well-known apps are free to download; some features need a paid plan, and plans change, so read the store page before paying for anything.",
        ],
        bullets: [
          "Built-in Photos or Gallery app: crop, light and colour basics, already installed.",
          "Snapseed (by Google): detailed adjustments, selective edits and healing on Android and iPhone.",
          "Adobe Lightroom mobile: strong colour and light controls; some tools are part of a paid plan.",
          "Canva: best for adding text and making posts or thumbnails from your edited photos.",
        ],
      },
    ],
    faqs: [
      { question: "What is the easiest way to edit photos on a phone?", answer: "Use the Edit button in your phone's Photos or Gallery app. Crop first, then fix brightness and colour, and keep the original so you can start again." },
      { question: "Which free photo editing app is best for beginners?", answer: "Start with your phone's built-in editor. If you need more control, Snapseed is free and covers most adjustments; Canva is better when you need text or a social media layout." },
    ],
  },
  "freelancing/how-to-start-freelancing": {
    h1: "How to start freelancing with no experience (including in Pakistan)",
    checkedDate: OCT8,
    sections: [
      {
        heading: "How to start freelancing in Pakistan",
        paragraphs: [
          "The steps above work in Pakistan too: one paid skill, real samples, a clear offer and a first client. What is different is how you get paid and how you register. Sort these out before your first order, so money is not stuck.",
        ],
        bullets: [
          "Payoneer: works with platforms such as Upwork and Fiverr and lets you withdraw to a local Pakistani bank account. The bank account must be in the same name as your Payoneer account, and Payoneer says adding a bank account usually takes up to 3 business days to approve.",
          "Freelancer bank account: under the State Bank of Pakistan's Framework for Freelancers Accounts (October 2023), banks can open a freelancer account in person or digitally, with a foreign currency account (ESFCA) alongside your rupee account. SBP said freelancers can keep 50% of export proceeds, or US$5,000 a month, whichever is higher, in that foreign currency account.",
          "Direct bank transfer: some foreign clients pay straight to your bank. Ask your bank what details to give (such as IBAN and SWIFT code) and which documents they need.",
        ],
      },
      {
        heading: "PSEB freelancer registration",
        paragraphs: [
          "The Pakistan Software Export Board (PSEB) registers IT and IT-enabled services freelancers. You apply online through PSEB's registration portal with scanned copies of your personal NTN (with no business name), both sides of your CNIC, and a personal bank account letter or certificate. After initial approval you pay the fee, and PSEB says the certificate usually takes 2 to 5 working days after payment is verified.",
          "PSEB's site lists the freelancer fee as Rs 1,000 for a new registration and Rs 2,000 a year for renewal (checked 8 October 2026). Registration can help with banking and with tax treatment of export income, but tax rules change; confirm your position with FBR or a tax adviser rather than relying on a social media post.",
        ],
      },
    ],
    faqs: [
      { question: "How do freelancers in Pakistan receive payments?", answer: "Common routes are Payoneer (withdrawing to a Pakistani bank account in your name), a freelancer bank account with a foreign currency account under SBP's 2023 framework, and direct bank transfers from clients." },
      { question: "Is PSEB registration mandatory for freelancers?", answer: "It is not needed to start working, but it can help with bank compliance and tax treatment of IT export income. PSEB's fee was Rs 1,000 for new freelancers and Rs 2,000 a year for renewal when checked on 8 October 2026." },
    ],
    sources: [
      { label: "PSEB: Freelancer registration (checked 8 Oct 2026)", url: "https://techdestination.com/freelancer-registration/" },
      { label: "State Bank of Pakistan: BPRD Circular No. 05 of 2023, Framework for Freelancers Accounts", url: "https://www.sbp.org.pk/bprd/2023/C5.htm" },
      { label: "The News: SBP moves to facilitate IT exporters, freelancers (24 Oct 2023)", url: "https://www.thenews.com.pk/print/1122250-sbp-moves-to-facilitate-it-exporters-freelancers" },
      { label: "Payoneer: How to open a Payoneer individual account in Pakistan (checked 8 Oct 2026)", url: "https://www.payoneer.com/resources/country-guides/payoneer-individual-account-in-pakistan/" },
      { label: "Payoneer Help: Withdraw to bank FAQ (checked 8 Oct 2026)", url: "https://payoneer.custhelp.com/app/answers/detail/a_id/18605" },
    ],
  },
  "websites/website-cost": {
    h1: "How much does a website cost? (including in Pakistan)",
    checkedDate: OCT8,
    sections: [
      {
        heading: "Website cost in Pakistan: what you actually pay for",
        paragraphs: [
          "There is no single price for a website in Pakistan, because quotes bundle very different work. Compare quotes line by line using the parts below, and ask what is included for the second year, not only the first.",
        ],
        bullets: [
          "Domain: a .pk or .com.pk domain comes from PKNIC or its resellers. PKNIC lists Rs 2,100 per year for Pakistan-based registrants since 1 August 2026, billed for two years at a time (checked 8 October 2026). Resellers may add their own charge. A .com is bought from any registrar, and prices vary, including at renewal.",
          "Hosting: from free tiers (for example Vercel's Hobby plan, which its terms limit to personal, non-commercial use) to paid hosting billed monthly or yearly. Business sites should budget for paid hosting.",
          "Design and build: a template you set up yourself, a freelancer, or an agency. This is usually the biggest and most variable part.",
          "Content: writing, photos and translation (for example English and Urdu versions) take time or money.",
          "Features: online payments, bookings, logins and an admin panel each add build and testing work.",
          "Upkeep: renewals, updates, backups and small changes every month or year.",
        ],
      },
      {
        heading: "How to keep the cost down safely",
        paragraphs: [
          "Start with a small site that does one job, such as explaining your service and taking WhatsApp enquiries, and add features after real customers ask for them. Keep the domain registered in your own name and keep your own logins, so you are not locked to one developer.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a .pk domain cost?", answer: "PKNIC lists Rs 2,100 per year for registrants based in Pakistan, billed for two years at a time, from 1 August 2026 (checked 8 October 2026). Resellers may charge extra for their service." },
      { question: "Can I make a website for free in Pakistan?", answer: "You can build and host a personal site for free on services such as Vercel's Hobby plan with a free subdomain. A business site should use paid hosting, and your own domain has a yearly fee." },
    ],
    sources: [
      { label: "PKNIC: .PK registry, domain pricing (checked 8 Oct 2026)", url: "https://pknic.net.pk/" },
      { label: "Vercel Docs: Hobby plan (checked 8 Oct 2026)", url: "https://vercel.com/docs/plans/hobby" },
    ],
  },
};

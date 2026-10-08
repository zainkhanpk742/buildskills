import type { Metadata } from "next";
import Link from "next/link";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

const SITE = "https://buildskills.com.pk";
const SERVICES_EMAIL = "buildskillspk@gmail.com";
const FIVERR_URL = "https://www.fiverr.com/s/9d964qe";
const MAILTO = `mailto:${SERVICES_EMAIL}?subject=${encodeURIComponent("Service enquiry from BuildSkills")}&body=${encodeURIComponent(
  "Hello,\n\nService I need:\nWhat my business does:\nWhat I want to achieve:\nDeadline:\nBudget range (optional):\n\nThanks,\n",
)}`;

export const metadata: Metadata = pageMeta({
  title: "Website Development & SEO Services",
  description:
    "Website design and development with SEO, custom marketplace development, offline business software, and digital marketing. Email for a quote.",
  path: "/services",
});

const services = [
  {
    id: "websites",
    title: "Website design and development with SEO",
    intro:
      "Websites for businesses, shops, schools, clinics, creators, and personal brands, built to work well on phones and to be easy for search engines to understand.",
    includes: [
      "Planning the pages and content around what your customers search for.",
      "A responsive design that works on mobile, tablet, and desktop.",
      "Fast-loading pages, clean page titles and descriptions, a sitemap, and structured data where it fits.",
      "Help with the domain, hosting, Google Search Console, and analytics setup.",
      "Contact forms, WhatsApp or email buttons, and maps where you need them.",
      "Updates to an existing website, including speed and SEO fixes.",
    ],
  },
  {
    id: "marketplaces",
    title: "Marketplace-type platforms",
    intro:
      "Custom platforms where many sellers, service providers, or listings meet many buyers: for example multi-vendor shops, booking sites, directories, classified ads, and job boards.",
    includes: [
      "User accounts for buyers, sellers, and admins, with the right permissions for each.",
      "Listings with search, filters, categories, and photos.",
      "Seller or provider dashboards, and an admin panel to approve and manage content.",
      "Orders, bookings, messages, and reviews, depending on what your platform needs.",
      "Payment gateway integration with providers available in your country.",
      "A first version with the core features, so you can launch and learn before adding more.",
    ],
  },
  {
    id: "offline-software",
    title: "Offline database software for businesses",
    intro:
      "Desktop software that runs on your own computer and keeps working without an internet connection, for any type of business that needs reliable records.",
    includes: [
      "Inventory and stock tracking, billing and invoicing, and point-of-sale screens.",
      "Customer, supplier, student, patient, or member records.",
      "Daily, monthly, and custom reports, with export to Excel or PDF and printing.",
      "User logins with roles, so staff only see what they need.",
      "Simple backup and restore, for example to a USB drive or external disk.",
      "Optional online sync or a web dashboard later, if you need it.",
    ],
  },
  {
    id: "marketing",
    title: "Business promotion and digital marketing",
    intro:
      "Help getting your business found and chosen online, using the channels that suit your customers.",
    includes: [
      "Google Business Profile setup and optimisation for local customers.",
      "Social media profile setup and a practical content plan.",
      "SEO content: service pages, blog posts, and keyword research.",
      "Setting up Google or Meta ad campaigns in your own account, with your own budget.",
      "Simple monthly reports from Search Console and analytics, in plain language.",
    ],
  },
  {
    id: "digital-services",
    title: "Help building your digital service",
    intro:
      "For freelancers, creators, and small teams who want to turn a skill into an online service and run it smoothly.",
    includes: [
      "Shaping your offer: who it is for, what is included, and how it is delivered.",
      "A portfolio or service website, and help preparing marketplace profiles and gigs.",
      "Booking, enquiry, and payment forms.",
      "Simple automations and AI-assisted workflows to save time on repeated tasks.",
    ],
  },
];

const steps = [
  { title: "Contact", body: `Email ${SERVICES_EMAIL} or message through Fiverr. Say what you need and what your business does.` },
  { title: "Discuss", body: "We talk through your goals, examples you like, the features you need, and your deadline, by email, chat, or a call." },
  { title: "Quote", body: "You receive a written scope, timeline, and price before any work starts, and you decide whether to go ahead." },
  { title: "Build", body: "The work is done in stages, with previews you can check and feedback rounds along the way." },
  { title: "Support", body: "Handover, a short walkthrough of how to use and update it, and help with problems found after launch, as agreed in the quote. Ongoing maintenance can be agreed separately." },
];

const faqs = [
  {
    question: "How much does a website or software project cost?",
    answer:
      "It depends on the pages, features, and timeline, so there are no fixed prices on this page. After a short discussion you get a written quote, and you decide whether to go ahead.",
  },
  {
    question: "Can you guarantee first place on Google?",
    answer:
      "No. Nobody can honestly guarantee a ranking, and Google's own SEO guidance says no one can guarantee a number one ranking. What can be done is building the site correctly, fixing technical problems, and creating useful content, which gives your pages a fair chance to rank.",
  },
  {
    question: "Can I order through Fiverr instead of email?",
    answer:
      "Yes. You can use the Fiverr profile linked on this page, where Fiverr's own terms and fees apply, or email directly to discuss the project first.",
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer: "Yes. The work is done online, so you can get in touch from any country. Calls and messages are arranged at a time that suits both time zones.",
  },
  {
    question: "Does offline software need the internet?",
    answer:
      "No. Offline software runs on your own computer and stores data locally, so it keeps working without a connection. Backups and any optional online sync are planned with you.",
  },
  {
    question: "Who owns the website or software when it is finished?",
    answer: "Ownership, source code handover, and access to accounts are agreed in writing in the quote before work starts.",
  },
  {
    question: "What should I send in my first message?",
    answer:
      "What your business does, the service you need, any websites or apps you like, your deadline, and a budget range if you have one. The Email me button opens a message with these headings already filled in.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/services#service`,
      name: "BuildSkills Services",
      url: `${SITE}/services`,
      email: SERVICES_EMAIL,
      description:
        "Website design and development with SEO, custom marketplace platforms, offline database software for businesses, digital marketing, and help building digital services.",
      areaServed: "Worldwide",
      sameAs: [FIVERR_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.intro,
            url: `${SITE}/services#${service.id}`,
            areaServed: "Worldwide",
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

function Contact() {
  return (
    <div className="actions">
      <a href={MAILTO} className="btn btn-primary">Email me</a>
      <a href={FIVERR_URL} target="_blank" rel="noopener" className="btn btn-secondary">View my Fiverr profile</a>
    </div>
  );
}

export default function Page() {
  return (
    <Interior
      kicker="Services"
      title="Website development, SEO, and business software services."
      lede="Alongside the free guides, BuildSkills offers hands-on help: websites built with SEO in mind, marketplace platforms, offline business software, digital marketing, and help building your own digital service."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className="prose" style={{ marginBottom: "3rem" }}>
        <p>
          Every project starts with a conversation and a written quote. There are no fixed prices or packages on this page, because each business needs something different. To ask about a project, email{" "}
          <a href={MAILTO}>{SERVICES_EMAIL}</a> or use the Fiverr profile below.
        </p>
        <Contact />

        <h2>What I can build for you</h2>
        {services.map((service) => (
          <section key={service.id} id={service.id} aria-labelledby={`${service.id}-title`}>
            <h3 id={`${service.id}-title`}>{service.title}</h3>
            <p>{service.intro}</p>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <h2>How it works</h2>
        <ol>
          {steps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}.</strong> {step.body}
            </li>
          ))}
        </ol>

        <h2>What to expect</h2>
        <ul>
          <li>A clear written scope and price before work begins, so you know what is included.</li>
          <li>Plain-language updates, and previews you can check during the build.</li>
          <li>Honest advice, including when a simpler or cheaper option will do the job.</li>
          <li>
            No promises of guaranteed rankings, sales, or followers. As{" "}
            <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener">Google&apos;s guide to hiring an SEO</a> puts it, no one can guarantee a number one ranking on Google.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary><h3 style={{ display: "inline" }}>{faq.question}</h3></summary>
            <p>{faq.answer}</p>
          </details>
        ))}

        <h2>Get in touch</h2>
        <p>
          Email <a href={MAILTO}>{SERVICES_EMAIL}</a> with a short description of what you need, or order through Fiverr. Questions about the free guides, corrections, and site feedback go to the <Link href="/contact">contact page</Link> instead.
        </p>
        <Contact />
        <p className="meta" style={{ marginTop: "1.5rem" }}>
          Paid services are separate from the free guides. Guides are written under the <Link href="/editorial-policy">editorial policy</Link> and do not promote these services.
        </p>
      </div>
    </Interior>
  );
}

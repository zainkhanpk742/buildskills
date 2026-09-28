export const websiteGuides = [
  {
    slug: "websites/what-is-a-website",
    area: "Websites",
    title: "What is a website?",
    summary: "A website is a collection of connected web pages and resources published under a web address so people can access information or functionality through a browser.",
    sections: [
      {
        heading: "The simple definition",
        body: [
          "A website is a collection of web pages and related resources that people can access through a web browser. A page is usually identified by a URL, and pages on the same site are connected with links.",
          "A website can be simple, such as a few pages describing a business, or complex, such as a service that lets people create accounts, search data, buy products, or manage work."
        ]
      },
      {
        heading: "What a website contains",
        body: [
          "The visible experience is built from several layers. HTML provides the structure and content. CSS controls presentation and layout. JavaScript can add behavior and interactivity. Images, video, fonts, documents, and other assets support the page.",
          "A website also depends on infrastructure outside the visible page: a domain name gives people a human-readable address, while hosting or another server environment makes the site's files and application available over the internet."
        ]
      },
      {
        heading: "Website, web page, and web app",
        body: [
          "A web page is one document. A website is a connected collection of pages and resources. A web application is a website or web-based system whose main purpose is interactive work, such as managing records, submitting orders, or using an account.",
          "The boundaries are not absolute. A business website can contain interactive tools, and a web application can have informational pages. The important distinction is the job the product needs to perform."
        ]
      },
      {
        heading: "What to decide before building",
        body: [
          "Start with the visitor and the job. Decide what the site needs to help people understand, do, or buy. Then plan the pages, content, navigation, and technical approach around that job.",
          "A smaller site with clear information is usually a better starting point than a large site filled with pages that have no distinct purpose."
        ],
        bullets: [
          "Who is the site for?",
          "What should a visitor understand or do?",
          "Which pages are actually necessary?",
          "Who will maintain the content after launch?"
        ]
      }
    ],
    sources: [
      { label: "MDN: Browsing the web", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web" },
      { label: "MDN: How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" }
    ],
    related: [
      { href: "/learn/websites/how-websites-work", label: "How do websites work?" },
      { href: "/learn/websites/domain-vs-hosting", label: "What is the difference between a domain and hosting?" },
      { href: "/learn/websites/website-vs-web-app", label: "What is the difference between a website and a web app?" }
    ],
    next: { href: "/learn/websites/how-websites-work", label: "How do websites work?" }
  },
  {
    slug: "websites/how-websites-work",
    area: "Websites",
    title: "How do websites work?",
    summary: "A browser uses a URL to find a server, requests resources over HTTP, and then assembles the returned HTML, CSS, JavaScript, and assets into a page.",
    sections: [
      {
        heading: "From a URL to a page",
        body: [
          "When you open a web address, the browser needs to locate the server responsible for that domain. DNS translates the human-readable domain name into an IP address so the browser can connect to the right destination.",
          "The browser then sends an HTTP request for a resource, commonly the page's HTML. The server responds with the requested resource and status information. The browser may then make additional requests for stylesheets, scripts, images, fonts, and other files."
        ]
      },
      {
        heading: "What the browser does",
        body: [
          "The browser parses the HTML into a document structure, loads the styles and scripts it needs, and renders the result for the user. JavaScript can change the page or request additional data after the initial document has loaded.",
          "This is why a website is more than a single file. The browser is assembling an experience from multiple resources and instructions."
        ]
      },
      {
        heading: "Where hosting fits",
        body: [
          "A web server or hosting environment stores or generates the resources that the browser requests. For a simple static site, the server can return prepared files. A dynamic application may use server-side code and databases to generate or retrieve data before responding."
        ]
      },
      {
        heading: "The practical model",
        body: [
          "For beginners, remember the flow: domain name → DNS lookup → server connection → HTTP request → response → browser rendering. You do not need to understand every networking detail before building a useful site, but this model explains many common problems."
        ]
      }
    ],
    sources: [
      { label: "MDN: How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" },
      { label: "MDN: How browsers load websites", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites" },
      { label: "MDN: What is a web server?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server" }
    ],
    related: [
      { href: "/learn/websites/what-is-a-website", label: "What is a website?" },
      { href: "/learn/websites/html-css-javascript", label: "What are HTML, CSS, and JavaScript?" },
      { href: "/learn/websites/publish-a-website", label: "How do I publish a website?" }
    ],
    next: { href: "/learn/websites/domain-vs-hosting", label: "Domain vs hosting" }
  },
  {
    slug: "websites/domain-vs-hosting",
    area: "Websites",
    title: "What is the difference between a domain and web hosting?",
    summary: "A domain is the human-readable address people use to reach a site; hosting is the server environment that delivers the site's files or application.",
    sections: [
      {
        heading: "What is a domain?",
        body: [
          "A domain name is the human-readable part of a web address, such as example.com. It gives people a memorable way to reach a service without needing to remember an IP address.",
          "Registering a domain does not create the website itself. It gives you control over that name for the registration period and lets you configure where the name points."
        ]
      },
      {
        heading: "What is hosting?",
        body: [
          "Web hosting is a service or server environment where website files, application code, and sometimes databases are stored or executed. When someone visits the domain, the hosting environment is responsible for responding to the request.",
          "Different projects need different hosting arrangements. A simple static site can use a very different setup from a web application that needs server-side code, a database, background jobs, or file storage."
        ]
      },
      {
        heading: "How they work together",
        body: [
          "Think of the domain as the address and hosting as the place where the website is delivered from. DNS connects the domain name to the infrastructure that should answer requests.",
          "They can be purchased from the same company or from different companies. Keeping them separate can be useful because changing hosting does not require changing the domain name."
        ]
      },
      {
        heading: "What you actually need",
        body: [
          "For a public website, you generally need a domain name and a hosting or deployment environment. You may also need email hosting, a database, a CDN, storage, or other services depending on what the site does."
        ]
      }
    ],
    sources: [
      { label: "MDN: How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" },
      { label: "MDN: Publishing your website", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website" }
    ],
    related: [
      { href: "/learn/websites/how-websites-work", label: "How do websites work?" },
      { href: "/learn/websites/publish-a-website", label: "How do I publish a website?" },
      { href: "/learn/websites/website-cost", label: "How much does a website cost?" }
    ],
    next: { href: "/learn/websites/html-css-javascript", label: "HTML, CSS, and JavaScript" }
  },
  {
    slug: "websites/html-css-javascript",
    area: "Websites",
    title: "What are HTML, CSS, and JavaScript?",
    summary: "HTML structures a web page, CSS controls its presentation, and JavaScript adds programmable behavior and interactivity.",
    sections: [
      {
        heading: "HTML: structure and meaning",
        body: [
          "HTML, or HyperText Markup Language, defines the structure and content of a web page. Headings, paragraphs, links, lists, images, forms, and other elements are represented in HTML.",
          "Good HTML is not just about making something appear on screen. Semantic elements communicate what the content means, which helps users, browsers, assistive technologies, and search engines understand the page."
        ]
      },
      {
        heading: "CSS: presentation and layout",
        body: [
          "CSS, or Cascading Style Sheets, controls how HTML is presented. It can define typography, spacing, colors, borders, layouts, responsive behavior, and visual states.",
          "CSS does not replace HTML content. It works on top of the document structure so the same content can adapt to different screen sizes and presentation needs."
        ]
      },
      {
        heading: "JavaScript: behavior",
        body: [
          "JavaScript is a programming language used to add behavior to web pages. It can respond to user actions, validate form input, update content, animate interfaces, request data, and power more complex application logic.",
          "Not every website needs a large JavaScript application. A simple informational site can do most of its job with HTML and CSS, adding JavaScript only where interaction provides a real benefit."
        ]
      },
      {
        heading: "How the three fit together",
        body: [
          "A useful mental model is: HTML describes what the page is, CSS describes how it should look and adapt, and JavaScript describes what it can do. Modern frameworks add additional layers, but these web technologies remain foundational."
        ]
      }
    ],
    sources: [
      { label: "MDN: Your first website", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" },
      { label: "MDN: Web standards", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core" },
      { label: "MDN: What is JavaScript?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript" }
    ],
    related: [
      { href: "/learn/websites/how-websites-work", label: "How do websites work?" },
      { href: "/learn/websites/responsive-web-design", label: "What is responsive web design?" },
      { href: "/learn/websites/how-to-build-a-website", label: "How do I build a website?" }
    ],
    next: { href: "/learn/websites/responsive-web-design", label: "Responsive web design" }
  },
  {
    slug: "websites/responsive-web-design",
    area: "Websites",
    title: "What is responsive web design?",
    summary: "Responsive web design makes a site adapt its layout and content to different screen sizes and device conditions.",
    sections: [
      {
        heading: "What responsive means",
        body: [
          "Responsive design is an approach to building layouts that work across different viewport sizes and resolutions. The goal is not to create a separate desktop site and mobile site, but to make the same experience adapt appropriately.",
          "A responsive page may change its columns, spacing, typography, navigation, and media treatment as the available space changes."
        ]
      },
      {
        heading: "How it is built",
        body: [
          "Modern responsive sites commonly use flexible layouts such as CSS Grid and Flexbox, relative sizing, responsive images, and media queries where different rules are needed at different viewport conditions.",
          "A mobile-first approach starts with a simple narrow-screen layout and progressively adds layout complexity when more space is available. It is one practical way to avoid treating mobile as an afterthought."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "People use websites on phones, tablets, laptops, and large screens. A page that requires horizontal scrolling or makes controls difficult to use creates unnecessary friction.",
          "Responsive design is also connected to accessibility and performance: readable text, usable controls, sensible image sizes, and layouts that do not force unnecessary downloads all improve the experience."
        ]
      },
      {
        heading: "What to test",
        body: [
          "Do not test only one phone and one desktop width. Resize the page, test real devices when possible, check navigation and forms, and look for content that becomes clipped, tiny, or difficult to interact with."
        ]
      }
    ],
    sources: [
      { label: "MDN: Responsive web design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
      { label: "MDN: Media queries", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries" }
    ],
    related: [
      { href: "/learn/websites/html-css-javascript", label: "What are HTML, CSS, and JavaScript?" },
      { href: "/learn/websites/website-structure", label: "How should I structure a website?" }
    ],
    next: { href: "/learn/websites/website-vs-web-app", label: "Website vs web app" }
  },
  {
    slug: "websites/website-vs-web-app",
    area: "Websites",
    title: "What is the difference between a website and a web app?",
    summary: "A website mainly communicates information or a service, while a web app is centered on interactive tasks, data, accounts, or workflows.",
    sections: [
      {
        heading: "The practical difference",
        body: [
          "The terms overlap, so the useful distinction is purpose. An informational website helps people understand something, find a business, read content, contact an organization, or complete a relatively simple public action.",
          "A web application is designed around interactive work. Users may sign in, create records, search or edit data, manage a workflow, collaborate, or receive personalized results."
        ]
      },
      {
        heading: "Examples",
        body: [
          "A company homepage, service site, documentation site, or learning library can be a website. A customer portal, inventory system, project dashboard, booking system, or online editor is more clearly a web application.",
          "A single product can contain both. A public marketing website can explain the product while the application handles the user's private workflow."
        ]
      },
      {
        heading: "Which should you build?",
        body: [
          "Start with the job, not the technology. If visitors mainly need information and a clear way to contact or buy from you, start with a website. If they need repeated, stateful, data-driven work, a web application may be appropriate.",
          "Many projects should begin with the smallest version that proves the workflow. You can add application features later if real users need them."
        ]
      }
    ],
    sources: [
      { label: "MDN: Browsing the web", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web" },
      { label: "MDN: What is a web server?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server" }
    ],
    related: [
      { href: "/learn/websites/what-is-a-website", label: "What is a website?" },
      { href: "/learn/business-software/software-for-your-business", label: "How do I create software for my business?" },
      { href: "/services#web-applications", label: "Web application development" }
    ],
    next: { href: "/learn/websites/website-structure", label: "How should I structure a website?" }
  },
  {
    slug: "websites/website-structure",
    area: "Websites",
    title: "How should I structure a website?",
    summary: "Structure a website around what visitors need to understand and do, then make each page responsible for one clear purpose.",
    sections: [
      {
        heading: "Start with the user's tasks",
        body: [
          "Before choosing a navigation menu, list the questions and tasks your visitors have. A business visitor may need to understand what you offer, see proof, learn how the process works, and know how to contact you.",
          "Group related information into pages that each have a clear purpose. Do not create a page just because a competitor has one."
        ]
      },
      {
        heading: "A common business structure",
        body: [
          "A small business site often needs a homepage, service or product pages, an about or trust page, useful resources or answers, and a contact or conversion page. The exact structure depends on the business.",
          "For BuildSkills, learning pages and service pages have different jobs. Learning pages answer and teach. Service pages explain how work can be delivered. Linking them should help a visitor move between those purposes without creating duplicate copies of the same answer."
        ]
      },
      {
        heading: "Make navigation predictable",
        body: [
          "Use descriptive link text and keep important pages reachable from other findable pages. A visitor should be able to tell where a link leads before clicking it.",
          "Search engines also use links to discover pages and understand relationships between pages, so internal linking is part of both usability and SEO."
        ]
      },
      {
        heading: "One topic, one authoritative page",
        body: [
          "If two URLs answer the same question in substantially the same way, you create maintenance and indexing problems. Choose one canonical learning page for the topic and let question indexes, category pages, and related links point to it."
        ]
      }
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central: Developer guide", url: "https://developers.google.com/search/docs/fundamentals/get-started-developers" }
    ],
    related: [
      { href: "/learn/websites/what-is-a-website", label: "What is a website?" },
      { href: "/learn/websites/how-to-build-a-website", label: "How do I build a website?" },
      { href: "/learn/websites/publish-a-website", label: "How do I publish a website?" }
    ],
    next: { href: "/learn/websites/business-website", label: "How do I build a business website?" }
  },
  {
    slug: "websites/business-website",
    area: "Websites",
    title: "How do I build a business website?",
    summary: "Start with the business goal, audience, offer, proof, and next action; then build only the pages needed to support that journey.",
    sections: [
      {
        heading: "Define the job",
        body: [
          "A business website should do something measurable for the business: explain an offer, generate enquiries, support sales, provide information, accept bookings, or help existing customers.",
          "Write the primary job in one sentence. Then identify the audience and the questions that stop them from taking the next step."
        ]
      },
      {
        heading: "Build the information architecture",
        body: [
          "Give important offers their own pages when they deserve a complete explanation. Keep navigation understandable and make contact or conversion actions easy to find.",
          "Use real evidence where available: examples of work, process details, qualifications, documentation, product information, or customer-facing facts you can substantiate. Do not invent testimonials, clients, statistics, or outcomes."
        ]
      },
      {
        heading: "Write before decorating",
        body: [
          "The page should explain what the business does, who it helps, why the offer is relevant, what the process looks like, and what the visitor can do next. Design should make that information easier to understand rather than hide it."
        ]
      },
      {
        heading: "Make it discoverable",
        body: [
          "Give each important page a clear title and heading, use descriptive internal links, make the pages crawlable, and keep the content useful and original. Search visibility comes from a combination of discoverability, relevance, technical accessibility, and the usefulness of the page."
        ]
      }
    ],
    sources: [
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }
    ],
    related: [
      { href: "/learn/websites/website-structure", label: "How should I structure a website?" },
      { href: "/learn/websites/how-to-build-a-website", label: "How do I build a website?" },
      { href: "/learn/seo/what-is-seo", label: "What is SEO?" }
    ],
    next: { href: "/learn/websites/website-cost", label: "How much does a website cost?" }
  },
  {
    slug: "websites/website-cost",
    area: "Websites",
    title: "How much does a website cost?",
    summary: "There is no single correct website price. Cost depends on scope, design, content, functionality, integrations, hosting, and ongoing maintenance.",
    sections: [
      {
        heading: "Why prices vary",
        body: [
          "A simple informational website and a custom web application are both built for the web, but they are different projects. The amount of content, number of page types, design work, integrations, custom functionality, testing, and ongoing support can change the cost substantially.",
          "The technology also affects the work, but technology should follow the requirements. A framework name alone does not tell you what a project should cost."
        ]
      },
      {
        heading: "The main cost drivers",
        body: [
          "Common drivers include strategy and planning, copy and content production, visual design, development, CMS or application setup, integrations, data migration, testing, accessibility work, performance work, hosting, domain registration, and maintenance."
        ],
        bullets: [
          "Number and complexity of pages",
          "Custom design versus a template or existing system",
          "Forms, accounts, payments, search, dashboards, or other functionality",
          "Third-party integrations and APIs",
          "Content creation, migration, and ongoing updates",
          "Maintenance, hosting, security, and support"
        ]
      },
      {
        heading: "How to compare quotes",
        body: [
          "Do not compare only the headline price. Compare what is included, what is excluded, who supplies content, how revisions work, what happens after launch, and whether you receive the files and access you need.",
          "A useful quote describes the scope clearly enough that both sides can tell what is finished."
        ]
      },
      {
        heading: "A better first question",
        body: [
          "Instead of asking for a price before describing the project, describe the business goal, required pages, important functionality, existing assets, and deadline. A realistic scope can then be turned into a more meaningful estimate."
        ]
      }
    ],
    related: [
      { href: "/learn/websites/business-website", label: "How do I build a business website?" },
      { href: "/learn/websites/domain-vs-hosting", label: "Domain vs hosting" },
      { href: "/services#website-development", label: "Website development service" }
    ],
    next: { href: "/learn/websites/publish-a-website", label: "How do I publish a website?" }
  },
  {
    slug: "websites/publish-a-website",
    area: "Websites",
    title: "How do I publish a website?",
    summary: "To publish a website, put its files or application on a public hosting environment, connect a domain if you have one, and verify the live site.",
    sections: [
      {
        heading: "Prepare the site",
        body: [
          "Before publishing, check the important pages, links, forms, images, mobile layout, titles, and basic accessibility. Remove development-only content and make sure the site does not expose information that should remain private."
        ]
      },
      {
        heading: "Choose a deployment method",
        body: [
          "A static site can be deployed to a static hosting platform. A server-rendered or database-backed application needs an environment capable of running its application code and connecting to its required services.",
          "The right platform depends on the project's technical requirements, expected traffic, deployment workflow, and maintenance needs."
        ]
      },
      {
        heading: "Connect the domain",
        body: [
          "If you own a domain, configure its DNS records according to the hosting provider's instructions. DNS changes can take time to propagate. Keep HTTPS enabled so visitors connect securely."
        ]
      },
      {
        heading: "Verify after launch",
        body: [
          "Open the production URL on more than one device and check the critical paths. Test forms, navigation, redirects, images, metadata, and error pages. If the site should appear in search, make sure important pages are publicly accessible and crawlable."
        ],
        bullets: [
          "Production URL loads correctly",
          "HTTPS works",
          "Important links and forms work",
          "Mobile layout is usable",
          "No accidental noindex or access restrictions",
          "Sitemap and Search Console are configured when appropriate"
        ]
      }
    ],
    sources: [
      { label: "MDN: Publishing your website", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website" },
      { label: "Google Search Central: Build and submit a sitemap", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" }
    ],
    related: [
      { href: "/learn/websites/domain-vs-hosting", label: "Domain vs hosting" },
      { href: "/learn/websites/how-websites-work", label: "How do websites work?" },
      { href: "/learn/seo/how-to-get-website-on-google", label: "How do I get my website on Google?" }
    ],
    next: { href: "/learn/seo/how-to-get-website-on-google", label: "Get a website on Google" }
  },
  {
    slug: "websites/website-maintenance",
    area: "Websites",
    title: "What does website maintenance include?",
    summary: "Website maintenance is the ongoing work of keeping content, software, links, security, performance, backups, and integrations reliable after launch.",
    sections: [
      {
        heading: "Maintenance is more than editing text",
        body: [
          "A website can remain online while becoming outdated or unreliable. Maintenance can include updating content, checking forms and links, updating dependencies, reviewing security, monitoring errors, maintaining backups, and checking performance.",
          "The exact responsibilities depend on the technology. A static site may need relatively little operational maintenance. A database-backed application may need regular updates, monitoring, backups, and data management."
        ]
      },
      {
        heading: "Content maintenance",
        body: [
          "Review pages when information changes. Remove outdated claims, update instructions, fix broken links, and improve pages when real user questions reveal gaps. Do not change dates just to make an unchanged page appear new."
        ]
      },
      {
        heading: "Technical maintenance",
        body: [
          "Keep the software stack supported, review dependencies, monitor errors, verify backups, and test important workflows after significant changes. Performance should also be monitored because slow or unstable experiences affect users."
        ]
      },
      {
        heading: "SEO maintenance",
        body: [
          "Search visibility is not a one-time switch. Keep important pages crawlable, maintain useful internal links, update content when facts change, and monitor Search Console for indexing or performance issues."
        ]
      }
    ],
    sources: [
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "MDN: Web performance", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance" }
    ],
    related: [
      { href: "/learn/websites/publish-a-website", label: "How do I publish a website?" },
      { href: "/learn/seo/what-is-seo", label: "What is SEO?" },
      { href: "/services#website-development", label: "Website development service" }
    ],
    next: { href: "/learn/websites/how-to-build-a-website", label: "How do I build a website?" }
  }
] as const;

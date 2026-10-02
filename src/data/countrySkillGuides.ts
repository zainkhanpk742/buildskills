import type { Area, Guide } from "@/data/site";

const checked = "2026-10-03";

/**
 * Country pages in the same format as the USA and India pages. They are full
 * learning areas (own hub URL, sitemap entry, search entry) but `unlisted`, so
 * the homepage and library area grids and counts stay unchanged. They are
 * reached from the other country pages and the high-paid skills hub.
 */
export const pakistanSkillsArea: Area = {
  slug: "high-demand-skills-pakistan",
  title: "In-Demand Skills in Pakistan",
  question: "What skills are in demand in Pakistan?",
  summary: "Ten skills that pay well in Pakistan, with official labour data, IT export figures, and sourced pay in rupees.",
  description:
    "High-paying skills in Pakistan for 2026. IT and IT-enabled services exports reached a record US$4.6 billion in FY2025-26, and most of that work is software, data, design, and digital services.",
  unlisted: true,
};

export const ukSkillsArea: Area = {
  slug: "high-demand-skills-uk",
  title: "In-Demand Skills in the UK",
  question: "What skills are in demand in the UK?",
  summary: "Ten skills UK employers hire for, with the Home Office going rates that are based on official ONS pay data.",
  description:
    "In-demand skills in the UK for 2026, with going rates in pounds from the Home Office occupation list (updated 3 August 2026) and the ONS median wage for comparison.",
  unlisted: true,
};

export const uaeSkillsArea: Area = {
  slug: "high-demand-skills-uae",
  title: "In-Demand Skills in the UAE",
  question: "What skills are in demand in the UAE?",
  summary: "Ten skills UAE employers pay well for, with 2026 monthly salary ranges in dirhams and the official visa salary levels.",
  description:
    "Highest-paying skills in the UAE for 2026, with monthly salary ranges in AED from a 2026 recruiter salary guide and the official Golden and Green visa salary thresholds.",
  unlisted: true,
};

const pkPayNote =
  "Pakistan does not publish an official salary table for each job. The figures here are the official national averages, or a named salary database with its date. A real offer depends on the city, the company, and what you can show.";

const ukPayNote =
  "This is the Home Office going rate for the occupation code, which is based on the ONS median for that occupation and a 37.5-hour week (Appendix Skilled Occupations, updated 3 August 2026). It is a middle figure, not a starting salary. London usually pays more and many first jobs pay less.";

const uaePayNote =
  "The range is monthly gross pay in AED (basic, housing, and transport) from Charterhouse’s UAE Salary Guide 2026, which is based on the recruiter’s own placements. It is one recruiter’s data, not an official statistic, and it reflects people who were hired, usually with experience.";

export const countrySkillGuides: Guide[] = [
  {
    slug: "high-demand-skills-pakistan/high-demand-skills-in-pakistan",
    area: "In-Demand Skills in Pakistan",
    title: "What skills are in demand in Pakistan?",
    h1: "High-paying skills in Pakistan in 2026",
    summary:
      "High-paying skills in Pakistan for 2026: software, AI, data, cloud, security, web, marketing, design, and video. Official labour and export data, and pay in rupees only where a dated source exists.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 16,
    topics: ["high paying skills in Pakistan", "in demand skills in Pakistan 2026", "best skills to learn in Pakistan", "highest paying jobs in Pakistan"],
    paragraphs: [],
    sections: [
      {
        heading: "What pays well in Pakistan right now",
        paragraphs: [
          "Pakistan’s strongest earning skills are the ones that can be sold to clients abroad. State Bank of Pakistan data reported by Dawn shows telecommunications, computer and information services exports reached a record US$4.6 billion in FY2025-26 (July 2025 to June 2026), up about 21 percent from US$3.8 billion the year before. The Pakistan Freelancers Association said freelancers earned more than US$1 billion of that.",
          "For local context, the Pakistan Bureau of Statistics Labour Force Survey 2024-25 (released November 2025) put the labour force at 83.1 million, unemployment at 7.1 percent, and average monthly wages at about Rs 39,000. The minimum wage for an unskilled worker is Rs 40,700 a month in Islamabad and Rs 43,000 in Sindh from 1 July 2026, and Rs 40,000 in Punjab and Khyber Pakhtunkhwa under their last notification. A skill “pays well” here when it clearly beats those numbers.",
        ],
      },
      {
        heading: "1. Software development",
        paragraphs: [
          "Software houses in Lahore, Karachi, and Islamabad, and clients abroad, hire developers for web, mobile, and backend work. PayScale’s Pakistan data (updated July 2026, 490 profiles) puts the median base salary for a software engineer at about Rs 989,000 a year, roughly Rs 82,000 a month. Its entry-level average (under one year) was about Rs 715,000 a year in total pay, and Rs 1.05 million for one to four years of experience.",
          "One language, one finished project, and a Git history are the start. Remote and export work can pay far more than a local salary, but it is paid per contract and has to be won. " + pkPayNote,
        ],
      },
      {
        heading: "2. AI, machine learning, and automation",
        paragraphs: [
          "Pakistani companies and freelancers now sell chatbots, document automation, and data models to foreign clients. There is no official Pakistani salary figure for “AI engineer”. Applied AI jobs are usually hired as software or data roles, so the software figures above are the honest starting point.",
          "Learn Python and data first, then build one automation for a real task and write down where it fails. Clients pay for a working result, not for the word AI.",
        ],
      },
      {
        heading: "3. Data analysis",
        paragraphs: [
          "Banks, telecoms, retailers, and export firms hire analysts who can answer questions with spreadsheets and SQL. It is one of the fastest skills to start because the tools are free and the first project can use public data.",
          "Publish one analysis that shows the source of every number. " + pkPayNote,
        ],
      },
      {
        heading: "4. Cloud and DevOps",
        paragraphs: [
          "Software exporters need people who can deploy, monitor, and control the cost of systems on AWS, Azure, or Google Cloud. It usually comes after some development or support experience, and it is valued because mistakes are expensive.",
          "Use a free tier, deploy one small app, set a billing alert, and document what you configured.",
        ],
      },
      {
        heading: "5. Cybersecurity",
        paragraphs: [
          "Banks, telecoms, government bodies, and software exporters hire security analysts. Demand is real, but job titles vary widely, from monitoring to audit to testing. Networking basics come first.",
          "Practise only on legal labs and your own systems. Attacking a site you do not own is illegal, not a portfolio.",
        ],
      },
      {
        heading: "6. Web development and WordPress",
        paragraphs: [
          "Local businesses and foreign clients both need websites that load fast, work on phones, and explain the offer. WordPress, Shopify, and custom builds are all sold from Pakistan through freelance platforms and agencies.",
          "Build one real site with a working contact form and good speed. A freelance site is priced per project; quote the work, not a salary.",
        ],
      },
      {
        heading: "7. Digital marketing and SEO",
        paragraphs: [
          "Brands in Pakistan and abroad pay for search, social ads, and content that brings customers. The skill is measurable: traffic, leads, and cost per lead. That makes it easier to prove than many other skills.",
          "Run one small campaign or grow one page, and report what you did, what it cost, and what happened. Likes alone are not a result.",
        ],
      },
      {
        heading: "8. Graphic and UI design",
        paragraphs: [
          "Logos, social posts, packaging, app screens, and pitch decks are sold locally and abroad. Interface (UI and UX) design for software companies usually pays more than one-off graphics.",
          "Three pieces for a real brief, with the reason for each choice, beat thirty random posters.",
        ],
      },
      {
        heading: "9. Video editing",
        paragraphs: [
          "YouTube channels, agencies, and brands worldwide hire editors from Pakistan for long videos and short vertical clips. Pay is usually per video, and it rises with speed, storytelling, and reliability.",
          "Edit one clear video with captions and licensed music, and keep a short reel of your best work.",
        ],
      },
      {
        heading: "10. Freelancing and client communication",
        paragraphs: [
          "This is the skill that turns the other nine into income. Writing a clear proposal, agreeing scope, meeting deadlines, and getting paid safely decide whether a skilled person earns anything abroad.",
          "Learn how each platform charges fees, how you will receive money in Pakistan, and how to say no to work outside the agreed scope.",
        ],
      },
      {
        heading: "Free ways to learn in Pakistan",
        paragraphs: [
          "DigiSkills.pk is a free government programme (Ministry of IT and Telecom and Ignite, run by Virtual University) with online courses in freelancing, marketing, design, WordPress, and other digital skills. Batch 4 of DigiSkills 3.0 started on 3 August 2026 with 300,000 seats, and the programme said Batch 5 enrolment was expected in November 2026. You can register in advance and choose up to two courses per batch.",
          "Global free options, such as CS50, freeCodeCamp, Google Skillshop, and Microsoft Learn, are listed in the BuildSkills guide to free online courses with certificates, linked below.",
        ],
      },
    ],
    faqs: [
      { question: "What is the highest paying skill in Pakistan?", answer: "Software, cloud, data, and AI work sold to foreign clients usually pays the most, because it is paid from abroad. PayScale’s July 2026 data puts a software engineer’s median base salary at about Rs 989,000 a year in Pakistan; senior and export roles can be much higher." },
      { question: "Which skill is best to learn in Pakistan in 2026?", answer: "The one you can practise this month and show: web development, programming, data analysis, digital marketing, design, or video editing. IT exports reached a record US$4.6 billion in FY2025-26, so skills you can sell abroad have the most room." },
      { question: "Is Rs 1 lakh a month realistic for a beginner?", answer: "Not as a typical first local salary. PayScale’s entry-level software average was about Rs 715,000 a year in total pay, or about Rs 60,000 a month. Some freelancers and remote workers earn more, but anyone selling a guarantee for a fee is making a sales pitch." },
      { question: "What is the minimum wage in Pakistan in 2026?", answer: "From 1 July 2026, Rs 40,700 a month for an unskilled worker in Islamabad and Rs 43,000 in Sindh. Punjab and Khyber Pakhtunkhwa were at Rs 40,000 under their last notification, as of September 2026." },
      { question: "Are there free courses in Pakistan?", answer: "Yes. DigiSkills.pk is free and government funded, and runs in batches. Global free courses such as CS50 and freeCodeCamp also work in Pakistan." },
    ],
    sources: [
      { label: "Dawn: IT exports hit record $4.6bn (SBP data, FY2025-26), 18 July 2026", url: "https://www.dawn.com/news/2016378" },
      { label: "Business Recorder: IT exports surpass $4bn, freelancer earnings (PAFLA)", url: "https://www.brecorder.com/news/40425963" },
      { label: "Pakistan Bureau of Statistics: Labour Force Survey 2024-25 annual report", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/LFS-2024-25-Annual-Report.pdf" },
      { label: "Ministry of Planning: LFS 2024-25 launch statement, 25 November 2025", url: "https://pc.gov.pk/web/press/get_press/1655" },
      { label: "ICT minimum wage notification 2026-27, 19 August 2026 (via Employers’ Federation of Pakistan)", url: "https://efp.org.pk/wp-content/uploads/2026/08/ICT-Minimum-Wage-2026-27.pdf" },
      { label: "Sindh minimum wage notification 2026-27, 17 August 2026 (via Employers’ Federation of Pakistan)", url: "https://efp.org.pk/wp-content/uploads/2026/08/SindhWageNotification2026.pdf" },
      { label: "PayScale: Software Engineer salary in Pakistan (updated July 2026)", url: "https://www.payscale.com/research/PK/Job=Software_Engineer/Salary" },
      { label: "DigiSkills.pk: free online training programme", url: "https://digiskills.pk/" },
    ],
    next: { href: "/learn/high-demand-skills-uae", label: "In-demand skills in the UAE" },
  },
  {
    slug: "high-demand-skills-uk/high-demand-skills-in-the-uk",
    area: "In-Demand Skills in the UK",
    title: "What skills are in demand in the UK?",
    h1: "In-demand skills in the UK in 2026",
    summary:
      "In-demand skills in the UK for 2026: software, data, cyber security, DevOps, project management, design, and marketing, with official going rates in pounds and the ONS median wage for comparison.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 16,
    topics: ["in demand skills UK", "in demand skills in the UK 2026", "highest paying skills UK", "skills shortage UK"],
    paragraphs: [],
    sections: [
      {
        heading: "How to read UK pay for a skill",
        paragraphs: [
          "The Office for National Statistics says median gross annual earnings for full-time employees were £39,039 in April 2025, up 4.3 percent on the year (Annual Survey of Hours and Earnings, published 23 October 2025). The skills below all have occupation going rates above that.",
          "The figures for each skill come from Table 1 of the Home Office’s Appendix Skilled Occupations, updated 3 August 2026. Each going rate is based on the ONS median for that occupation code. The same rules say most Skilled Worker visa jobs must pay at least £41,700 a year or the going rate, whichever is higher. This page is for learning the skill. It is not immigration advice.",
        ],
      },
      {
        heading: "1. Software development",
        paragraphs: [
          "Programmers and software development professionals (code 2134) have a going rate of £54,700 a year. Employers hire across fintech, the public sector, retail, and games, and they ask for a language, a portfolio, and the ability to work in an existing codebase.",
          "Build one application a stranger can use, then learn to read other people’s code and tests. " + ukPayNote,
        ],
      },
      {
        heading: "2. Data engineering and IT architecture",
        paragraphs: [
          "IT business analysts, architects and systems designers (code 2133), which includes data engineers and data architects, have a going rate of £54,900. These roles design how systems and data fit together, so employers usually want some experience first.",
          "Learn SQL and data modelling, then build a small pipeline that loads, cleans, and reports on public data. " + ukPayNote,
        ],
      },
      {
        heading: "3. Data science and statistics",
        paragraphs: [
          "Statistical data scientists sit in the actuaries, economists and statisticians group (code 2433), with a going rate of £55,100. Data analysts (code 3544) are listed with a going rate of £34,900 in a separate table for people already on the Skilled Worker route. Analysis is a common first step before data science.",
          "Learn SQL, a spreadsheet, and enough Python to clean a file. Publish one analysis where the conclusion follows the numbers.",
        ],
      },
      {
        heading: "4. Cyber security",
        paragraphs: [
          "Cyber security professionals (code 2135) have a going rate of £48,500. Banks, government, and every company that holds customer data hire for monitoring, incident response, and secure development.",
          "Start with networking and how systems fail, then keep notes on a home lab you built yourself. " + ukPayNote,
        ],
      },
      {
        heading: "5. DevOps and cloud",
        paragraphs: [
          "DevOps engineers and IT consultants are in code 2139, with a going rate of £52,300. Teams moving to cloud services need people who can automate deployments, monitor systems, and control cost.",
          "Use one cloud provider’s free tier, deploy a small app with a pipeline, and write down what you configured.",
        ],
      },
      {
        heading: "6. IT project management",
        paragraphs: [
          "IT project managers (code 2131) have a going rate of £58,200, and IT managers (code 2132) £55,000. These are rarely first jobs. People usually move into them from development, support, or business analysis.",
          "Practise by planning one real project: scope, risks, timeline, and what you would cut if time ran out.",
        ],
      },
      {
        heading: "7. UX, UI, and web design",
        paragraphs: [
          "Web design professionals (code 2141), which includes UI and UX designers and researchers, have a going rate of £43,800. Employers want designers who can test with users and ship an interface, not only make mock-ups.",
          "Redesign one confusing page, test it with five people, and explain each change.",
        ],
      },
      {
        heading: "8. Networking",
        paragraphs: [
          "IT network professionals (code 2137) have a going rate of £45,600. Every office, school, and hospital depends on networks, and network skills are a common route into cloud and security work.",
          "Learn how a request moves across the internet and how a small network is secured. " + ukPayNote,
        ],
      },
      {
        heading: "9. Software testing and quality",
        paragraphs: [
          "IT quality and testing professionals (code 2136) have a going rate of £41,200. Testing is a realistic way into software teams, especially with automation skills.",
          "Write test cases for an app you use, then automate a few of them with a free framework.",
        ],
      },
      {
        heading: "10. Digital marketing and advertising",
        paragraphs: [
          "Advertising account managers and creative directors (code 2494) have a going rate of £46,000, and marketing, sales and advertising directors (code 1132) £87,300. Junior marketing jobs are often below these rates; the skill pays as you prove results.",
          "Run one small campaign or grow one page, then report the spend, the result, and what you would change.",
        ],
      },
      {
        heading: "Free ways to learn in the UK",
        paragraphs: [
          "Skills Bootcamps are free, flexible courses of up to 16 weeks in England, including digital courses such as software development, data engineering, and marketing, with an offer of a job interview for eligible people at the end. You need to be 19 or over, live in England, and have the right to work in the UK; some courses have extra conditions. Search for one on the National Careers Service.",
          "Global free options, such as CS50, freeCodeCamp, Google Skillshop, and Microsoft Learn, are listed in the BuildSkills guide to free online courses with certificates, linked below.",
        ],
      },
    ],
    faqs: [
      { question: "What skills are most in demand in the UK?", answer: "Software development, data engineering, data science, cyber security, DevOps and cloud, and IT project management are all on the Home Office list of eligible occupations with going rates between about £48,500 and £58,200 a year (updated 3 August 2026)." },
      { question: "What is the average salary in the UK?", answer: "The ONS says median gross annual earnings for full-time employees were £39,039 in April 2025, and median weekly earnings were £766.60." },
      { question: "What is the highest paying IT skill in the UK?", answer: "Among the occupation going rates, IT directors (code 1137) are highest at £86,000. Among hands-on roles, IT project managers are at £58,200 and statistical data scientists at £55,100." },
      { question: "Are there free courses in the UK?", answer: "Yes. Skills Bootcamps in England are free for eligible adults aged 19 or over, last up to 16 weeks, and include digital subjects. Global free courses such as CS50 and freeCodeCamp also work." },
      { question: "Can I move to the UK with these skills?", answer: "A Skilled Worker visa needs a licensed sponsor, an eligible occupation, and usually at least £41,700 or the going rate, whichever is higher. Check GOV.UK for the current rules. This page is not immigration advice." },
    ],
    sources: [
      { label: "Office for National Statistics: Employee earnings in the UK, 2025", url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/bulletins/annualsurveyofhoursandearnings/2025" },
      { label: "GOV.UK: Immigration Rules Appendix Skilled Occupations (updated 3 August 2026)", url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-occupations" },
      { label: "GOV.UK: Skilled Worker visa, your job and salary", url: "https://www.gov.uk/skilled-worker-visa/your-job" },
      { label: "Department for Education: Skills Bootcamps", url: "https://www.skillsforcareers.education.gov.uk/pages/training-choice/skills-bootcamp" },
      { label: "GOV.UK: Skills Bootcamps funding allocations 2026 to 2027", url: "https://www.gov.uk/government/publications/skills-bootcamps-funding-allocations/skills-bootcamps-funding-allocations-2026-to-2027" },
    ],
    next: { href: "/learn/high-demand-skills-usa", label: "In-demand skills in the USA" },
  },
  {
    slug: "high-demand-skills-uae/high-demand-skills-in-the-uae",
    area: "In-Demand Skills in the UAE",
    title: "What skills are in demand in the UAE?",
    h1: "Highest-paying skills in the UAE in 2026",
    summary:
      "Highest-paying skills in the UAE for 2026: software, AI, data, cyber security, cloud, project management, marketing, and design, with 2026 monthly salary ranges in AED and the official visa salary levels.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 16,
    topics: ["highest paying skills in UAE", "in demand skills in UAE 2026", "best skills for jobs in Dubai", "UAE salary guide 2026"],
    paragraphs: [],
    sections: [
      {
        heading: "How UAE pay works",
        paragraphs: [
          "UAE salaries are usually quoted per month and include allowances. The ranges below come from Charterhouse’s UAE Salary Guide 2026, which gives monthly gross pay (basic, housing, and transport) based on the recruiter’s placements in the past year. They are in UAE dirhams (AED).",
          "Official visa rules show which pay levels the government treats as skilled. The Golden visa for skilled professionals needs a job classified at level 1 or 2 by the Ministry of Human Resources and Emiratisation (MOHRE), a bachelor’s degree, and at least AED 30,000 a month. The five-year Green visa for skilled employees needs MOHRE level 1, 2, or 3, a bachelor’s degree, and at least AED 15,000 a month (Abu Dhabi Department of Economic Development, checked 3 October 2026).",
        ],
      },
      {
        heading: "1. Software engineering",
        paragraphs: [
          "Software engineers are listed at AED 20,000 to 28,000 a month, senior software engineers at AED 25,000 to 37,000, and full-stack developers at AED 25,000 to 35,000. Mobile developers range from AED 20,000 to 45,000. Banks, government digital services, e-commerce, and start-ups all hire.",
          "Build one product a stranger can use and be ready to explain your design choices. " + uaePayNote,
        ],
      },
      {
        heading: "2. AI engineering",
        paragraphs: [
          "AI engineers are listed at AED 25,000 to 35,000 a month, and senior AI engineers at AED 35,000 to 45,000. Employers want people who can put models into real products, not only demos.",
          "Learn Python and data, then build one AI feature on a public dataset and document its limits.",
        ],
      },
      {
        heading: "3. Data engineering and analysis",
        paragraphs: [
          "Data engineers are listed at AED 25,000 to 35,000 a month and data analysts at AED 15,000 to 25,000. Analysis is the easier entry; engineering pays more because it keeps data reliable for everyone else.",
          "Learn SQL and one dashboard tool, and publish one analysis with the source of every number. " + uaePayNote,
        ],
      },
      {
        heading: "4. Cyber security",
        paragraphs: [
          "Cyber security consultants are listed at AED 25,000 to 40,000 a month, network security engineers at AED 20,000 to 30,000, and cloud security architects at AED 25,000 to 45,000. Banks, government, and critical infrastructure lead the hiring.",
          "Start with networking and a home lab, then add a recognised certificate once you can explain your lab work.",
        ],
      },
      {
        heading: "5. Cloud and DevOps",
        paragraphs: [
          "DevOps engineers are listed at AED 30,000 to 45,000 a month and cloud engineers at AED 15,000 to 30,000. DevOps pays more because it combines development, infrastructure, and automation.",
          "Deploy one small app on a free cloud tier with an automated pipeline, and track its cost.",
        ],
      },
      {
        heading: "6. IT project management and business analysis",
        paragraphs: [
          "IT project managers are listed at AED 25,000 to 55,000 a month and business analysts at AED 20,000 to 25,000. Large transformation programmes in government and banking keep these roles in demand.",
          "Plan one real project with scope, risks, and a timeline, or document one business process and the system it needs.",
        ],
      },
      {
        heading: "7. Digital marketing",
        paragraphs: [
          "Charterhouse lists digital marketing managers at AED 25,000 to 40,000 a month, content managers at AED 20,000 to 30,000, and social media managers at AED 18,000 to 30,000. Executive-level marketing and social media roles start lower, at AED 12,000 to 18,000.",
          "Show one campaign with its spend, result, and lesson. Content in both Arabic and English reaches more of the UAE market.",
        ],
      },
      {
        heading: "8. UX and UI design",
        paragraphs: [
          "UX/UI designers are listed at AED 15,000 to 30,000 a month. Government services, banks, and apps compete on easy digital journeys, so designers who test with users are valued.",
          "Redesign one confusing screen, test it with real users, and explain each change. " + uaePayNote,
        ],
      },
      {
        heading: "9. Software quality and testing",
        paragraphs: [
          "QA engineers are listed at AED 30,000 to 40,000 a month in the 2026 guide. Testing is a practical way into software teams, especially with automation skills.",
          "Write test cases for an app, then automate some of them with a free framework.",
        ],
      },
      {
        heading: "10. IT support and networks",
        paragraphs: [
          "IT support engineers are listed at AED 12,000 to 30,000 a month and network engineers at AED 20,000 to 55,000. Support is the most common entry point, and network skills lead into security and cloud.",
          "Keep a log of problems you solved and what you checked. That log is more useful than a job title.",
        ],
      },
      {
        heading: "Working for yourself and learning for free",
        paragraphs: [
          "The UAE also has a Green visa for freelancers. The Abu Dhabi Department of Economic Development lists a MOHRE freelance permit, a bachelor’s degree or specialised diploma, and self-employment income of at least AED 360,000 a year for the previous two years, or proof of financial solvency.",
          "Global free courses, such as CS50, freeCodeCamp, Google Skillshop, and Microsoft Learn, are listed in the BuildSkills guide to free online courses with certificates, linked below.",
        ],
      },
    ],
    faqs: [
      { question: "What is the highest paying skill in the UAE?", answer: "In Charterhouse’s UAE Salary Guide 2026, senior technology roles pay the most: senior AI engineers AED 35,000 to 45,000 a month, DevOps engineers AED 30,000 to 45,000, and IT project managers up to AED 55,000. Leadership roles pay more." },
      { question: "How much does a software engineer earn in Dubai?", answer: "The same 2026 guide lists software engineers at AED 20,000 to 28,000 a month and senior software engineers at AED 25,000 to 37,000, including basic pay, housing, and transport." },
      { question: "What salary do I need for a UAE Golden visa?", answer: "For the skilled professional route, at least AED 30,000 a month, with a job classified at MOHRE level 1 or 2 and a bachelor’s degree. The Green visa for skilled employees needs at least AED 15,000 a month. Check the official portals before applying." },
      { question: "Can I freelance in the UAE?", answer: "Yes, with a freelance permit. The Green visa for freelancers needs a MOHRE freelance permit, a degree or specialised diploma, and at least AED 360,000 a year from self-employment for the previous two years, or proof of financial solvency." },
      { question: "Are UAE salary guides accurate?", answer: "They are a useful guide, not a promise. Each recruiter uses its own placements. Compare more than one guide and real job posts, and ask what the offer includes." },
    ],
    sources: [
      { label: "Charterhouse UAE: Salary Guide 2026 (IT & Technology; Sales, Marketing & Events)", url: "https://www.charterhouseme.ae/salary-levels-2026" },
      { label: "Abu Dhabi Department of Economic Development: Golden visa for skilled professionals", url: "https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-golden-visa/for-specialists/for-skilled-professionals" },
      { label: "Abu Dhabi Department of Economic Development: Green visa for skilled employees", url: "https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-green-visa/for-skilled-employees" },
      { label: "Abu Dhabi Department of Economic Development: Green visa for freelancers", url: "https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-green-visa/for-freelancers" },
      { label: "UAE Government portal: Golden visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa" },
    ],
    next: { href: "/learn/high-demand-skills-uk", label: "In-demand skills in the UK" },
  },
];

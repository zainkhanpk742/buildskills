import type { Guide } from "@/data/site";

const checked = "2026-10-01";

export const highPaidSkillsArea = {
  slug: "high-paid-skills",
  title: "High-Paid Skills",
  question: "What are the highest-paid skills?",
  summary: "Ten skills that pay above the typical US wage, with the official median and how a beginner starts.",
  description:
    "Highest-paid skills in 2026, using US Bureau of Labor Statistics medians from May 2025. These are employee wages in the United States, not a promise for every country or every freelancer.",
};

export const usaSkillsArea = {
  slug: "high-demand-skills-usa",
  title: "In-Demand Skills in the USA",
  question: "What skills are in demand in the USA?",
  summary: "Ten computer and data skills US employers keep hiring, with official median pay.",
  description:
    "High-demand skills in the USA for 2026. The Bureau of Labor Statistics projects computer jobs to grow faster than average, with about 280,000 openings a year across the group.",
};

export const indiaSkillsArea = {
  slug: "high-demand-skills-india",
  title: "In-Demand Skills in India",
  question: "What skills are in demand in India?",
  summary: "Ten skills Indian employers hire for, with published salary bands and what a first job really pays.",
  description:
    "High-demand skills in India in 2026: software, AI, data, cloud, security, and the skills around them. Pay depends on city, years, and proof of work.",
};

const payNote =
  "The figure is a US median for employees in May 2025, from the Bureau of Labor Statistics. Half of workers earned less and half earned more. It is not a starting salary, not a freelance rate, and not the pay in India, Pakistan, or anywhere else.";

export const skillDemandGuides: Guide[] = [
  {
    slug: "high-paid-skills/highest-paid-skills",
    area: "High-Paid Skills",
    title: "What are the highest-paid skills?",
    summary:
      "The highest-paid skills in the US computer field, with May 2025 median wages from the Bureau of Labor Statistics. A beginner still starts with one skill and proof of work.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 16,
    topics: ["highest paid skills", "high income skills", "best paying skills 2026", "skills that pay well"],
    paragraphs: [],
    sections: [
      {
        heading: "What “highest paid” actually means",
        paragraphs: [
          "People search “highest paid skills” looking for a job that beats a typical wage. In the United States, the Bureau of Labor Statistics says the median wage for all occupations was $50,980 a year in May 2025. The computer occupations below all sit well above that. The median for the whole computer and information technology group was $109,470.",
          "A median is the middle, not a promise. A first job is often lower. A staff job in a large city can be higher. Freelance pay is a project fee, not this annual wage. The same skill pays differently in India, Europe, or anywhere else. Learn the skill, then read a current offer. Do not pay someone who says this list guarantees income.",
        ],
      },
      {
        heading: "1. Computer and information research",
        paragraphs: [
          "This is the closest official title to advanced AI and computing research. People invent or improve computing methods, including work that ends up in machine-learning products. Typical entry is a master’s degree. The median annual wage was $140,300 in May 2025.",
          payNote + " A beginner does not start here. Start with programming and statistics, then a real project, then more study if the research jobs are the goal.",
        ],
      },
      {
        heading: "2. Software development",
        paragraphs: [
          "Software developers design and build applications. The Bureau groups them with quality-assurance analysts and testers. Together, the median annual wage was $134,040 in May 2025. Employers hire people who can ship a small program, read an error, and explain what they built.",
          "A beginner path is one language, one finished project, and the ability to change it when someone asks. A certificate without a project is weaker than the project. " + payNote,
        ],
      },
      {
        heading: "3. Computer network architecture",
        paragraphs: [
          "Network architects design the networks a company depends on: how offices, cloud systems, and data move. The median annual wage was $134,050 in May 2025. The work is closer to infrastructure than to posting on social media.",
          "Start by learning how the internet actually moves a request, then how a small network is secured. " + payNote,
        ],
      },
      {
        heading: "4. Cybersecurity",
        paragraphs: [
          "Information security analysts protect networks and respond when something breaks. The median annual wage was $129,180 in May 2025. Companies hire this skill because a breach is expensive, not because a course ad said “six figures.”",
          "A useful start is networking basics, how passwords fail, and a lab you did yourself. Do not buy a “job placement” that asks for a fee up front. " + payNote,
        ],
      },
      {
        heading: "5. Database administration and architecture",
        paragraphs: [
          "These roles store data so a product can find it and so the wrong person cannot. The median annual wage was $126,760 in May 2025. SQL and a clear data model matter more than the brand of the database.",
          "Practice on fake records. Do not publish a database of real people as a portfolio. " + payNote,
        ],
      },
      {
        heading: "6. Data science",
        paragraphs: [
          "Data scientists use programming and statistics to answer questions from data. The Bureau of Labor Statistics says the median annual wage was $120,230 in May 2025, and it projects 35 percent growth from 2025 to 2035. That outlook is for this US occupation, not a promise of a job in every country.",
          "Learn SQL, a spreadsheet, and enough Python to clean a small file. Publish one analysis where the conclusion follows the numbers. " + payNote,
        ],
      },
      {
        heading: "7. Systems analysis",
        paragraphs: [
          "Computer systems analysts look at how a business works and how the software should support it. The median annual wage was $105,850 in May 2025. The skill is translation: a workflow in plain language, then a system that matches it.",
          "A beginner can practice by writing the steps of a real process and the data it must remember. " + payNote,
        ],
      },
      {
        heading: "8. Computer programming",
        paragraphs: [
          "The Bureau still lists computer programmers separately from software developers. The median annual wage was $100,390 in May 2025. The day-to-day skill is the same family: write code other people can run and change.",
          "Pick one language used in job posts you can actually see, and finish a small tool. " + payNote,
        ],
      },
      {
        heading: "9. Web development and digital design",
        paragraphs: [
          "Web developers and digital designers build and shape websites and interfaces. The median annual wage for the combined occupation was $99,520 in May 2025. A page that works on a phone and says what the business does is the proof employers and clients look for.",
          "This is a strong freelance skill as well as a job skill. A freelance fee is not this median. Quote the project, not a salary you saw on this page. " + payNote,
        ],
      },
      {
        heading: "10. Network and systems administration",
        paragraphs: [
          "Administrators keep networks and systems running. The median annual wage was $99,130 in May 2025. It is above the wage for all jobs, and it is a common door into cloud and security work.",
          "Learn accounts, backups, and what to do when a service is down. " + payNote,
        ],
      },
    ],
    faqs: [
      { question: "What is the highest paid skill in 2026?", answer: "Among the official US computer medians published for May 2025, computer and information research scientists were highest at $140,300. Software developers and network architects were just above $134,000. A first job is usually below the median." },
      { question: "Do these salaries apply in every country?", answer: "No. They are United States employee medians. India, Pakistan, and other countries have different pay. Use the India guide for published Indian bands." },
      { question: "Can I earn this as a freelancer?", answer: "Freelancers are paid per project or per month by a client. There is no Bureau median for a freelance gig. A skill can pay well and still take months to find the first client." },
      { question: "Which skill should a beginner learn first?", answer: "The one you can practice this month and show. Web development, programming, and data work have a clearer first project than research science." },
      { question: "Is a certificate enough?", answer: "No. Employers and clients ask what you built. A certificate can support that. It does not replace it." },
    ],
    sources: [
      { label: "US Bureau of Labor Statistics: computer occupations, wages as of May 2025", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" },
      { label: "US Bureau of Labor Statistics: data scientists", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
    ],
    next: { href: "/learn/high-demand-skills-usa", label: "High-demand skills in the USA" },
  },
  {
    slug: "high-demand-skills-usa/high-demand-skills-in-the-usa",
    area: "In-Demand Skills in the USA",
    title: "What skills are in demand in the USA?",
    summary:
      "High-demand skills in the USA: software, cybersecurity, data, cloud, and web. Official May 2025 wages, and where the openings actually are.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 16,
    topics: ["high demand skills in USA", "in demand skills USA 2026", "best skills to learn for US jobs", "skills shortage USA"],
    paragraphs: [],
    sections: [
      {
        heading: "Which skills are US employers hiring for?",
        paragraphs: [
          "“High demand in the USA” means employers keep opening these jobs, not that a course will place you. The Bureau of Labor Statistics says employment in computer and information technology occupations is projected to grow faster than the average for all occupations from 2025 to 2035. It expects about 280,000 openings a year in the group, from growth and from people leaving the field.",
          "Pay below is the May 2025 US median. Work authorization, a degree, and city all change who can take the job. This page is for learning the skill. It is not immigration or visa advice.",
        ],
      },
      {
        heading: "1. Software development",
        paragraphs: [
          "This is the widest hiring door in the computer group. Developers, testers, and quality analysts share a median wage of $134,040. Job posts ask for a language, a portfolio, and the ability to work on an existing codebase.",
          "Build one application a stranger can use. Then learn to read someone else’s code. That is closer to the job than collecting certificates.",
        ],
      },
      {
        heading: "2. Cybersecurity",
        paragraphs: [
          "Information security analysts had a median wage of $129,180. Demand comes from attacks, insurance, and rules that require a company to protect customer data. The work is monitoring, testing, and writing down what went wrong.",
          "A home lab and clear notes beat a badge you cannot explain. US employers also check that you can work legally in the country.",
        ],
      },
      {
        heading: "3. Data science",
        paragraphs: [
          "Data scientists had a median wage of $120,230 in May 2025. The Bureau projects 35 percent growth from 2025 to 2035, which is much faster than the average occupation. The job is questions, data, and an answer a manager can use.",
          "SQL plus one finished analysis is the start. A model you cannot explain is not a portfolio.",
        ],
      },
      {
        heading: "4. AI and machine learning",
        paragraphs: [
          "There is no single Bureau job title called “AI engineer.” Applied roles are hired as software developers or data scientists. Research roles sit under computer and information research scientists, median $140,300. Say which of those you are aiming at when you read a job post.",
          "Learn Python, data, and one model you trained on a public dataset. Do not claim a production system you have not run.",
        ],
      },
      {
        heading: "5. Cloud and network architecture",
        paragraphs: [
          "Computer network architects had a median wage of $134,050. Companies moving work to the cloud still need people who understand networks, access, and cost. A cloud console without the basics is a confusing dashboard.",
          "Learn what a server, a permission, and a backup are. Then use one cloud provider’s free tier and write down what you configured.",
        ],
      },
      {
        heading: "6. Database work",
        paragraphs: [
          "Database administrators and architects had a median wage of $126,760. Every product that remembers users needs this skill. The hiring test is usually SQL and a design that does not copy the same fact everywhere.",
          "Design a small schema and answer five questions with queries. That sample is easier to judge than a list of tools.",
        ],
      },
      {
        heading: "7. Web development",
        paragraphs: [
          "Web developers and digital designers had a median wage of $99,520. US small businesses still need sites that load, explain the offer, and work on a phone. Agencies hire the same skill.",
          "Ship one site with real words, a contact path, and acceptable speed. Say what you would not rebuild yet.",
        ],
      },
      {
        heading: "8. IT support and systems administration",
        paragraphs: [
          "Computer support specialists had a median wage of $62,890. Network and computer systems administrators had a median of $99,130. Support is the higher-volume entry. Administration pays more and asks for more responsibility.",
          "Support is a real US job, not a leftover. It teaches how people actually break systems. Many security and cloud careers start there.",
        ],
      },
      {
        heading: "9. Systems analysis and product sense",
        paragraphs: [
          "Computer systems analysts had a median wage of $105,850. Teams hire people who can sit with a business problem and describe the software change without inventing features. Product roles often ask for the same muscle.",
          "Write one workflow, the exception, and the smallest system that handles both. That document is a portfolio piece.",
        ],
      },
      {
        heading: "10. Digital design tied to a product",
        paragraphs: [
          "The Bureau’s digital-designer pay is inside the web developer median of $99,520, not a separate famous number. US teams hire designers who can ship a clear interface, not only a poster. Freelance design is paid per project.",
          "A redesign of a confusing page, with the reason for each change, is stronger than a mood board.",
        ],
      },
    ],
    faqs: [
      { question: "What is the most in-demand skill in the USA?", answer: "Software development is the broadest computer hiring category. Cybersecurity and data science are also growing. The Bureau expects about 280,000 openings a year across computer occupations from 2025 to 2035." },
      { question: "How much do these US jobs pay?", answer: "May 2025 medians run from about $62,890 for computer support specialists to about $140,300 for computer and information research scientists. Software developers in that release were grouped at $134,040." },
      { question: "Do I need a degree to get hired in the USA?", answer: "The Bureau lists a bachelor’s degree as typical entry for most of these occupations. Some people are hired on proof of work. A degree is still what many US job posts ask for." },
      { question: "Can someone outside the USA apply?", answer: "A skill can be learned anywhere. A US job also needs the legal right to work. This page does not cover visas." },
      { question: "Should I learn AI or cybersecurity first?", answer: "Learn the base you can practice: programming for AI, networking for security. Both hire people who can show the work." },
    ],
    sources: [
      { label: "US Bureau of Labor Statistics: computer occupations", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" },
      { label: "US Bureau of Labor Statistics: data scientists", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
    ],
    next: { href: "/learn/high-demand-skills-india", label: "High-demand skills in India" },
  },
  {
    slug: "high-demand-skills-india/high-demand-skills-in-india",
    area: "In-Demand Skills in India",
    title: "What skills are in demand in India?",
    summary:
      "High-demand skills in India for 2026: software, AI, data, cloud, cybersecurity, and digital work, with published pay bands instead of a fake average.",
    checkedDate: checked,
    difficulty: "Beginner",
    estimatedMinutes: 16,
    topics: ["high demand skills in India", "best skills to learn in India 2026", "highest paying skills in India", "jobs in demand in India"],
    paragraphs: [],
    sections: [
      {
        heading: "What Indian employers are hiring for",
        paragraphs: [
          "India’s large hiring is still in technology and in the work around it: software, data, cloud, security, and the marketing and design that help a product get used. A 2025–26 salary report covered by Business Manager put average annual pay in IT near ₹6.65 lakh for junior staff, ₹20.75 lakh at mid-level, and ₹32.66 lakh for senior executives. The same report said mid-level software developers, cloud architects, Java and Python specialists, and big-data engineers averaged about ₹15 lakh to ₹17 lakh.",
          "Those are averages from one industry report, not an offer. Bengaluru’s junior average in that report was about ₹7.16 lakh. Mumbai paid more at mid and senior levels. A fresher with no project is often at the bottom of the junior band or below it. A specialist with proof can move faster. Ignore posts that promise ₹1 lakh a month for watching videos.",
        ],
      },
      {
        heading: "1. Software development",
        paragraphs: [
          "Java, Python, and full-stack web work are the volume hiring in Indian IT services and product companies. The report above put many mid-level software roles around ₹15–17 lakh a year. Juniors sit nearer the ₹6–8 lakh band in big cities, and lower in some smaller ones.",
          "One deployed project, a Git history, and the ability to explain a bug will do more than five unfinished courses. Service companies and product companies hire differently. Read the actual post.",
        ],
      },
      {
        heading: "2. Artificial intelligence and machine learning",
        paragraphs: [
          "AI hiring in India is real and also noisy. Companies want people who can use models on a business dataset, not only people who can name tools. Pay for a true specialist sits at the high end of the IT bands. A fresher who has only watched tutorials should expect a junior package, not a senior AI salary from a poster.",
          "Build one model or automation on data you are allowed to use. Write what it got wrong. That note is the interview.",
        ],
      },
      {
        heading: "3. Data analysis and data engineering",
        paragraphs: [
          "Analysts answer questions in sheets and SQL. Engineers move data so other people can use it. Both are hired by IT, banks, and retail. Mid-level data roles in the same report sat in the same ₹15–17 lakh neighborhood as other core tech jobs. Entry is closer to the junior IT average.",
          "Publish a short analysis with the source of the numbers. Do not invent a chart.",
        ],
      },
      {
        heading: "4. Cloud and DevOps",
        paragraphs: [
          "Cloud architects were named among the higher mid-level pay in that 2025–26 report, again around ₹15–17 lakh on average for mid-level, with seniors well above that. The skill is deploying, monitoring, and not making a system only you can operate.",
          "Use a free tier, deploy one small app, and document the cost so you do not get a surprise bill. Cost control is part of the job in India as much as in the US.",
        ],
      },
      {
        heading: "5. Cybersecurity",
        paragraphs: [
          "Banks, IT firms, and global capability centers hire security analysts. Public salary posts disagree because they mix freshers and architects. Use the junior IT band as the honest floor and the mid-level tech band after you can show labs and a real ticket you handled. A course fee is not a job.",
          "Practice on legal labs only. Attacking a site you do not own is a crime, not a portfolio.",
        ],
      },
      {
        heading: "6. Web development",
        paragraphs: [
          "Company sites, shops, and client work still need people who can ship a page. In a services job, pay often starts in the junior IT range. As a freelancer, you are paid per site. A simple business site in a smaller city may be a few thousand to a few tens of thousands of rupees. A product company salary is a different market. Quote the job in front of you.",
          "Speed, a clear offer, and a form that works beat a template with no words.",
        ],
      },
      {
        heading: "7. Digital marketing and performance ads",
        paragraphs: [
          "Indian brands hire people who can run search and social with a budget and a landing page. This is high demand and not the same pay as a software median. Many junior roles start lower than the IT averages above. A freelancer is paid for a campaign, and the fee has to include ad spend that is not your salary.",
          "Show one campaign or one page: what you spent or posted, what happened, and what you would change. Vanity likes are not the report.",
        ],
      },
      {
        heading: "8. UI and graphic design",
        paragraphs: [
          "Product companies hire interface designers. Local businesses hire people for posts, packaging, and pitch decks. The IT salary report does not publish a single median for design. Junior design pay is often below software pay until the portfolio has shipped work.",
          "Three pieces for a real brief beat thirty random posters. Say the words first, then the layout.",
        ],
      },
      {
        heading: "9. Video editing and short-form content",
        paragraphs: [
          "Agencies, creators, and training companies hire editors. Pay is usually per video or a junior salary below core software. A viral editor’s screenshot is not the market rate. Ask what the last three invoices were.",
          "Cut one clear video with readable captions and licensed music. That sample gets the meeting.",
        ],
      },
      {
        heading: "10. IT support and quality testing",
        paragraphs: [
          "Support and testing are how many people in India enter technology. They are hired in volume. Pay starts nearer the junior band, sometimes below the ₹6.65 lakh IT average, especially outside the biggest cities. The path is real if you use it to learn systems, not if you stop at password resets.",
          "Write down problems you solved and what you checked. That log is more useful than a job title.",
        ],
      },
    ],
    faqs: [
      { question: "What is the highest paying skill in India?", answer: "Specialist software, cloud, data, and AI roles pay more than support, design, or junior marketing. A 2025–26 report put senior IT averages near ₹32.66 lakh and many mid-level tech roles near ₹15–21 lakh. Freshers should not expect the senior number." },
      { question: "What should a student in India learn first?", answer: "Programming or data, plus one finished project. Add cloud or security after you can explain the basics. Marketing and video are valid if you can show the work." },
      { question: "Is ₹1 lakh a month realistic at the start?", answer: "Not as a typical first salary. Junior IT averages in the cited report were about ₹6–8 lakh a year, which is well under ₹1 lakh a month. Some experienced specialists earn more. A stranger promising that figure for a fee is a sales pitch." },
      { question: "Do Bangalore and a smaller city pay the same?", answer: "No. The same report put Bengaluru’s junior average near ₹7.16 lakh and showed different mid and senior pay in Mumbai. Always read the city on the offer." },
      { question: "Can I freelance these skills from India for foreign clients?", answer: "Yes, if the client can pay you through a method your bank accepts. The US median on another page is not your rate. Price the project." },
    ],
    sources: [
      { label: "Business Manager: Randstad salary trends in Indian IT, 2025–26", url: "https://bmhrmagazine.com/it-sector-tops-pay-charts-tier-2-cities-catch-up-in-salary-growth-randstad-report/" },
      { label: "US Bureau of Labor Statistics, for comparison only", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" },
    ],
    next: { href: "/learn/high-paid-skills", label: "Highest-paid skills" },
  },
];

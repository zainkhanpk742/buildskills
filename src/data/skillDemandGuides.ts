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
        heading: "What \u201chighest paid\u201d actually means",
        paragraphs: [
          "People search \u201chighest paid skills\u201d looking for a job that beats a typical wage. In the United States, the Bureau of Labor Statistics says the median wage for all occupations was $50,980 a year in May 2025. The computer occupations below all sit well above that. The median for the whole computer and information technology group was $109,470.",
          "A median is the middle, not a promise. A first job is often lower. A staff job in a large city can be higher. Freelance pay is a project fee, not this annual wage. The same skill pays differently in India, Europe, or anywhere else. Learn the skill, then read a current offer. Do not pay someone who says this list guarantees income.",
        ],
      },
    ],
    faqs: [],
    sources: [],
    next: { href: "/learn/high-demand-skills-usa", label: "High-demand skills in the USA" },
  },
];

import type { Guide } from "@/data/site";

export const chatgptPromptsArea = {
  slug: "chatgpt-prompts",
  title: "ChatGPT Prompts",
  question: "What are useful ChatGPT prompts?",
  summary: "Copy practical prompts for study, writing, research, and work — then check the answer yourself.",
  description:
    "A useful ChatGPT prompt names the job, the audience, the facts ChatGPT must not invent, and the shape of the answer. This guide gives beginner prompts you can paste and adapt, plus the checks that keep the output honest.",
};

export const chatgptPromptsGuide: Guide = {
  slug: "chatgpt-prompts/useful-chatgpt-prompts",
  area: "ChatGPT Prompts",
  title: "What are useful ChatGPT prompts?",
  summary:
    "Practical ChatGPT prompts for studying, writing, planning, and everyday work, with a simple way to check the answer before you use it.",
  checkedDate: "2026-09-30",
  difficulty: "Beginner",
  estimatedMinutes: 14,
  kind: "Question",
  topics: [
    "ChatGPT prompts",
    "useful ChatGPT prompts",
    "ChatGPT prompts for beginners",
    "ChatGPT tips",
    "how to use ChatGPT",
    "AI prompts for students",
  ],
  tools: ["ChatGPT"],
  sections: [
    {
      heading: "What makes a ChatGPT prompt useful",
      paragraphs: [
        "A useful ChatGPT prompt is a short brief, not a magic sentence. It says who the answer is for, what the task is, which facts ChatGPT must use, and how the answer should be shaped. Vague prompts such as “help me with marketing” produce vague answers. Specific prompts produce something you can edit.",
        "OpenAI’s prompt guidance is the same idea in different words: put the instruction first, separate it from the background, show the format you want, and start simple before you add rules. You do not need special syntax. Plain sentences work.",
        "ChatGPT can still be wrong, outdated, or too confident. Treat every answer as a draft. For prices, laws, eligibility, medical claims, and school rules, check the official source before you act. A good prompt asks ChatGPT to say what it does not know instead of filling gaps.",
      ],
      bullets: [
        "Job: what should be produced, in one sentence.",
        "Audience: who will read or use it, and their level.",
        "Inputs: the notes, text, or facts ChatGPT must stick to.",
        "Limits: what not to invent, and what to flag as uncertain.",
        "Format: length, headings, steps, or a table.",
      ],
    },
    {
      heading: "Best beginner prompts you can copy",
      paragraphs: [
        "Paste one prompt, replace the brackets, and run it once. If the answer is almost right, ask for one change instead of rewriting the whole prompt. These prompts stay useful on the free plan and on paid plans. Plan names and limits change by country, so check the current plans on ChatGPT’s pricing page before you pay.",
      ],
      bullets: [
        "Explain a topic: “Explain [topic] to a beginner in about 200 words. Use one everyday example. End with three questions I should be able to answer if I understood it. If a point is debated, say so.”",
        "Study without cheating: “I am learning [subject]. Do not give me the final answer. Ask me one question at a time, wait for my reply, and tell me only whether my reasoning is sound. If I am stuck after two tries, give a hint, not the solution.”",
        "Turn notes into a plan: “Here are my notes: [paste notes]. Turn them into a 7-day practice plan. Each day needs one task that takes under 45 minutes and one way to check I did it. Do not add topics that are not in the notes.”",
        "Rewrite in my voice: “Rewrite the text below so it is clearer and shorter. Keep my meaning. Do not add new claims. Reading level: a smart 16-year-old. Text: [paste].”",
        "Check an email: “Review this email before I send it. Point out unclear requests, a missing deadline, and anything that sounds rude. Then give one revised version. Email: [paste].”",
        "Compare options: “I need to choose between [option A] and [option B] for [goal]. Make a comparison with cost, time, skill required, and the main risk of each. If you do not have current prices, say ‘check the official page’ instead of guessing.”",
        "Interview practice: “You are hiring for [role]. Ask me one interview question, wait for my answer, then score it from 1 to 5 on clarity and evidence. Give one sentence on what to improve. Do not ask the next question until I reply.”",
        "Summarize a long page: “Summarize the text below in five bullets. Then list any numbers, dates, or names. If the text does not support a claim, do not add it. Text: [paste].”",
        "Debug my thinking: “I believe [claim]. Argue against it using the strongest fair objection. Then say what evidence would change your mind. Do not be insulting.”",
        "Project brief: “Turn this idea into a one-page brief: goal, who it is for, what is out of scope, the first three tasks, and how we will know the first version worked. Idea: [paste]. Ask me up to three questions if something important is missing.”",
      ],
    },
    {
      heading: "Prompts for students and for work",
      paragraphs: [
        "Students get more from ChatGPT when it tutors instead of completing the assignment. Ask it to quiz you, explain a wrong answer, or turn a syllabus into a revision timetable. Handing in text you did not write is academic misconduct at most schools. Use the tool to understand the work, then write the answer yourself.",
        "For work, the useful jobs are drafts you already know how to judge: meeting notes into actions, a rough outline into headings, a customer reply that stays inside a policy you paste in, or a checklist before you publish. Do not paste passwords, private customer files, medical records, or unpublished client work unless you have checked ChatGPT’s current data controls and your own rules allow it.",
        "If you work across countries, say the country in the prompt when rules differ. Tax, payment apps, school exams, and platform eligibility are not global. A prompt that says “for a beginner in [country], and tell me when a rule is local” stops ChatGPT from treating one country’s system as everyone’s.",
      ],
    },
    {
      heading: "How to improve a weak answer",
      paragraphs: [
        "If the first answer is generic, add the missing constraint in a follow-up. “Make it shorter,” “use only the notes I pasted,” “give steps I can do on a phone,” or “show the answer as a checklist” is usually enough. You do not need a new prompt library for every small fix.",
        "If a fact matters, ask ChatGPT to separate what came from your text and what it added. Then open the official page yourself. For ChatGPT’s own product, that means OpenAI’s help center and the pricing page, not a screenshot from a blog.",
        "Save prompts that you will reuse. A note titled with the job — “email check,” “study quiz,” “meeting actions” — is more useful than a folder of hundreds of prompts you never open. Change the brackets, not the structure.",
      ],
    },
    {
      heading: "What not to ask ChatGPT to do",
      paragraphs: [
        "Do not ask it to invent citations, fake reviews, fake job history, or school work you will submit as your own. Do not ask it for guaranteed income, guaranteed exam scores, or medical and legal decisions. Those prompts fail because the task itself is dishonest or unsafe, not because the wording is weak.",
        "Do not paste secrets. A prompt is still data you are sending to a service. Remove account numbers, identity documents, and other people’s private messages before you paste.",
        "Free and paid ChatGPT plans have usage limits that can change, and the same plan can differ by country and by app store. If a feature is missing, check the official plan page rather than assuming your prompt was wrong.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is a good ChatGPT prompt for beginners?",
      answer: "Name the task, who the answer is for, and the format you want. Example: “Explain [topic] to a beginner in about 200 words, use one everyday example, and end with three questions I should be able to answer.” That is more useful than “explain [topic].”",
    },
    {
      question: "Do I need ChatGPT Plus for these prompts?",
      answer: "No. The prompts on this page work in a normal chat. Paid plans can raise limits and unlock extra tools, but a clear prompt matters more than the plan name. Check current plans and prices on ChatGPT’s official pricing page, because they vary by country.",
    },
    {
      question: "Why does ChatGPT give a vague answer?",
      answer: "The prompt usually left out the audience, the length, the source material, or the decision you need. Add one missing constraint and ask again. “Use only the notes below” and “do not add facts that are not in the text” fix a lot of vague or invented answers.",
    },
    {
      question: "Can students use ChatGPT for homework?",
      answer: "Use it to understand a topic, quiz yourself, or plan study time. Do not submit generated text as your own work unless your school explicitly allows that. Many schools treat undisclosed AI writing as misconduct.",
    },
    {
      question: "How do I stop ChatGPT from making up facts?",
      answer: "Paste the source it must use, and tell it to say when the text does not contain the answer. Then check important facts on the official page. Prompt wording reduces invention; it does not remove it.",
    },
    {
      question: "Should I share personal information in a prompt?",
      answer: "No. Remove passwords, identity numbers, private customer files, and other people’s private messages. Read OpenAI’s current privacy information before you upload files you do not control.",
    },
    {
      question: "Are there official ChatGPT prompt examples?",
      answer: "OpenAI publishes prompt guidance in its help center, including how to put instructions first, show the format you want, and give examples. The prompts on this page follow that approach in everyday language.",
    },
    {
      question: "How long should a ChatGPT prompt be?",
      answer: "Long enough to include the job, the limits, and any text ChatGPT must use. A short specific prompt beats a long vague one. If you are pasting source material, the source can be long; the instruction at the top should stay short.",
    },
  ],
  related: [
    "ai-productivity/how-to-write-ai-prompts",
    "ai-productivity/how-to-use-chatgpt",
    "ai-productivity/how-to-use-ai-for-studying",
    "ai-productivity/ai-safety-and-privacy",
  ],
  sources: [
    { label: "OpenAI: prompt engineering best practices", url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api" },
    { label: "ChatGPT plans and pricing", url: "https://chatgpt.com/pricing/" },
    { label: "OpenAI privacy policy", url: "https://openai.com/policies/privacy-policy/" },
  ],
  paragraphs: [],
  next: { href: "/learn/ai-productivity/how-to-use-chatgpt", label: "How to use ChatGPT" },
};

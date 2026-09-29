import type { Guide } from "@/data/site";

export const digitalSkillsGuides: Guide[] = [
  {
    slug: "ai-productivity/what-is-generative-ai",
    area: "AI & Productivity",
    title: "What is generative AI?",
    summary: "Generative AI creates new text, images, audio, or other output from patterns learned in data.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 6,
    topics: ["artificial intelligence", "machine learning", "large language models"],
    sections: [
      {
        heading: "A simple explanation",
        paragraphs: [
          "Generative artificial intelligence is software that produces new material in response to instructions or examples. Depending on the model, that material can be text, code, images, sound, or video.",
          "The model learns statistical patterns from training data and uses them to predict or construct an output. It does not look up every answer in a reliable database, and fluent wording is not proof that a result is true.",
        ],
      },
      {
        heading: "How it differs from other AI",
        paragraphs: [
          "Some AI systems classify or predict, such as sorting messages into spam and not-spam. Generative systems create an output, such as drafting an email or making an illustration from a prompt. A product may combine both kinds of capability.",
          "A language model generates text in pieces based on context. It can be helpful for brainstorming and summarizing, but can also invent details, miss context, or reflect limitations in its training and design.",
        ],
      },
      {
        heading: "Use it with judgment",
        paragraphs: [
          "Give the system a bounded task, provide only information you are allowed to share, and check consequential claims against trustworthy sources. For schoolwork, follow your institution's rules and make sure the final work reflects your own understanding.",
          "Treat the result as a draft or suggestion rather than an authority. People remain responsible for deciding whether an output is accurate, safe, fair, and appropriate for its intended audience.",
        ],
      },
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    related: ["ai-productivity/how-to-use-chatgpt", "ai-productivity/ai-safety-and-privacy"],
    faqs: [
      { question: "Does generative AI understand like a person?", answer: "It can produce useful responses, but its output is generated from learned patterns and context; it should not be assumed to have human understanding or reliable judgment." },
      { question: "Can generative AI make mistakes?", answer: "Yes. It may produce inaccurate, incomplete, outdated, or fabricated information, so check important claims independently." },
    ],
    next: { href: "/learn/ai-productivity/how-to-use-chatgpt", label: "Learn how to use ChatGPT thoughtfully" },
  },
  {
    slug: "ai-productivity/how-to-use-chatgpt",
    area: "AI & Productivity",
    title: "How do I use ChatGPT?",
    summary: "Start with a specific task, add useful context, and verify the response before relying on it.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 7,
    topics: ["ChatGPT", "AI assistant", "prompting"],
    sections: [
      {
        heading: "Start with a task you understand",
        paragraphs: [
          "ChatGPT is a conversational AI tool that can help draft, explain, brainstorm, transform, and organize information. Begin with a task whose goal and quality you can judge, rather than asking it to make an important decision for you.",
          "For example, ask it to explain a concept at an introductory level, turn your own notes into a revision quiz, or suggest an outline for a presentation. These tasks leave room for you to review and improve the result.",
        ],
      },
      {
        heading: "Give clear context and constraints",
        paragraphs: [
          "Describe the outcome you want, who it is for, what information it should use, and any limits such as length, tone, or format. If the first answer misses, explain what to change and what to keep.",
          "A useful prompt might say: 'Explain DNS to a beginner in five short steps. Use an everyday analogy, define technical terms, and finish with one check-your-understanding question.' Avoid including passwords, private records, or information you do not have permission to share.",
        ],
      },
      {
        heading: "Check and improve the output",
        paragraphs: [
          "Read the answer critically. Ask for the reasoning or sources when appropriate, then verify key facts using primary or otherwise reliable references. A confident tone does not guarantee accuracy, and a cited link should be checked to confirm it supports the claim.",
          "For school, work, health, legal, financial, or safety-related tasks, follow the relevant rules and consult a qualified source where needed. Use the tool to support your thinking, not to hide who created work or bypass an assessment.",
        ],
      },
    ],
    tools: ["ChatGPT"],
    related: ["ai-productivity/how-to-write-ai-prompts", "ai-productivity/ai-safety-and-privacy"],
    faqs: [
      { question: "Is ChatGPT always correct?", answer: "No. Check important answers against trustworthy sources, especially when facts may have changed or the decision has real consequences." },
      { question: "Should I paste private information into a prompt?", answer: "Only share information when you are permitted to do so and understand the product's current data controls. Avoid secrets and sensitive personal information." },
    ],
    next: { href: "/learn/ai-productivity/how-to-write-ai-prompts", label: "Write clearer AI prompts" },
  },
  {
    slug: "ai-productivity/how-to-write-ai-prompts",
    area: "AI & Productivity",
    title: "How do I write better AI prompts?",
    summary: "State the task, give relevant context, describe the desired format, and refine the result.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 6,
    topics: ["prompt writing", "AI workflows", "generative AI"],
    sections: [
      {
        heading: "Use a repeatable prompt structure",
        paragraphs: [
          "A prompt is an instruction and the context around it. Clear prompts reduce guesswork, but no template can guarantee a correct or useful answer.",
          "Try four parts: task (what to do), context (what the system needs to know), constraints (what to include or avoid), and format (how to present the result). Include examples when the style or structure matters.",
        ],
        bullets: [
          "Task: explain a topic, summarize notes, or compare options.",
          "Context: audience, purpose, and source material you may share.",
          "Constraints: length, reading level, boundaries, and exclusions.",
          "Format: steps, table, checklist, outline, or plain-language paragraph.",
        ],
      },
      {
        heading: "Make a prompt specific without overloading it",
        paragraphs: [
          "Replace broad requests such as 'tell me about design' with a concrete outcome, such as 'give me a beginner checklist for reviewing contrast and text size in a one-page poster.' This tells the tool what a helpful answer should contain.",
          "Provide only the context needed for the task. Split a complex job into stages, inspect each result, and correct errors before moving to the next step. Long prompts can still be ambiguous if the goal is unclear.",
        ],
      },
      {
        heading: "Review the response",
        paragraphs: [
          "Check whether the response follows the requested format, covers the important parts, and makes claims you can verify. Ask a follow-up to clarify or revise, but do not treat repeated agreement as independent evidence.",
          "For a reusable workflow, save a prompt only after testing it on varied examples. Note where it fails and keep a human review step for anything published, submitted, or used to make decisions.",
        ],
      },
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    related: ["ai-productivity/how-to-use-chatgpt", "ai-productivity/how-to-use-ai-for-studying"],
    faqs: [
      { question: "Do longer prompts always work better?", answer: "No. Relevant context and a clear task matter more than length. Remove details that do not help the system produce the requested result." },
      { question: "Can a prompt prevent AI errors?", answer: "A clear prompt can reduce ambiguity, but it cannot guarantee factual accuracy. Review and verify important output." },
    ],
    next: { href: "/learn/ai-productivity/how-to-use-ai-for-studying", label: "Explore AI for studying" },
  },
  {
    slug: "ai-productivity/how-to-use-ai-for-studying",
    area: "AI & Productivity",
    title: "How can I use AI for studying?",
    summary: "Use AI to practice, explain, and organize learning while keeping your own reasoning central.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 7,
    topics: ["AI for students", "study skills", "learning"],
    sections: [
      {
        heading: "Use AI to practice retrieval",
        paragraphs: [
          "Active recall—trying to remember an idea before checking your notes—helps reveal what you know and what needs more practice. Ask an AI assistant to turn material you provide into a short quiz, then answer without looking.",
          "Review each answer against your class materials or a trusted source. If a generated question is ambiguous or has a questionable answer, correct it rather than memorizing it.",
        ],
      },
      {
        heading: "Ask for explanations, not finished assignments",
        paragraphs: [
          "If a concept is confusing, ask for a simpler explanation, a worked example, or a comparison between two ideas. Then explain the concept back in your own words and try a new example without assistance.",
          "For writing or projects, use the tool for feedback on structure or questions to investigate, where your school rules allow it. Do not submit generated work as your own or use AI to bypass learning objectives.",
        ],
      },
      {
        heading: "Keep your information and learning safe",
        paragraphs: [
          "Do not upload private school records, personal details, classmates' work, or copyrighted course material unless you have permission and understand how the tool handles it. Check current privacy controls and your institution's acceptable-use guidance.",
          "Keep a record of how you used AI if your teacher or institution requires disclosure. The goal is to strengthen your understanding, not just produce a polished answer quickly.",
        ],
      },
    ],
    tools: ["ChatGPT", "Gemini", "NotebookLM"],
    related: ["ai-productivity/how-to-write-ai-prompts", "ai-productivity/ai-safety-and-privacy"],
    faqs: [
      { question: "Can AI replace studying?", answer: "No. It can help you practice and get another explanation, but you still need to understand, remember, and apply the material yourself." },
      { question: "Can I use AI for every assignment?", answer: "Follow the rules for each class or institution. Some tasks restrict or prohibit AI assistance, and expectations can differ." },
    ],
    next: { href: "/learn/ai-productivity/ai-safety-and-privacy", label: "Learn about AI safety and privacy" },
  },
  {
    slug: "ai-productivity/ai-safety-and-privacy",
    area: "AI & Productivity",
    title: "How can I use AI tools safely and protect my privacy?",
    summary: "Share the minimum necessary information, check outputs, and understand the tool's current data controls.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 7,
    topics: ["AI safety", "privacy", "data protection"],
    sections: [
      {
        heading: "Think before sharing information",
        paragraphs: [
          "A prompt may be processed by an online service. Before pasting material, consider whether it contains personal, confidential, financial, health, school, or workplace information and whether you are allowed to share it.",
          "Use the minimum detail required. Remove names and identifying information from examples, and never paste passwords, authentication codes, private keys, or other secrets. Check the service's current privacy settings and terms rather than assuming every product handles data the same way.",
        ],
      },
      {
        heading: "Treat generated content as unverified",
        paragraphs: [
          "AI output can contain factual errors, invented references, stereotypes, or unsafe instructions. Verify important claims with dependable sources and use a qualified person for high-stakes decisions.",
          "Do not use generated media to impersonate someone, mislead an audience, or share another person's likeness without permission. Follow applicable school, workplace, platform, and legal rules.",
        ],
      },
      {
        heading: "Build a small safety check into your workflow",
        paragraphs: [
          "Before using an AI result, ask: Is it accurate? Is the information allowed to be shared? Could it expose or unfairly describe someone? Do I need to disclose AI assistance? Would a human review be appropriate?",
          "For younger users, choose age-appropriate tools and follow guardian, school, and platform requirements. Product features and privacy controls change, so consult official documentation for current settings.",
        ],
      },
    ],
    tools: ["Official product privacy documentation"],
    related: ["ai-productivity/what-is-generative-ai", "ai-productivity/how-to-use-ai-for-studying"],
    next: { href: "/learn/ai-productivity", label: "Explore AI learning guides" },
  },
  {
    slug: "ai-productivity/how-to-choose-an-ai-tool",
    area: "AI & Productivity",
    title: "How do I choose an AI tool?",
    summary: "Choose an AI tool by the task, output quality, privacy needs, accessibility, and the current cost and limits.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 7,
    topics: ["AI tools", "AI tool comparison", "AI for creators", "AI for students"],
    sections: [
      {
        heading: "Start with the task, not a ranking",
        paragraphs: [
          "Write down the job you want help with: explain a concept, draft text, explore code, create an image, transcribe audio, or organize information. Different tools and model types are designed for different kinds of input and output.",
          "Decide what a good result looks like and how you will check it. If you cannot assess the output yourself, choose a trusted source or qualified reviewer before relying on it.",
        ],
      },
      {
        heading: "Compare the requirements that affect your workflow",
        paragraphs: [
          "Check supported devices and formats, accessibility, collaboration, language support, export options, speed, and whether the tool fits your existing workflow. Test the same small task in more than one candidate if practical.",
          "Review current plan limits, pricing, age requirements, and feature availability on the provider's official site. These details change, and a free plan may have usage or feature limits.",
        ],
      },
      {
        heading: "Understand privacy and data handling",
        paragraphs: [
          "Read the provider's current privacy information and settings before sharing personal, school, workplace, or confidential material. Avoid entering passwords, sensitive records, or information you do not have permission to share.",
          "For work that affects other people, consider who can access the output, how it will be reviewed, and whether you need to disclose that AI was used. Follow applicable school, workplace, and platform rules.",
        ],
      },
      {
        heading: "Choose the smallest useful option",
        paragraphs: [
          "Try a real but low-risk task before subscribing or moving important work. Note what the tool did well, what needed correction, and whether the result saved enough effort to justify the cost and setup.",
          "A tool is useful when it fits your task and you can review its output. You do not need to use AI for work that a simpler, clearer method already handles well.",
        ],
      },
    ],
    related: ["ai-productivity/how-to-use-chatgpt", "ai-productivity/ai-safety-and-privacy"],
    faqs: [
      { question: "Is there one best AI tool?", answer: "No. The right choice depends on the task, the quality you need, your device, privacy requirements, and current plan limits." },
      { question: "Should I pay for an AI tool before trying it?", answer: "Check current plans and try a small task first when possible. Decide whether the features and limits fit your workflow before paying." },
    ],
    next: { href: "/learn/ai-productivity", label: "Explore AI learning guides" },
  },
  {
    slug: "freelancing/how-to-make-money-online-safely",
    area: "Freelancing",
    title: "How can I make money online safely?",
    summary: "Build a realistic plan around a useful skill or product, verify opportunities, and protect your money and personal information.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 8,
    topics: ["online work", "online income", "scam prevention", "remote work"],
    sections: [
      {
        heading: "Start with a realistic source of value",
        paragraphs: [
          "Online income usually comes from doing useful work, selling a product, creating content, or providing a service through a platform. Each route takes time and has costs, rules, and uncertainty; no guide can promise a specific income or timeline.",
          "Begin with a skill, audience, or problem you understand. Test a small offer or practice project, estimate the time and expenses involved, and look for evidence that someone needs the result before spending heavily on tools or advertising.",
        ],
      },
      {
        heading: "Check an opportunity before committing",
        paragraphs: [
          "Research the organization and platform independently. Read the current terms, eligibility requirements, payout rules, dispute process, and fees directly from official sources. Do not rely only on screenshots, testimonials, or a message from someone who contacted you unexpectedly.",
          "Be cautious when someone promises guaranteed earnings, pressures you to act immediately, asks for an upfront fee to unlock a job, or asks you to receive and forward money. Never share passwords, verification codes, or financial details with an unverified person.",
        ],
      },
      {
        heading: "Protect your work and personal details",
        paragraphs: [
          "Use strong unique passwords and account security features. Keep records of agreements, completed work, payments, and platform messages. Understand how a marketplace handles payment and disputes before moving a conversation off-platform.",
          "Check local rules about age, contracts, taxes, consumer protection, and work eligibility. If you are under 18, involve a trusted adult and follow platform age requirements; do not misrepresent your age to open an account.",
        ],
      },
      {
        heading: "Build a sustainable next step",
        paragraphs: [
          "Choose one small experiment you can afford to complete, such as making a portfolio sample or offering a clearly scoped task to a real audience. Review what you learned before investing more time or money.",
          "Keep learning the underlying skill and use official platform guidance for changing account, payment, and safety rules. If an offer feels too good to be true or you cannot verify who is behind it, pause and ask someone you trust.",
        ],
      },
    ],
    related: ["freelancing/how-to-start-freelancing"],
    faqs: [
      { question: "Can anyone guarantee that I will make money online?", answer: "No. Income depends on the work, demand, costs, platform rules, and many other factors. Treat guaranteed-income claims with caution." },
      { question: "Should I pay to get a remote job?", answer: "Be especially cautious of requests to pay an upfront fee to access a job or receive earnings. Verify the opportunity independently before sharing money or sensitive information." },
    ],
    next: { href: "/learn/freelancing/how-to-start-freelancing", label: "Learn how to start freelancing" },
  },
  {
    slug: "video-editing/how-to-edit-a-video",
    area: "Video Editing",
    title: "How do I edit a video?",
    summary: "Organize your footage, shape a clear sequence, improve the sound, and export for your audience.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 8,
    topics: ["video editing workflow", "editing basics", "exporting video"],
    sections: [
      {
        heading: "Plan and organize the footage",
        paragraphs: [
          "Start by deciding what the viewer should understand or feel by the end. Gather the clips, audio, images, and any permissions you need, then group the files so they are easy to find.",
          "Create a new editing project with the intended delivery in mind. Save a copy of original footage and avoid overwriting source files. A simple outline or shot list can help you find the moments that support the story.",
        ],
      },
      {
        heading: "Build a clear first cut",
        paragraphs: [
          "Put the strongest useful moments in a sensible order, then trim pauses and repetition. Keep enough context for the viewer to follow what is happening; fast cuts are not automatically clearer.",
          "Listen to the full sequence. Make dialogue understandable, reduce distracting background noise where possible, and use music only when you have the right to use it. Balance loudness so one clip does not overwhelm another.",
        ],
      },
      {
        heading: "Polish, check, and export",
        paragraphs: [
          "Add titles or captions when they help comprehension. Review spelling, timing, contrast, and whether captions cover important visual information. Watch the complete video at normal speed before exporting.",
          "Choose the aspect ratio, resolution, and file format required by the destination platform. Export a test if unsure, then check the resulting file on a phone or computer. Keep a project copy so you can make later changes.",
        ],
      },
    ],
    tools: ["CapCut", "DaVinci Resolve", "Adobe Premiere Pro"],
    checkedDate: "2026-09-29",
    sources: [
      { label: "CapCut", url: "https://www.capcut.com/" },
      { label: "Blackmagic Design: DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
      { label: "Adobe: Premiere", url: "https://www.adobe.com/products/premiere.html" },
    ],
    related: ["video-editing/best-video-editing-apps", "video-editing/how-to-add-subtitles"],
    faqs: [
      { question: "What should I edit first?", answer: "Make the story understandable with a rough cut before spending time on effects, transitions, or detailed color adjustments." },
      { question: "Which export settings should I use?", answer: "Use the requirements of your destination platform and your source footage as a guide; check the exported file because settings and platform guidance can change." },
    ],
    next: { href: "/learn/video-editing/best-video-editing-apps", label: "Compare editing apps by use case" },
  },
  {
    slug: "video-editing/best-video-editing-apps",
    area: "Video Editing",
    title: "How do I choose a video editing app?",
    summary: "Compare editors by device support, learning curve, export needs, accessibility, and the work you want to do.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 8,
    topics: ["video editing apps", "editing software comparison", "CapCut", "DaVinci Resolve"],
    sections: [
      {
        heading: "Start with your device and task",
        paragraphs: [
          "A short social clip edited on a phone has different needs from a long video with multiple audio tracks on a computer. List your device, the kinds of footage you use, the destination, and the most important features before comparing apps.",
          "Look for the functions your workflow needs: trimming, titles, captions, audio controls, aspect-ratio changes, project backup, and export choices. A large feature list is not useful if the app is difficult to learn or does not run well on your device.",
        ],
      },
      {
        heading: "Compare options without ranking them universally",
        paragraphs: [
          "CapCut is commonly used for approachable short-form editing across supported devices. DaVinci Resolve is a desktop editor with a broad post-production workflow. Adobe Premiere Pro is a professional desktop editing product within Adobe's ecosystem. Features, supported platforms, and plan details can change, so confirm current information with each provider.",
          "Compare free availability, watermarking, export limits, captions, templates, collaboration, storage, and whether advanced controls are accessible to you. Test a small project before committing to a workflow or subscription.",
        ],
      },
      {
        heading: "Choose for the project you actually have",
        paragraphs: [
          "For a first edit, prefer an editor you can operate confidently on the device you already own. For team or complex work, consider media management, project handoff, audio tools, color controls, and compatibility with collaborators.",
          "Read the current official product pages for pricing, supported devices, and export limitations. Do not assume a free tier includes every feature or that a paid plan is necessary for a simple project.",
        ],
      },
    ],
    tools: ["CapCut", "DaVinci Resolve", "Adobe Premiere Pro"],
    related: ["video-editing/how-to-edit-a-video", "video-editing/how-to-add-subtitles"],
    checkedDate: "2026-09-29",
    sources: [
      { label: "CapCut", url: "https://www.capcut.com/" },
      { label: "Blackmagic Design: DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
      { label: "Adobe: Premiere", url: "https://www.adobe.com/products/premiere.html" },
    ],
    next: { href: "/learn/video-editing/how-to-edit-a-video", label: "Follow a beginner editing workflow" },
  },
  {
    slug: "video-editing/how-to-add-subtitles",
    area: "Video Editing",
    title: "How do I add subtitles to a video?",
    summary: "Create or review a transcript, synchronize captions with speech, and check them on the final video.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 6,
    topics: ["subtitles", "captions", "accessibility"],
    sections: [
      {
        heading: "Choose captions that fit the destination",
        paragraphs: [
          "Captions display spoken words and, when relevant, meaningful sounds. Some platforms accept a separate caption file; other workflows burn text into the video. Check the destination's current options before editing.",
          "Automatic speech recognition can produce a first draft, but it may mishear names, accents, technical terms, and overlapping speech. A person should review the transcript against the actual audio.",
        ],
      },
      {
        heading: "Edit and synchronize the text",
        paragraphs: [
          "Break speech into readable chunks and time each caption so it appears with the words being spoken. Preserve punctuation and speaker changes where helpful; include important non-speech sounds when the caption format calls for them.",
          "Keep the text legible against the video. Use sufficient contrast, avoid covering faces or essential on-screen information, and make sure the text remains within the safe area on small screens.",
        ],
      },
      {
        heading: "Review the result",
        paragraphs: [
          "Watch the full video with sound and captions, then check a short section without sound. Correct spelling, timing, line breaks, and any missing speech before publishing.",
          "If exporting a separate caption file, confirm its format and language settings match the platform. Keep a copy of the reviewed transcript so corrections can be reused.",
        ],
      },
    ],
    tools: ["CapCut", "DaVinci Resolve", "Adobe Premiere Pro"],
    related: ["video-editing/how-to-edit-a-video", "photo-editing/how-to-make-a-thumbnail"],
    next: { href: "/learn/video-editing", label: "Explore video editing guides" },
  },
  {
    slug: "photo-editing/how-to-edit-photos",
    area: "Photo Editing",
    title: "How do I edit a photo?",
    summary: "Make careful adjustments to framing, exposure, and color while preserving a clean original.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 7,
    topics: ["photo editing", "image editing", "color correction"],
    sections: [
      {
        heading: "Keep the original and define the goal",
        paragraphs: [
          "Before editing, make a copy or use a non-destructive editor so the original image remains available. Decide where the photo will be used and what needs improvement: framing, brightness, color balance, or distracting elements.",
          "A portrait, product image, and landscape may need different treatment. Make adjustments to support the subject rather than applying every available effect.",
        ],
      },
      {
        heading: "Adjust in a useful order",
        paragraphs: [
          "Crop and straighten first so you are judging the final composition. Then adjust exposure and contrast gently, check white balance, and refine color or detail only as needed.",
          "Zoom out regularly and compare the result with the original. Strong sharpening, saturation, or noise reduction can create artifacts; subtle edits often preserve more detail and look more natural.",
        ],
      },
      {
        heading: "Export for the intended use",
        paragraphs: [
          "Choose dimensions and a file format suitable for the destination. JPEG is commonly used for photographs on the web, while PNG can preserve transparency; formats and platform requirements vary, so check the specific use.",
          "Resize a copy for sharing, use a descriptive filename, and review the exported image on the device where it will appear. If publishing a person's image, consider consent and any relevant privacy or usage rights.",
        ],
      },
    ],
    tools: ["Canva", "GIMP", "Adobe Photoshop"],
    checkedDate: "2026-09-29",
    sources: [
      { label: "Canva", url: "https://www.canva.com/" },
      { label: "GIMP: GNU Image Manipulation Program", url: "https://www.gimp.org/" },
      { label: "Adobe: Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
    ],
    related: ["photo-editing/best-photo-editing-apps", "photo-editing/how-to-make-a-thumbnail"],
    next: { href: "/learn/photo-editing/best-photo-editing-apps", label: "Compare photo editing tools" },
  },
  {
    slug: "photo-editing/best-photo-editing-apps",
    area: "Photo Editing",
    title: "How do I choose a photo editing app?",
    summary: "Choose an editor by device, editing goals, file formats, accessibility, and how much control you need.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 7,
    topics: ["photo editing apps", "photo editing software", "Canva", "GIMP"],
    sections: [
      {
        heading: "Match the app to the job",
        paragraphs: [
          "For cropping a photo or making a simple graphic, a lightweight mobile or browser editor may be enough. For detailed image adjustments, layers, or complex retouching, look for more precise controls and a workflow that suits your device.",
          "Decide whether you need batch edits, layers, background removal, RAW support, collaboration, or export controls. Test the features you need rather than choosing by a general popularity claim.",
        ],
      },
      {
        heading: "Compare representative options",
        paragraphs: [
          "Canva is oriented toward layouts and visual content with templates and editing features. GIMP is a desktop image editor with layers and detailed controls. Adobe Photoshop is a desktop and mobile image-editing product with a broad set of creative features. These tools serve different workflows; none is the right choice for everyone.",
          "Before choosing, check current device support, accessibility, file-format compatibility, free and paid plan limits, export options, and how projects are stored. Product features and pricing can change, so use official product information for current details.",
        ],
      },
      {
        heading: "Try a small real task",
        paragraphs: [
          "Use the same sample image in two candidate apps. Try to crop it, correct exposure, add a title if needed, and export a web-sized copy. Notice which interface makes the task understandable and whether the output matches your requirements.",
          "If you work with other people, check file handoff and collaboration before building a workflow around one tool. Keep original files and avoid uploading sensitive images unless you understand the service's privacy settings.",
        ],
      },
    ],
    tools: ["Canva", "GIMP", "Adobe Photoshop"],
    related: ["photo-editing/how-to-edit-photos", "photo-editing/how-to-make-a-thumbnail"],
    checkedDate: "2026-09-29",
    sources: [
      { label: "Canva", url: "https://www.canva.com/" },
      { label: "GIMP: GNU Image Manipulation Program", url: "https://www.gimp.org/" },
      { label: "Adobe: Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
    ],
    next: { href: "/learn/photo-editing/how-to-edit-photos", label: "Learn a photo editing workflow" },
  },
  {
    slug: "photo-editing/how-to-make-a-thumbnail",
    area: "Photo Editing",
    title: "How do I make a clear video thumbnail?",
    summary: "Use one clear focal point, readable text, strong contrast, and a crop that works at small sizes.",
    paragraphs: [],
    difficulty: "Beginner",
    estimatedMinutes: 6,
    topics: ["thumbnail design", "graphic design", "YouTube"],
    sections: [
      {
        heading: "Decide what the viewer should notice",
        paragraphs: [
          "A thumbnail is a small preview, so it should communicate the subject quickly. Choose one focal image or object and make sure it represents the video accurately rather than promising something the video does not deliver.",
          "Write a short working title for the image. If words add useful context, keep them brief; the video title already carries information, so the thumbnail does not need to repeat every word.",
        ],
      },
      {
        heading: "Build a readable composition",
        paragraphs: [
          "Place the subject and text so neither gets hidden by the platform interface. Use a clear visual hierarchy, sufficient contrast, and type large enough to read on a phone. Avoid clutter and small decorative details.",
          "Use images and fonts you have permission to use. Check the platform's current thumbnail dimensions and content rules before exporting because specifications may change.",
        ],
      },
      {
        heading: "Preview and improve",
        paragraphs: [
          "Preview the image at the small size where people will actually see it. If the main subject or words disappear, simplify the layout or strengthen contrast.",
          "Compare versions for clarity and accuracy, not just brightness. A useful thumbnail sets an honest expectation about the content and remains legible for people with different vision needs.",
        ],
      },
    ],
    tools: ["Canva", "GIMP", "Adobe Photoshop"],
    related: ["photo-editing/how-to-edit-photos", "video-editing/how-to-edit-a-video", "youtube/make-money-on-youtube"],
    next: { href: "/learn/video-editing", label: "Explore video editing" },
  },
];

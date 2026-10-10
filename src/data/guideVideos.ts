/**
 * BuildSkills YouTube Shorts shown on their matching guide. Details were read
 * from YouTube (via TubeAlfred) on 7 October 2026 (SEO Short on 8 October 2026).
 * uploadDate is YouTube's publish time as full ISO 8601 with timezone (checked 10 October 2026);
 * tests/video-schema.test.mjs fails if any uploadDate lacks a timezone.
 */
export type GuideVideo = {
  id: string;
  name: string;
  description: string;
  uploadDate: string;
  duration: string;
};

export const guideVideos: Record<string, GuideVideo> = {
  "websites/how-to-build-a-website": {
    id: "IfVTLSX70lg",
    name: "How to make a website?",
    description: "A short BuildSkills video on how to make a website, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-06T04:57:58-07:00",
    duration: "PT25S",
  },
  "mobile-apps/how-to-build-a-mobile-app": {
    id: "AUMDeh6oisc",
    name: "Learn how to make a mobile app",
    description: "A short BuildSkills video on making a mobile app, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-06T12:32:50-07:00",
    duration: "PT6S",
  },
  "websites/website-banane-ka-tarika-urdu": {
    id: "IfVTLSX70lg",
    name: "How to make a website?",
    description: "A short BuildSkills video on how to make a website, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-06T04:57:58-07:00",
    duration: "PT25S",
  },
  "mobile-apps/mobile-app-kaise-banaye-urdu": {
    id: "AUMDeh6oisc",
    name: "Learn how to make a mobile app",
    description: "A short BuildSkills video on making a mobile app, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-06T12:32:50-07:00",
    duration: "PT6S",
  },
  "seo/seo-kya-hai-urdu": {
    id: "ji_XcAy4Wts",
    name: "What Is SEO? Explained in 15 Seconds",
    description: "What is SEO? A simple explanation for beginners: how a useful page gets found on Google.",
    uploadDate: "2026-10-07T23:27:12-07:00",
    duration: "PT15S",
  },
  "seo/what-is-seo": {
    id: "ji_XcAy4Wts",
    name: "What Is SEO? Explained in 15 Seconds",
    description: "What is SEO? A simple explanation for beginners: how a useful page gets found on Google.",
    uploadDate: "2026-10-07T23:27:12-07:00",
    duration: "PT15S",
  },
};

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@buildskillpk";

/** Homepage intro video. Title, upload date and length taken from the YouTube watch page (checked 8 Oct 2026). */
export const HOME_VIDEO: GuideVideo = {
  id: "BIznhjP04Ac",
  name: "Welcome to BuildSkills | Learn Digital Skills Free (SEO, Websites, AI & More)",
  description:
    "BuildSkills is a free place to learn the digital skills that can change your future: SEO, websites, mobile apps, AI tools, YouTube, video and photo editing, and freelancing, step by step in simple words.",
  uploadDate: "2026-10-08T03:35:02-07:00",
  duration: "PT37S",
};

/** Hub page videos, keyed by area slug. Title, upload date and length from the YouTube watch page (checked 8 Oct 2026). */
export const hubVideos: Record<string, GuideVideo> = {
  websites: {
    id: "VHvjzLosklk",
    name: "How to Make a Website for Beginners | Class 1 – Part 1 | BuildSkills",
    description:
      "Class 1, Part 1 of the free BuildSkills beginner course on how to make a website. It starts from zero, step by step, so you can follow along even if you have never built a website before.",
    uploadDate: "2026-10-07T13:50:24-07:00",
    duration: "PT2M28S",
  },
};

/**
 * Guides that show a Short in the hero's right column (vertical player + subscribe button).
 * If it is the same video as the guide's in-article embed, the in-article copy is not shown.
 */
export const heroVideos: Record<string, GuideVideo> = {
  "seo/what-is-seo": guideVideos["seo/what-is-seo"],
  // Title, upload time and length from the YouTube watch page (checked 9 Oct 2026; approxDurationMs 15041).
  "mobile-apps/how-to-build-a-mobile-app": {
    id: "xZ2vWPP8Ulk",
    name: "How to Make an App Without Coding (Beginners)",
    description: "How to make an app without coding for beginners: free no-code steps, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-08T23:06:08-07:00",
    duration: "PT15S",
  },
  // Title, upload time and length from the YouTube watch page (checked 10 Oct 2026; lengthSeconds 15).
  "seo/how-to-get-website-on-google": {
    id: "5-FrUXNT5nc",
    name: "How to Get Your Website on Google (Free)",
    description: "How to get your website on Google for free, step by step for beginners, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-09T22:28:46-07:00",
    duration: "PT15S",
  },
  // Shown on the /learn/chatgpt-prompts hub (the hub URL shows this guide).
  // Title, upload time and length from the YouTube watch page (checked 10 Oct 2026; lengthSeconds 15).
  "chatgpt-prompts/useful-chatgpt-prompts": {
    id: "sLV9F-q6uwg",
    name: "How to Write Useful and Better ChatGPT Prompts",
    description: "How to write useful and better ChatGPT prompts for beginners, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-10T07:43:51-07:00",
    duration: "PT15S",
  },
};

/**
 * BuildSkills YouTube Shorts shown on their matching guide. Details were read
 * from YouTube (via TubeAlfred) on 7 October 2026 (SEO Short on 8 October 2026).
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
    uploadDate: "2026-10-06",
    duration: "PT25S",
  },
  "mobile-apps/how-to-build-a-mobile-app": {
    id: "AUMDeh6oisc",
    name: "Learn how to make a mobile app",
    description: "A short BuildSkills video on making a mobile app, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-06",
    duration: "PT6S",
  },
  "websites/website-banane-ka-tarika-urdu": {
    id: "IfVTLSX70lg",
    name: "How to make a website?",
    description: "A short BuildSkills video on how to make a website, with the full free guide on buildskills.com.pk.",
    uploadDate: "2026-10-06",
    duration: "PT25S",
  },
  "seo/what-is-seo": {
    id: "ji_XcAy4Wts",
    name: "What Is SEO? Explained in 15 Seconds",
    description: "What is SEO? A simple explanation for beginners: how a useful page gets found on Google.",
    uploadDate: "2026-10-08",
    duration: "PT15S",
  },
};

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@buildskillpk";

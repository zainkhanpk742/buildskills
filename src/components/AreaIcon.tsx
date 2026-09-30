const icons: Record<string, string> = {
  websites: "M4 6.5h16v11H4zM4 10h16",
  seo: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM16.2 16.2 20 20",
  "mobile-apps": "M8 3.5h8v17H8zM11 18.5h2",
  databases: "M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5",
  "business-software": "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  "digital-marketing": "M4 12h4l8-5v10l-8-5H4zM8 13.5v3.2",
  "content-creation": "M5 19.5 6.2 15 16.5 4.7a1.6 1.6 0 0 1 2.3 2.3L8.5 17.3z",
  "graphic-design": "M5 19l9.5-9.5M12 6.5l1.2-1.2a2 2 0 0 1 2.8 0l1.7 1.7a2 2 0 0 1 0 2.8L16.5 11",
  freelancing: "M4 8.5h16v10H4zM9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7",
  "online-business": "M4 9.5 12 4l8 5.5V20H4zM10 20v-6h4v6",
  facebook: "M8 10.5h8M8 14h5M6 5.5h12v13H6z",
  youtube: "M4 8.2A2.2 2.2 0 0 1 6.2 6h11.6A2.2 2.2 0 0 1 20 8.2v7.6a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 15.8zM11 9.5v5l4-2.5z",
  "x-twitter": "M6 6.5h12M6 12h12M6 17.5h8",
  instagram: "M7 4.5h10v15H7zM10 8.2h.1M9 16.5h6",
  tiktok: "M10 17.5V7.2M10 7.2c1.2 1.6 2.8 2.4 5 2.5",
  linkedin: "M8 11v6M8 8.2h.1M12 17v-3.2a2 2 0 0 1 4 0V17M4 5.5h16v13H4z",
  "ai-productivity": "M12 3.5 13.4 8 18 9.2 13.4 10.6 12 15.2 10.6 10.6 6 9.2 10.6 8z",
  "video-editing": "M4 7h12v10H4zM16 10.5l4-2v7l-4-2z",
  "photo-editing": "M5 6.5h14v11H5zM8 15.5l2.2-2.4 1.6 1.6L15 11l2 2.2",
  "ai-video-generation": "M5 7.5h10v9H5zM15 10.2l4-1.7v7l-4-1.7M8 5.2l.6 1.4",
  "chatgpt-prompts": "M6 6.5h12v8H9l-3 2.5z",
};

export function AreaIcon({ slug }: { slug: string }) {
  const d = icons[slug] ?? icons.websites;
  return (
    <svg className="area-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

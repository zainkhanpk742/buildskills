"use client";

import { useState } from "react";
import { YOUTUBE_CHANNEL, type GuideVideo } from "@/data/guideVideos";

/** Click-to-play YouTube Short: only a lazy thumbnail loads until the reader presses play. */
export function ShortEmbed({
  video,
  heading = "Watch the quick video",
  subscribeLabel = "Subscribe on YouTube",
}: {
  video: GuideVideo;
  heading?: string;
  subscribeLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const frame = { width: "100%", maxWidth: "18rem", aspectRatio: "9 / 16", borderRadius: "0.75rem", overflow: "hidden", background: "#000" } as const;
  return (
    <section aria-labelledby="short-title" style={{ marginBottom: "2rem" }}>
      <h2 id="short-title">{heading}</h2>
      {playing ? (
        <div style={frame}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.name}`}
          style={{ ...frame, position: "relative", display: "block", padding: 0, border: 0, cursor: "pointer" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.2.3 34 .3 34 .3s-21.2 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.5 8.5 0 0 0 6 6C12.8 47.7 34 47.7 34 47.7s21.2 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00" />
            <path d="M45 24 27 14v20z" fill="#fff" />
          </svg>
        </button>
      )}
      <p style={{ marginTop: "0.75rem" }}>
        <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener" className="text-link">{subscribeLabel}</a>
      </p>
    </section>
  );
}

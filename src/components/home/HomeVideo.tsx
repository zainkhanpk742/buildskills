"use client";

import { useState } from "react";
import { HOME_VIDEO, type GuideVideo } from "@/data/guideVideos";

/** "PT2M28S" -> "2:28" */
function badge(duration: string) {
  const m = /PT(?:(\d+)M)?(?:(\d+)S)?/.exec(duration);
  const min = Number(m?.[1] ?? 0);
  const sec = Number(m?.[2] ?? 0);
  return `${min}:${String(sec).padStart(2, "0")}`;
}

/**
 * Click-to-play 16:9 facade for a YouTube video (homepage intro by default).
 * Only the YouTube thumbnail loads until the visitor presses play; then a youtube-nocookie iframe replaces it.
 */
export function HomeVideoPlayer({
  eager = false,
  className = "",
  video = HOME_VIDEO,
  vertical = false,
}: {
  eager?: boolean;
  className?: string;
  video?: GuideVideo;
  /** 9:16 frame for YouTube Shorts; uses the 1280x720 thumbnail centre-cropped. */
  vertical?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`home-video-frame${vertical ? " is-vertical" : ""} ${className}`.trim()}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="home-video-facade" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.name}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${video.id}/${vertical ? "maxresdefault" : "hqdefault"}.jpg`}
            alt=""
            width={vertical ? 1280 : 480}
            height={vertical ? 720 : 360}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
          />
          <span className="home-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
          </span>
          <span className="home-video-length" aria-hidden="true">{badge(video.duration)}</span>
        </button>
      )}
    </div>
  );
}

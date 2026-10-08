"use client";

import { useState } from "react";
import { HOME_VIDEO } from "@/data/guideVideos";

/**
 * Click-to-play 16:9 facade for the homepage intro video.
 * Only the YouTube thumbnail loads until the visitor presses play; then a youtube-nocookie iframe replaces it.
 */
export function HomeVideoPlayer({ eager = false, className = "" }: { eager?: boolean; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const video = HOME_VIDEO;
  return (
    <div className={`home-video-frame ${className}`.trim()}>
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
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
          />
          <span className="home-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
          </span>
          <span className="home-video-length" aria-hidden="true">0:37</span>
        </button>
      )}
    </div>
  );
}

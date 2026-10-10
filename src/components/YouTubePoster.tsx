"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * YouTube thumbnail with a fallback chain. Missing YouTube thumbnails return 404 with a
 * 120x90 gray placeholder (which may still fire onload), so the poster moves to the next
 * URL on error or when the loaded image is only 120px wide.
 * Portrait Shorts: oar2.jpg (720x1280 portrait, not made for every video) -> maxresdefault.jpg
 * (1280x720, often missing on new videos) -> hqdefault.jpg (480x360, always exists; its 16:9
 * picture is letterboxed, so in a 9:16 frame it is zoomed to hide the black bars).
 * Landscape: hqdefault.jpg.
 */
export function youtubePosterSources(id: string, vertical: boolean): string[] {
  return vertical
    ? [`https://i.ytimg.com/vi/${id}/oar2.jpg`, `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`]
    : [`https://i.ytimg.com/vi/${id}/hqdefault.jpg`];
}

export function YouTubePoster({
  id,
  vertical = false,
  eager = false,
  width,
  height,
  style,
}: {
  id: string;
  vertical?: boolean;
  eager?: boolean;
  width?: number;
  height?: number;
  style?: CSSProperties;
}) {
  const sources = youtubePosterSources(id, vertical);
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  const next = useCallback(() => setIndex((i) => (i < sources.length - 1 ? i + 1 : i)), [sources.length]);
  const check = useCallback(
    (img: HTMLImageElement | null) => {
      if (img && img.complete && img.naturalWidth > 0 && img.naturalWidth <= 120) next();
    },
    [next],
  );
  // The image can finish loading before hydration, when React's onLoad/onError are not attached yet.
  useEffect(() => {
    const img = ref.current;
    if (!img || !img.complete) return;
    if (img.naturalWidth === 0) next();
    else check(img);
  }, [index, check, next]);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      key={sources[index]}
      src={sources[index]}
      alt=""
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      onLoad={(e) => check(e.currentTarget)}
      onError={next}
      style={vertical && sources[index].endsWith("/hqdefault.jpg") ? { ...style, transform: "scale(1.34)" } : style}
    />
  );
}

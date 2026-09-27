import Link from "next/link";
import type { ReactNode } from "react";

export function Mark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={onDark ? "mark on-dark" : "mark"} aria-hidden="true">
      <i />
    </span>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <b>Build</b>
      <em>Skills</em>
    </span>
  );
}

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8h9M8.5 4.5 12.5 8l-4 3.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

const variants = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  inverse: "btn btn-inverse",
  ghost: "btn btn-ghost",
  accent: "btn btn-accent",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  compact = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  compact?: boolean;
}) {
  return (
    <Link href={href} className={`${variants[variant]}${compact ? " btn-compact" : ""}`}>
      {children}
    </Link>
  );
}

export function Kicker({ children, tone = "signal" }: { children: ReactNode; tone?: "signal" | "faint" | "dark" }) {
  const toneClass = tone === "faint" ? " faint" : tone === "dark" ? " muted-dark" : "";
  return <p className={`kicker${toneClass}`}>{children}</p>;
}

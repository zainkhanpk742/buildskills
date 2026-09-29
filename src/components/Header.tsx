"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { ButtonLink, Mark, Wordmark } from "@/components/ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="page-wrap header-bar">
        <Link href="/" className="brand" aria-label="BuildSkills, home">
          <Mark />
          <Wordmark />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || (
              item.href !== "/learn" && pathname.startsWith(`${item.href}/`)
            );
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-cta">
          <ButtonLink href="/contact" variant="accent" compact>
            Suggest a guide
          </ButtonLink>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          <div className="page-wrap">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <div className="actions">
              <ButtonLink href="/contact">Suggest a guide</ButtonLink>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

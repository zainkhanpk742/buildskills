"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import { rankHits, type SearchHit } from "@/lib/searchFilter";
import { Arrow } from "@/components/ui";

export type GuideLink = { slug: string; href: string; title: string; summary: string; area: string };

/**
 * Homepage search. The guide library is not bundled into this component: the
 * search data is fetched from /search-index.json the first time it is needed.
 */
export function SearchIndex({ chips }: { chips: GuideLink[] }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchHit[] | null>(null);
  const loading = useRef(false);
  const router = useRouter();
  const listId = useId();

  const loadIndex = useCallback(() => {
    if (loading.current) return;
    loading.current = true;
    fetch("/search-index.json")
      .then((response) => (response.ok ? response.json() : []))
      .then((hits: SearchHit[]) => setIndex(hits))
      .catch(() => {
        loading.current = false;
      });
  }, []);

  // Read ?q= in the browser so the homepage itself can be prerendered as a
  // static page (search links such as /?q=seo still prefill the box).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      setQuery(q);
      loadIndex();
    }
  }, [loadIndex]);

  const results = useMemo(() => (query.trim() && index ? rankHits(index, query) : []), [query, index]);
  const pending = Boolean(query.trim()) && index === null;
  const label = query.trim()
    ? pending
      ? "Searching"
      : `${results.length} ${results.length === 1 ? "match" : "matches"}`
    : "Try a question";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const first = results[0];
    if (first) router.push(first.href);
  }

  return (
    <div className="finder">
      <form onSubmit={onSubmit} role="search">
        <label htmlFor="q">What do you want to learn?</label>
        <div className="finder-row">
          <input
            id="q"
            name="q"
            type="search"
            value={query}
            onFocus={loadIndex}
            onChange={(event) => {
              loadIndex();
              setQuery(event.target.value);
            }}
            placeholder="A question, a skill, or a problem"
            autoComplete="off"
            aria-controls={query.trim() && results.length > 0 ? listId : undefined}
            aria-autocomplete="list"
          />
          <button type="submit" className="finder-go">
            Search <Arrow />
          </button>
        </div>
      </form>
      <p className="finder-label" aria-live="polite">
        {label}
      </p>
      {query.trim() ? (
        pending ? null : results.length === 0 ? (
          <div className="finder-empty">
            <p>Nothing in the library matches that yet. Try a topic such as AI, websites, video editing, or freelancing.</p>
            <Link href="/contact" className="text-link">
              Suggest a guide <Arrow />
            </Link>
          </div>
        ) : (
          <ul id={listId} className="finder-hits">
            {results.map((hit) => (
              <li key={`${hit.kind}-${hit.href}`}>
                <Link href={hit.href}>
                  <span>{hit.kind}</span>
                  <strong>{hit.title}</strong>
                  <em>{hit.detail}</em>
                </Link>
              </li>
            ))}
          </ul>
        )
      ) : (
        <ul className="finder-chips">
          {chips.map((guide) => (
            <li key={guide.slug}>
              <Link href={guide.href}>{guide.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function QuestionExplorer({ questions }: { questions: GuideLink[] }) {
  const [active, setActive] = useState(questions[0]!.slug);
  const current = questions.find((item) => item.slug === active) ?? questions[0]!;

  return (
    <div className="explorer">
      <div className="explorer-stage">
        <p className="chip">{current.area}</p>
        <h2>{current.title}</h2>
        <p>{current.summary}</p>
        <Link href={current.href} className="text-link">
          Read the guide <Arrow />
        </Link>
      </div>
      <div className="explorer-list" role="listbox" aria-label="Questions">
        {questions.map((question) => {
          const selected = question.slug === current.slug;
          return (
            <button
              key={question.slug}
              type="button"
              role="option"
              aria-selected={selected}
              className={selected ? "explorer-item on" : "explorer-item"}
              onClick={() => setActive(question.slug)}
            >
              <span>{question.title}</span>
              <em>{question.area}</em>
            </button>
          );
        })}
      </div>
    </div>
  );
}

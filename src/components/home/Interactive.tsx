"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useMemo, useState, type FormEvent } from "react";
import { featuredQuestions, filterHits, guideBySlug } from "@/data/site";
import { Arrow } from "@/components/ui";

const prompts = [
  "seo/how-to-get-website-on-google",
  "websites/how-to-build-a-website",
  "ai-productivity/how-to-use-chatgpt",
  "video-editing/how-to-edit-a-video",
] as const;

export function SearchIndex({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const listId = useId();
  const results = useMemo(() => (query.trim() ? filterHits(query) : []), [query]);
  const label = query.trim() ? `${results.length} ${results.length === 1 ? "match" : "matches"}` : "Try a question";

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
            onChange={(event) => setQuery(event.target.value)}
            placeholder="A question, a skill, or a problem"
            autoComplete="off"
            aria-controls={listId}
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
        results.length === 0 ? (
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
          {prompts.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            return (
              <li key={slug}>
                <Link href={`/learn/${guide.slug}`}>{guide.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const questions = featuredQuestions.map((slug) => guideBySlug(slug)!);

export function QuestionExplorer() {
  const [active, setActive] = useState(questions[0]!.slug);
  const current = questions.find((item) => item.slug === active) ?? questions[0]!;

  return (
    <div className="explorer">
      <div className="explorer-stage">
        <p className="chip">{current.area}</p>
        <h2>{current.title}</h2>
        <p>{current.summary}</p>
        <Link href={`/learn/${current.slug}`} className="text-link">
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

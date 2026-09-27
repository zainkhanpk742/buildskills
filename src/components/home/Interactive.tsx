"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useMemo, useState, type FormEvent } from "react";
import { featuredQuestions, filterHits, guideBySlug, pathSteps } from "@/data/site";
import { Arrow } from "@/components/ui";

export function SearchIndex() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const listId = useId();
  const results = useMemo(() => filterHits(query), [query]);
  const label = query.trim() ? `${results.length} ${results.length === 1 ? "match" : "matches"}` : "Start with a question";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const first = results[0];
    if (first) router.push(first.href);
  }

  return (
    <div className="search-block">
      <form onSubmit={onSubmit} role="search">
        <label htmlFor="q" className="kicker">
          What are you trying to build?
        </label>
        <div className="search-line">
          <input
            id="q"
            name="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="A question, skill, or problem"
            autoComplete="off"
            aria-controls={listId}
            aria-autocomplete="list"
          />
          <button type="submit" className="search-submit">
            Search <Arrow />
          </button>
        </div>
      </form>
      <div className="index-head">
        <p className="kicker plain faint">{label}</p>
        <p className="kicker plain faint desk">In the library</p>
      </div>
      {results.length === 0 ? (
        <div className="empty">
          <p className="pretty muted" style={{ maxWidth: "36rem", margin: 0 }}>
            Nothing in the library matches that yet. Try a field — SEO, websites, apps — or describe the work and the studio will read it.
          </p>
          <Link href="/contact" className="search-submit" style={{ marginTop: "1rem" }}>
            Start a project <Arrow />
          </Link>
        </div>
      ) : (
        <ul id={listId} className="index-list">
          {results.map((hit, index) => (
            <li key={`${hit.kind}-${hit.href}`}>
              <Link href={hit.href} className="index-row">
                <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
                <span className="title">{hit.title}</span>
                <span className="meta">{hit.detail}</span>
              </Link>
            </li>
          ))}
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
    <div className="split">
      <div className="sticky-col">
        <p className="kicker plain faint">{current.area}</p>
        <h3 className="display-panel balance stack-4">{current.title}</h3>
        <p className="pretty muted stack-4" style={{ maxWidth: "28rem" }}>
          {current.summary}
        </p>
        <Link href={`/learn/${current.slug}`} className="search-submit stack-5">
          Read the guide <Arrow />
        </Link>
      </div>
      <div className="q-list" role="listbox" aria-label="Questions">
        {questions.map((question, index) => {
          const selected = question.slug === current.slug;
          return (
            <button
              key={question.slug}
              type="button"
              role="option"
              aria-selected={selected}
              className={selected ? "q-btn selected" : "q-btn"}
              onClick={() => setActive(question.slug)}
            >
              <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
              <span className="title">{question.title}</span>
              <span className="meta">{question.area}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PathList() {
  const [open, setOpen] = useState<string>(pathSteps[0]!.n);
  return (
    <ol className="path">
      {pathSteps.map((step) => {
        const expanded = open === step.n;
        return (
          <li key={step.n}>
            <button type="button" aria-expanded={expanded} onClick={() => setOpen(step.n)}>
              <span className="tabular" style={{ color: expanded ? "var(--signal)" : "var(--faint)", paddingTop: "0.2rem" }}>
                {step.n}
              </span>
              <span>
                <span className="title" style={{ display: "block" }}>
                  {step.title}
                </span>
                {expanded ? <span className="body">{step.body}</span> : null}
              </span>
            </button>
            {expanded ? (
              <Link href={step.href} className="lesson">
                Open this lesson
              </Link>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

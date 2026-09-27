"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("Build something");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [brief, setBrief] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = [`Name: ${name || "—"}`, `Email: ${email || "—"}`, `Intent: ${intent}`, "", message || "—"].join("\n");
    setBrief(next);
    setCopied(false);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: "1.5rem", maxWidth: "40rem" }}>
        <label className="field">
          Name
          <input required value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="field">
          Email
          <input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <fieldset className="choices">
          <legend style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.75rem" }}>What do you need?</legend>
          {["Learn something", "Build something", "Not sure yet"].map((option) => (
            <label key={option}>
              <input type="radio" name="intent" value={option} checked={intent === option} onChange={() => setIntent(option)} />
              {option}
            </label>
          ))}
        </fieldset>
        <label className="field">
          The problem
          <textarea
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="What exists today, who it is for, and what done looks like."
          />
        </label>
        <button type="submit" className="btn btn-primary" style={{ width: "fit-content" }}>
          Compose the brief
        </button>
      </form>
      {brief ? (
        <div className="brief">
          <p className="kicker">Your brief</p>
          <pre>{brief}</pre>
          <button type="button" className="btn btn-secondary" onClick={copy}>
            {copied ? "Copied" : "Copy brief"}
          </button>
          <p className="muted" style={{ fontSize: "0.875rem", maxWidth: "36rem" }}>
            Copy it into the channel you already use with BuildSkills. The brief stays on this page until you leave — it is not sent to a server.
          </p>
        </div>
      ) : null}
    </>
  );
}

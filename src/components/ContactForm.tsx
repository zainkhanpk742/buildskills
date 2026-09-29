"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("Suggest a guide topic");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [brief, setBrief] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = [
      `Topic: ${intent}`,
      ...(name ? [`Name: ${name}`] : []),
      ...(email ? [`Email: ${email}`] : []),
      "",
      message,
    ].join("\n");
    setBrief(next);
    setCopied(false);
    setCopyMessage("");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setCopyMessage("Copied. Paste this message into the contact channel you prefer.");
    } catch {
      setCopied(false);
      setCopyMessage("Clipboard access is unavailable. Select and copy the message above.");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: "1.5rem", maxWidth: "40rem" }}>
        <label className="field">
          Name (optional)
          <input autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="field">
          Email (optional)
          <input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <fieldset className="choices">
          <legend style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.75rem" }}>What is your message about?</legend>
          {["Suggest a guide topic", "Report outdated information", "Report a broken link", "Suggest a useful tool", "Other question"].map((option) => (
            <label key={option}>
              <input type="radio" name="intent" value={option} checked={intent === option} onChange={() => setIntent(option)} />
              {option}
            </label>
          ))}
        </fieldset>
        <label className="field">
          Your message
          <textarea
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Share the question, correction, or tool suggestion. Please do not include sensitive personal information."
          />
        </label>
        <button type="submit" className="btn btn-primary" style={{ width: "fit-content" }}>
          Prepare message
        </button>
      </form>
      {brief ? (
        <div className="brief">
          <p className="kicker">Your message</p>
          <pre>{brief}</pre>
          <button type="button" className="btn btn-secondary" onClick={copy}>
            {copied ? "Copied" : "Copy brief"}
          </button>
          <p className="muted" aria-live="polite" style={{ fontSize: "0.875rem", maxWidth: "36rem" }}>
            {copyMessage || "This message is prepared in your browser only; it is not sent to a server."}
          </p>
        </div>
      ) : null}
    </>
  );
}

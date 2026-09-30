"use client";

import { useState, type FormEvent } from "react";

const TO = "salimpk742@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("Suggest a guide topic");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const [brief, setBrief] = useState("");

  function buildBody() {
    return [
      `Topic: ${intent}`,
      ...(name ? [`Name: ${name}`] : []),
      `Reply to: ${email}`,
      "",
      message,
    ].join("\n");
  }

  function gmailUrl(body: string) {
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: TO,
      su: `BuildSkills: ${intent}`,
      body,
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = buildBody();
    setBrief(next);
    setCopied(false);
    const url = gmailUrl(next);
    const tab = window.open(url, "_blank", "noopener,noreferrer");
    if (tab) {
      setStatus("Gmail opened in a new tab. Press Send there. The message is not delivered until you do.");
      return;
    }
    window.location.href = url;
    setStatus("If Gmail did not open, copy the message below and email it to salimpk742@gmail.com.");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(`To: ${TO}\n\n${brief}`);
      setCopied(true);
      setStatus("Copied. Paste it into Gmail or any email app, addressed to salimpk742@gmail.com.");
    } catch {
      setCopied(false);
      setStatus("Copy is blocked in this browser. Select the message below and email it to salimpk742@gmail.com.");
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
          Your email
          <input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
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
            placeholder="Share the question, correction, or tool suggestion. Please do not include passwords or payment details."
          />
        </label>
        <button type="submit" className="btn btn-primary" style={{ width: "fit-content" }}>
          Open Gmail to send
        </button>
      </form>
      {brief ? (
        <div className="brief">
          <p className="kicker">Your message</p>
          <pre>{brief}</pre>
          <button type="button" className="btn btn-secondary" onClick={copy}>
            {copied ? "Copied" : "Copy message"}
          </button>
          <p className="muted" aria-live="polite" style={{ fontSize: "0.875rem", maxWidth: "36rem" }}>
            {status}
          </p>
        </div>
      ) : null}
    </>
  );
}
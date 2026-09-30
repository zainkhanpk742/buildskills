import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Contact BuildSkills",
  description:
    "Email BuildSkills at salimpk742@gmail.com to suggest a guide, report an error, or ask a question about the site.",
  path: "/contact",
});

export default function Page() {
  return (
    <Interior
      kicker="Contact"
      title="Contact BuildSkills"
      lede="Email salimpk742@gmail.com. Use it to suggest a guide, report a wrong fact or a broken link, or ask about the site."
    >
      <div className="prose" style={{ marginBottom: "2rem" }}>
        <p>
          Write to <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a>. The form opens a Gmail message with your text filled in. You still press Send in Gmail. If Gmail does not open, copy the message and send it yourself. This site does not store the message.
        </p>
      </div>
      <ContactForm />
    </Interior>
  );
}

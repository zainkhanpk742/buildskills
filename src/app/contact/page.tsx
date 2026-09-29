import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Contact and guide suggestions",
  description: "Suggest a practical guide, report outdated information or a broken link, or share a useful digital tool.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <Interior
      kicker="Contact"
      title="Help make the learning library more useful."
      lede="Suggest a topic, report outdated information or a broken link, or recommend a tool worth explaining. Your message is prepared in your browser and is not sent automatically."
    >
      <ContactForm />
    </Interior>
  );
}

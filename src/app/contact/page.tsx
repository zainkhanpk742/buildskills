import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Describe what you want to learn or build. BuildSkills turns it into a clear project brief.",
};

export default function Page() {
  return (
    <Interior
      kicker="Contact"
      title="Tell us what you are trying to build."
      lede="A project starts as a clear brief: who it is for, what it must do, and whether you want to learn it or have it made. Write that here."
    >
      <ContactForm />
    </Interior>
  );
}

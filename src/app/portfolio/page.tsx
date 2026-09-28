import type { Metadata } from "next";
import { Interior } from "@/components/library";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description: "BuildSkills publishes project case studies only when real work is ready to share.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Interior
      kicker="Work"
      title="No public case studies yet."
      lede="We do not invent clients, results, or screenshots. Public project examples will appear here when the work is complete and we have permission to share it."
    >
      <p className="muted" style={{ maxWidth: "40rem" }}>
        Until then, explore the studio&apos;s services or use the learning library
        to see the practical approach behind the work.
      </p>
      <div className="actions" style={{ marginTop: "2.5rem" }}>
        <ButtonLink href="/services">See services</ButtonLink>
        <ButtonLink href="/learn" variant="secondary">
          Explore learning
        </ButtonLink>
      </div>
    </Interior>
  );
}

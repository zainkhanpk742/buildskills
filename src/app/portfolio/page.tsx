import type { Metadata } from "next";
import { Interior } from "@/components/library";
import { ProjectBoard } from "@/components/home/Sections";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description: "A place for real BuildSkills projects: websites, business software, and search programs.",
};

export default function Page() {
  return (
    <Interior
      kicker="Work"
      title="Projects, when they are ready to show."
      lede="These frames are the portfolio. A real screenshot, a real name, and a real link belong here. Nothing on this page is a made-up client."
    >
      <ProjectBoard />
      <div className="actions" style={{ marginTop: "2.5rem" }}>
        <ButtonLink href="/contact">Start a project</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          See the studio
        </ButtonLink>
      </div>
    </Interior>
  );
}

import type { Metadata } from "next";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How BuildSkills handles information. No account is required to read the library.",
};

export default function Page() {
  return (
    <Interior kicker="Legal" title="Privacy" lede="The library is public. You do not need an account to read it.">
      <div className="prose">
        <p>Pages you read are ordinary web requests. A host may keep standard technical logs, such as a browser type and the time of a request, to keep the site available and secure.</p>
        <p>The project brief on the contact page is composed in your browser. It is not uploaded. If you copy it and send it yourself, that message lives in whatever channel you chose.</p>
        <p>BuildSkills does not sell personal information. If a form later sends a message to the studio, this page will say exactly what is stored and why.</p>
      </div>
    </Interior>
  );
}

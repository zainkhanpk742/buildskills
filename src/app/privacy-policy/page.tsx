import type { Metadata } from "next";
import { Interior } from "@/components/library";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How BuildSkills handles information. No account is required to read the library.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <Interior kicker="Legal" title="Privacy" lede="The library is public. You do not need an account to read it.">
      <div className="prose">
        <p>Pages you read are ordinary web requests. A host may keep standard technical logs, such as a browser type and the time of a request, to keep the site available and secure.</p>
        <p>The optional message on the contact page is composed in your browser. It is not uploaded or sent automatically. If you copy and send it yourself, that message is handled by the channel you choose.</p>
        <p>BuildSkills does not sell personal information. Name and email are optional fields in the message composer; they are only included if you choose to provide them.</p>
      </div>
    </Interior>
  );
}

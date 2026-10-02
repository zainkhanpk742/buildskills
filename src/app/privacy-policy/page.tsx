import type { Metadata } from "next";
import { Interior } from "@/components/library";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How BuildSkills uses cookies, analytics, and advertising, including Google AdSense, and how to opt out. Last updated 30 September 2026.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <Interior
      kicker="Legal"
      title="Privacy Policy"
      lede="BuildSkills is a free public learning site. You do not need an account to read it. This policy explains what information the site and its partners may collect. Last updated 30 September 2026."
    >
      <div className="prose">
        <p>
          The site is published by BuildSkills. Questions about this policy go to{" "}
          <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a>.
        </p>
        <h2>Information you give us</h2>
        <p>
          Reading a guide does not require your name or email. If you email us, we receive the address you send from and the message you write. We use that only to reply. We do not sell personal information.
        </p>
        <h2>Information collected automatically</h2>
        <p>
          The host may keep standard server logs, such as browser type, referring page, and the time of a request, to keep the site available and secure. If Google Analytics is enabled, it collects usage data such as pages viewed, approximate location, and device type. You can opt out of Google Analytics with the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Google Analytics Opt-out Browser Add-on</a>.
        </p>
        <h2>Cookies</h2>
        <p>
          A cookie is a small file stored on your device. BuildSkills and third-party vendors, including Google, use cookies to serve ads based on a visit to this site or other sites, to measure traffic, and to remember preferences.
        </p>
        <h2>Google AdSense and the DoubleClick cookie</h2>
        <p>
          Google, as a third-party vendor, uses cookies to serve ads on this site. Google&apos;s use of advertising cookies, including the DoubleClick DART cookie, enables it and its partners to serve ads based on your visit to this site and other sites on the Internet.
        </p>
        <p>You can opt out of personalized advertising in any of these ways:</p>
        <ul>
          <li>
            <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings</a>
          </li>
          <li>
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">aboutads.info</a> for participating companies
          </li>
          <li>
            <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noreferrer">Your Online Choices</a> if you are in Europe
          </li>
        </ul>
        <p>
          More detail is in Google&apos;s{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">advertising technologies policy</a>{" "}
          and{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">privacy policy</a>.
        </p>
        <h2>GDPR rights</h2>
        <p>
          If the GDPR applies to you, you may ask for access to personal data we hold, correction, deletion, restriction, or a copy, and you may object to processing based on legitimate interests. Email{" "}
          <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a>. You may also complain to your local data protection authority.
        </p>
        <h2>CCPA rights</h2>
        <p>
          If the California Consumer Privacy Act applies to you, you may request to know, delete, or correct personal information, and you may opt out of the sale or sharing of personal information. We do not sell personal information for money. Email{" "}
          <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a> with the subject &quot;CCPA request&quot;.
        </p>
        <h2>Children</h2>
        <p>
          The site is written for a general audience, including students. It is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has sent us personal information, email{" "}
          <a href="mailto:salimpk742@gmail.com">salimpk742@gmail.com</a> and we will delete it.
        </p>
        <h2>Changes</h2>
        <p>If this policy changes, the date at the top of the page will change. Continued use of the site after that date means you have seen the updated policy.</p>
      </div>
    </Interior>
  );
}

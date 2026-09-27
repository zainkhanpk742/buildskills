import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildskills.com.pk"),
  title: { default: "BuildSkills — Learn. Build. Grow.", template: "%s | BuildSkills" },
  description: "Practical guides and digital services for websites, SEO, apps, databases, business software, content creation and online business.",
  keywords: ["website development", "SEO", "website traffic", "mobile app development", "business software", "databases", "online business", "digital skills"],
  openGraph: {
    title: "BuildSkills — Learn. Build. Grow.",
    description: "Learn digital skills, find practical answers, and build better digital products.",
    url: "https://buildskills.com.pk",
    siteName: "BuildSkills",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

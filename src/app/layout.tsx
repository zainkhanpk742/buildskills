import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildskills.com.pk"),
  title: { default: "BuildSkills — Learn something useful. Build something real.", template: "%s | BuildSkills" },
  description:
    "BuildSkills helps you find an answer, learn a practical skill, and have the work built. Websites, SEO, apps, and business software.",
  keywords: ["website development", "SEO", "website traffic", "mobile app development", "business software", "databases", "online business", "digital skills"],
  openGraph: {
    title: "BuildSkills — Learn something useful. Build something real.",
    description: "Find an answer, follow a learning path, or have the work built.",
    url: "https://buildskills.com.pk",
    siteName: "BuildSkills",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

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
  title: { default: "BuildSkills — Practical digital skills for everyone", template: "%s | BuildSkills" },
  description:
    "BuildSkills helps young people and beginners learn practical digital skills, understand useful tools, and follow clear step-by-step guides.",
  openGraph: {
    title: "BuildSkills — Practical digital skills for everyone",
    description: "Learn practical digital skills, explore useful tools, and follow clear guides.",
    url: "https://buildskills.com.pk",
    siteName: "BuildSkills",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BuildSkills — Practical digital skills for everyone",
    description: "Learn practical digital skills, explore useful tools, and follow clear guides.",
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

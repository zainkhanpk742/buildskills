import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteAnalytics } from "@/components/SiteAnalytics";

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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "BuildSkills — Practical digital skills for everyone",
    description: "Learn practical digital skills, explore useful tools, and follow clear guides.",
    url: "https://buildskills.com.pk",
    siteName: "BuildSkills",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BuildSkills" }],
  },
  twitter: {
    card: "summary",
    title: "BuildSkills — Practical digital skills for everyone",
    description: "Learn practical digital skills, explore useful tools, and follow clear guides.",
  },
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-3672700167787763",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3672700167787763" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3672700167787763"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SiteAnalytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
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
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "BuildSkills: Learn digital skills free. SEO, websites, mobile apps, AI and freelancing guides at buildskills.com.pk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildSkills — Practical digital skills for everyone",
    description: "Learn practical digital skills, explore useful tools, and follow clear guides.",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "BuildSkills: Learn digital skills free. SEO, websites, mobile apps, AI and freelancing guides at buildskills.com.pk" }],
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
      </head>
      <body>
        {/* AdSense loads after the page is idle so it does not delay the first paint.
            Site ownership stays verified by the meta tag above and /ads.txt. */}
        <Script
          id="adsense"
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3672700167787763"
          crossOrigin="anonymous"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK9VC2VGYW" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-MK9VC2VGYW');",
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

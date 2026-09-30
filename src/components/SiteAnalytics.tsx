import Script from "next/script";

function measurementId() {
  const value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return value && /^G-[A-Z0-9]+$/.test(value) ? value : null;
}

const ADSENSE_CLIENT = "ca-pub-3672700167787763";

function adsenseClient() {
  const value = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || ADSENSE_CLIENT;
  return /^ca-pub-\d+$/.test(value) ? value : ADSENSE_CLIENT;
}

export function SiteAnalytics() {
  const ga = measurementId();
  const adsense = adsenseClient();
  if (!ga && !adsense) return null;
  return (
    <>
      {ga ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      ) : null}
      {adsense ? (
        <Script
          id="adsense"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      ) : null}
    </>
  );
}

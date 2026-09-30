import Script from "next/script";

function measurementId() {
  const value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return value && /^G-[A-Z0-9]+$/.test(value) ? value : null;
}

export function SiteAnalytics() {
  const ga = measurementId();
  if (!ga) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
      </Script>
    </>
  );
}

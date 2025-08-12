import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Free Fasting Timer & Clock | FastingClock.com",
  description:
    "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
  alternates: {
    canonical: "https://fastingclock.com",
  },
  openGraph: {
    title: "Free Fasting Timer & Clock | FastingClock.com",
    description:
      "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
    url: "https://fastingclock.com",
    type: "website",
    images: [
      {
        url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
        width: 1200,
        height: 240,
        alt: "Free Fasting Timer & Clock - FastingClock.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fasting Timer & Clock | FastingClock.com",
    description:
      "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
    images: {
      url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
      alt: "Free Fasting Timer & Clock - FastingClock.com",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

        {/* CookieYes GDPR */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/e0796ebc7728c47cd8f63315/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}

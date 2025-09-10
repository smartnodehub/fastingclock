
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorReporter from "@/components/ErrorReporter";
import Image from "next/image";
import AdSenseScript from '@/components/ads/AdSenseScript';
import SidebarAds from '@/components/ads/SidebarAds';
import { CookieProvider } from '@/components/CookieProvider';
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/e0796ebc7728c47cd8f63315/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <CookieProvider>
          <ErrorBoundary>
            <GoogleAnalytics />
            <WebVitalsReporter />
            <ErrorReporter />
            {children}
            <Footer />
          </ErrorBoundary>
  </CookieProvider>
      </body>
    </html>
  );
}

        {/* Left sidebar AdSense ad (explicit, slot 8413444466) */}
        <div className="hidden lg:block fixed left-3 top-1/2 -translate-y-1/2 z-40">
          <ins className="adsbygoogle"
               style={{ display: "block", width: "300px", height: "600px" }}
               data-ad-client="ca-pub-7058115116105378"
               data-ad-slot="8413444466"
               data-ad-format="auto"
               data-full-width-responsive="false"></ins>
          <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
        </div>
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorReporter from "@/components/ErrorReporter";
import Image from "next/image";
import AdSenseScript from '@/components/ads/AdSenseScript';
import SidebarAds from '@/components/ads/SidebarAds';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Fasting Timer & Tracker | FastingClock.com",
  description: "Easily track your fasting with our free fasting timer and sleek fasting clock. Stay on schedule, improve health, and never miss a window—start tracking today!",
  verification: {
    google: "JX76zFCjhtttG2yEJ7AyLaHu-nLIN5oRB_KSSPQQlxc",
  },
  alternates: {
    canonical: "https://fastingclock.com",
  },
  openGraph: {
    title: "Free Fasting Timer & Tracker | FastingClock.com",
    description: "Easily track your fasting with our free fasting timer and sleek fasting clock. Stay on schedule, improve health, and never miss a window—start tracking today!",
    url: "https://fastingclock.com",
    type: "website",
    images: [
      {
        url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
        width: 1200,
        height: 240,
        alt: "Free Fasting Timer & Tracker - FastingClock.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fasting Timer & Tracker | FastingClock.com",
    description: "Easily track your fasting with our free fasting timer and sleek fasting clock. Stay on schedule, improve health, and never miss a window—start tracking today!",
    images: {
      url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
      alt: "Free Fasting Timer & Tracker - FastingClock.com",
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // If you have consent, wire it here (e.g., from a context)
  const consent = true;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AdSenseScript />

        {/* Desktop sidebars (hidden on mobile via Tailwind) */}

        <SidebarAds
          leftSlotId="YOUR_LEFT_SLOT_ID"
          rightSlotId="YOUR_RIGHT_SLOT_ID"
          enabled={consent}
        />

        {/* Right sidebar AdSense ad (explicit, slot 4170947120) */}
        <div className="hidden lg:block fixed right-3 top-1/2 -translate-y-1/2 z-40">
          <ins className="adsbygoogle"
               style={{ display: "block", width: "300px", height: "600px" }}
               data-ad-client="ca-pub-7058115116105378"
               data-ad-slot="4170947120"
               data-ad-format="auto"
               data-full-width-responsive="false"></ins>
          <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
        </div>

        <ErrorBoundary>
          {/* Logo priority load for LCP improvement */}
          <div style={{ display: "none" }}>
            <Image 
              src="/fasting-clock-logo.svg"
              alt="FastingClock Logo"
              width={200}
              height={50}
              priority
            />
          </div>

          <GoogleAnalytics />
          <WebVitalsReporter />
          <ErrorReporter />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}

// Last updated: 2025-08-08 - Trigger new build

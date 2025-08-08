import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorReporter from "@/components/ErrorReporter";
import Image from "next/image";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical logo image */}
        <link 
          rel="preload" 
          href="/fasting-clock-logo.svg" 
          as="image" 
          type="image/svg+xml"
        />

        {/* AdSense - deferred to avoid blocking rendering */}
        <script
          async
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058115116105378"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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

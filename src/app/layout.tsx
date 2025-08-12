import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fasting Clock",
  description: "Track your intermittent fasting with a simple, accurate timer.",
  metadataBase: new URL("https://fastingclock.com"),
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

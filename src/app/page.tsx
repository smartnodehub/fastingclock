// File: src/app/page.tsx
import Link from "next/link";
import { Suspense, lazy } from "react";
import Header        from "@/components/Header";
import IntroSection  from "@/components/IntroSection";
import ResourceLinks from "@/components/ResourceLinks";
import StructuredData from "@/components/StructuredData";
import MobileResponsiveAd from '@/components/ads/MobileResponsiveAd';
import { content }   from "@/content/content.en";
import { 
  generateBreadcrumbSchema, 
  generateWebsiteSchema, 
  generateOrganizationSchema,
  generateFAQSchema 
} from "@/lib/structured-data";

// Lazy load below-the-fold components
const BenefitList = lazy(() => import("@/components/BenefitList"));
const FAQ = lazy(() => import("@/components/FAQ"));

export const metadata = {
  title:       "Free Fasting Timer & Clock | FastingClock.com",
  description: "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
  alternates: {
    canonical: "https://fastingclock.com",
  },
  openGraph: {
    title: "Free Fasting Timer & Clock | FastingClock.com",
    description: "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
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
    description: "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
    images: {
      url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
      alt: "Free Fasting Timer & Clock - FastingClock.com",
    },
  },
};

// Generate structured data for homepage
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://fastingclock.com" }
]);

const websiteSchema = generateWebsiteSchema();
const organizationSchema = generateOrganizationSchema();
const faqSchema = generateFAQSchema(content.faqItems);

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">FastingClock – Intermittent Fasting Timer</h1>
        <p className="mt-2 text-slate-600">
          A clean, accurate, and free timer to help you stick to 16:8, 18:6, OMAD, or any custom fasting window.
        </p>
      </header>

      {/* Timer placeholder – keep your existing working timer component or logic here */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="mb-2 text-xl font-semibold">Start your fast</h2>
        <p className="mb-4 text-slate-600">Set your duration, start, and let the countdown run in the background.</p>
        {/* Your existing timer UI goes here */}
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Fasting duration (hours)</span>
            <input
              type="number"
              defaultValue={16}
              min={1}
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
          <div className="flex items-end">
            <button className="w-full rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-700">
              Start
            </button>
          </div>
        </div>
        <div className="mt-6 rounded-lg bg-slate-100 p-4 text-center text-lg font-semibold">
          00:00:00
        </div>
      </section>

      {/* SEO/content block ≥300 words */}
      <section className="prose prose-slate mt-10 max-w-none">
        <h2>What is intermittent fasting?</h2>
        <p>
          Intermittent fasting is a simple eating pattern that cycles between periods of eating and fasting. Rather than
          prescribing strict menus, it focuses on <em>when</em> you eat. Many people choose the 16:8 schedule—sixteen
          hours of fasting followed by an eight–hour eating window—while others try 18:6, 20:4, or a single daily meal
          (OMAD). Research suggests time–restricted eating can help with weight management, support metabolic health, and
          improve meal–time awareness. It’s not a magic trick; it’s a structure that can make consistent choices easier.
        </p>
        <h2>How FastingClock helps</h2>
        <p>
          FastingClock keeps the math off your plate. Set a duration, press start, and the countdown shows exactly when
          your fast ends. The layout is intentionally minimal—fast loads, large text, and controls that work on desktop and
          mobile. There’s no account to create; preferences can be stored locally in your browser so you can return to your
          routine without friction. Whether you’re easing into your first 12‑hour fast or maintaining a longer protocol,
          the live timer offers clarity and a small nudge to stay consistent.
        </p>
        <h2>Practical tips</h2>
        <p>
          Hydration helps most people fast comfortably; water, black coffee, and plain tea are common choices during the
          fasting window. Plan your first meal so the timer’s zero doesn’t catch you scrambling. If your schedule changes,
          just pause or reset—flexibility beats perfectionism. Remember that individual needs vary; what matters is finding
          a cadence you can sustain.
        </p>
        <h2>Disclaimer</h2>
        <p>
          FastingClock is an educational tool and does not provide medical advice. Intermittent fasting is not appropriate
          for everyone. Consult a qualified healthcare professional before starting, especially if you have medical
          conditions, take medication, are pregnant, or have a history of disordered eating.
        </p>
      </section>

      {/* AdSense unit (loads only after consent via CookieYes) */}
      <section className="mt-10">
        <div className="text-center text-sm text-slate-500">Sponsored</div>

        {/* Google AdSense script blocked until “advertisement” consent */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058115116105378"
          crossOrigin="anonymous"
          type="text/plain"
          data-cookieyes="advertisement"
        ></script>

        <ins
          className="adsbygoogle block w-full"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7058115116105378"
          data-ad-slot="3748465240"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <script
          type="text/plain"
          data-cookieyes="advertisement"
          dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }}
        />
      </section>

      <footer className="mt-12 text-center text-sm text-slate-500">
        <a className="underline hover:no-underline" href="/privacy-policy">
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}

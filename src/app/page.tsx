"use client";

// File: src/app/page.tsx

import { Suspense, lazy } from "react";
import TimerForm     from "@/components/TimerForm";
import BenefitList   from "@/components/BenefitList";
import FAQ            from "@/components/FAQ";
import MobileResponsiveAd from '@/components/ads/MobileResponsiveAd';
import { content }   from "@/content/content.en";
import { 
  generateFAQSchema 
} from "@/lib/structured-data";

// Lazy load below-the-fold components
const AdSense = () => (
  <section className="max-w-4xl mx-auto px-4 py-8">
    <MobileResponsiveAd slotId="3748465240" />
    <div className="mt-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7058115116105378"
        data-ad-slot="3748465240"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
      }}
    />
  </section>
);

const faqSchema = generateFAQSchema(content.faqItems);

const benefits = [
  { title: "Track Your Fasting", description: "Easily monitor your fasting and eating windows." },
  { title: "Customizable Plans", description: "Choose from popular fasting methods or set your own." },
  { title: "Stay Motivated", description: "Visualize your progress and stay on track." },
  { title: "Free and Easy", description: "No account required, just start fasting." },
];

const faqs = [
  { question: "What is intermittent fasting?", answer: "Intermittent fasting is an eating pattern that cycles between periods of fasting and eating." },
  { question: "How do I start fasting?", answer: "Choose a fasting method, set your timer, and begin your fast." },
  { question: "Is fasting safe?", answer: "Fasting is generally safe for healthy individuals, but consult a healthcare professional if you have concerns." },
  { question: "Can I drink water during fasting?", answer: "Yes, staying hydrated is important during fasting." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Fasting Clock – Intermittent Fasting Timer
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100">
          Track your fasting and eating windows with ease. Choose your fasting
          plan, start the timer, and stay on track for better health.
        </p>
      </section>

      {/* Timer Form */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <TimerForm />
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading benefits...</div>}>
          <BenefitList items={benefits} />
        </Suspense>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading FAQ...</div>}>
          <FAQ items={faqs} />
        </Suspense>
      </section>

      {/* AdSense Bottom */}
      <AdSense />
    </main>
  );
}

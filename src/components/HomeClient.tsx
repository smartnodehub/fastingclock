'use client';

import { Suspense, lazy, useState, useEffect } from "react";
import Header        from "@/components/Header";
import IntroSection  from "@/components/IntroSection";
import TimerForm     from "@/components/TimerForm";
import ResourceLinks from "@/components/ResourceLinks";
import MobileResponsiveAd from '@/components/ads/MobileResponsiveAd';
import { content }   from "@/content/content.en";
import Link from "next/link";

// Lazy load below-the-fold components
const BenefitList = lazy(() => import("@/components/BenefitList"));
const FAQ = lazy(() => import("@/components/FAQ"));

export default function HomeClient() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check localStorage for existing consent
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-gray-900 text-white">
      <Header />
      
      {/* Show timer only if cookies are accepted */}
      {cookiesAccepted ? (
        <TimerForm />
      ) : (
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">🍪 Cookie Consent Required</h2>
            <p className="text-xl text-gray-300 mb-8">
              To use our fasting timer and calculator, please accept cookies. 
              This helps us provide you with the best experience and show relevant content.
            </p>
            <p className="text-gray-400">
              You can still browse our blog and other content without accepting cookies.
            </p>
          </div>
        </section>
      )}

      <ResourceLinks />
      
      {/* Call-to-Action Section */}
      <section className="py-8 px-4 bg-blue-900 text-center">
        <h2 className="text-2xl font-bold mb-4">Master Intermittent Fasting with Expert Guidance</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Explore our comprehensive collection of <Link href="/blog" className="text-yellow-400 hover:text-yellow-300 underline">intermittent fasting guides</Link> and expert tips. 
          Learn everything from <Link href="/blog/getting-started-16-8-intermittent-fasting" className="text-yellow-400 hover:text-yellow-300 underline">16:8 fasting basics</Link> to 
          advanced strategies with our <Link href="/blog/best-fasting-apps-2025" className="text-yellow-400 hover:text-yellow-300 underline">recommended fasting apps</Link>.
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Explore Fasting Tips & Guides
        </Link>
      </section>

      {/* Mobile Ad below hero/intro */}
      <MobileResponsiveAd slotId="YOUR_MOBILE_SLOT_ID" enabled={cookiesAccepted} className="mt-4" />

      <IntroSection text={content.intro16to8} />
      <Suspense fallback={<div className="py-8 text-center text-gray-400">Loading benefits...</div>}>
        <BenefitList items={content.benefits} />
      </Suspense>
      <Suspense fallback={<div className="py-8 text-center text-gray-400">Loading FAQ...</div>}>
        <FAQ items={content.faqItems} />
      </Suspense>
    </main>
  );
}

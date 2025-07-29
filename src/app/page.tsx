import IntroSection from "../components/IntroSection";
import BenefitList  from "../components/BenefitList";
import FAQ          from "../components/FAQ";
import { content }  from "../content/content.en";

export const metadata = {
  title: "Fasting Clock – 16:8 Fasting Guide",
  description: "Learn the benefits of 16:8 fasting and track your fast with Fasting Clock",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 1. Intro */}
      <IntroSection text={content.intro16to8} />

      {/* 2. (Your existing TimerForm) */}
      {/* <TimerForm /> */}

      {/* 3. Helpful resources bar (if you have one) */}
      {/* <ResourceLinks /> */}

      {/* 4. Benefits */}
      <BenefitList items={content.benefits} />

      {/* 5. FAQ */}
      <FAQ items={content.faqItems} />
    </main>
  );
}
import React, { useEffect } from "react";
import { content } from "../content/content.en";

import IntroSection from "../components/IntroSection";
import BenefitList from "../components/BenefitList";
import FAQ from "../components/FAQ";
import TimerForm from "../components/TimerForm";
import ResourceLinks from "../components/ResourceLinks";

export default function Page() {
  useEffect(() => {
    try {
      const ads = window.adsbygoogle;
      if (ads && Array.isArray(ads)) {
        ads.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);


  return (
    <main className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)_200px] gap-4">
        {/* Vasak reklaamiala */}
        <div className="hidden lg:block">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "200px", height: "600px" }}
            data-ad-client="ca-pub-7058115116105378"
            data-ad-slot="3748465240"
            data-ad-format="vertical"
          ></ins>
        </div>

        {/* Keskne sisu */}
        <div>
          <IntroSection html={content.intro16to8} />
          <TimerForm />
          <ResourceLinks />
          <BenefitList benefits={content.benefits} />
          <FAQ items={content.faqItems} />
          {/* Keskne AdSense-lohk sisällön jälkeen */}
          <div className="my-8 text-center">
            <ins
              className="adsbygoogle"
import IntroSection from "../components/IntroSection";
import BenefitList  from "../components/BenefitList";
import FAQ          from "../components/FAQ";
import { content }  from "../content/content.en";

export const metadata = {
  title: "Fasting Clock – 16:8 Fasting Guide",
  description: "Learn the benefits of 16:8 fasting and track your fast with Fasting Clock",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 1. Intro */}
      <IntroSection text={content.intro16to8} />

      {/* 2. (Your existing TimerForm) */}
      {/* <TimerForm /> */}

      {/* 3. Helpful resources bar (if you have one) */}
      {/* <ResourceLinks /> */}

      {/* 4. Benefits */}
      <BenefitList items={content.benefits} />

      {/* 5. FAQ */}
      <FAQ items={content.faqItems} />
    </main>
  );
}
}

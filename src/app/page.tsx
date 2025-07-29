"use client";
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
              style={{ display: "block" }}
              data-ad-client="ca-pub-7058115116105378"
              data-ad-slot="3748465240"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>

        {/* Parem reklaamiala */}
        <div className="hidden lg:block">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "200px", height: "600px" }}
            data-ad-client="ca-pub-7058115116105378"
            data-ad-slot="3748465240"
            data-ad-format="vertical"
          ></ins>
        </div>

      </div>
    </main>
  );
}

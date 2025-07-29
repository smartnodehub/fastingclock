// File: src/app/page.tsx

import IntroSection  from "@/components/IntroSection";
import TimerForm     from "@/components/TimerForm";
import ResourceLinks from "@/components/ResourceLinks";
import BenefitList   from "@/components/BenefitList";
import FAQ           from "@/components/FAQ";
import { content }   from "@/content/content.en";

export const metadata = {
  title:       "Fasting Clock – 16:8 Fasting Guide",
  description: "Learn the benefits of 16:8 fasting and track your fast with Fasting Clock",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 1. SEO-optimized introduction */}
      <IntroSection text={content.intro16to8} />

      {/* 2. Fasting Timer form */}
      <TimerForm />

      {/* 3. Helpful Resources */}
      <ResourceLinks />

      {/* 4. Key Benefits section */}
      <BenefitList items={content.benefits} />

      {/* 5. FAQ section */}
      <FAQ items={content.faqItems} />
    </main>
  );
}

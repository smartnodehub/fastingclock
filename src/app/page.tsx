// File: src/app/page.tsx
import Header        from "@/components/Header";
import IntroSection  from "@/components/IntroSection";
import TimerForm     from "@/components/TimerForm";
import ResourceLinks from "@/components/ResourceLinks";
import BenefitList   from "@/components/BenefitList";
import FAQ           from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import { content }   from "@/content/content.en";
import { 
  generateBreadcrumbSchema, 
  generateWebsiteSchema, 
  generateOrganizationSchema,
  generateFAQSchema 
} from "@/lib/structured-data";

export const metadata = {
  title:       "Free Fasting Timer & Clock | FastingClock.com",
  description: "Track your intermittent fasting with our free fasting timer and intuitive fasting clock. Stay motivated, reach your goals, and start your journey today!",
  alternates: {
    canonical: "https://fastingclock.com",
    languages: {
      "en": "https://fastingclock.com/en",
      "es": "https://fastingclock.com/es",
      "de": "https://fastingclock.com/de",
      "fi": "https://fastingclock.com/fi",
      "x-default": "https://fastingclock.com",
    },
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
    <>
      <StructuredData data={[breadcrumbSchema, websiteSchema, organizationSchema, faqSchema]} />
      <main className="bg-gray-900 text-white">
        <Header />
        <TimerForm />
        <ResourceLinks />
        <IntroSection text={content.intro16to8} />
        <BenefitList items={content.benefits} />
        <FAQ items={content.faqItems} />
      </main>
    </>
  );
}

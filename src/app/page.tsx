
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

import StructuredData from "@/components/StructuredData";
import HomeClient from "@/components/HomeClient";
import SimpleCookieProvider from "@/components/SimpleCookieProvider";
import { content } from "@/content/content.en";
import { generateFAQSchema, generateBreadcrumbSchema, generateWebsiteSchema, generateOrganizationSchema } from "@/lib/structured-data";

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
      <SimpleCookieProvider>
        <HomeClient />
      </SimpleCookieProvider>
    </>
  );
}

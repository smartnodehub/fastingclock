// File: src/app/privacy/page.tsx
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = {
  title: "Privacy Policy | FastingClock.com",
  description: "Read our privacy policy to understand how we protect your data when using our free fasting timer and fasting clock services.",
  alternates: {
    canonical: "https://fastingclock.com/privacy",
  },
};

// Generate breadcrumb schema for privacy page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://fastingclock.com" },
  { name: "Privacy Policy", url: "https://fastingclock.com/privacy" }
]);

export default function PrivacyPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Free Fasting Timer
          </Link>
          
          <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-gray-300">
            Last updated: July 30, 2025
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Information We Collect</h2>
          <p>
            FastingClock.com is committed to protecting your privacy. Our free fasting timer operates locally in your browser 
            and does not collect personal data about your fasting habits.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use Google Analytics to understand how visitors use our fasting clock and improve our services. 
            This includes anonymous usage statistics and general location data.
          </p>

          <h2>Cookies</h2>
          <p>
            We use minimal cookies for site functionality and analytics. You can disable cookies in your browser settings.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 underline">contact us</Link>.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Your Free Fasting Timer
          </Link>
        </div>
      </div>
    </>
  );
}

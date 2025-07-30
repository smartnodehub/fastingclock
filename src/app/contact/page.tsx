// File: src/app/contact/page.tsx
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = {
  title: "Contact Us | FastingClock.com",
  description: "Contact the FastingClock.com team for support with our free fasting timer and fasting clock tools.",
  alternates: {
    canonical: "https://fastingclock.com/contact",
  },
};

// Generate breadcrumb schema for contact page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://fastingclock.com" },
  { name: "Contact", url: "https://fastingclock.com/contact" }
]);

export default function ContactPage() {
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
          
          <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-gray-300">
            Have questions about our free fasting timer or intermittent fasting in general?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                We&apos;re here to help you succeed with your intermittent fasting journey using our 
                <Link href="/" className="text-yellow-400 hover:text-yellow-300 underline"> fasting clock</Link> and timer tools.
              </p>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Support Topics:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Free fasting timer questions</li>
                  <li>• Intermittent fasting guidance</li>
                  <li>• Technical support</li>
                  <li>• Feature requests</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Response Time:</h3>
                <p className="text-gray-300">We typically respond within 24-48 hours.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Resources</h2>
            <div className="space-y-3">
              <Link 
                href="/blog/getting-started-16-8-intermittent-fasting" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-medium text-white">Getting Started Guide</h3>
                <p className="text-gray-400 text-sm">Learn 16:8 intermittent fasting basics</p>
              </Link>
              
              <Link 
                href="/blog/best-fasting-apps-2025" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-medium text-white">Best Fasting Apps</h3>
                <p className="text-gray-400 text-sm">Compare top fasting applications</p>
              </Link>
              
              <Link 
                href="/blog" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-medium text-white">Fasting Blog</h3>
                <p className="text-gray-400 text-sm">Expert tips and guides</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Try Our Free Fasting Timer
          </Link>
        </div>
      </div>
    </>
  );
}

import BlogList from "@/components/BlogList";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";

export const metadata = {
  title: "Free Fasting Timer Blog | FastingClock.com",
  description: "Master intermittent fasting with our free fasting timer guides and fasting clock tips. Expert advice, proven strategies, and practical insights—start reading now!",
  alternates: {
    canonical: "https://fastingclock.com/blog",
  },
  openGraph: {
    title: "Free Fasting Timer Blog | FastingClock.com",
    description: "Master intermittent fasting with our free fasting timer guides and fasting clock tips. Expert advice, proven strategies, and practical insights—start reading now!",
    url: "https://fastingclock.com/blog",
    type: "website",
    images: [
      {
        url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
        width: 1200,
        height: 240,
        alt: "Free Fasting Timer Blog - FastingClock.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fasting Timer Blog | FastingClock.com",
    description: "Master intermittent fasting with our free fasting timer guides and fasting clock tips. Expert advice, proven strategies, and practical insights—start reading now!",
    images: {
      url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
      alt: "Free Fasting Timer Blog - FastingClock.com",
    },
  },
};

// Generate breadcrumb schema for blog page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://fastingclock.com" },
  { name: "Blog", url: "https://fastingclock.com/blog" }
]);

export default function BlogPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest from the Fasting Clock Blog</h1>
          <p className="text-gray-300 text-lg mb-6">
            Discover tips, insights, and guides to help you succeed with intermittent fasting
          </p>
          <Link 
            href="/" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Your Fast Now - Free Timer
          </Link>
        </div>
        
        <BlogList />
      </div>
    </>
  );
}

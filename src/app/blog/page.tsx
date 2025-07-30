import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Free Fasting Timer Blog | FastingClock.com",
  description: "Master intermittent fasting with our free fasting timer guides and fasting clock tips. Expert advice, proven strategies, and practical insights—start reading now!",
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
        alt: "Fasting Clock Blog - Intermittent Fasting Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Fasting Clock",
    description: "Latest articles on intermittent fasting, nutrition, and wellness. Discover expert tips, science-backed insights, and practical guides for your health journey.",
    images: ["https://fastingclock.com/fastingclock-logo-adsense-5to1.png"],
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest from the Fasting Clock Blog</h1>
        <p className="text-gray-300 text-lg">
          Discover tips, insights, and guides to help you succeed with intermittent fasting
        </p>
      </div>
      
      <BlogList />
    </div>
  );
}

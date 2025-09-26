import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Common Intermittent Fasting Mistakes to Avoid",
  description:
    "Avoid these 5 intermittent fasting mistakes that can block your progress. Learn how to fast smarter and healthier.",
  alternates: { canonical: "https://fastingclock.com/blog/fasting-mistakes" },
  openGraph: {
    type: "article",
    url: "https://fastingclock.com/blog/fasting-mistakes",
    siteName: "Fasting Clock",
    title: "5 Common Intermittent Fasting Mistakes to Avoid",
    description:
      "Avoid these 5 intermittent fasting mistakes that can block your progress. Learn how to fast smarter and healthier.",
  },
  twitter: {
    card: "summary",
    title: "5 Common Intermittent Fasting Mistakes to Avoid",
    description:
      "Avoid mistakes like overeating, too little protein, and inconsistent schedules.",
  },
};

export default function BlogPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why am I not losing weight on intermittent fasting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often due to overeating in the eating window, low protein intake, or inconsistent fasting times.",
        },
      },
      {
        "@type": "Question",
        name: "Does coffee with milk break a fast?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Black coffee is fine, but milk or sugar adds calories and breaks the fast.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <h1>5 Common Intermittent Fasting Mistakes to Avoid</h1>

      <h2>Mistake 1: Overeating After Fasting</h2>
      <p>Avoid massive meals right after fasting—plan a balanced plate instead.</p>

      <h2>Mistake 2: Too Little Protein</h2>
      <p>Include protein with every meal to support satiety and muscle.</p>

      <h2>Mistake 3: Drinking Calories During the Fast</h2>
      <p>Stick to water, unsweetened tea, or black coffee.</p>

      <h2>Mistake 4: Inconsistent Fasting Windows</h2>
      <p>Be consistent—use a <a href="https://fastingclock.com/">fasting timer</a> to help.</p>

      <h2>Mistake 5: Poor Sleep and Stress</h2>
      <p>Lack of sleep and high stress can increase hunger and cravings.</p>
    </main>
  );
}
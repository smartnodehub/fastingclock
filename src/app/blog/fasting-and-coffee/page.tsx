import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intermittent Fasting and Coffee: What’s Allowed?",
  description:
    "Can you drink coffee during intermittent fasting? Learn what’s allowed, what breaks a fast, and how to enjoy coffee while fasting.",
  alternates: { canonical: "https://fastingclock.com/blog/fasting-and-coffee" },
  openGraph: {
    type: "article",
    url: "https://fastingclock.com/blog/fasting-and-coffee",
    siteName: "Fasting Clock",
    title: "Intermittent Fasting and Coffee: What’s Allowed?",
    description:
      "Can you drink coffee during intermittent fasting? Learn what’s allowed, what breaks a fast, and how to enjoy coffee while fasting.",
  },
  twitter: {
    card: "summary",
    title: "Intermittent Fasting and Coffee: What’s Allowed?",
    description:
      "Coffee during intermittent fasting: what’s safe, what breaks the fast.",
  },
};

export default function BlogPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does black coffee break a fast?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, black coffee has negligible calories and does not break a fast.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add milk or sugar to coffee while fasting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adding milk, cream, or sugar adds calories and breaks your fast.",
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

      <h1>Intermittent Fasting and Coffee: What’s Allowed?</h1>
      <p>
        Coffee is one of the most common questions in fasting. The good news:
        black coffee is allowed and even helps suppress hunger.
      </p>

      <h2>Safe During the Fast</h2>
      <ul>
        <li>Black coffee</li>
        <li>Plain unsweetened tea</li>
        <li>Water</li>
      </ul>

      <h2>What Breaks the Fast</h2>
      <ul>
        <li>Milk, cream, sugar</li>
        <li>Flavored syrups</li>
        <li>Bulletproof coffee (contains fat calories)</li>
      </ul>

      <h2>Best Practices</h2>
      <p>
        Enjoy your coffee plain during the fast, then add milk or other extras
        after your eating window opens.
      </p>

      <p>
        Stay consistent with your fasting schedule using our{" "}
        <a href="https://fastingclock.com/">free fasting timer</a>.
      </p>
    </main>
  );
}
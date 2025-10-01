import type { Metadata } from "next";
import { post } from "./post";

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: {
    canonical: `https://fastingclock.com/blog/${post.slug}`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: `https://fastingclock.com/blog/${post.slug}`,
    siteName: "Fasting Clock",
    title: post.title,
    description: post.description,
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I drink coffee during fasting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — black coffee, black tea, and water are fine. Avoid sugar and milk."
      }
    },
    {
      "@type": "Question",
      "name": "Will I lose muscle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Keep protein intake adequate and do resistance training."
      }
    },
    {
      "@type": "Question",
      "name": "How soon will I see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some people notice reduced appetite and small weight loss in 2–4 weeks. Long-term changes take consistency."
      }
    }
  ]
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml:
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        <p><em>{post.description}</em></p>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </main>
  );
}

// File: src/app/privacy/page.tsx
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Fasting Clock",
  description:
    "Fasting Clock privacy policy: data we collect, cookies, Google AdSense, analytics, your choices and rights.",
  alternates: {
    canonical: "https://fastingclock.com/privacy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://fastingclock.com/privacy",
    siteName: "Fasting Clock",
    title: "Privacy Policy – Fasting Clock",
    description:
      "Fasting Clock privacy policy: data we collect, cookies, Google AdSense, analytics, your choices and rights.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – Fasting Clock",
    description:
      "Fasting Clock privacy policy: data we collect, cookies, Google AdSense, analytics, your choices and rights.",
  },
};

export default function PrivacyPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you sell my data to third parties?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. We do not sell or share your personal information with third parties. We use analytics and advertising services according to their own privacy policies.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the fasting timer without accepting cookies?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Basic use of the website does not require advertising cookies. However, certain features such as analytics and personalized ads may be limited until consent is given via the cookie banner.",
        },
      },
      {
        "@type": "Question",
        name: "How can I change or withdraw my cookie choices later?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can change or withdraw your consent at any time by opening the cookie settings from the CookieYes icon or banner available on the site.",
        },
      },
      {
        "@type": "Question",
        name: "Which third-party services do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We use Google AdSense for ads and Google Analytics for traffic measurement. We may also use affiliate platforms. Each provider processes data under its own privacy policy.",
        },
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://fastingclock.com/privacy#webpage",
    url: "https://fastingclock.com/privacy",
    name: "Privacy Policy – Fasting Clock",
    isPartOf: {
      "@type": "WebSite",
      name: "Fasting Clock",
      url: "https://fastingclock.com/",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://fastingclock.com/" },
        { "@type": "ListItem", position: 2, name: "Privacy" },
      ],
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml:
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@graph": [webPage, faq] }) }}
      />
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> September 25, 2025</p>

      <p>
        FastingClock.com (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use,
        and protect your information when you use our website.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Basic usage data such as your browser type, device, and IP address.</li>
        <li>Cookies that help us improve site performance and measure traffic.</li>
        <li>Information you provide if you contact us directly via the contact page.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To operate and improve our fasting timer and blog.</li>
        <li>To analyze site traffic and user behavior.</li>
        <li>To display relevant advertisements through Google AdSense and affiliate partners.</li>
      </ul>

      <h2>3. Cookies and Consent</h2>
      <p>
        Our site uses cookies to personalize content, analyze traffic, and serve ads. We use <strong>CookieYes Consent
        Mode v2</strong> to manage consent on this site. You can change or withdraw your consent at any time by opening
        the cookie settings from the cookie icon or banner.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We use Google AdSense for advertising and Google Analytics for measurement. These services may use cookies and
        collect usage data according to their own privacy policies.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You can request access, correction, or deletion of your personal information by contacting us via{" "}
        <a href="https://fastingclock.com/contact">our contact page</a>.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Privacy Policy, please contact us at{" "}
        <a href="https://fastingclock.com/contact">https://fastingclock.com/contact</a>.
      </p>

      <h2>FAQ</h2>
      <details>
        <summary>Do you sell my data to third parties?</summary>
        <p>No. We do not sell or share your personal information with third parties.</p>
      </details>
      <details>
        <summary>Can I use the fasting timer without accepting cookies?</summary>
        <p>
          Basic use of the website does not require advertising cookies. However, certain features (analytics,
          personalized ads) may be limited until you give consent in the cookie banner.
        </p>
      </details>
      <details>
        <summary>How can I change or withdraw my cookie choices later?</summary>
        <p>You can update your choices anytime from the CookieYes icon or banner available on the site.</p>
      </details>
      <details>
        <summary>Which third-party services do you use?</summary>
        <p>Google AdSense for ads and Google Analytics for measurement. We may also use affiliate networks.</p>
      </details>
    </main>
  );
}

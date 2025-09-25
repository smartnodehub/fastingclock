import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – Fasting Clock",
  description:
    "Terms of Service for Fasting Clock: permitted use, disclaimers, ads and affiliates, limitation of liability, and changes.",
  alternates: {
    canonical: "https://fastingclock.com/terms",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://fastingclock.com/terms",
    siteName: "Fasting Clock",
    title: "Terms of Service – Fasting Clock",
    description:
      "Terms of Service for Fasting Clock: permitted use, disclaimers, ads and affiliates, limitation of liability, and changes.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service – Fasting Clock",
    description:
      "Terms of Service for Fasting Clock.",
  },
};

export default function TermsPage() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://fastingclock.com/terms#webpage",
    url: "https://fastingclock.com/terms",
    name: "Terms of Service – Fasting Clock",
    isPartOf: {
      "@type": "WebSite",
      name: "Fasting Clock",
      url: "https://fastingclock.com/",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://fastingclock.com/" },
        { "@type": "ListItem", position: 2, name: "Terms" },
      ],
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml:
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> September 25, 2025</p>

      <h2>1. Use of the Website</h2>
      <ul>
        <li>You may use our fasting timer and blog for personal, non-commercial purposes.</li>
        <li>You agree not to misuse or attempt to disrupt the website’s functionality.</li>
      </ul>

      <h2>2. Content Disclaimer</h2>
      <ul>
        <li>The information on this site is provided for educational and informational purposes only.</li>
        <li>We are not medical professionals. Always consult a qualified healthcare provider before starting any fasting or diet program.</li>
      </ul>

      <h2>3. Advertisements and Affiliates</h2>
      <p>
        This site may display ads (Google AdSense) and affiliate links. We may earn commissions from qualifying
        purchases.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        We are not liable for any damages or losses resulting from the use of this site. Use of the fasting timer and
        content is at your own risk.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        We may update these Terms of Service at any time. Continued use of the site means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, please contact us at{" "}
        <a href="https://fastingclock.com/contact">https://fastingclock.com/contact</a>.
      </p>
    </main>
  );
}
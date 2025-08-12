// File: src/app/privacy/page.tsx
import React from "react";

export const metadata = {
  title: "Privacy Policy | FastingClock.com",
  description: "Learn how we collect, use, and safeguard your information when you use our website.",
  alternates: {
    canonical: "https://fastingclock.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Privacy Policy for FastingClock.com</h1>
      <p>
        At FastingClock.com, accessible from <a href="https://fastingclock.com">https://fastingclock.com</a>, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect non-personal information automatically, such as your browser type, operating system, and browsing activity. We do not collect personal information unless you voluntarily provide it (e.g., via a contact form).
      </p>

      <h2>Use of Cookies</h2>
      <p>
        Our site uses cookies to improve your experience. Cookies are small data files stored on your device. These cookies may be set by us or by third-party providers such as Google.
      </p>

      <h2>Google AdSense and Third-Party Cookies</h2>
      <p>
        We use Google AdSense to display ads. Google, as a third-party vendor, uses cookies to serve ads based on your visit to our site and other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads">https://www.google.com/settings/ads</a>.
      </p>

      <h2>How Google Uses Information</h2>
      <p>
        To learn how Google uses information from sites or apps that use its services, please visit:
        <a href="https://policies.google.com/technologies/partner-sites">https://policies.google.com/technologies/partner-sites</a>
      </p>

      <h2>Third-Party Privacy Policies</h2>
      <p>
        Our Privacy Policy does not apply to other advertisers or websites. Please consult the respective Privacy Policies of these third-party ad servers for more detailed information.
      </p>

      <h2>Your Privacy Rights (GDPR and CCPA)</h2>
      <p>
        If you are a resident of the European Economic Area (EEA) or California, you have certain rights under privacy laws. You may request access to, correction of, or deletion of your personal data.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you consent to our Privacy Policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:
        <a href="mailto:contact@fastingclock.com">contact@fastingclock.com</a>
      </p>
    </main>
  );
}

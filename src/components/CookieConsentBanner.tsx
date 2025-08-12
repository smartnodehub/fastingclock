import React, { useState } from "react";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleAccept = () => {
    setConsentGiven(true);
    setShowBanner(false);
    // Store consent in localStorage or cookies
    localStorage.setItem("cookieConsent", "true");
    // Load AdSense script dynamically
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058115116105378";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  };

  const handleDecline = () => {
    setShowBanner(false);
    localStorage.setItem("cookieConsent", "false");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <p className="text-sm">
        We use cookies to improve your experience and serve personalized ads. By clicking &quot;Accept&quot;, you consent to the use of cookies.
      </p>
      <div className="mt-2 flex justify-end space-x-4">
        <button
          onClick={handleDecline}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

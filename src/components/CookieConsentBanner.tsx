
'use client';

import { useState, useEffect } from 'react';

interface CookieConsentBannerProps {
  onConsentChange: (consent: boolean) => void;
}

export default function CookieConsentBanner({ onConsentChange }: CookieConsentBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
    } else {
      setShowBanner(false); // Don't show banner if choice was made
      onConsentChange(consent === 'true');
    }
  }, [onConsentChange]);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
    onConsentChange(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
    onConsentChange(false);
  };

  if (!isClient || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white text-sm">
          <p>
            We use cookies to enhance your experience and show personalized ads.
            <br className="hidden sm:block" />
            By clicking &quot;Accept All&quot;, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

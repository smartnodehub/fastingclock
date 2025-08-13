'use client';

import { useCookieConsent } from '@/components/CookieProvider';
import { useState } from 'react';

export default function CookieSettingsButton() {
  const { setCookiesAccepted } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setCookiesAccepted(true);
    setShowSettings(false);
    // Reload page to apply changes
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setCookiesAccepted(false);
    setShowSettings(false);
    // Reload page to apply changes
    window.location.reload();
  };

  if (!showSettings) {
    return (
      <button
        onClick={() => setShowSettings(true)}
        className="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm z-50 transition-colors"
        title="Cookie Settings"
      >
        🍪 Settings
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-600 rounded-lg p-4 z-50 max-w-sm">
      <h3 className="text-white font-semibold mb-2">Cookie Settings</h3>
      <p className="text-gray-300 text-sm mb-4">
        Change your cookie preferences for this website.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleDecline}
          className="px-3 py-1 text-sm border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded transition-colors"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => setShowSettings(false)}
          className="px-3 py-1 text-sm text-gray-400 hover:text-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import AdSenseScript from '@/components/ads/AdSenseScript';
import SidebarAds from '@/components/ads/SidebarAds';

interface CookieContextType {
  cookiesAccepted: boolean;
  setCookiesAccepted: (accepted: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}

interface CookieProviderProps {
  children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check localStorage for existing consent
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  const handleConsentChange = (consent: boolean) => {
    setCookiesAccepted(consent);
  };

  return (
    <CookieContext.Provider value={{ cookiesAccepted, setCookiesAccepted }}>
      {/* Only render ads and banner on client side */}
      {isClient && (
        <>
          <AdSenseScript enabled={cookiesAccepted} />
          {/* Desktop sidebars (hidden on mobile via Tailwind) */}
          <SidebarAds
            leftSlotId="YOUR_LEFT_SLOT_ID"
            rightSlotId="YOUR_RIGHT_SLOT_ID"
            enabled={cookiesAccepted}
          />
          {/* Right sidebar AdSense ad (explicit, slot 4170947120) */}
          {cookiesAccepted && (
            <div className="hidden lg:block fixed right-3 top-1/2 -translate-y-1/2 z-40">
              <ins className="adsbygoogle"
                   style={{ display: "block", width: "300px", height: "600px" }}
                   data-ad-client="ca-pub-7058115116105378"
                   data-ad-slot="4170947120"
                   data-ad-format="auto"
                   data-full-width-responsive="false"></ins>
              <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
            </div>
          )}
          <CookieConsentBanner onConsentChange={handleConsentChange} />
          <CookieSettingsButton />
        </>
      )}
      {children}
    </CookieContext.Provider>
  );
}

export default CookieProvider;

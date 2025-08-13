'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

export default function SimpleCookieProvider({ children }: CookieProviderProps) {
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

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <CookieContext.Provider value={{ cookiesAccepted, setCookiesAccepted }}>
      {children}
    </CookieContext.Provider>
  );
}

'use client';

import { useEffect, useState } from 'react';

interface AdSenseScriptProps {
  enabled?: boolean;
}

export default function AdSenseScript({ enabled = false }: AdSenseScriptProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Only load script if consent is given
    if (!enabled || scriptLoaded) return;

    // Check if script already exists
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    );
    if (existing) {
      setScriptLoaded(true);
      return;
    }

    const s = document.createElement('script');
    s.async = true;
    s.defer = true;
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058115116105378';
    s.crossOrigin = 'anonymous';
    s.onload = () => setScriptLoaded(true);
    document.head.appendChild(s);
  }, [enabled, scriptLoaded]);

  return null;
}

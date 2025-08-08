'use client';

import { useEffect } from 'react';

export default function AdSenseScript() {
  useEffect(() => {
    // Load AdSense script once
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    );
    if (existing) return;

    const s = document.createElement('script');
    s.async = true;
    s.defer = true;
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058115116105378';
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }, []);

  return null;
}

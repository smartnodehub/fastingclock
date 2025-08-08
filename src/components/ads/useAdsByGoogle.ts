'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function useAdsByGoogle(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === 'undefined') return;

    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [enabled]);
}

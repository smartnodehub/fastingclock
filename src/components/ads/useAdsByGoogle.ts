'use client';

import { useEffect } from 'react';

export function useAdsByGoogle(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [enabled]);
}

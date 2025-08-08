'use client';

import { useAdsByGoogle } from './useAdsByGoogle';

type MobileResponsiveAdProps = {
  slotId: string;
  enabled?: boolean;
  className?: string;
};

export default function MobileResponsiveAd({ slotId, enabled = true, className = '' }: MobileResponsiveAdProps) {
  useAdsByGoogle(enabled);

  return (
    <div className={`block lg:hidden w-full ${className}`}>
      {/* Reserve height to avoid CLS (adjust minHeight if needed) */}
      <div className="min-h-[280px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7058115116105378"
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

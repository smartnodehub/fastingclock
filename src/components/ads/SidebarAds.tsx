'use client';

import { useAdsByGoogle } from './useAdsByGoogle';

type SidebarAdsProps = {
  leftSlotId: string;   // e.g. "1234567890"
  rightSlotId: string;  // e.g. "0987654321"
  enabled?: boolean;    // gate by consent if needed
};

export default function SidebarAds({ leftSlotId, rightSlotId, enabled = true }: SidebarAdsProps) {
  useAdsByGoogle(enabled);

  return (
    <>
      {/* Left sidebar - hidden on <lg screens */}
      <ins
        className="adsbygoogle fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        style={{ display: 'block', width: 300, height: 600 }}
        data-ad-client="ca-pub-7058115116105378"
        data-ad-slot={leftSlotId}
        data-ad-format="vertical"
        data-full-width-responsive="false"
      />

      {/* Right sidebar - hidden on <lg screens */}
      <ins
        className="adsbygoogle fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        style={{ display: 'block', width: 300, height: 600 }}
        data-ad-client="ca-pub-7058115116105378"
        data-ad-slot={rightSlotId}
        data-ad-format="vertical"
        data-full-width-responsive="false"
      />
    </>
  );
}

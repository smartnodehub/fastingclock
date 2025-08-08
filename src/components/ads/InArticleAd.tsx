'use client';

import { useAdsByGoogle } from './useAdsByGoogle';

type InArticleAdProps = {
  slotId: string;
  enabled?: boolean;
  className?: string;
};

export default function InArticleAd({ slotId, enabled = true, className = '' }: InArticleAdProps) {
  useAdsByGoogle(enabled);

  return (
    <div className={`my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-7058115116105378"
        data-ad-slot={slotId}
        data-ad-format="fluid"
        data-ad-layout="in-article"
        data-full-width-responsive="true"
      />
    </div>
  );
}

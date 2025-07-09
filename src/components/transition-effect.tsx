'use client';

import { DetailedCherryBlossomIcon } from '@/components/icons/detailed-cherry-blossom-icon';
import { useTransition } from '@/context/transition-context';

export default function TransitionEffect() {
  const { isTransitioning } = useTransition();

  if (!isTransitioning) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-transition-fade">
      <DetailedCherryBlossomIcon className="w-48 h-48 text-primary animate-transition-blossom" />
    </div>
  );
}

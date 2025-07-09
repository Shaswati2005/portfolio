'use client';

import { DetailedCherryBlossomIcon } from '@/components/icons/detailed-cherry-blossom-icon';
import { CherryPetalIcon } from '@/components/icons/cherry-petal-icon';
import { useTransition } from '@/context/transition-context';

export default function TransitionEffect() {
  const { isTransitioning } = useTransition();

  if (!isTransitioning) {
    return null;
  }

  const createPetals = () =>
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      style: {
        '--petal-end-x': `${(Math.random() - 0.5) * 500}px`,
        '--petal-end-y': `${(Math.random() - 0.5) * 500}px`,
        '--petal-end-rotation': `${(Math.random() - 0.5) * 720}deg`,
        animationDelay: `${Math.random() * 0.2}s`,
        animationDuration: '1s',
        color: `hsl(var(--primary) / ${Math.random() * 0.5 + 0.5})`,
      } as React.CSSProperties,
    }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-transition-fade">
      <div className="relative flex items-center justify-center">
        {createPetals().map((petal) => (
          <CherryPetalIcon
            key={petal.id}
            className="absolute w-4 h-4 animate-petal-toss"
            style={petal.style}
          />
        ))}
        <DetailedCherryBlossomIcon className="relative z-10 w-48 h-48 text-primary animate-transition-blossom" />
      </div>
    </div>
  );
}

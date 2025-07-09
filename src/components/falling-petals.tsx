'use client';

import { useState, useEffect } from 'react';
import { CherryPetalIcon } from '@/components/icons/cherry-petal-icon';
import { useIsMobile } from '@/hooks/use-mobile';

const PETAL_COUNT = 20;

export default function FallingPetals() {
  const isMobile = useIsMobile();
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Only generate petals on the client and on non-mobile devices
    if (isMobile === false) {
      const generatedPetals = Array.from({ length: PETAL_COUNT }).map((_, i) => ({
        id: i,
        style: {
          '--petal-start-x': `${Math.random() * 100}vw`,
          '--petal-sway-x': `${(Math.random() - 0.5) * 15}vw`,
          '--petal-final-rotation': `${(Math.random() - 0.5) * 720}deg`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          color: `hsl(var(--primary) / ${Math.random() * 0.3 + 0.3})`,
        } as React.CSSProperties,
        size: Math.random() * 8 + 6,
      }));
      setPetals(generatedPetals);
    } else {
      setPetals([]);
    }
  }, [isMobile]);

  // Don't render anything until we know the screen size, or if it's mobile.
  if (isMobile !== false) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {petals.map(petal => (
        <CherryPetalIcon
          key={petal.id}
          className="absolute animate-falling-petal"
          style={{
            top: 0,
            left: 0,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            ...petal.style,
          }}
        />
      ))}
    </div>
  );
}

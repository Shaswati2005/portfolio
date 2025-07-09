'use client';

import { useState, useEffect, useCallback } from 'react';
import { CherryPetalIcon } from '@/components/icons/cherry-petal-icon';
import { useIsMobile } from '@/hooks/use-mobile';

export default function CursorPetalEffect() {
  const [petals, setPetals] = useState<any[]>([]);
  const isMobile = useIsMobile();
  
  const addPetal = useCallback((x: number, y: number) => {
    const id = new Date().getTime() + Math.random();
    const newPetal = {
      id,
      x,
      y,
      style: {
        '--petal-final-x': `${(Math.random() - 0.5) * 150}px`,
        '--petal-final-y': `${Math.random() * 150 + 50}px`,
        '--petal-final-rotation': `${(Math.random() - 0.5) * 540}deg`,
        '--petal-duration': `${Math.random() * 1 + 0.8}s`,
        color: `hsl(var(--primary) / ${Math.random() * 0.4 + 0.6})`,
      } as React.CSSProperties,
    };

    setPetals(prev => [...prev, newPetal]);
    
    setTimeout(() => {
      setPetals(prev => prev.filter(p => p.id !== id));
    }, 2000); // Cleanup after animation

  }, []);

  useEffect(() => {
    if (isMobile === false) {
      let inThrottle: boolean;
      const handleMouseMove = (e: MouseEvent) => {
          if (!inThrottle) {
              addPetal(e.clientX, e.clientY);
              inThrottle = true;
              setTimeout(() => inThrottle = false, 50);
          }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [addPetal, isMobile]);

  if (isMobile !== false) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-hidden">
      {petals.map(petal => (
        <CherryPetalIcon
          key={petal.id}
          className="absolute w-3 h-3 animate-cursor-petal"
          style={{
            top: petal.y,
            left: petal.x,
            ...petal.style,
          }}
        />
      ))}
    </div>
  );
}

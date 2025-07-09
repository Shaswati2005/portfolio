'use client';

import { useState, useEffect, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function WaterRippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((e: MouseEvent) => {
    // Ignore clicks on buttons and links to avoid double-animations
    const target = e.target as HTMLElement;
    if (target.closest('button, a')) {
        return;
    }

    const id = new Date().getTime();
    const newRipple: Ripple = {
      id,
      x: e.clientX,
      y: e.clientY,
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600); // Corresponds to animation duration
  }, []);

  useEffect(() => {
    window.addEventListener('click', addRipple);

    return () => {
      window.removeEventListener('click', addRipple);
    };
  }, [addRipple]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99] overflow-hidden">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/50 animate-water-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  );
}

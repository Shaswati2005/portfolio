'use client';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  playTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const playTransition = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Duration of the animation
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, playTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

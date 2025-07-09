'use client';

import { useState } from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CherryBranch from '@/components/cherry-branch';
import { CherryPetalIcon } from '@/components/icons/cherry-petal-icon';

interface AnimatedButtonProps extends ButtonProps {
  isAnimating: boolean;
  onAnimate: () => void;
  children: React.ReactNode;
}

const AnimatedButton = ({ children, isAnimating, onAnimate, ...props }: AnimatedButtonProps) => {
  const createPetals = () =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      style: {
        '--petal-end-x': `${(Math.random() - 0.5) * 250}px`,
        '--petal-end-y': `${(Math.random() - 0.5) * 250}px`,
        '--petal-end-rotation': `${(Math.random() - 0.5) * 720}deg`,
        animationDelay: `${Math.random() * 0.3}s`,
        color: `hsl(var(--primary) / ${Math.random() * 0.5 + 0.5})`,
      } as React.CSSProperties,
    }));

  return (
    <div className="relative">
      <Button
        {...props}
        onClick={onAnimate}
        className="relative transition-colors duration-300 ease-in-out data-[animating=true]:bg-accent data-[animating=true]:text-accent-foreground data-[animating=true]:animate-button-press"
        data-animating={isAnimating}
      >
        {children}
      </Button>
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 -m-2 rounded-full bg-primary/30 animate-halo" />
          {createPetals().map((petal) => (
            <CherryPetalIcon
              key={petal.id}
              className="absolute w-3 h-3 text-primary animate-petal-toss"
              style={petal.style}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function HeroSection() {
  const [workButtonAnimating, setWorkButtonAnimating] = useState(false);
  const [contactButtonAnimating, setContactButtonAnimating] = useState(false);

  const handleAnimate = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (setter) {
      setter(true);
      setTimeout(() => {
        setter(false);
      }, 1300);
    }
  };

  return (
    <section id="home" className="relative container flex flex-col items-center justify-center text-center py-20 md:py-32 overflow-hidden">
      <CherryBranch />
      <div className="flex justify-center animate-fade-in mb-8" style={{ animationDelay: '0.2s' }}>
        <Image
          src="https://placehold.co/500x500.png"
          alt="Abstract illustration of cherry blossoms"
          data-ai-hint="cherry blossoms abstract"
          width={500}
          height={500}
          className="rounded-full aspect-square object-cover border-8 border-primary/50 shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Elegant Designs, Powerful Code
        </h1>
        <p className="max-w-[600px] text-foreground/80 md:text-xl">
          Welcome to my digital garden. I'm a passionate developer and designer, creating beautiful and functional web experiences. Explore my work and let's build something amazing together.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <AnimatedButton
          isAnimating={workButtonAnimating}
          onAnimate={() => handleAnimate(setWorkButtonAnimating)}
          asChild
          size="lg"
        >
          <Link href="#projects">View My Work</Link>
        </AnimatedButton>
        <AnimatedButton
          isAnimating={contactButtonAnimating}
          onAnimate={() => handleAnimate(setContactButtonAnimating)}
          asChild
          variant="outline"
          size="lg"
        >
          <Link href="#contact">Get In Touch</Link>
        </AnimatedButton>
      </div>
    </section>
  );
}

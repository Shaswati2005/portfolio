'use client';

import { useState } from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CherryPetalIcon } from '@/components/icons/cherry-petal-icon';

interface AnimatedButtonProps extends ButtonProps {
  isAnimating: boolean;
  onAnimate: () => void;
  children: React.ReactNode;
}

const AnimatedButton = ({ children, isAnimating, onAnimate, ...props }: AnimatedButtonProps) => {
  const createPetals = () =>
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      style: {
        '--petal-end-x': `${(Math.random() - 0.5) * 350}px`,
        '--petal-end-y': `${(Math.random() - 0.5) * 350}px`,
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
        className="relative z-10 transition-colors duration-300 ease-in-out data-[animating=true]:bg-accent data-[animating=true]:text-accent-foreground data-[animating=true]:animate-button-press"
        data-animating={isAnimating}
      >
        {children}
      </Button>
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 -m-2 rounded-full bg-accent/30 animate-halo" />
          {createPetals().map((petal) => (
            <CherryPetalIcon
              key={petal.id}
              className="absolute w-3 h-3 animate-petal-toss"
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
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/bg.jpg"
        alt="Lush cherry blossom grove with a traditional Japanese bridge at sunset"
        data-ai-hint="cherry blossom landscape"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      

      <div className="relative z-30 container flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
            Elegant Designs, Powerful Code
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-xl drop-shadow-md">
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
            className="border-white/50 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#contact">Get In Touch</Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

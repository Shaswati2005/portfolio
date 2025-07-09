
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
      
      {/* Sun Rays Effect */}
      <div className="absolute top-[60%] left-1/2 h-[150vmax] w-[150vmax] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-20 blur-2xl">
        <div
          className="h-full w-full animate-sun-rays"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, #ff6347, #ffd700, #3cb371, #48d1cc, #8a2be2, #ff1493, #ff6347)',
            maskImage: 'repeating-conic-gradient(from 0deg, #000 0% 1.5%, transparent 1.5% 10%)',
            WebkitMaskImage: 'repeating-conic-gradient(from 0deg, #000 0% 1.5%, transparent 1.5% 10%)',
          }}
        />
      </div>


      <div className="relative z-30 container flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
            {"Elegant Designs, Powerful Code".split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <p
            className="max-w-[600px] text-white/90 md:text-xl drop-shadow-md animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            Welcome to my digital garden. I'm a passionate developer and designer, creating beautiful and functional web experiences. Explore my work and let's build something amazing together.
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
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

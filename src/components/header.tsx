'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DetailedCherryBlossomIcon } from '@/components/icons/detailed-cherry-blossom-icon';
import { cn } from '@/lib/utils';
import { useTransition } from '@/context/transition-context';

export default function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#find-me-online', label: 'Online' },
    { href: '#contact', label: 'Contact' },
  ];

  const trackedSections = [{ href: '#home', label: 'Home' }, ...navItems];

  const [activeLink, setActiveLink] = useState('#home');
  const { playTransition } = useTransition();

  useEffect(() => {
    // A ref to hold the active link, to compare against in the scroll handler
    // This prevents the scroll handler from re-triggering transitions unnecessarily
    let currentActive = '#home';
    
    const handleScroll = () => {
      const fromTop = window.scrollY + 100;
      const currentSection = [...trackedSections]
        .reverse()
        .find(sectionInfo => {
          const section = document.querySelector(sectionInfo.href) as HTMLElement;
          return section && section.offsetTop <= fromTop;
        });

      if (currentSection && currentSection.href !== currentActive) {
        // A new section has become active
        currentActive = currentSection.href;
        setActiveLink(currentActive);
        playTransition();
      }
    };

    // Set the initial active link without a transition
    const initialFromTop = window.scrollY + 100;
    const initialSection = [...trackedSections]
      .reverse()
      .find(sectionInfo => {
        const section = document.querySelector(sectionInfo.href) as HTMLElement;
        return section && section.offsetTop <= initialFromTop;
      });
    if (initialSection) {
      currentActive = initialSection.href;
      setActiveLink(currentActive);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [playTransition]); // Effect depends on playTransition


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/10 backdrop-blur-xl supports-[backdrop-filter]:bg-background/5">
      <div className="container flex h-16 items-center">
        <Link href="#home" className="flex items-center gap-2 mr-6">
          <DetailedCherryBlossomIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Sakura Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-1 py-2 transition-colors hover:text-foreground/80',
                activeLink === link.href
                  ? 'font-bold text-foreground'
                  : 'text-foreground/60'
              )}
            >
              <span className="mr-1">{link.label}</span>
              <div className="flex h-4 w-4 items-center justify-center">
                <DetailedCherryBlossomIcon
                  className={cn(
                    'h-full w-full text-primary transition-all duration-300 ease-in-out',
                    activeLink === link.href
                      ? 'scale-100 opacity-100'
                      : 'scale-0 opacity-0'
                  )}
                />
              </div>
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          {/* A mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
}

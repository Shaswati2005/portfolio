'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CherryBlossomIcon } from '@/components/icons/cherry-blossom-icon';
import { cn } from '@/lib/utils';

export default function Header() {
  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
  ];

  // All sections to be tracked by the scroll spy
  const trackedSections = [{ href: '#home', label: 'Home' }, ...navItems];

  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // Offset from the top of the viewport. Header is 64px tall.
      const fromTop = window.scrollY + 100;

      // Find the last section that we have scrolled past its top
      const currentSection = [...trackedSections]
        .reverse()
        .find(sectionInfo => {
            const section = document.querySelector(sectionInfo.href) as HTMLElement;
            return section && section.offsetTop <= fromTop;
        });
      
      if (currentSection) {
        setActiveLink(currentSection.href);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // The empty dependency array is correct here.


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/10 backdrop-blur-xl supports-[backdrop-filter]:bg-background/5">
      <div className="container flex h-16 items-center">
        <Link href="#home" className="flex items-center gap-2 mr-6">
          <CherryBlossomIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Sakura Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((link) => (
            <div key={link.href} className="relative flex flex-col items-center">
              <Link
                href={link.href}
                className={cn(
                  'py-2 transition-colors hover:text-foreground/80',
                  activeLink === link.href
                    ? 'font-bold text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
              {activeLink === link.href && (
                <CherryBlossomIcon className="h-4 w-4 text-primary absolute -bottom-3 animate-fade-in" />
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          {/* A mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DetailedCherryBlossomIcon } from '@/components/icons/detailed-cherry-blossom-icon';
import { cn } from '@/lib/utils';
import { useTransition } from '@/context/transition-context';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#find-me-online', label: 'Reach Out' },
  { href: '#contact', label: 'Contact' },
];

const trackedSections: NavItem[] = [{ href: '#home', label: 'Home' }, ...navItems];

export default function Header() {
  const [activeLink, setActiveLink] = useState('#home');
  const { playTransition } = useTransition();

  useEffect(() => {
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
        currentActive = currentSection.href;
        setActiveLink(currentActive);
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
  }, []); 


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/10 backdrop-blur-xl supports-[backdrop-filter]:bg-background/5">
      <div className="container flex h-16 items-center">
        <Link href="#home" onClick={playTransition} className="flex items-center gap-2 mr-6">
          <DetailedCherryBlossomIcon className="h-6 w-6 text-primary" />
          <div className="font-bold font-headline flex items-center">
            <div className="h-6 overflow-hidden">
              <div className="animate-text-cycle">
                <div className="flex h-6 items-center">
                  <span>Sakura</span>
                </div>
                <div className="flex h-6 items-center">
                  <span className="text-accent">Shaswati</span>
                </div>
                <div className="flex h-6 items-center">
                  <span>Sakura</span>
                </div>
              </div>
            </div>
            <span>&nbsp;Portfolio</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={playTransition}
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
        <div className="flex flex-1 items-center justify-end md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/90 backdrop-blur-xl">
               <div className="flex justify-between items-center mb-8 px-2">
                <SheetClose asChild>
                  <Link href="#home" onClick={playTransition} className="flex items-center gap-2">
                    <DetailedCherryBlossomIcon className="h-6 w-6 text-primary" />
                    <span className="font-bold">Shaswati Mishra</span>
                  </Link>
                </SheetClose>
               </div>
              <nav className="flex flex-col gap-4 text-lg font-medium px-2">
                {navItems.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      onClick={playTransition}
                      className={cn(
                        'flex items-center rounded-md px-2 py-2 transition-colors hover:text-primary',
                         activeLink === link.href ? 'font-bold text-primary bg-primary/10' : 'text-foreground/80'
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

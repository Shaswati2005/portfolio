'use client';

import Link from 'next/link';
import { CherryBlossomIcon } from '@/components/icons/cherry-blossom-icon';

export default function Header() {
  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/10 backdrop-blur-xl supports-[backdrop-filter]:bg-background/5">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <CherryBlossomIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Sakura Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground/80">
              {link.label}
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

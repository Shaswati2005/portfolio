'use client';

import { Github, Linkedin, CodeXml, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LeetCodeIcon } from './icons/leetcode-icon';
import type { ReactNode } from 'react';

interface SocialLink {
  icon: ReactNode;
  name: string;
  handle: string;
  href: string;
  cta: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    name: 'GitHub',
    handle: '@shaswati',
    href: 'https://github.com/Shaswati2005',
    cta: 'View on GitHub'
  },
  {
    icon: <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    name: 'LinkedIn',
    handle: 'Shaswati Mishra ',
    href: 'www.linkedin.com/in/shaswati-mishra',
    cta: 'Connect on LinkedIn'
  },
  {
    icon: <CodeXml className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    name: 'Codeforces',
    handle: '@shaswati_mishra',
    href: 'https://codeforces.com/profile/shaswati_mishra',
    cta: 'View Profile'
  },
  {
    icon: <LeetCodeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    name: 'LeetCode',
    handle: '@shaswatimishar',
    href: 'https://leetcode.com/u/Shaswatimishar/',
    cta: 'View Profile'
  },
  {
    icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    name: 'Resume',
    handle: 'View my credentials',
    href: '#',
    cta: 'Open Drive Link'
  },
];

export default function FindMeOnlineSection() {
  return (
    <section id="find-me-online" className="w-full py-20 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Connect</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Find Me Online</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            I'm always open to connecting. Feel free to check out my profiles below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              <Card className="relative h-full bg-card/70 hover:bg-card border-2 border-transparent hover:border-primary/70 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col text-center">
                <CardContent className="relative z-10 p-6 sm:p-8 flex flex-col items-center justify-center gap-4 flex-1">
                    <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 mb-2 bg-card/80 backdrop-blur-sm rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </div>
  
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-headline font-bold">{link.name}</h3>
                      <p className="text-sm sm:text-md text-muted-foreground font-sans truncate">{link.handle}</p>
                    </div>
                    <div className="mt-auto pt-2 sm:pt-4 text-sm font-medium text-primary group-hover:underline underline-offset-4">
                      {link.cta} &rarr;
                    </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

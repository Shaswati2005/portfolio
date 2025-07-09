'use client';

import { Github, Linkedin, Mail, CodeXml, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LeetCodeIcon } from './icons/leetcode-icon';
import { DetailedCherryBlossomIcon } from './icons/detailed-cherry-blossom-icon';

const socialLinks = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    name: 'Email',
    handle: 'mishrashaswati2005@gmail.com',
    href: 'mailto:mishrashaswati2005@gmail.com',
    cta: 'Send a message'
  },
  {
    icon: <Github className="h-8 w-8 text-primary" />,
    name: 'GitHub',
    handle: '@your-username',
    href: '#',
    cta: 'View on GitHub'
  },
  {
    icon: <Linkedin className="h-8 w-8 text-primary" />,
    name: 'LinkedIn',
    handle: 'Your Name',
    href: '#',
    cta: 'Connect on LinkedIn'
  },
  {
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    name: 'Codeforces',
    handle: '@your-username',
    href: '#',
    cta: 'View Profile'
  },
  {
    icon: <LeetCodeIcon className="h-8 w-8 text-primary" />,
    name: 'LeetCode',
    handle: '@your-username',
    href: '#',
    cta: 'View Profile'
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    name: 'Resume',
    handle: 'View my credentials',
    href: '#',
    cta: 'Open Drive Link'
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-primary/10">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Connect</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Find Me Online</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            I'm always open to connecting. Feel free to reach out or check out my profiles below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              <Card className="h-full bg-card/70 hover:bg-card border-2 border-transparent hover:border-primary/70 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col text-center">
                <CardContent className="p-8 flex flex-col items-center gap-4 flex-1">
                  <div className="relative flex items-center justify-center h-24 w-24 mb-4">
                    <DetailedCherryBlossomIcon className="absolute h-full w-full text-primary/30 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-[25deg] group-hover:text-primary/50" />
                    <div className="relative z-10 flex items-center justify-center h-16 w-16 bg-card rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
                      {link.icon}
                    </div>
                  </div>

                  <div className="flex-1 text-center">
                    <h3 className="text-2xl font-headline font-bold">{link.name}</h3>
                    <p className="text-md text-muted-foreground font-sans truncate">{link.handle}</p>
                  </div>
                   <div className="mt-auto text-sm font-medium text-primary group-hover:underline underline-offset-4">
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

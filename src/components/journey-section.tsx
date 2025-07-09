'use client';

import { GraduationCap, School, BookOpen } from 'lucide-react';
import type { SVGProps } from "react";
import { Card } from "@/components/ui/card";

const JourneyPathBackground = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="journey-sky" x1="0.5" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--secondary) / 0.2)" />
                <stop offset="100%" stopColor="hsl(var(--background) / 0.6)" />
            </linearGradient>
            <filter id="misty-glow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
        </defs>

        <rect width="1200" height="800" fill="url(#journey-sky)" />

        <circle cx="250" cy="300" r="100" fill="hsl(var(--primary))" opacity="0.3" filter="url(#misty-glow)" />
        <circle cx="250" cy="300" r="70" fill="hsl(var(--primary))" opacity="0.5" />

        <path d="M -50 800 C 300 800, 600 500, 1250 350 V 800 Z" fill="hsl(var(--card) / 0.4)" />
        <path d="M -50 800 C 200 800, 500 600, 1250 450 V 800 Z" fill="hsl(var(--card) / 0.5)" />

        <g transform="translate(950, 150) scale(1.3)">
            {/* Trunk and main branches */}
            <path d="M 0 200 C -5 150, -10 140, -20 100" stroke="#4a2c2a" strokeWidth="14" fill="none" strokeLinecap="round"/>
            <path d="M -20 100 C -30 70, -60 80, -80 50" stroke="#4a2c2a" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <path d="M -15 120 C 20 110, 40 90, 60 50" stroke="#4a2c2a" strokeWidth="9" fill="none" strokeLinecap="round"/>

            {/* Finer branches */}
            <path d="M -78 52 C -100 30, -120 40, -130 20" stroke="#4a2c2a" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M -75 60 C -60 40, -80 30, -90 20" stroke="#4a2c2a" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M 58 52 C 80 30, 110 40, 120 20" stroke="#4a2c2a" strokeWidth="5" fill="none" strokeLinecap="round"/>
            <path d="M 55 60 C 40 40, 50 30, 70 20" stroke="#4a2c2a" strokeWidth="3" fill="none" strokeLinecap="round"/>

            {/* Blossom Clusters */}
            <g opacity="1">
              {/* Top-right clusters */}
              <circle cx="125" cy="15" r="15" fill="hsl(var(--primary))" />
              <circle cx="110" cy="30" r="18" fill="hsl(var(--accent))" />
              <circle cx="130" cy="35" r="12" fill="hsl(var(--primary))" />

              {/* Mid-right clusters */}
              <circle cx="75" cy="15" r="12" fill="hsl(var(--accent))" />
              <circle cx="90" cy="25" r="16" fill="hsl(var(--primary))" />
              <circle cx="70" cy="35" r="14" fill="hsl(var(--accent))" />

              {/* Top-left clusters */}
              <circle cx="-135" cy="15" r="16" fill="hsl(var(--primary))" />
              <circle cx="-120" cy="30" r="20" fill="hsl(var(--accent))" />
              <circle cx="-140" cy="35" r="14" fill="hsl(var(--primary))" />

              {/* Mid-left clusters */}
              <circle cx="-95" cy="15" r="14" fill="hsl(var(--accent))" />
              <circle cx="-110" cy="25" r="18" fill="hsl(var(--primary))" />
              <circle cx="-85" cy="35" r="15" fill="hsl(var(--accent))" />
              
              {/* Lower-center clusters */}
              <circle cx="-30" cy="80" r="18" fill="hsl(var(--primary))" />
              <circle cx="-45" cy="95" r="15" fill="hsl(var(--accent))" />
              <circle cx="-15" cy="90" r="16" fill="hsl(var(--primary))" />
            </g>
        </g>
    </svg>
);


const journeyData = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Class X Certificate",
    institution: "School Name",
    period: "Completed",
    description: "Excelled in foundational subjects, achieving a score of 96.8%.",
    gridPosition: "md:row-start-3 md:col-start-1"
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Class XII Diploma",
    institution: "High School Name",
    period: "Completed",
    description: "Focused on science and mathematics, scoring 94% and building a strong foundation for engineering.",
    gridPosition: "md:row-start-2 md:col-start-2"
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Bachelor of Technology",
    institution: "University Name",
    period: "Enrolled",
    description: "Currently pursuing a degree in Computer Science, focusing on Full-Stack Development and AI/ML.",
    gridPosition: "md:row-start-1 md:col-start-3"
  }
];

export default function JourneySection() {
    return (
        <section id="journey" className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-80">
              <JourneyPathBackground className="w-full h-full object-cover"/>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-24">
                     <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">My Journey</div>
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Education & Milestones</h2>
                     <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                        A visual timeline of my academic growth and achievements, climbing towards new heights.
                     </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 items-center justify-items-center min-h-[500px]">
                    {journeyData.map((item, index) => (
                        <div key={index} className={`w-full max-w-sm animate-fade-in-up ${item.gridPosition}`} style={{animationDelay: `${index * 0.2}s`}}>
                            <Card className="flex items-start p-6 bg-card/70 backdrop-blur-sm border-primary/30 shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                                <div className="mr-4 pt-1">{item.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-headline font-bold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground font-sans">{item.institution} &bull; {item.period}</p>
                                    <p className="mt-2 text-sm text-foreground/90 font-sans">{item.description}</p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

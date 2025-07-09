'use client';

import { GraduationCap, School, BookOpen } from 'lucide-react';
import type { SVGProps } from "react";
import { Card } from "@/components/ui/card";

const JourneyPathBackground = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="sky" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="hsl(var(--secondary) / 0.2)" />
                <stop offset="100%" stopColor="hsl(var(--background) / 0.5)" />
            </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#sky)" />
        <path d="M-100 800 L -100 650 C 150 550, 350 700, 600 600 C 850 500, 1050 650, 1300 550 L 1300 800 Z" fill="hsl(var(--muted) / 0.3)" />
        <path d="M-50 800 C 200 800, 400 600, 700 550 C 1000 500, 1150 550, 1300 520 L 1300 800 L -50 800 Z" fill="hsl(var(--card) / 0.4)" />
        <path d="M1050 425 L1050 375 L1100 390 L1050 405 Z" fill="hsl(var(--primary))" opacity="0.7" />
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
            <div className="absolute inset-0 z-0 opacity-50">
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

'use client';

import { GraduationCap, School, BookOpen } from 'lucide-react';
import type { SVGProps } from "react";
import { Card } from "@/components/ui/card";

const JourneyBackground = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1000 1200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" {...props}>
        <path 
            d="M -100 200 Q 250 350 500 250 T 1100 350" 
            stroke="hsl(var(--primary) / 0.1)" 
            strokeWidth="80" 
            fill="none" 
        />
        <path 
            d="M -100 800 Q 250 650 500 750 T 1100 650" 
            stroke="hsl(var(--secondary) / 0.1)" 
            strokeWidth="120" 
            fill="none" 
        />
        <path 
            d="M 200 1200 L 400 900 L 600 1200 Z" 
            fill="hsl(var(--background))" 
        />
        <path 
            d="M 650 1200 L 800 1000 L 950 1200 Z" 
            fill="hsl(var(--background))" 
        />
        <circle cx="850" cy="150" r="50" fill="hsl(var(--accent) / 0.15)" />
    </svg>
);


const journeyData = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Bachelor of Technology",
    institution: "University Name",
    period: "Enrolled",
    description: "Currently pursuing a degree in Computer Science, exploring the vast fields of software development and artificial intelligence.",
    details: "Focusing on Full-Stack Development and AI/ML."
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Class XII Diploma",
    institution: "High School Name",
    period: "Completed",
    description: "Focused on science and mathematics, building a strong foundation for engineering studies.",
    details: "Scored 94% in PCM stream."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Class X Certificate",
    institution: "School Name",
    period: "Completed",
    description: "Excelled in foundational subjects and developed a passion for problem-solving and technology.",
    details: "Achieved a score of 96.8%."
  }
];

export default function JourneySection() {
    return (
        <section id="journey" className="relative w-full py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
              <JourneyBackground className="w-full h-full"/>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                     <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">My Journey</div>
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Education & Milestones</h2>
                     <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                        A timeline of my academic growth and achievements.
                     </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-8">
                    {journeyData.map((item, index) => (
                        <Card key={index} className="flex items-start p-6 md:p-8 bg-card/70 backdrop-blur-sm border-primary/30 shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                            <div className="mr-6 pt-1">{item.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                                <p className="text-muted-foreground font-sans">{item.institution} &bull; {item.period}</p>
                                <p className="mt-2 text-foreground/90 font-sans">{item.description}</p>
                                <p className="mt-2 text-primary font-semibold font-sans">{item.details}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
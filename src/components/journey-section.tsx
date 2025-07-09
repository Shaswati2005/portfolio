
'use client';

import { useState } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { DetailedCherryBlossomIcon } from './icons/detailed-cherry-blossom-icon';

// Chronological journey data
const journeyData = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Class X Certificate",
    institution: "Jawahar Navodaya Vidyalaya, Sonepur ",
    period: "2020",
    description: "Excelled in foundational subjects, achieving a score of 98.2%.",
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Class XII Certificate",
    institution: "Jawahar Navodaya Vidyalaya, Sonepur",
    period: "2022",
    description: "Focused on science and mathematics, scoring 94.33% and building a strong foundation for engineering.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Bachelor of Technology",
    institution: "National Institute of Technology, Rourkela",
    period: "2023-2027",
    description: "Currently pursuing a degree in Electronics and Communication Engineering with a current CGPA of 8.49. My focus areas include Full-Stack Development and Competitive Programming .",
  }
];

export default function JourneySection() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const activeItem = journeyData[activeIndex];

    return (
        <section
            id="journey"
            className="relative w-full py-20 md:py-32 bg-cover bg-center"
            style={{ backgroundImage: "url(/samurai-sunset.jpg)" }}
        >
            <div className="absolute inset-0 bg-black/80 z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">My Journey</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-white drop-shadow-md">Education & Milestones</h2>
                    <p className="max-w-[900px] text-white/80 md:text-xl/relaxed">
                       A timeline of my academic growth. Hover over the blossoms on desktop to see the details.
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-x-16 items-start mt-12">
                    {/* Left side: Timeline controls */}
                    <div className="col-span-1 relative">
                        <div className="absolute top-0 h-full w-0.5 bg-primary/30 left-6"></div>
                        <div className="flex flex-col gap-y-24">
                            {journeyData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center cursor-pointer"
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className="absolute top-1/2 -translate-y-1/2 left-6 -translate-x-1/2 z-20">
                                        <div className={`flex items-center justify-center h-12 w-12 rounded-full bg-background border-2 transition-all duration-300 ${activeIndex === index ? 'border-primary scale-110' : 'border-primary/50'}`}>
                                            <DetailedCherryBlossomIcon className={`h-8 w-8 transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-primary/60'}`} />
                                        </div>
                                    </div>
                                    <div className="pl-20 py-4">
                                        <p className={`text-lg font-headline transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-white/80'}`}>{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Details pane */}
                    <div className="col-span-1 relative min-h-[200px]">
                         <div
                            className="absolute w-full transition-transform duration-300 ease-out"
                            style={{ transform: `translateY(calc(${activeIndex} * 8.5rem))`}}
                        >
                            <Card className="bg-card/80 backdrop-blur-sm border-primary/30 shadow-lg">
                                <CardContent className="p-6 flex items-start">
                                    <div className="mr-4 pt-1">{activeItem.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-headline font-bold">{activeItem.title}</h3>
                                        <p className="text-sm text-muted-foreground font-sans">{activeItem.institution} &bull; {activeItem.period}</p>
                                        <p className="mt-2 text-foreground/90 font-sans">{activeItem.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden mt-8 space-y-8">
                   {journeyData.map((item, index) => (
                        <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/30 shadow-lg">
                           <CardContent className="p-4 flex items-start">
                               <div className="mr-3 pt-1">{item.icon}</div>
                               <div className="flex-1">
                                   <h3 className="text-md font-headline font-bold">{item.title}</h3>
                                   <p className="text-xs text-muted-foreground font-sans">{item.institution} &bull; {item.period}</p>
                                   <p className="mt-1 text-foreground/90 font-sans">{item.description}</p>
                               </div>
                           </CardContent>
                       </Card>
                   ))}
                </div>
            </div>
        </section>
    );
}

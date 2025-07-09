import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Card } from "@/components/ui/card";

const journeyData = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Bachelor of Technology",
    institution: "University Name",
    period: "Enrolled",
    description: "Currently pursuing a degree in Computer Science, exploring the vast fields of software development and artificial intelligence."
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Class XII Diploma",
    institution: "High School Name",
    period: "Completed",
    description: "Focused on science and mathematics, building a strong foundation for engineering studies."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Class X Certificate",
    institution: "School Name",
    period: "Completed",
    description: "Excelled in foundational subjects and developed a passion for problem-solving and technology."
  }
];

export default function JourneySection() {
    return (
        <section id="journey" className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                     <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">My Journey</div>
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Education & Milestones</h2>
                     <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                        A timeline of my academic growth and achievements.
                     </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-8">
                    {journeyData.map((item, index) => (
                        <Card key={index} className="flex items-start p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/30 shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                            <div className="mr-6 pt-1">{item.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                                <p className="text-muted-foreground font-sans">{item.institution} &bull; {item.period}</p>
                                <p className="mt-2 text-foreground/90 font-sans">{item.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

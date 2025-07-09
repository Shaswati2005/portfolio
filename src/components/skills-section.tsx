import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 
    'Tailwind CSS', 'Node.js', 'Firebase', 'Figma', 'UI/UX Design', 'Responsive Design'
  ];

  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">My Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Crafting Digital Experiences</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I specialize in a variety of technologies to bring ideas to life, from frontend frameworks to design tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-lg px-4 py-2 bg-background/50 border-primary/50">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

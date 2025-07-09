import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Serene E-commerce",
    description: "A minimalist e-commerce platform with a focus on user experience and beautiful product presentation. Built with Next.js and Stripe.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    aiHint: "minimalist e-commerce"
  },
  {
    title: "Blossom Blogging",
    description: "A content-focused blogging platform with a clean, readable interface and markdown support. Features a custom CMS.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Firebase", "Markdown", "UI/UX"],
    aiHint: "aesthetic blog"
  },
  {
    title: "Zenith Dashboard",
    description: "An analytics dashboard for a SaaS product, providing users with clear data visualizations and insights. Designed for clarity and ease of use.",
    image: "https://placehold.co/600x400.png",
    tags: ["TypeScript", "Data Viz", "Figma", "React"],
    aiHint: "analytics dashboard"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">My Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Here are a few projects I've worked on. Each one was a unique challenge and a joy to create.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  data-ai-hint={project.aiHint}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold font-headline mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-foreground/80">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

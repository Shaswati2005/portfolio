import { CardTitle, CardDescription } from "@/components/ui/card";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "UNBOT",
    description: "An AI-powered CV builder that generates tailored resumes with real-time editing, role-specific skill.",
    image: "/unbot.png",
    tags: ["Next.js", "Tailwind Css" , "Gemini API", ],
    aiHint: "An AI CV generator ",
    githubUrl: "https://github.com/Shaswati2005/unbot",
    deployedUrl: "https://unbot.vercel.app/",
  },
  {
    title: "Blossom Blogging",
    description: "A content-focused blogging platform with a clean, readable interface and markdown support. Features a custom CMS.",
    image: "https://placehold.co/500x500.png",
    tags: ["React", "Firebase", "Markdown", "UI/UX"],
    aiHint: "aesthetic blog",
    githubUrl: "#",
    deployedUrl: "#",
  },
  {
    title: "Zenith Dashboard",
    description: "An analytics dashboard for a SaaS product, providing users with clear data visualizations and insights. Designed for clarity and ease of use.",
    image: "https://placehold.co/500x500.png",
    tags: ["TypeScript", "Data Viz", "Figma", "React"],
    aiHint: "analytics dashboard",
    githubUrl: "#",
    deployedUrl: "#",
  },
  {
    title: "AI Story Generator",
    description: "An interactive web app that uses generative AI to create unique short stories based on user prompts. Built with Next.js and Genkit.",
    image: "https://placehold.co/500x500.png",
    tags: ["Next.js", "Genkit", "AI", "Vercel"],
    aiHint: "ai story generator",
    githubUrl: "#",
    deployedUrl: "#",
  },
  {
    title: "Travel Planner Pro",
    description: "A comprehensive travel planning application that helps users organize itineraries, book flights, and discover new destinations.",
    image: "https://placehold.co/500x500.png",
    tags: ["React Native", "Firebase", "Google Maps API"],
    aiHint: "travel planner app",
    githubUrl: "#",
  },
  {
    title: "Kyoto Photography",
    description: "A photo gallery website showcasing the beauty of Kyoto through stunning photography. Features a masonry layout and smooth animations.",
    image: "https://placehold.co/500x500.png",
    tags: ["Gatsby", "GraphQL", "Framer Motion"],
    aiHint: "photography gallery",
    githubUrl: "#",
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
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className="group relative aspect-square w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <Image
                src={project.image}
                alt={project.title}
                data-ai-hint={project.aiHint}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white font-headline transition-all duration-300 ease-in-out group-hover:bottom-[-50px] group-hover:opacity-0 sm:bottom-5 sm:left-5 sm:text-2xl">
                {project.title}
              </h3>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 text-center bg-card/95 opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100 border-2 border-transparent group-hover:border-primary/50 rounded-lg">
                <CardTitle className="text-lg sm:text-xl font-bold font-headline mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-foreground/80 text-sm sm:text-base">{project.description}</CardDescription>
                <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Button asChild size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4"/>
                          GitHub
                      </a>
                  </Button>
                  {project.deployedUrl && (
                    <Button asChild variant="outline" size="sm">
                        <a href={project.deployedUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4"/>
                            Live Site
                        </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    title: "DocSyne",
    description: "A voice-enabled appointment setter and AI-powered prescription generator that streamlines patient booking and delivers real-time diagnostic insights.",
    image: "/docsyne.png",
    tags: ["React", "Nextjs", "Tailwind Css", "MCP server" , "APIs"],
    aiHint: "AI Appointment setter",
    githubUrl: "https://github.com/dasbidyendu/healthcarecohort",
    deployedUrl: "https://docsyne.vercel.app/",
  },
  {
    title: "Ellite Support",
    description: " call center platform with real-time voice-to-text transcription, enabling accurate live documentation directly from customer calls.",
    image: "/ellite.png",
    tags: ["Next.js", "Django", "Hugging face" , "Ngrok", ],
    aiHint: "A callcenter control ",
    githubUrl: "https://github.com/Shaswati2005/callcenter",
    deployedUrl: "https://callcenter-rho.vercel.app/",
  },
  {
    title: "Travelsliders",
    description: "An AI-powered travel itinerary generator that creates personalized trip plans based on user preferences, destinations, and duration.",
    image: "/travelsliders.png",
    tags: ["Nextjs", "Gemini" , "Tailwind Css"],
    aiHint: "travel planner app",
    githubUrl: "https://github.com/Shaswati2005/march_cohort_",
    deployedUrl: "https://travelsiders.vercel.app/",
  },
  {
    title: "LegalFlow",
    description: "An AI-driven legal document analyzer that extracts, interprets, and highlights clauses, risks, and compliance gaps for faster legal review.",
    image: "/legalflow.png",
    tags: ["TypeScript", "Nextjs", "APIS", "Django" ],
    aiHint: "legal document analyzer",
    githubUrl: "https://github.com/Shaswati2005/hackv",
    deployedUrl: "https://hackv.vercel.app/",
  },
  {
    title: "3d Universe",
    description: "An interactive 3D solar system simulation built with Three.js, featuring realistic planetary motion, textures, and orbital dynamics.",
    image: "/solar.png",
    tags: ["3js", "html","css"],
    aiHint: "a 3d solar system",
    githubUrl: "https://github.com/Shaswati2005/3dsolar_system",
    deployedUrl: "https://shaswati2005.github.io/3dsolar_system/"
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

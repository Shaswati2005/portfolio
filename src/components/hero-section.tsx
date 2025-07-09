import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col items-start gap-6 animate-fade-in-up">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Elegant Designs, Powerful Code
        </h1>
        <p className="max-w-[600px] text-foreground/80 md:text-xl">
          Welcome to my digital garden. I'm a passionate developer and designer, creating beautiful and functional web experiences. Explore my work and let's build something amazing together.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Image
          src="https://placehold.co/500x500.png"
          alt="Abstract illustration of cherry blossoms"
          data-ai-hint="cherry blossoms abstract"
          width={500}
          height={500}
          className="rounded-full aspect-square object-cover border-8 border-primary/50 shadow-lg"
        />
      </div>
    </section>
  );
}

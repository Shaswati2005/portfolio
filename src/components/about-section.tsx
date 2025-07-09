import Image from 'next/image';
import { DetailedCherryBlossomIcon } from './icons/detailed-cherry-blossom-icon';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square w-full max-w-sm mx-auto">
              <div className="absolute -inset-2 border-2 border-primary/20 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -inset-4 border-primary/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}/>
              <Image
                src="https://placehold.co/600x600.png"
                alt="A portrait of Sakura"
                data-ai-hint="portrait person"
                width={600}
                height={600}
                className="relative z-10 h-full w-full object-cover rounded-full shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6 relative">
             {/* Tree Decoration */}
            <div className="pointer-events-none absolute -right-40 -top-24 w-[600px] h-auto opacity-40 hidden lg:block z-0">
               <div className="absolute top-1/4 -inset-x-20 h-1/2 bg-primary/20 blur-[100px] animate-pulse-slow" style={{animationDuration: '8s'}} />
               <div className="animate-sway" style={{ transformOrigin: '90% 90%', animationDuration: '30s', animationDelay: '-5s' }}>
                  <Image
                    src="/tree.png"
                    alt="Cherry blossom tree"
                    width={600}
                    height={450}
                    className="transform rotate-[20deg] scale-150"
                  />
                </div>
                {/* The hill below the tree */}
                <div 
                    className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[180%] h-[150px] bg-background"
                    style={{
                        maskImage: 'radial-gradient(ellipse 80% 100% at 50% 100%, black 40%, transparent 70%)'
                    }}
                />
            </div>

            <div className="space-y-4 relative z-10">
               <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">About Me</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">A Developer with a Passion for Artistry</h2>
              <p className="text-foreground/80 md:text-lg/relaxed">
                Hello! I'm Sakura, a full-stack developer who finds joy in the intersection of elegant code and beautiful design. My journey into technology was driven by a desire to create things that are not only functional and efficient but also delightful to use. I believe that the best digital experiences are born from a deep understanding of both human-centered design and robust engineering.
              </p>
              <p className="text-foreground/80 md:text-lg/relaxed">
                From crafting pixel-perfect user interfaces with React and Next.js to building scalable backend systems, I'm constantly learning and honing my skills. When I'm not coding, you can find me exploring new art styles, tending to my bonsai trees, or getting lost in a good book. This portfolio is a reflection of my philosophy: to build with precision, creativity, and a touch of serenity.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4 relative z-10">
              <DetailedCherryBlossomIcon className="h-8 w-8 text-primary" />
              <p className="font-headline text-lg text-primary">Building beautiful things, one line of code at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

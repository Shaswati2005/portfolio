import type { SVGProps } from "react";

const BranchSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50,150 C80,80 150,80 180,120 S250,100 280,60" stroke="hsl(var(--border))" strokeWidth="3" fill="none" />
      
      {/* Blossoms */}
      <circle cx="95" cy="93" r="5" fill="hsl(var(--primary))" />
      <circle cx="105" cy="85" r="7" fill="hsl(var(--accent))" />
      <circle cx="115" cy="98" r="4" fill="hsl(var(--primary))" />

      <circle cx="170" cy="125" r="6" fill="hsl(var(--primary))" />
      <circle cx="185" cy="115" r="8" fill="hsl(var(--accent))" />
      <circle cx="190" cy="130" r="5" fill="hsl(var(--primary))" />

      <circle cx="270" cy="65" r="7" fill="hsl(var(--accent))" />
      <circle cx="285" cy="55" r="5" fill="hsl(var(--primary))" />
    </svg>
);

export default function CherryBranch() {
    return (
        <>
            <div className="pointer-events-none absolute -top-24 -right-40 w-[500px] h-auto opacity-60 hidden lg:block animate-sway" style={{ transformOrigin: '10% 90%', animationDuration: '15s' }}>
                <BranchSvg className="scale-x-[-1] rotate-[20deg]" />
            </div>
            <div className="pointer-events-none absolute top-48 -left-48 w-[450px] h-auto opacity-50 hidden lg:block animate-sway" style={{ transformOrigin: '80% 90%', animationDelay: '-5s', animationDuration: '20s' }}>
                <BranchSvg className="-rotate-[10deg]" />
            </div>
        </>
    )
}

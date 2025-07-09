import type { SVGProps } from "react";

const BranchSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Branches */}
      <path d="M50,300 C 100,150 180,150 220,100" stroke="#4a2c2a" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M210 110 C 250,80 290,80 320,60" stroke="#4a2c2a" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M180 160 C 160,120 180,90 210,70" stroke="#4a2c2a" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Blossom Clusters */}
      <g opacity="0.9">
        {/* Cluster 1 */}
        <circle cx="325" cy="55" r="12" fill="hsl(var(--primary))" />
        <circle cx="335" cy="65" r="10" fill="hsl(var(--accent))" />
        <circle cx="315" cy="70" r="14" fill="hsl(var(--primary))" />
        <circle cx="310" cy="50" r="10" fill="hsl(var(--accent))" />
        
        {/* Cluster 2 */}
        <circle cx="215" cy="65" r="10" fill="hsl(var(--primary))" />
        <circle cx="225" cy="75" r="8" fill="hsl(var(--accent))" />
        <circle cx="205" cy="80" r="12" fill="hsl(var(--primary))" />

        {/* Cluster 3 */}
        <circle cx="220" cy="100" r="15" fill="hsl(var(--primary))" />
        <circle cx="235" cy="110" r="12" fill="hsl(var(--accent))" />
        <circle cx="210" cy="115" r="14" fill="hsl(var(--primary))" />
        <circle cx="200" cy="105" r="10" fill="hsl(var(--accent))" />
      </g>
    </svg>
);


export default function CherryBranch() {
    return (
        <>
            <div className="pointer-events-none absolute -top-32 -right-48 w-[600px] h-auto opacity-70 hidden lg:block animate-sway z-20" style={{ transformOrigin: '10% 90%', animationDuration: '20s' }}>
                <BranchSvg className="scale-x-[-1] rotate-[25deg]" />
            </div>
            <div className="pointer-events-none absolute -top-40 -left-48 w-[550px] h-auto opacity-60 hidden lg:block animate-sway z-20" style={{ transformOrigin: '90% 90%', animationDelay: '-8s', animationDuration: '25s' }}>
                <BranchSvg className="-rotate-[15deg]" />
            </div>
        </>
    )
}

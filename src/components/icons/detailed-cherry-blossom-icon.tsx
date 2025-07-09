import type { SVGProps } from "react";

export function DetailedCherryBlossomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="petalFill" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--accent))" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--primary))" }} />
        </radialGradient>
      </defs>
      
      <g transform="translate(50 50)">
        {/* Petals */}
        <path d="M0 -48 Q 15 -40 20 -20 C 22 0 10 5 0 15 C -10 5 -22 0 -20 -20 Q -15 -40 0 -48" fill="url(#petalFill)" transform="rotate(0)" />
        <path d="M0 -48 Q 15 -40 20 -20 C 22 0 10 5 0 15 C -10 5 -22 0 -20 -20 Q -15 -40 0 -48" fill="url(#petalFill)" transform="rotate(72)" />
        <path d="M0 -48 Q 15 -40 20 -20 C 22 0 10 5 0 15 C -10 5 -22 0 -20 -20 Q -15 -40 0 -48" fill="url(#petalFill)" transform="rotate(144)" />
        <path d="M0 -48 Q 15 -40 20 -20 C 22 0 10 5 0 15 C -10 5 -22 0 -20 -20 Q -15 -40 0 -48" fill="url(#petalFill)" transform="rotate(216)" />
        <path d="M0 -48 Q 15 -40 20 -20 C 22 0 10 5 0 15 C -10 5 -22 0 -20 -20 Q -15 -40 0 -48" fill="url(#petalFill)" transform="rotate(288)" />
      </g>
      
      {/* Center */}
      <circle cx="50" cy="50" r="8" fill="#fff" opacity="0.7" />
      <g fill="#FFF5E1" stroke="#F8C8DC" strokeWidth="0.5">
          <circle cx="50" cy="45" r="3" />
          <circle cx="45" cy="49" r="3" />
          <circle cx="55" cy="49" r="3" />
          <circle cx="47" cy="54" r="3" />
          <circle cx="53" cy="54" r="3" />
      </g>
    </svg>
  );
}

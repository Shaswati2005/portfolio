import type { SVGProps } from "react";

const Petal = (props: SVGProps<SVGPathElement>) => <path d="M0 -10 C -10 -5 -10 5 0 10 C 10 5 10 -5 0 -10Z" {...props} />;

const Flower = ({x, y, scale = 1, rotation = 0}: {x: number, y: number, scale?: number, rotation?: number}) => (
  <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotation})`} fill="url(#blossomGrad)" opacity="0.9">
    <Petal transform="rotate(0)" />
    <Petal transform="rotate(72)" />
    <Petal transform="rotate(144)" />
    <Petal transform="rotate(216)" />
    <Petal transform="rotate(288)" />
    <circle cx="0" cy="0" r="3" fill="#fff" opacity="0.8" />
  </g>
);

export function CornerBlossomFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="blossomGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </radialGradient>
      </defs>
      
      <g>
        {/* Branch */}
        <path d="M0,100 C 20,80 40,60 60,40 C 80,20 100,0 100,0" stroke="#5C3D3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M40,100 C 45,80 60,65 75,50" stroke="#5C3D3A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100,40 C 80,45 65,60 50,75" stroke="#5C3D3A" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Blossom Clusters */}
        <Flower x={50} y={50} scale={1.2} rotation={15} />
        <Flower x={70} y={30} scale={1} rotation={-10} />
        <Flower x={30} y={70} scale={1} rotation={40} />
        <Flower x={90} y={10} scale={0.8} rotation={25} />
        <Flower x={10} y={90} scale={0.8} rotation={-25} />
        <Flower x={80} y={55} scale={0.6} rotation={60} />
        <Flower x={55} y={80} scale={0.6} rotation={-50} />
      </g>
    </svg>
  );
}

import Image from 'next/image';

export default function SkillBranch() {
    return (
        <div className="pointer-events-none absolute -top-28 -right-32 w-[500px] h-auto opacity-50 hidden lg:block z-0">
             <div className="absolute inset-0 bg-primary/30 rounded-full blur-[120px]" />
             <div className="animate-sway" style={{ transformOrigin: '10% 90%', animationDuration: '25s' }}>
                <Image
                  src="/branch.png"
                  alt="Cherry blossom branch"
                  width={500}
                  height={375}
                  className="scale-x-[-1] rotate-[35deg]"
                />
            </div>
        </div>
    );
}

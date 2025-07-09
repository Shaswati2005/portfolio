import Image from 'next/image';

export default function SkillBranch() {
    return (
        <div className="pointer-events-none absolute -top-24 -left-28 w-[400px] h-auto opacity-50 hidden lg:block z-0">
             <div className="absolute inset-0 bg-primary/30 rounded-full blur-[100px]" />
             <div className="animate-sway" style={{ transformOrigin: '90% 90%', animationDuration: '25s' }}>
                <Image
                  src="/branch.png"
                  alt="Cherry blossom branch"
                  width={400}
                  height={300}
                  className="-rotate-[35deg]"
                />
            </div>
        </div>
    );
}

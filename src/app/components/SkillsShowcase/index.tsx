interface SkillsShowcaseProps {
  classNameWrapper: string;
  classNameAnimation: string;
  children: React.ReactNode;
}

export function SkillsShowcase({
  classNameWrapper,
  classNameAnimation,
  children,
}: SkillsShowcaseProps) {
  return (
    <div className={`relative w-full h-35 group ${classNameWrapper}`}>
      <div
        className={`relative h-full flex items-center justify-between gap-40 ${classNameAnimation}`}
      >
        {children}
      </div>
    </div>
  );
}

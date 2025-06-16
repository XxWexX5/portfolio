import { ExperienceCard } from "./components/ExperienceCard";

type itemType = {
  id: string;
  course: string;
  description: string;
  institution: string;
  period: string;
};

type languageType = {
  id: string;
  level: string;
  name: string;
};

interface EducationProps {
  title: string;
  items: itemType[];
  language: {
    title: string;
    languages: languageType[];
  };
}

export function Education({ title, items, language }: EducationProps) {
  return (
    <div className="w-full max-w-[35rem] space-y-12">
      <h2 className="w-fit font-yeseva text-5xl text-primary-500 relative after:content-[''] after:absolute after:left-23 after:-bottom-1 after:w-[75%] after:h-px after:bg-primary-500">
        {title}
      </h2>

      <div className="space-y-6">
        {items?.map((item) => (
          <ExperienceCard
            key={item.id}
            title={`${item.course} – ${item.institution}`}
            subtitle={item.period}
            description={item.description}
          />
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-primary-500 text-lg">{language?.title}</h3>

        {language?.languages.map((item) => (
          <>
            <p className="text-primary-500">
              <strong>{item.name}</strong> ({item.level})
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

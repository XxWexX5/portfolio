import { ExperienceCard } from "./components/ExperienceCard";

type technologieType = {
  id: string;
  technologie: string;
};

type clientType = {
  id: string;
  client: string;
};

type itemType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: technologieType[];
  descriptionClient: string;
  clients: clientType[];
  role: string;
  company: string;
  period: string;
};

interface ExperienceProps {
  title: string;
  subtitle: string;
  description: string;
  items: itemType[];
}

export function Experience({
  title,
  subtitle,
  description,
  items,
}: ExperienceProps) {
  return (
    <div className="w-full max-w-[35rem] space-y-12">
      <h2 className="w-fit font-yeseva text-5xl text-primary-500 relative after:content-[''] after:absolute after:left-23 after:-bottom-1 after:w-[75%] after:h-px after:bg-primary-500">
        {title}
      </h2>

      <div className="w-full flex items-center justify-between max-w-[20rem]">
        <p className="font-yeseva text-3xl text-primary-500">{subtitle}</p>

        <p className="font-yeseva text-3xl text-primary-500">-</p>

        <p className="font-yeseva text-2xl text-primary-800">{description}</p>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <ExperienceCard
            key={item.id}
            id={item.id}
            title={item.role}
            subtitle={`${item.company} - ${item.period}`}
            description={item.description}
            technologies={item.technologies}
            descriptionClient={item.descriptionClient}
            clients={item.clients}
          />
        ))}
      </div>
    </div>
  );
}

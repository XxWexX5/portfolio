import { LogoCarousel } from "../LogoCarousel";

type Image = {
  name: string;
  url: string;
  width: number;
  height: number;
};

interface WhoIAmProps {
  preTitle: string;
  title: string;
  subtitle: string;
  description: string;
  clientLogos: Image[];
}

export function WhoIAm({
  preTitle,
  title,
  subtitle,
  description,
  clientLogos,
}: WhoIAmProps) {
  return (
    <div id="work">
      <div className="space-y-4 w-full">
        <div className="flex flex-col -space-y-1 max-w-[28rem]">
          <h2 className="text-primary-500 font-light text-xl">{preTitle}</h2>
          <h3 className="text-primary-500 font-medium text-6xl">{title}</h3>
        </div>

        <p className="text-primary-500 text-2xl max-w-[28rem]">{subtitle}</p>

        <p className="text-primary-500 text-lg max-w-[42rem]">{description}</p>
      </div>
      <div className="my-14">
        <LogoCarousel clientLogos={clientLogos} />
      </div>
    </div>
  );
}

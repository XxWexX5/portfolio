import Image from "next/image";

type ImageType = {
  name: string;
  url: "string";
};

interface PortfolioGridProps {
  images: ImageType[];
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <div
              className={`relative md:block h-[32rem] hover:scale-105 transition-transform duration-300 ${
                index > 2 && "hidden"
              }`}
            >
              <Image
                src={image.url}
                alt={image.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

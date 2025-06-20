import Image from "next/image";
import Link from "next/link";

type ImageType = {
  name: string;
  url: string;
  width: number;
  height: number;
};

type GalleryNodeType = {
  image: ImageType;
  link: string;
};

type GalleryType = {
  gallery: GalleryNodeType[];
};

type GalleriesType = GalleryType[];

interface PortfolioGridProps {
  galleries: GalleriesType;
}

export default function PortfolioGrid({ galleries }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-3 lg:grid-cols-3">
      {galleries.map(({ gallery }, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <Link
              href={gallery[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block h-[32rem] hover:scale-105 transition-transform duration-300`}
            >
              <Image
                src={gallery[0].image.url}
                alt={gallery[0].image.name}
                fill
                className="object-cover"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

type SocialLinkProps = {
  link: {
    href: string;
    text: string;
    type?: string;
  };
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export function SocialLink({ link, image }: SocialLinkProps) {
  function SocialType(type?: string, href?: string) {
    if (type === "email") {
      return `mailto:${href}`;
    }

    if (type === "phone") {
      return `tel:${href}`;
    }

    return href;
  }

  return (
    <Link
      href={SocialType(link?.type, link?.href) || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6 text-primary-500 hover:underline mx-auto lg:mx-0 overflow-hidden"
    >
      <div className="size-12 relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="w-full h-full object-contain"
        />
      </div>

      <span className="hidden text-xl xl:block lg:text-2xl">{link.text}</span>
    </Link>
  );
}

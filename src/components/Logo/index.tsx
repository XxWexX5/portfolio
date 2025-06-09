import Image from "next/image";

interface LogoProps {
  name: string;
  url: string;
}

export function Logo({ name, url }: LogoProps) {
  return <Image src={url} alt={name} fill className="object-contain" />;
}

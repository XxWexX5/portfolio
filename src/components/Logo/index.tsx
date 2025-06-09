import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo - Front end"
      fill
      className="object-contain"
    />
  );
}

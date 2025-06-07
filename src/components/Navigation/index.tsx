"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type LinkType = {
  id: string;
  label: string;
  target: "self" | "external";
  url: string;
};

interface NavigationProps {
  links: LinkType[];
}

export const Navigation = ({ links }: NavigationProps) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash !== activeHash) {
        setActiveHash(window.location.hash);
      }
    };

    const interval = setInterval(checkHash, 50);

    return () => clearInterval(interval);
  }, [activeHash]);

  return (
    <ul className="flex gap-12">
      {links.map((link) => (
        <li key={link.id} className="text-neutral-full text-base">
          <Link
            href={`#${link.url}`}
            className={
              activeHash === `#${link.url}`
                ? "text-primary-500"
                : "text-neutral-full"
            }
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

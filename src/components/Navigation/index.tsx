"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CiMenuFries } from "react-icons/ci";

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
  const [isMenuActived, setIsMenuActived] = useState(false);
  const [isHandleActionActived, setIsHandleActionActived] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuActived(false);
        setIsHandleActionActived(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <>
      {!isMenuActived ? (
        <button
          className="md:hidden text-neutral-full hover:text-primary-500 transition-all cursor-pointer w-fit"
          onClick={() => setIsMenuActived(!isMenuActived)}
        >
          <CiMenuFries size={32} />
        </button>
      ) : (
        <button></button>
      )}

      <ul
        ref={menuRef}
        className={`z-50 top-0 left-0 fixed flex-col gap-16 bg-primary-500 w-full max-w-[45%] h-screen items-center justify-center md:hidden flex ${
          isMenuActived && "animate-openMenu"
        } ${!isMenuActived && isHandleActionActived && "animate-closeMenu"}`}
      >
        {links.map((link) => (
          <li
            key={link.id}
            className="text-neutral-full text-2xl animate-showLinks"
          >
            <Link
              href={`#${link.url}`}
              className={`relative hover:text-neutral-full transition-all cursor-pointer
              ${
                activeHash === `#${link.url}`
                  ? "text-neutral-full"
                  : "text-primary-800"
              }
            `}
              onClick={() => {
                setIsMenuActived(!isMenuActived);
                setIsHandleActionActived(true);
              }}
            >
              {link.label}

              {activeHash === `#${link.url}` && (
                <span className="absolute bottom-0.5 -right-2.5 size-2 bg-secondary-500 block rounded-full scale-60 animate-fadeInDot"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="gap-12 hidden md:flex">
        {links.map((link) => (
          <li key={link.id} className="text-neutral-full text-base">
            <Link
              href={`#${link.url}`}
              className={`relative hover:text-primary-500 transition-all cursor-pointer
              ${
                activeHash === `#${link.url}`
                  ? "text-primary-500"
                  : "text-neutral-full"
              }
            `}
            >
              {link.label}

              {activeHash === `#${link.url}` && (
                <span className="absolute bottom-0.5 -right-2.5 size-2 bg-secondary-500 block rounded-full scale-60 animate-fadeInDot"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

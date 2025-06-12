"use client";

import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ExperienceCard({
  title,
  subtitle,
  description,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-6 items-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="transition-transform mt-1 cursor-pointer text-primary-800"
      >
        <HiChevronRight
          className={`size-7 min-w-5 transform transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left cursor-pointer"
        >
          <h3 className="font-bold text-lg">{title}</h3>

          <p className="text-base">{subtitle}</p>
        </button>

        {isOpen && (
          <div className="mt-4">
            <p className="text-base leading-relaxed text-primary-700">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

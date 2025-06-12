"use client";

import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

type technologieType = {
  id: string;
  technologie: string;
};

type clientType = {
  id: string;
  client: string;
};

interface ExperienceCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: technologieType[];
  descriptionClient: string;
  clients: clientType[];
}

export function ExperienceCard({
  title,
  subtitle,
  description,
  technologies,
  descriptionClient,
  clients,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-6 items-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="transition-transform mt-1 cursor-pointer text-primary-800"
        aria-label="Expandir"
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
              {description}{" "}
              <strong>
                {technologies.map((technologie, index) => {
                  const isLast = index === technologies.length - 1;
                  return (
                    <span key={technologie.technologie}>
                      {technologie.technologie}
                      {isLast ? "." : ", "}
                    </span>
                  );
                })}
              </strong>
            </p>
            <p className="text-base text-primary-700">
              {descriptionClient}{" "}
              {clients.map((client, index) => {
                const isLast = index === clients.length - 1;
                return (
                  <span key={client.client}>
                    {client.client}
                    {isLast ? "." : ", "}
                  </span>
                );
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

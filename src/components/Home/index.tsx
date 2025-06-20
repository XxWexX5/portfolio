"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { MdError } from "react-icons/md";
import { RiveComponent } from "../RiveComponent";
import Spinner from "../Spinner";
import { SkillsShowcase } from "@/app/components/SkillsShowcase";
import Link from "next/link";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { FindMe } from "../FindMe";
import { Hero } from "../Hero";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import PortfolioGrid from "../PortfolioGrid";
import { Toggle } from "../Toggle";
import { WhoIAm } from "../WhoIAm";
import Image from "next/image";

export default function Home({ data, dataPTbr }: any) {
  const [isActivedLanguage, setIsActivedLanguage] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const STORAGE_LOADED = localStorage.getItem("loaded");

    if (STORAGE_LOADED) {
      return setShowContent(true);
    }

    const timeout = setTimeout(() => {
      localStorage.setItem("loaded", "1");
      setShowContent(true);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  function translation() {
    return isActivedLanguage ? data : dataPTbr;
  }

  if (!showContent) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#532FB8]">
        <RiveComponent />

        <div className="absolute bottom-20 left-0 right-0">
          <Spinner />
        </div>
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="w-screen h-screen bg-primary-800 flex flex-col justify-end p-[6rem] items-center">
        <div className="flex flex-col justify-center text-center items-center gap-4 md:flex-row">
          <MdError color="#FFFFFF" size={32} />

          <h2 className="font-bold text-2xl text-neutral-full">
            Ops! Parece que aconteceu algum erro.
          </h2>
        </div>

        <div className="absolute w-screen h-screen translate-y-[3rem]">
          <RiveComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[6rem]">
      <div className="w-screen bg-primary-800 top-0 py-4 px-6 fixed z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Navigation links={translation()?.navigationLinks?.[0]?.links} />

            <div className="flex items-center gap-8">
              <div className="w-[6rem]">
                <Toggle
                  isActivedLanguage={isActivedLanguage}
                  setIsActivedLanguage={setIsActivedLanguage}
                />
              </div>

              <div className="relative size-16">
                <Logo
                  name={translation()?.logos[0].image.name}
                  url={translation()?.logos[0].image.url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-800 py-4 px-6">
        <div className="container mx-auto relative">
          <Hero
            title={translation()?.heroes[0].title}
            description={translation()?.heroes[0].description}
          />
        </div>
      </div>

      <div className="bg-neutral-full">
        <div className="bg-gradient-to-b from-[#9E75CE] via-[#9E75CE]/[0.65] to-[#9E75CE]/0 py-4 px-6">
          <div className="container mx-auto">
            <WhoIAm
              preTitle={translation()?.introductions[0].preTitle}
              title={translation()?.introductions[0].title}
              subtitle={translation()?.introductions[0].subtitle}
              description={translation()?.introductions[0].description}
              clientLogos={translation()?.introductions[0].clientLogos}
            />
          </div>
        </div>

        <div className="py-12 space-y-6 w-full overflow-hidden">
          <SkillsShowcase
            classNameWrapper="bg-pink-200"
            classNameAnimation="animate-slideLeft"
          >
            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-pink-700`}
            >
              {translation()?.skillsShowcases[0]?.topic[0]?.topic}
            </h2>

            <Link
              href={translation()?.skillsShowcases[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rotate-[-10deg] transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-105 cursor-pointer"
            >
              <Image
                src={translation()?.skillsShowcases[0].image.url}
                alt={translation()?.skillsShowcases[0].image.name}
                width={translation()?.skillsShowcases[0].image.width}
                height={translation()?.skillsShowcases[0].image.height}
                className="scale-70 object-contain shadow-xl"
              />
            </Link>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-pink-700`}
            >
              {translation()?.skillsShowcases[0]?.topic[1]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-pink-700`}
            >
              {translation()?.skillsShowcases[0]?.topic[2]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-pink-700`}
            >
              {translation()?.skillsShowcases[0]?.topic[3]?.topic}
            </h2>
          </SkillsShowcase>

          <SkillsShowcase
            classNameWrapper="bg-[#FFF5CE]"
            classNameAnimation="animate-slideRight"
          >
            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#9C8115]`}
            >
              {translation()?.skillsShowcases[1]?.topic[0]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#9C8115]`}
            >
              {translation()?.skillsShowcases[1]?.topic[1]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#9C8115]`}
            >
              {translation()?.skillsShowcases[1]?.topic[2]?.topic}
            </h2>

            <Link
              href={translation()?.skillsShowcases[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rotate-[-10deg] transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-105 cursor-pointer"
            >
              <Image
                src={translation()?.skillsShowcases[1].image.url}
                alt={translation()?.skillsShowcases[1].image.name}
                width={translation()?.skillsShowcases[1].image.width}
                height={translation()?.skillsShowcases[1].image.height}
                className="scale-70 object-contain shadow-xl"
              />
            </Link>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#9C8115]`}
            >
              {translation()?.skillsShowcases[1]?.topic[3]?.topic}
            </h2>
          </SkillsShowcase>

          <SkillsShowcase
            classNameWrapper="bg-[#C0C0C0]"
            classNameAnimation="animate-slideLeft"
          >
            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#1C1D21]`}
            >
              {translation()?.skillsShowcases[2]?.topic[0]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#1C1D21]`}
            >
              {translation()?.skillsShowcases[2]?.topic[1]?.topic}
            </h2>

            <Link
              href={translation()?.skillsShowcases[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rotate-[-10deg] transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-105 cursor-pointer"
            >
              <Image
                src={translation()?.skillsShowcases[2].image.url}
                alt={translation()?.skillsShowcases[2].image.name}
                width={translation()?.skillsShowcases[2].image.width}
                height={translation()?.skillsShowcases[2].image.height}
                className="scale-70 object-contain shadow-xl"
              />
            </Link>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#1C1D21]`}
            >
              {translation()?.skillsShowcases[2]?.topic[2]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#1C1D21]`}
            >
              {translation()?.skillsShowcases[2]?.topic[3]?.topic}
            </h2>
          </SkillsShowcase>

          <SkillsShowcase
            classNameWrapper="bg-[#B9D9FF]"
            classNameAnimation="animate-slideRight"
          >
            <Link
              href={translation()?.skillsShowcases[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rotate-[-10deg] transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-105 cursor-pointer"
            >
              <Image
                src={translation()?.skillsShowcases[3].image.url}
                alt={translation()?.skillsShowcases[3].image.name}
                width={translation()?.skillsShowcases[3].image.width}
                height={translation()?.skillsShowcases[3].image.height}
                className="scale-70 object-contain shadow-xl"
              />
            </Link>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#014EA8]`}
            >
              {translation()?.skillsShowcases[3]?.topic[0]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#014EA8]`}
            >
              {translation()?.skillsShowcases[3]?.topic[1]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#014EA8]`}
            >
              {translation()?.skillsShowcases[3]?.topic[2]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#014EA8]`}
            >
              {translation()?.skillsShowcases[3]?.topic[3]?.topic}
            </h2>
          </SkillsShowcase>

          <SkillsShowcase
            classNameWrapper="bg-[#B7FFB1]"
            classNameAnimation="animate-slideRight"
          >
            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#0A6C02]`}
            >
              {translation()?.skillsShowcases[4]?.topic[0]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#0A6C02]`}
            >
              {translation()?.skillsShowcases[4]?.topic[1]?.topic}
            </h2>

            <Link
              href={translation()?.skillsShowcases[4].link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rotate-[-10deg] transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-105 cursor-pointer"
            >
              <Image
                src={translation()?.skillsShowcases[4].image.url}
                alt={translation()?.skillsShowcases[4].image.name}
                width={translation()?.skillsShowcases[4].image.width}
                height={translation()?.skillsShowcases[4].image.height}
                className="scale-75 object-contain shadow-xl"
              />
            </Link>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#0A6C02]`}
            >
              {translation()?.skillsShowcases[4]?.topic[2]?.topic}
            </h2>

            <h2
              className={`text-6xl text-nowrap font-imbue tracking-widest text-[#0A6C02]`}
            >
              {translation()?.skillsShowcases[4]?.topic[3]?.topic}
            </h2>
          </SkillsShowcase>
        </div>

        <div className="py-12 space-y-6">
          <PortfolioGrid galleries={translation()?.projectGalleries} />
        </div>

        <div className="py-12 px-6 space-y-6">
          <div
            id="formation"
            className="container mx-auto flex flex-col gap-20 justify-center md:flex-row md:gap-30"
          >
            <Experience
              title={translation()?.experienceSections[0].title}
              subtitle={translation()?.experienceSections[0].subtitle}
              description={translation()?.experienceSections[0].description}
              items={translation()?.experienceSections[0].items}
            />

            <Education
              title={translation()?.educationSections[0].title}
              items={translation()?.educationSections[0].items}
              language={translation()?.languageSkills[0]}
            />
          </div>
        </div>

        <div className="py-12 px-6">
          <div className="container mx-auto">
            <FindMe
              title={translation()?.contactLinks[0].title}
              contacts={translation()?.contactLinks[0].contacts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

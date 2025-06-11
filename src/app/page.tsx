"use client";

import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import Spinner from "@/components/Spinner";

import { GET_DATA } from "@/api";
import { Navigation } from "@/components/Navigation";
import { Logo } from "@/components/Logo";
import { Hero } from "@/components/Hero";
import { RiveComponent } from "@/components/RiveComponent";
import { Toggle } from "@/components/Toggle";
import { WhoIAm } from "@/components/WhoIAm";

import { MdError } from "react-icons/md";

export default function Home() {
  const { data, loading, error } = useQuery(GET_DATA);
  const [showContent, setShowContent] = useState(false);
  const [isActivedLanguage, setIsActivedLanguage] = useState(true);

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
  }, [loading]);

  if (loading || !showContent)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#532FB8]">
        <div style={{ width: "100%", height: "100%" }}>
          <RiveComponent />
        </div>

        <div className="absolute bottom-20 left-0 right-0">
          <Spinner />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="w-screen h-screen flex flex-col justify-end p-[6rem] items-center">
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

  return (
    <div>
      <div className="bg-primary-800 py-4 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Navigation links={data?.navigationLinks?.[0]?.links} />

            <div className="flex items-center gap-8">
              <div className="w-[6rem]">
                <Toggle
                  isActivedLanguage={isActivedLanguage}
                  setIsActivedLanguage={setIsActivedLanguage}
                />
              </div>

              <div className="relative size-16">
                <Logo
                  name={data?.logos[0].image.name}
                  url={data?.logos[0].image.url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-800 py-4 px-6">
        <div className="container mx-auto">
          <Hero
            title={data?.heroes[0].title}
            description={data?.heroes[0].description}
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#9E75CE] via-[#9E75CE]/[0.65] to-[#9E75CE]/0 py-4 px-6">
        <div className="container mx-auto">
          <WhoIAm
            preTitle={data?.introductions[0].preTitle}
            title={data?.introductions[0].title}
            subtitle={data?.introductions[0].subtitle}
            description={data?.introductions[0].description}
            clientLogos={data?.introductions[0].clientLogos}
          />
        </div>
      </div>
    </div>
  );
}

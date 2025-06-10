"use client";

import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { useRive } from "@rive-app/react-canvas";

import Spinner from "@/components/Spinner";

const STATE_MACHINE_NAME = "State Machine 1";

import { GET_DATA } from "@/api";
import { Navigation } from "@/components/Navigation";
import { Logo } from "@/components/Logo";
import { Hero } from "@/components/Hero";

export default function Home() {
  const { RiveComponent } = useRive({
    src: "images/character-we.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const { data, loading, error } = useQuery(GET_DATA);
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

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="py-4 px-6 space-y-12">
      <div className="bg-primary-800">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <Navigation links={data?.navigationLinks?.[0]?.links} />

            <div className="relative size-16">
              <Logo
                name={data?.logos[0].image.name}
                url={data?.logos[0].image.url}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-800">
        <Hero />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

import { gql, useQuery } from "@apollo/client";

import { useRive } from "@rive-app/react-canvas";

import Spinner from "@/components/Spinner";

const GET_DATA = gql`
  query getData {
    navigationLinks {
      links {
        id
        label
        url
        target
        isActived
      }
    }
    logos {
      image {
        name
        url
      }
      title
      url
    }
    heroes {
      me
      title
      description
    }
    buttonCtas {
      label
    }
    introductions {
      preTitle
      title
      subtitle
      description
      clientLogos {
        name
        url
      }
    }
    skillsShowcases {
      image {
        name
        url
      }
      topic {
        topic
      }
    }
    projectGalleries {
      image {
        name
        url
      }
    }
    contactLinks {
      title
      contacts {
        id
        platform
        displayText
        link
        type
        icon {
          name
          url
        }
      }
    }
    experienceSections {
      title
      subtitle
      description
      items {
        id
        role
        company
        period
        description
        technologies {
          id
          technologie
        }
        descriptionClient
        clients {
          id
          client
        }
      }
    }
    educationSections {
      title
      items {
        id
        course
        institution
        period
        description
      }
    }
    languageSkills {
      title
      languages {
        id
        name
        level
      }
    }
    quickAccessIcons {
      icons {
        icon {
          name
          url
        }
        label
        actionType
        value
      }
    }
  }
`;

const STATE_MACHINE_NAME = "State Machine 1";

export default function Home() {
  const { RiveComponent } = useRive({
    src: "images/character-we.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const { data, loading, error } = useQuery(GET_DATA);
  const [showContent, setShowContent] = useState(false);

  console.log(data);

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

  return <p className="text-red-500">Hello World</p>;
}

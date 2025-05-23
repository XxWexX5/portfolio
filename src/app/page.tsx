"use client";

import { gql, useQuery } from "@apollo/client";

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

export default function Home() {
  const { data, loading, error } = useQuery(GET_DATA);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  console.log(data);

  return <p className="text-red-500">Hello World</p>;
}

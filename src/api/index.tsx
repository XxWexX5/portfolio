import { gql } from "@apollo/client";

export const GET_DATA = gql`
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
        width
        height
      }
    }
    skillsShowcases {
      image {
        name
        url
        width
        height
      }
      topic {
        topic
      }
      link
    }
    projectGalleries {
      gallery {
        image {
          name
          url
          width
          height
        }
        link
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
          width
          height
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

export const GET_DATA_PT_BR = gql`
  query getData {
    navigationLinks(locale: "pt") {
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
    heroes(locale: "pt") {
      me
      title
      description
    }
    buttonCtas(locale: "pt") {
      label
    }
    introductions(locale: "pt") {
      preTitle
      title
      subtitle
      description
      clientLogos {
        name
        url
        width
        height
      }
    }
    skillsShowcases {
      image {
        name
        url
        width
        height
      }
      topic {
        topic
      }
      link
    }
    projectGalleries {
      gallery {
        image {
          name
          url
          width
          height
        }
        link
      }
    }
    contactLinks(locale: "pt") {
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
          width
          height
        }
      }
    }
    experienceSections(locale: "pt") {
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
    educationSections(locale: "pt") {
      title
      items {
        id
        course
        institution
        period
        description
      }
    }
    languageSkills(locale: "pt") {
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

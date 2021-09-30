import { FaLinkedin, FaGlobe, FaTwitter } from "react-icons/fa";

export const OurTeams = [
  {
    id: 1,
    src: "/images/john.webp",
    alt: "John Hartson Profile Picture",
    name: "John Hartson",
    title: "CEO and Founder",
    social: [
      {
        id: 1,
        url: "",
        icon: <FaGlobe />,
      },
      {
        id: 2,
        url: "",
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 2,
    src: "/images/tony.webp",
    alt: "Anthony Marini Profile Picture",
    name: "Anthony Marini",
    title: "CEO and Founder",
    social: [
      {
        id: 1,
        url: "",
        icon: <FaGlobe />,
      },
      {
        id: 2,
        url: "",
        icon: <FaLinkedin />,
      },
    ],
  },
];

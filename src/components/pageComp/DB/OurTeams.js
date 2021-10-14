import { FaLinkedin, FaGlobe, FaTwitter, FaInstagram } from "react-icons/fa";

export const OurTeams = [
  {
    id: 1,
    src: "/images/john.png",
    alt: "John Hartson Profile Picture",
    name: "John Hartson",
    title: "CEO and Founder",
    social: [
      {
        id: 1,
        url: "https://www.instagram.com/johnhartson10",
        icon: <FaInstagram />,
      },
      {
        id: 2,
        url: "https://twitter.com/JohnHartson10?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 2,
    src: "/images/tony.png",
    alt: "Anthony Marini Profile Picture",
    name: "Anthony Marini",
    title: "CEO and Founder",
    social: [
      {
        id: 1,
        url: "https://www.anthonymarini.co.uk/",
        icon: <FaGlobe />,
      },
      {
        id: 2,
        url: "https://www.linkedin.com/in/tony-marini-31487867/",
        icon: <FaLinkedin />,
      },
    ],
  },
];

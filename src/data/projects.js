import bookmark from "./images/bookmark.svg";
import thoughts from "./images/thoughts.svg";
import connect from "./images/connect.svg";

import devBillySite from "./images/dev-billy.png";
import designSystem from "./images/design-system.png";
import room from "./images/room-homepage.png";
import ipTracker from "./images/ip-address-tracker.png";

let projectList = [
  {
    id: 0,
    title: "Dev-Billy Website",
    shortDescription:
      "This is my website project built to showcase my skills and journey as a frontend developer. It was an interesting journey moving from design to code to deployment.",
    story: "devbilly.md",
    techStack: ["HTML5", "SCSS", "ReactJS", "Figma", "Vercel", "Markdown"],
    image: devBillySite,
    demoLink: "https://devbilly.com",
    sourceLink: "https://github.com/dev-billy/dev-billy",
    outroIllustrations: [bookmark],
  },
  {
    id: 1,
    title: "Design System",
    shortDescription:
      "This is a react project, mainly focused on creating reusable react components. This design system was created to test my react skills and look on reusability concepts on a design system level.",
    story: "designSystem.md",
    techStack: ["HTML5", "SCSS", "ReactJS", "Vercel"],
    image: designSystem,
    demoLink: "https://design-system-liart.vercel.app/",
    sourceLink: "https://github.com/dev-billy/design-system",
    outroIllustrations: [bookmark],
  },
  {
    id: 2,
    title: "Room Homepage",
    shortDescription:
      "Landing page for a hypothetical furniture store, Built to challenge my css layout skills",
    techStack: [
      "HTML5",
      "SCSS",
      "JavaScript",
      "Responsive Web Design",
      "Flexbox",
    ],
    story: "roomHomepage.md",
    image: room,
    demoLink: "https://room-homepage-dev-billy.vercel.app/",
    sourceLink: "https://github.com/dev-billy/room-homepage",
    outroIllustrations: [thoughts],
  },
  {
    id: 3,
    title: "IP address Tracker",
    shortDescription:
      "An IP address tracker that provides the information from an IP address or a domain name, the information is provided using the ipify and displaying the coordinates on a map",
    techStack: ["HTML5", "SCSS", "JavaScript", "API", "Leaflet", "Mapbox"],
    story: "ipTracker.md",
    image: ipTracker,
    demoLink: "https://ip-address-tracker-silk.vercel.app/",
    sourceLink: "https://github.com/dev-billy/ip-address-tracker",
    outroIllustrations: [connect],
  },
];

export default projectList;

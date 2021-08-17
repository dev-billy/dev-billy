import devBillySite from "./images/dev-billy.png";
import designSystem from "./images/design-system.png";
import bookmark from "./images/bookmark.svg";
let projectList = [
  {
    id: 1,
    title: "Dev-Billy Website",
    shortDescription:
      "This is my website project built to showcase my skills and journey as a frontend developer. It was an interesting journey moving from design to code to deployment.",
    story: "devbilly.md",
    techStack: ["HTML5", "SCSS", "ReactJS", "Figma", "Vercel"],
    image: devBillySite,
    demoLink: "https://devbilly.com",
    sourceLink: "https://github.com/dev-billy/dev-billy",
    outroIllustrations: [bookmark],
  },
  {
    id: 2,
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
];

export default projectList;

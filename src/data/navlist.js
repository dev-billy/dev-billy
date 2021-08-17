const navlist = (location) => {
  return [
    {
      text: "Home",
      active: "/" === location.pathname,
      link: "/",
    },
    {
      text: "Projects",
      active:
        "/projects" === location.pathname ||
        location.pathname.startsWith("/projects"),
      link: "/projects",
    },
    {
      text: "Contact Me",
      cta: true,
      active: "/contact" === location.pathname,
      link: "/contact",
    },
  ];
};

export default navlist;

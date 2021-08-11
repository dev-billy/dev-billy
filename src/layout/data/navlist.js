const navlist = (location) => {
  return [
    {
      text: "Home",
      active: "/" === location.pathname,
      link: "/",
    },
    {
      text: "Portfolio",
      active: "/portfolio" === location.pathname,
      link: "/portfolio",
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

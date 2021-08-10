const navlist = (location) => {
  return [
    {
      text: "Home",
      active: "/" === location.pathname,
      link: "/",
    },
    {
      text: "Page Two",
      active: "/page02" === location.pathname,
      link: "/page02",
    },
  ];
};

export default navlist;

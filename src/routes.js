import HomePage from "./pages/Home";
import NotFound from "./pages/404";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Project from "./pages/Portfolio/Project";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/portfolio",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "/portfolio/project/:id",
    exact: true,
    component: Project,
  },
  {
    path: "*",
    exact: false,
    component: NotFound,
  },
];

export default routes;

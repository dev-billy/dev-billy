import HomePage from "./pages/Home";
import NotFound from "./pages/404";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Project from "./pages/Projects/Project";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/projects",
    exact: true,
    component: Projects,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "/projects/:id",
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

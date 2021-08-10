import HomePage from "./pages/Home";
import NotFound from "./pages/404";
import PageTwo from "./pages/PageTwo";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/page02",
    exact: true,
    component: PageTwo,
  },
  {
    path: "*",
    exact: false,
    component: NotFound,
  },
];

export default routes;

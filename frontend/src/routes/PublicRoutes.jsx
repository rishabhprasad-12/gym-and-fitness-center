import { useRoutes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Membership from "../pages/public/Membership";
import Schedule from "../pages/public/Schedule";
import Trainers from "../pages/public/Trainers";

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
    ],
  },
];

export default function PublicRoutes() {
  return useRoutes(routes);
}
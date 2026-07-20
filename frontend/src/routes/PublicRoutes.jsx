import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Membership from "../pages/public/Membership";
import Schedule from "../pages/public/Schedule";
import Trainers from "../pages/public/Trainers";
import Dashboard from "../pages/dashboard/CustomerDashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";

const PublicRoutes = [
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
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
  // {
  //   path: "/admin",
  //   element: <AdminDashboard />,
  // },
];

export default PublicRoutes;

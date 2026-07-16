import { useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import { Children } from "react";
import CustomerDashboard from "../pages/dashboard/CustomerDashboard";

const routes = [
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <CustomerDashboard />
      },
    ],
  },
];

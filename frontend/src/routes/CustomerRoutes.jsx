import DashboardLayout from "../layouts/DashboardLayout";
import CustomerDashboard from "../pages/dashboard/CustomerDashboard";
import ProtectedRoute from "./ProtectedRoute";

const CustomerRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="customer">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <CustomerDashboard />,
      },
    ],
  },
];

export default CustomerRoutes;

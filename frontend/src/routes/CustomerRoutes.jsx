import DashboardLayout from "../layouts/DashboardLayout";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import MyMembership from "../pages/customer/MyMembership";
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
      {
        path: "my-membership",
        element: <MyMembership />
      }
    ],
  },
];

export default CustomerRoutes;

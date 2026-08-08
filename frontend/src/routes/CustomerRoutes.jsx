import DashboardLayout from "../layouts/DashboardLayout";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import MyClasses from "../pages/customer/MyClasses";
import MyMembership from "../pages/customer/MyMembership";
import Profile from "../pages/customer/Profile";
import Support from "../pages/customer/Support";
import ProtectedRoute from "./ProtectedRoute";

const CustomerRoutes = [
  {
    path: "/customer",
    element: (
      <ProtectedRoute role="customer">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <CustomerDashboard />,
      }, 
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "my-membership",
        element: <MyMembership />
      },
      {
        path: "classes",
        element: <MyClasses />
      },
      {
        path: "support",
        element: <Support />
      }
    ],
  },
];

export default CustomerRoutes;

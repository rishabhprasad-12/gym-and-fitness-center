import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import ManagePlans from "../pages/admin/ManagePlans";
import ManageTrainers from "../pages/admin/ManageTrainers";

// import EmptyState from "../components/common/EmptyState";
import ManageSchedules from "../pages/admin/ManageSchedules";
import ManageRegistrations from "../pages/admin/ManageRegistrations";

const AdminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "membership-plans",
        element: <ManagePlans />
      },
      {
        path: "trainers",
        element: <ManageTrainers />
      },
      {
        path: "class-schedules",
        element: <ManageSchedules />
      },
      {
        path: "membership-registrations",
        element: <ManageRegistrations />
      }
    ],
  },
];

export default AdminRoutes;
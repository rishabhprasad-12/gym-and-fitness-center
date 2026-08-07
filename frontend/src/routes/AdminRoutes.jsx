import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import ManagePlans from "../pages/admin/ManagePlans";
import ManageTrainers from "../pages/admin/ManageTrainers";

import EmptyState from "../components/common/EmptyState";
import ManageSchedules from "../pages/admin/ManageSchedules";

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
      }
    ],
  },
];

export default AdminRoutes;
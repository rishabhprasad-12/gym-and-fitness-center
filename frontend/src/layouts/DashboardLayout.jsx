import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

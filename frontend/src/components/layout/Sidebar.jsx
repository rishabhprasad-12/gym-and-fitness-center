import { useNavigate } from "react-router-dom";
import { Dumbbell, LogOut } from "lucide-react";

import SidebarItem from "../dashboard/SidebarItem";
import toast from "react-hot-toast";

import {
  customerSidebarMenu,
  adminSidebarMenu,
  accountMenu,
} from "../../data/dashboard/sidebarMenu";

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");

      navigate("/auth/login");

      toast.success("You logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <aside className="sticky top-0 hidden h-screen overflow-y-auto hide-scrollbar w-64 border-r border-zinc-800 bg-zinc-900 lg:flex lg:flex-col">
      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-zinc-800 px-6 py-8">
        <div className="rounded-xl bg-lime-400 p-2">
          <Dumbbell className="text-black" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">FitForge</h2>

          <p className="text-xs text-zinc-500">
            {user.role !== "admin" ? "Customer Dashboard" : "Admin Dashboard"}
          </p>
        </div>
      </div>

      {/* Main */}

      <div className="flex-1 space-y-2 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Main
        </p>

        {user.role !== "admin"
          ? customerSidebarMenu.map((item) => (
              <SidebarItem key={item.title} item={item} />
            ))
          : adminSidebarMenu.map((item) => (
              <SidebarItem key={item.title} item={item} />
            ))}

        <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Account
        </p>

        {accountMenu.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}

        {/* Logout Button */}
        <div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 font-medium text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <LogOut size={24} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

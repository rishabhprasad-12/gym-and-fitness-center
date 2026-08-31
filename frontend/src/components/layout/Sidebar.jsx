import { useNavigate } from "react-router-dom";
import { Dumbbell, LogOut, X } from "lucide-react";

import SidebarItem from "../dashboard/SidebarItem";
import toast from "react-hot-toast";

import {
  customerSidebarMenu,
  adminSidebarMenu,
  accountMenu,
} from "../../data/dashboard/sidebarMenu";

const Sidebar = ({ isOpen = false, onClose }) => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const userRole = user?.role || "customer";

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      onClose?.();
      navigate("/");

      toast.success("You logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  const menuItems =
    userRole !== "admin" ? customerSidebarMenu : adminSidebarMenu;

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-zinc-800 bg-zinc-900 transition-transform duration-300 ease-in-out lg:fixed lg:w-64 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-full w-full flex-col overflow-y-auto hide-scrollbar">
          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-lime-400 p-2">
                <Dumbbell className="text-black" size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">FitForge</h2>

                <p className="text-xs text-zinc-500">
                  {userRole !== "admin"
                    ? "Customer Dashboard"
                    : "Admin Dashboard"}
                </p>
              </div>
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-zinc-700 p-2 text-zinc-300 lg:hidden"
                aria-label="Close sidebar"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex-1 space-y-2 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Main
            </p>

            {menuItems.map((item) => (
              <SidebarItem key={item.title} item={item} onNavigate={onClose} />
            ))}

            {accountMenu.length > 0 && (
              <>
                <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Account
                </p>

                {accountMenu.map((item) => (
                  <SidebarItem
                    key={item.title}
                    item={item}
                    onNavigate={onClose}
                  />
                ))}
              </>
            )}

            <div className="pt-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 font-medium text-red-400 transition-colors hover:bg-zinc-800"
              >
                <LogOut size={24} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

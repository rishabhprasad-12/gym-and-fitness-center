import { Dumbbell } from "lucide-react";

import SidebarItem from "./SidebarItem";

import { sidebarMenu, accountMenu } from "../../data/dashboard/sidebarMenu";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen overflow-y-auto hide-scrollbar w-64 border-r border-zinc-800 bg-zinc-900 lg:flex lg:flex-col">
      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-zinc-800 px-6 py-8">
        <div className="rounded-xl bg-lime-400 p-2">
          <Dumbbell className="text-black" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">FitForge</h2>

          <p className="text-xs text-zinc-500">Customer Dashboard</p>
        </div>
      </div>

      {/* Main */}

      <div className="flex-1 space-y-2 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Main
        </p>

        {sidebarMenu.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}

        <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Account
        </p>

        {accountMenu.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300
        ${
          isActive
            ? "bg-lime-400 text-black shadow-lg"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        }`
      }
    >
      <Icon size={20} />

      <span className="font-medium">{item.title}</span>
    </NavLink>
  );
};

export default SidebarItem;

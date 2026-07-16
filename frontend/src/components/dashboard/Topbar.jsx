import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>

          <p className="text-sm text-zinc-400">Welcome back 👋</p>
        </div>

        <div className="flex items-center gap-5">
          <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-lime-400">
            <Bell size={20} className="text-zinc-300" />
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/80"
              alt=""
              className="h-11 w-11 rounded-full border border-lime-400 object-cover"
            />

            <div>
              <h3 className="font-semibold text-white">Ayush</h3>

              <p className="text-xs text-zinc-500">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

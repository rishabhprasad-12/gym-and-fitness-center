import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCard = ({ title, description, icon: Icon, path, color }) => {
  return (
    <Link
      to={path}
      className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
    >
      {/* Glow */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon size={28} />
        </div>

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>

        <div className="mt-6 flex items-center gap-2 text-lime-400 font-medium">
          Open
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default ActionCard;

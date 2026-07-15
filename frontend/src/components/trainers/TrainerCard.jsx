import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30">
      {/* Image */}
      <div className="relative flex h-80 items-end justify-center overflow-hidden bg-gradient-to-b from-lime-400/10 to-transparent">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Experience Badge */}
        <div className="absolute top-5 right-5 rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black">
          {trainer.experience}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>

        <p className="mt-1 text-lime-400">{trainer.role}</p>

        <div className="mt-5 flex items-center gap-2 text-zinc-400">
          <Award size={18} className="text-lime-400" />
          <span>{trainer.specialization}</span>
        </div>

        <Link
          to="#"
          className="mt-6 inline-flex items-center gap-2 font-medium text-lime-400 transition hover:gap-3"
        >
          View Profile
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;

import { Link } from "react-router-dom";
import { Clock3, Users, ArrowRight } from "lucide-react";

const ScheduleRow = ({ schedule }) => {
  return (
    <div className="grid grid-cols-7 items-center rounded-2xl border border-white/10 bg-zinc-900/60 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30">
      <div>
        <p className="font-semibold text-white">{schedule.day}</p>
      </div>

      <div>
        <span className="rounded-full bg-lime-400/10 px-3 py-1 text-sm font-medium text-lime-400">
          {schedule.className}
        </span>
      </div>

      <div className="text-zinc-300">{schedule.trainer}</div>

      <div className="flex items-center gap-2 text-zinc-400">
        <Clock3 size={16} />
        {schedule.time}
      </div>

      <div className="text-zinc-400">{schedule.duration}</div>

      <div className="flex items-center gap-2 text-zinc-400">
        <Users size={16} />
        {schedule.seats}
      </div>

      <Link
        to="/membership"
        className="ml-auto inline-flex items-center gap-2 rounded-xl bg-lime-400 px-4 py-2 font-medium text-black transition hover:bg-lime-500"
      >
        Book
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ScheduleRow;

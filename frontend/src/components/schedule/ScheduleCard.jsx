import { Link } from "react-router-dom";
import { CalendarDays, Clock3, Users } from "lucide-react";

const ScheduleCard = ({ schedule }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
      <span className="text-sm font-medium text-lime-400">{schedule.day}</span>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {schedule.className}
      </h3>

      <p className="mt-4 text-zinc-400">Trainer</p>

      <p className="font-medium text-white">{schedule.trainer}</p>

      <div className="mt-6 space-y-3 text-zinc-400">
        <div className="flex items-center gap-3">
          <Clock3 size={18} />
          {schedule.time}
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays size={18} />
          {schedule.duration}
        </div>

        <div className="flex items-center gap-3">
          <Users size={18} />
          {schedule.seats} Seats
        </div>
      </div>

      <Link
        to="/membership"
        className="mt-6 flex justify-center rounded-xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-500"
      >
        Book Class
      </Link>
    </div>
  );
};

export default ScheduleCard;

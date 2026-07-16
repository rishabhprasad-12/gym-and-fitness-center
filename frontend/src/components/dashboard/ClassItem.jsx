import { Clock3, User, Users } from "lucide-react";

const ClassItem = ({ item }) => {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-lime-400/30 hover:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <span className={`mt-1 h-3 w-3 rounded-full ${item.color}`} />

          <div>
            <h3 className="font-semibold text-white">{item.day}</h3>

            <p className="mt-1 text-xl font-bold text-white">
              {item.className}
            </p>

            <div className="mt-4 flex flex-wrap gap-5 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <Clock3 size={15} />
                {item.time}
              </span>

              <span className="flex items-center gap-2">
                <User size={15} />
                {item.trainer}
              </span>

              <span className="flex items-center gap-2">
                <Users size={15} />
                {item.seats} Seats
              </span>
            </div>
          </div>
        </div>

        <button className="rounded-xl bg-lime-400 px-5 py-2 font-medium text-black transition hover:bg-lime-500">
          Join
        </button>
      </div>
    </div>
  );
};

export default ClassItem;

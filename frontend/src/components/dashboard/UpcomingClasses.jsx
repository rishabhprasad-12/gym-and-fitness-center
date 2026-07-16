import { ChevronRight } from "lucide-react";
import { upcomingClasses } from "../../data/dashboard/upcomingClasses";
import ClassItem from "./ClassItem";

const UpcomingClasses = () => {
  return (
    <section className="mt-8 rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Upcoming Classes</h2>

          <p className="mt-2 text-zinc-400">Your next scheduled workouts.</p>
        </div>

        <button className="flex items-center gap-2 text-lime-400 hover:text-lime-300">
          View All
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="space-y-5">
        {upcomingClasses.map((item) => (
          <ClassItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingClasses;

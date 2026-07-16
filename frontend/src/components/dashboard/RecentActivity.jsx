import { ChevronRight } from "lucide-react";
import ActivityItem from "./ActivityItem";
import { recentActivities } from "../../data/dashboard/recentActivities";

const RecentActivity = () => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Recent Activity</h2>

          <p className="mt-2 text-zinc-400">
            Your latest fitness journey updates.
          </p>
        </div>

        <button className="flex items-center gap-2 text-lime-400 hover:text-lime-300">
          View History
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="space-y-6">
        {recentActivities.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            last={index === recentActivities.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;

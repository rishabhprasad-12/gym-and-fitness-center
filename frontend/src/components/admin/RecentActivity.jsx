import { Activity } from "lucide-react";
import { recentActivity } from "../../data/admin-dashboard/recentActivity";
import ActivityItem from "./ActivityItem";

const RecentActivity = () => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Recent Activity</h2>

          <p className="mt-2 text-zinc-400">
            Latest actions across the gym management system.
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10">
          <Activity size={28} className="text-lime-400" />
        </div>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {recentActivity.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;

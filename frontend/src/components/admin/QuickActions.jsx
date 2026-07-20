import ActionCard from "./ActionCard";
import { adminQuickActions } from "../../data/admin-dashboard/adminQuickActions";

const QuickActions = () => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Quick Actions</h2>

        <p className="mt-2 text-zinc-400">
          Access frequently used administrative tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {adminQuickActions.map((action) => (
          <ActionCard key={action.id} {...action} />
        ))}
      </div>
    </section>
  );
};

export default QuickActions;

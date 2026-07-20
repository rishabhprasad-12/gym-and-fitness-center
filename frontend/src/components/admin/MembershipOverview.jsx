import { Users } from "lucide-react";
import { membershipOverview } from "../../data/admin-dashboard/membershipOverview";
import PlanProgress from "./PlanProgress";

const MembershipOverview = () => {
  const totalMembers = membershipOverview.reduce(
    (sum, plan) => sum + plan.members,
    0,
  );

  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Membership Overview</h2>

          <p className="mt-2 text-zinc-400">
            Distribution of active members across plans.
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10">
          <Users className="text-lime-400" size={28} />
        </div>
      </div>

      {/* Total Members */}

      <div className="mb-8 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">
        <p className="text-sm text-zinc-400">Total Active Members</p>

        <h2 className="mt-2 text-4xl font-bold text-white">{totalMembers}</h2>
      </div>

      <div className="space-y-5">
        {membershipOverview.map((plan) => (
          <PlanProgress key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default MembershipOverview;

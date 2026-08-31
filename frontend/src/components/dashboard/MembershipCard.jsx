import { CreditCard, CalendarDays, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const MembershipCard = ({ membership }) => {
  if (!membership || !membership.membershipPlan) {
    return (
      <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-lime-400/5 p-8 mt-6">
        <div className="relative flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">
            No active membership
          </h2>
          <p className="text-zinc-400">You do not have an active plan yet.</p>
        </div>
      </div>
    );
  }

  const plan = membership.membershipPlan;
  const start = new Date(membership.startDate);
  const end = new Date(membership.endDate);
  const remainingDays = Math.max(
    0,
    Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24)),
  );

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-lime-400/5 p-8 mt-6">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-8">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Membership
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white">{plan.title}</h2>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-lime-400/15 px-4 py-2 text-sm font-medium text-lime-400">
            <BadgeCheck size={18} />
            {membership.membershipStatus || "Active"}
          </div>
        </div>

        <div>
          <p className="text-5xl font-bold text-lime-400">₹{plan.price}</p>
          <p className="mt-2 text-zinc-400">{plan.title} Membership</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <CalendarDays className="mb-2 text-lime-400" />
            <p className="text-sm text-zinc-500">Duration</p>
            <h4 className="font-semibold text-white">
              {plan.durationValue} {plan.durationUnit}
            </h4>
          </div>

          <div>
            <CreditCard className="mb-2 text-lime-400" />
            <p className="text-sm text-zinc-500">Expiry</p>
            <h4 className="font-semibold text-white">
              {end.toLocaleDateString()}
            </h4>
          </div>

          <div>
            <BadgeCheck className="mb-2 text-lime-400" />
            <p className="text-sm text-zinc-500">Remaining</p>
            <h4 className="font-semibold text-white">{remainingDays} Days</h4>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-zinc-400">Membership Progress</span>
            <span className="text-lime-400">
              {Math.min(
                100,
                Math.max(
                  10,
                  Math.round(((new Date() - start) / (end - start)) * 100),
                ),
              )}
              %
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-lime-400"
              style={{
                width: `${Math.min(100, Math.max(10, Math.round(((new Date() - start) / (end - start)) * 100)))}%`,
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="membership"
            className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500"
          >
            Renew Membership
          </Link>

          <Link
            to="/membership"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;

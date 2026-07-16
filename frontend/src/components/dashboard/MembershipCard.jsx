import { CreditCard, CalendarDays, BadgeCheck } from "lucide-react";

const MembershipCard = () => {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-lime-400/5 p-8 mt-6">
      {/* Glow */}

      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-8">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Membership
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white">Premium Plan</h2>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-lime-400/15 px-4 py-2 text-sm font-medium text-lime-400">
            <BadgeCheck size={18} />
            Active
          </div>
        </div>

        {/* Price */}

        <div>
          <p className="text-5xl font-bold text-lime-400">₹1999</p>

          <p className="mt-2 text-zinc-400">Premium Membership</p>
        </div>

        {/* Info */}

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <CalendarDays className="mb-2 text-lime-400" />

            <p className="text-sm text-zinc-500">Duration</p>

            <h4 className="font-semibold text-white">3 Months</h4>
          </div>

          <div>
            <CreditCard className="mb-2 text-lime-400" />

            <p className="text-sm text-zinc-500">Expiry</p>

            <h4 className="font-semibold text-white">15 Oct 2026</h4>
          </div>

          <div>
            <BadgeCheck className="mb-2 text-lime-400" />

            <p className="text-sm text-zinc-500">Remaining</p>

            <h4 className="font-semibold text-white">76 Days</h4>
          </div>
        </div>

        {/* Progress */}

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-zinc-400">Membership Progress</span>

            <span className="text-lime-400">72%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[72%] rounded-full bg-lime-400" />
          </div>
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500">
            Renew Membership
          </button>

          <button className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;

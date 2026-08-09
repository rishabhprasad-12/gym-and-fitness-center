import MembershipPlanRow from "./MembershipPlanRow";
import EmptyState from "../common/EmptyState";

const MembershipPlanTable = ({ plans, loading, onEdit, onDelete }) => {
  // Loading State
  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-16 animate-pulse rounded-2xl bg-zinc-800"
            />
          ))}
        </div>
      </div>
    );
  }

  // Empty State
  if (!plans.length) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Membership Plan Found
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            There are no membership plan yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 lg:block">
        <table className="w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">
                Plan
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">
                Duration
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">
                Popular
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-zinc-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <MembershipPlanRow
                key={plan._id}
                plan={plan}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div className="space-y-4 lg:hidden">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {plan.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">{plan.duration}</p>
              </div>

              <span className="text-xl font-bold text-lime-400">
                ₹{plan.price}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  plan.popular
                    ? "bg-lime-400/10 text-lime-400"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {plan.popular ? "Popular" : "Standard"}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={() => onEdit(plan)}
                  className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-white hover:border-lime-400"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(plan)}
                  className="rounded-xl bg-red-500/10 px-4 py-2 text-sm text-red-400 hover:bg-red-500/20"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MembershipPlanTable;

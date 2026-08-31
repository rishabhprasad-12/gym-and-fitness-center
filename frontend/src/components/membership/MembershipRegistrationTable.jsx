import { Eye, Trash2 } from "lucide-react";

const MembershipRegistrationTable = ({
  registrations,
  loading,
  onView,
  onDelete,
}) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-lime-400/10 text-lime-400 border-lime-400/20";

      case "Pending":
        return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";

      case "Expired":
        return "bg-zinc-800 text-zinc-400 border-zinc-700";

      case "Cancelled":
        return "bg-red-400/10 text-red-400 border-red-400/20";

      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  const getPaymentStyle = (status) => {
    switch (status) {
      case "Paid":
        return "text-lime-400";

      case "Pending":
        return "text-yellow-400";

      case "Failed":
        return "text-red-400";

      default:
        return "text-zinc-400";
    }
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-sm text-zinc-500">Loading registrations...</p>
        </div>
      </div>
    );
  }

  if (!registrations.length) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Registrations Found
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            No membership registrations are available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="overflow-x-auto pb-2">
        <table className="w-full min-w-[760px] text-left sm:min-w-[900px]">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Customer
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Membership
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Amount
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Payment
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Status
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Registered
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((registration) => (
              <tr
                key={registration._id}
                className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/40"
              >
                {/* Customer */}

                <td className="px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {registration.user?.name || "Unknown"}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {registration.user?.email || "-"}
                    </p>
                  </div>
                </td>

                {/* Membership */}

                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-white">
                    {registration.membershipPlan?.title || "-"}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {registration.membershipPlan?.durationValue}{" "}
                    {registration.membershipPlan?.durationUnit}
                  </p>
                </td>

                {/* Amount */}

                <td className="px-5 py-4 text-sm font-medium text-white">
                  ₹{registration.amountPaid || 0}
                </td>

                {/* Payment */}

                <td className="px-5 py-4">
                  <span
                    className={`text-sm font-medium ${getPaymentStyle(
                      registration.paymentStatus,
                    )}`}
                  >
                    {registration.paymentStatus || "-"}
                  </span>
                </td>

                {/* Membership Status */}

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                      registration.membershipStatus,
                    )}`}
                  >
                    {registration.membershipStatus || "-"}
                  </span>
                </td>

                {/* Registered */}

                <td className="px-5 py-4 text-sm text-zinc-400">
                  {formatDate(registration.createdAt)}
                </td>

                {/* Actions */}

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onView(registration)}
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                      title="View"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(registration)}
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-red-400/10 hover:text-red-400"
                      title="Delete"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipRegistrationTable;

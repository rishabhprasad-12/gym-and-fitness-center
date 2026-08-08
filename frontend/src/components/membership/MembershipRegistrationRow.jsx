import { Eye, Trash2 } from "lucide-react";

const MembershipRegistrationRow = ({ registration, onView, onDelete }) => {
  const getStatusClass = (status) => {
    if (status === "Active") {
      return "border-lime-400/20 bg-lime-400/10 text-lime-400";
    }

    if (status === "Pending") {
      return "border-yellow-400/20 bg-yellow-400/10 text-yellow-400";
    }

    if (status === "Expired") {
      return "border-zinc-700 bg-zinc-800 text-zinc-400";
    }

    if (status === "Cancelled") {
      return "border-red-400/20 bg-red-400/10 text-red-400";
    }

    return "border-zinc-700 bg-zinc-800 text-zinc-400";
  };

  const getPaymentClass = (status) => {
    if (status === "Paid") {
      return "text-lime-400";
    }

    if (status === "Pending") {
      return "text-yellow-400";
    }

    if (status === "Failed") {
      return "text-red-400";
    }

    return "text-zinc-400";
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <tr className="border-b border-zinc-800 transition hover:bg-zinc-800/40">
      {/* Customer */}

      <td className="px-5 py-4">
        <div>
          <p className="font-medium text-white">
            {registration.user?.name || "Unknown User"}
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {registration.user?.email || "-"}
          </p>
        </div>
      </td>

      {/* Plan */}

      <td className="px-5 py-4">
        <p className="text-sm text-white">
          {registration.membershipPlan?.title || "-"}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          {registration.membershipPlan?.durationValue}{" "}
          {registration.membershipPlan?.durationUnit}
        </p>
      </td>

      {/* Amount */}

      <td className="px-5 py-4">
        <span className="text-sm font-medium text-white">
          ₹{registration.amountPaid || 0}
        </span>
      </td>

      {/* Payment */}

      <td className="px-5 py-4">
        <span
          className={`text-sm font-medium ${getPaymentClass(
            registration.paymentStatus,
          )}`}
        >
          {registration.paymentStatus}
        </span>
      </td>

      {/* Membership Status */}

      <td className="px-5 py-4">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusClass(
            registration.membershipStatus,
          )}`}
        >
          {registration.membershipStatus}
        </span>
      </td>

      {/* Date */}

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
            title="View registration"
          >
            <Eye size={17} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(registration)}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-red-400/10 hover:text-red-400"
            title="Delete registration"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MembershipRegistrationRow;

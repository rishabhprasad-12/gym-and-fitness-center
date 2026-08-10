import { Eye, Trash2, User, CreditCard, CalendarDays } from "lucide-react";

const MembershipRegistrationTable = ({
  registrations,
  loading,
  onView,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="space-y-4 p-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-16 animate-pulse rounded-xl bg-zinc-800"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!registrations.length) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-12 text-center">
        <CreditCard size={36} className="mx-auto mb-3 text-zinc-600" />

        <h3 className="text-lg font-semibold text-white">
          No Membership Registrations
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          Membership registrations will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      {/* DESKTOP TABLE */}

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-zinc-800 text-left">
              <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                Customer
              </th>

              <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                Membership
              </th>

              <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                Amount
              </th>

              <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                Payment
              </th>

              <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                Status
              </th>

              <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((registration) => (
              <RegistrationRow
                key={registration._id}
                registration={registration}
                onView={onView}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/*  MOBILE CARDS  */}

      <div className="space-y-3 p-3 md:hidden">
        {registrations.map((registration) => (
          <RegistrationCard
            key={registration._id}
            registration={registration}
            onView={onView}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipRegistrationTable;

// DESKTOP ROW

const RegistrationRow = ({ registration, onView, onDelete }) => {
  const customer = registration.user;
  const plan = registration.membershipPlan;

  return (
    <tr className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/40">
      {/* Customer */}
      <td className="px-5 py-4">
        <div>
          <p className="font-medium text-white">
            {customer?.name || "Unknown"}
          </p>

          <p className="mt-1 text-xs text-zinc-500">{customer?.email || "-"}</p>
        </div>
      </td>

      {/* Membership */}
      <td className="px-5 py-4">
        <p className="font-medium text-white">{plan?.title || "-"}</p>

        <p className="mt-1 text-xs text-zinc-500">{plan?.duration || "-"}</p>
      </td>

      {/* Amount */}
      <td className="px-5 py-4">
        <span className="font-medium text-white">
          ₹{registration.amountPaid || 0}
        </span>
      </td>

      {/* Payment */}
      <td className="px-5 py-4">
        <StatusBadge status={registration.paymentStatus} />
      </td>

      {/* Membership status */}
      <td className="px-5 py-4">
        <StatusBadge status={registration.membershipStatus} />
      </td>

      {/* Actions */}
      <td className="px-5 py-4">
        <ActionButtons
          registration={registration}
          onView={onView}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
};

// MOBILE CARD

const RegistrationCard = ({ registration, onView, onDelete }) => {
  const customer = registration.user;
  const plan = registration.membershipPlan;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      {/* Header */}

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400/10">
            <User size={18} className="text-lime-400" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-white">
              {customer?.name || "Unknown"}
            </h3>

            <p className="truncate text-xs text-zinc-500">
              {customer?.email || "-"}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-sm font-semibold text-white">
          ₹{registration.amountPaid || 0}
        </span>
      </div>

      {/* Membership */}

      <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-zinc-500">Membership Plan</p>

            <p className="mt-1 font-medium text-white">{plan?.title || "-"}</p>
          </div>

          <CreditCard size={18} className="shrink-0 text-zinc-600" />
        </div>
      </div>

      {/* Dates */}

      <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
        <CalendarDays size={15} />

        <span>
          {formatDate(registration.startDate)}
          {" - "}
          {formatDate(registration.endDate)}
        </span>
      </div>

      {/* Status */}

      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge status={registration.paymentStatus} />

        <StatusBadge status={registration.membershipStatus} />
      </div>

      {/* Actions */}

      <div className="mt-4 border-t border-zinc-800 pt-3">
        <ActionButtons
          registration={registration}
          onView={onView}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

// ACTION BUTTONS

const ActionButtons = ({ registration, onView, onDelete }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onView(registration)}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:border-lime-400 hover:text-lime-400 sm:flex-none"
      >
        <Eye size={16} />
        <span>View</span>
      </button>

      <button
        type="button"
        onClick={() => onDelete(registration)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 transition hover:border-red-500 hover:text-red-400"
        title="Delete registration"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

// STATUS BADGE

const StatusBadge = ({ status }) => {
  const styles = {
    Paid: "border-lime-400/20 bg-lime-400/10 text-lime-400",
    Active: "border-lime-400/20 bg-lime-400/10 text-lime-400",

    Pending: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

    Failed: "border-red-400/20 bg-red-400/10 text-red-400",

    Expired: "border-zinc-600 bg-zinc-800 text-zinc-400",

    Cancelled: "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${
        styles[status] || "border-zinc-700 bg-zinc-800 text-zinc-400"
      }`}
    >
      {status || "Unknown"}
    </span>
  );
};

// DATE FORMAT

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

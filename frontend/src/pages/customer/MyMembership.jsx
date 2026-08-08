import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { getMyMembershipRegistrations } from "../../services/membershipRegistration.service";

const MyMembership = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMemberships = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const response = await getMyMembershipRegistrations(token);

      setRegistrations(response.data || []);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Unable to load your memberships.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-zinc-400">Loading membership...</p>
      </div>
    );
  }

  const currentMembership = registrations.find(
    (registration) =>
      registration.membershipStatus === "Active" ||
      registration.membershipStatus === "Pending",
  );

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-lime-400">
            MY MEMBERSHIP
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Membership
          </h1>

          <p className="mt-2 text-zinc-400">
            View your current and previous memberships.
          </p>
        </div>

        {/* No Membership */}

        {!currentMembership && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">
              No Active Membership
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              You don't currently have a membership.
            </p>

            <Link
              to="/membership"
              className="mt-6 inline-block rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500"
            >
              Explore Membership Plans
            </Link>
          </div>
        )}

        {/* Current Membership */}

        {currentMembership && (
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            {/* Card Header */}

            <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-zinc-500">Current Plan</p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  {currentMembership.membershipPlan?.title}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {currentMembership.membershipPlan?.durationValue}{" "}
                  {currentMembership.membershipPlan?.durationUnit}
                </p>
              </div>

              <StatusBadge status={currentMembership.membershipStatus} />
            </div>

            {/* Details */}

            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
              <InfoItem
                label="Amount"
                value={`₹${currentMembership.amountPaid}`}
              />

              <InfoItem
                label="Start Date"
                value={formatDate(currentMembership.startDate)}
              />

              <InfoItem
                label="End Date"
                value={formatDate(currentMembership.endDate)}
              />

              <div>
                <p className="text-sm text-zinc-500">Payment</p>

                <PaymentBadge status={currentMembership.paymentStatus} />
              </div>
            </div>

            {/* Pending Message */}

            {currentMembership.membershipStatus === "Pending" && (
              <div className="border-t border-zinc-800 bg-yellow-400/5 px-6 py-4">
                <p className="text-sm text-yellow-400">
                  Your membership registration is waiting for approval from the
                  gym.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Membership History */}

        {registrations.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Membership History
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900">
              <table className="w-full min-w-[650px] text-left">
                <thead className="border-b border-zinc-800 bg-zinc-950">
                  <tr>
                    <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                      Plan
                    </th>

                    <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                      Amount
                    </th>

                    <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                      Start
                    </th>

                    <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                      End
                    </th>

                    <th className="px-5 py-4 text-sm font-medium text-zinc-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {registrations.map((registration) => (
                    <tr
                      key={registration._id}
                      className="border-b border-zinc-800 last:border-b-0"
                    >
                      <td className="px-5 py-4 text-sm text-white">
                        {registration.membershipPlan?.title || "Membership"}
                      </td>

                      <td className="px-5 py-4 text-sm text-zinc-300">
                        ₹{registration.amountPaid}
                      </td>

                      <td className="px-5 py-4 text-sm text-zinc-400">
                        {formatDate(registration.startDate)}
                      </td>

                      <td className="px-5 py-4 text-sm text-zinc-400">
                        {formatDate(registration.endDate)}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={registration.membershipStatus} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-zinc-500">{label}</p>

      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-lime-400/10 text-lime-400 border-lime-400/20",
    Pending: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    Cancelled: "bg-red-400/10 text-red-400 border-red-400/20",
    Expired: "bg-zinc-400/10 text-zinc-400 border-zinc-400/20",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
        styles[status] || "border-zinc-700 bg-zinc-800 text-zinc-400"
      }`}
    >
      {status}
    </span>
  );
};

const PaymentBadge = ({ status }) => {
  const styles = {
    Paid: "text-lime-400",
    Pending: "text-yellow-400",
    Failed: "text-red-400",
  };

  return (
    <p className={`mt-1 font-medium ${styles[status] || "text-zinc-400"}`}>
      {status}
    </p>
  );
};

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default MyMembership;

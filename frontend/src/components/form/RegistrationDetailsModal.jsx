import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { updateMembershipRegistration } from "../../services/membershipRegistration.service";

const RegistrationDetailsModal = ({
  registration,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    paymentStatus: "",
    membershipStatus: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!registration || !isOpen) return;

    setFormData({
      paymentStatus: registration.paymentStatus || "Pending",
      membershipStatus: registration.membershipStatus || "Pending",
      notes: registration.notes || "",
    });
  }, [registration, isOpen]);

  if (!isOpen || !registration) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await updateMembershipRegistration(
        registration._id,
        formData,
        token,
      );

      toast.success(response.message || "Registration updated successfully");

      await onSuccess();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Failed to update registration",
      );
    } finally {
      setLoading(false);
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Registration Details
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              View and manage membership registration.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-5 py-5 sm:px-6"
        >
          <div className="space-y-6">
            {/* Customer */}

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Customer
              </h3>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="font-medium text-white">
                  {registration.user?.name || "-"}
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  {registration.user?.email || "-"}
                </p>
              </div>
            </div>

            {/* Membership */}

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Membership
              </h3>

              <div className="grid grid-cols-1 gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:grid-cols-2">
                <DetailItem
                  label="Plan"
                  value={registration.membershipPlan?.title || "-"}
                />

                <DetailItem
                  label="Price"
                  value={`₹${registration.membershipPlan?.price || 0}`}
                />

                <DetailItem
                  label="Duration"
                  value={`${registration.membershipPlan?.durationValue || "-"} ${
                    registration.membershipPlan?.durationUnit || ""
                  }`}
                />

                <DetailItem
                  label="Amount Paid"
                  value={`₹${registration.amountPaid || 0}`}
                />

                <DetailItem
                  label="Start Date"
                  value={formatDate(registration.startDate)}
                />

                <DetailItem
                  label="End Date"
                  value={formatDate(registration.endDate)}
                />
              </div>
            </div>

            {/* Status */}

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Registration Status
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Payment */}

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Payment Status
                  </label>

                  <select
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
                  >
                    <option value="Pending">Pending</option>

                    <option value="Paid">Paid</option>

                    <option value="Failed">Failed</option>
                  </select>
                </div>

                {/* Membership */}

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Membership Status
                  </label>

                  <select
                    name="membershipStatus"
                    value={formData.membershipStatus}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
                  >
                    <option value="Pending">Pending</option>

                    <option value="Active">Active</option>

                    <option value="Expired">Expired</option>

                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Notes</label>

              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add notes about this registration..."
                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-lime-400"
              />
            </div>

            {/* Footer */}

            <div className="flex justify-end gap-3 border-t border-zinc-800 pt-5">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Updating..." : "Update Registration"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-xs text-zinc-500">{label}</p>

      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
};

export default RegistrationDetailsModal;

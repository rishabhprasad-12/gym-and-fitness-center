import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { createMembershipRegistration } from "../../services/membershipRegistration.service";

const initialState = {
  paymentMethod: "Cash",
  notes: "",
};

const MembershipRegistrationForm = ({
  plan,
  user,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialState);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!plan?._id) {
      toast.error("Membership plan not found.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login to continue.");
        return;
      }

      const payload = {
        membershipPlan: plan._id,
        paymentMethod: formData.paymentMethod,
        notes: formData.notes,
      };

      const response = await createMembershipRegistration(payload, token);

      toast.success(
        response.message || "Membership registration submitted successfully.",
      );

      setFormData(initialState);

      onSuccess?.(response.data);

      onClose();
    } catch (error) {
      console.error("Membership registration error:", error);

      toast.error(
        error.response?.data?.message ||
          "Unable to submit membership registration.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}

        <div className="flex items-start justify-between border-b border-zinc-800 px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Join Membership
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Complete your registration for this membership plan.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-zinc-800"
          >
            <X size={20} className="text-zinc-400" />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-5 py-5 sm:px-6"
        >
          <div className="space-y-6">
            {/* Selected Plan */}

            <div className="rounded-2xl border border-lime-400/30 bg-lime-400/5 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Selected Plan</p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    {plan.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {plan.durationValue} {plan.durationUnit}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-2xl font-bold text-lime-400">
                    ₹{plan.price}
                  </p>

                  <p className="text-xs text-zinc-500">Membership price</p>
                </div>
              </div>
            </div>

            {/* User Information */}

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Your Information
              </h3>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Name
                  </label>

                  <input
                    type="text"
                    value={user?.name || ""}
                    readOnly
                    className="w-full cursor-not-allowed rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-400 outline-none"
                  />
                </div>

                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Email
                  </label>

                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="w-full cursor-not-allowed rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-400 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}

            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Payment Method
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Cash", "UPI", "Card"].map((method) => {
                  const selected = formData.paymentMethod === method;

                  return (
                    <button
                      key={method}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: method,
                        }))
                      }
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                        selected
                          ? "border-lime-400 bg-lime-400/10 text-lime-400"
                          : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-zinc-500"
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>

              <p className="mt-2 text-xs text-zinc-500">
                Payment will remain pending until confirmed by the gym.
              </p>
            </div>

            {/* Notes */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Notes
                <span className="ml-1 text-zinc-500">(Optional)</span>
              </label>

              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional information..."
                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-lime-400"
              />
            </div>

            {/* Status Information */}

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-400">Payment Status</span>

                <span className="font-medium text-yellow-400">Pending</span>
              </div>

              <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-400">Membership Status</span>

                <span className="font-medium text-yellow-400">
                  Pending Approval
                </span>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-col-reverse gap-3 border-t border-zinc-800 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-800 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Join Membership"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipRegistrationForm;

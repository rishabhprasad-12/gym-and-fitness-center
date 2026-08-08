import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { updateEnquiry } from "../../services/enquiry.service";

const EnquiryDetailsModal = ({ enquiry, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    status: "Pending",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enquiry || !isOpen) return;

    setFormData({
      status: enquiry.status || "Pending",
      notes: enquiry.notes || "",
    });
  }, [enquiry, isOpen]);

  if (!isOpen || !enquiry) {
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

      const response = await updateEnquiry(enquiry._id, formData, token);

      toast.success(response.message || "Enquiry updated successfully");

      await onSuccess();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Failed to update enquiry");
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
            <h2 className="text-xl font-bold text-white">Enquiry Details</h2>

            <p className="mt-1 text-sm text-zinc-500">
              View and manage customer enquiry.
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
                <p className="font-medium text-white">{enquiry.name || "-"}</p>

                <p className="mt-1 text-sm text-zinc-400">
                  {enquiry.email || "-"}
                </p>

                {enquiry.phone && (
                  <p className="mt-1 text-sm text-zinc-400">{enquiry.phone}</p>
                )}
              </div>
            </div>

            {/* Enquiry */}

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Message
              </h3>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-sm font-medium text-white">
                  {enquiry.subject || "No subject"}
                </p>

                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-zinc-400">
                  {enquiry.message || "-"}
                </p>

                <p className="mt-4 text-xs text-zinc-600">
                  Received on {formatDate(enquiry.createdAt)}
                </p>
              </div>
            </div>

            {/* Status */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Enquiry Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
              >
                <option value="Pending">Pending</option>

                <option value="In Progress">In Progress</option>

                <option value="Resolved">Resolved</option>

                <option value="Closed">Closed</option>
              </select>
            </div>

            {/* Notes */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Admin Notes
              </label>

              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add internal notes..."
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
                {loading ? "Updating..." : "Update Enquiry"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryDetailsModal;

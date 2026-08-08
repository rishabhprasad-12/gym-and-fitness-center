import { Eye, Trash2 } from "lucide-react";

const EnquiryTable = ({ enquiries, loading, onView, onDelete }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Resolved":
        return "border-lime-400/20 bg-lime-400/10 text-lime-400";

      case "Pending":
        return "border-yellow-400/20 bg-yellow-400/10 text-yellow-400";

      case "In Progress":
        return "border-blue-400/20 bg-blue-400/10 text-blue-400";

      case "Closed":
        return "border-zinc-700 bg-zinc-800 text-zinc-400";

      default:
        return "border-zinc-700 bg-zinc-800 text-zinc-400";
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
          <p className="text-sm text-zinc-500">Loading enquiries...</p>
        </div>
      </div>
    );
  }

  if (!enquiries.length) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
        <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Enquiries Found
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            There are no customer enquiries yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Customer
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Subject
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Message
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Status
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Date
              </th>

              <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((enquiry) => (
              <tr
                key={enquiry._id}
                className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/40"
              >
                {/* Customer */}

                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-white">
                    {enquiry.name || "-"}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {enquiry.email || "-"}
                  </p>
                </td>

                {/* Subject */}

                <td className="px-5 py-4">
                  <p className="max-w-[180px] truncate text-sm text-white">
                    {enquiry.subject || "-"}
                  </p>
                </td>

                {/* Message */}

                <td className="px-5 py-4">
                  <p className="max-w-[260px] truncate text-sm text-zinc-400">
                    {enquiry.message || "-"}
                  </p>
                </td>

                {/* Status */}

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                      enquiry.status,
                    )}`}
                  >
                    {enquiry.status || "Pending"}
                  </span>
                </td>

                {/* Date */}

                <td className="px-5 py-4 text-sm text-zinc-400">
                  {formatDate(enquiry.createdAt)}
                </td>

                {/* Actions */}

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onView(enquiry)}
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                      title="View"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(enquiry)}
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

export default EnquiryTable;

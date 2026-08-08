import { useEffect, useState } from "react";
import { MessageSquare, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

import { createEnquiry } from "../../services/enquiry.service";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Support = () => {
  const [formData, setFormData] = useState(initialState);

  const [enquiries, setEnquiries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

//   const fetchEnquiries = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyEnquiries();

//       setEnquiries(response.data || []);
//     } catch (error) {
//       console.error(error);

//       toast.error(error?.response?.data?.message || "Failed to load enquiries");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEnquiries();
//   }, []);

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
      setSubmitting(true);

      const response = await createEnquiry(formData);

      toast.success(response.message || "Your enquiry has been submitted");

      setFormData(initialState);

      await fetchEnquiries();
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Failed to submit enquiry");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-lime-400">
          SUPPORT
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">Need Help?</h1>

        <p className="mt-2 text-sm text-zinc-500">
          Have a question or facing an issue? Send us a message and our team
          will help you.
        </p>
      </div>

      {/* Form */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10">
            <MessageSquare size={19} className="text-lime-400" />
          </div>

          <div>
            <h2 className="font-semibold text-white">Send an Enquiry</h2>

            <p className="text-xs text-zinc-500">We'll get back to you soon.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Subject */}

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Subject</label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What do you need help with?"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-lime-400"
            />
          </div>

          {/* Message */}

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Describe your issue..."
              className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-lime-400"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Previous Enquiries */}

      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">
            My Previous Enquiries
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Track the status of your support requests.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
            <p className="text-sm text-zinc-500">Loading enquiries...</p>
          </div>
        ) : enquiries.length === 0 ? (
          <EmptyEnquiries />
        ) : (
          <div className="space-y-3">
            {enquiries.map((enquiry) => (
              <EnquiryCard key={enquiry._id} enquiry={enquiry} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const EnquiryCard = ({ enquiry }) => {
  const status = enquiry.status || "Pending";

  const getStatus = () => {
    switch (status) {
      case "Resolved":
        return {
          icon: CheckCircle2,
          className: "border-lime-400/20 bg-lime-400/10 text-lime-400",
        };

      case "In Progress":
        return {
          icon: Clock,
          className: "border-blue-400/20 bg-blue-400/10 text-blue-400",
        };

      case "Closed":
        return {
          icon: CheckCircle2,
          className: "border-zinc-700 bg-zinc-800 text-zinc-400",
        };

      default:
        return {
          icon: AlertCircle,
          className: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",
        };
    }
  };

  const statusData = getStatus();

  const StatusIcon = statusData.icon;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-medium text-white">
            {enquiry.subject || "Support Request"}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
            {enquiry.message}
          </p>

          <p className="mt-3 text-xs text-zinc-600">
            {new Date(enquiry.createdAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <span
          className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${statusData.className}`}
        >
          <StatusIcon size={13} />
          {status}
        </span>
      </div>

      {enquiry.notes && (
        <div className="mt-4 border-t border-zinc-800 pt-4">
          <p className="text-xs font-medium text-zinc-500">Admin Response</p>

          <p className="mt-1 text-sm text-zinc-300">{enquiry.notes}</p>
        </div>
      )}
    </div>
  );
};

const EmptyEnquiries = () => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-12 text-center">
      <MessageSquare size={28} className="mx-auto text-zinc-700" />

      <h3 className="mt-4 font-semibold text-white">No Enquiries Yet</h3>

      <p className="mt-2 text-sm text-zinc-500">
        Your support requests will appear here.
      </p>
    </div>
  );
};

export default Support;

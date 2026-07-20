import { ArrowRight } from "lucide-react";
import { recentEnquiries } from "../../data/admin-dashboard/recentEnquiries";
import EnquiryItem from "./EnquiryItem";

const RecentEnquiries = () => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Recent Enquiries</h2>

          <p className="mt-2 text-zinc-400">
            Latest customer messages and support requests.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="space-y-4">
        {recentEnquiries.map((enquiry) => (
          <EnquiryItem key={enquiry.id} {...enquiry} />
        ))}
      </div>
    </section>
  );
};

export default RecentEnquiries;

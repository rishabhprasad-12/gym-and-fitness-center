import { ArrowRight } from "lucide-react";
import RegistrationItem from "./RegistrationItem";
import { Link } from "react-router-dom";

const RecentRegistrations = ({ registrations = [] }) => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Registrations
          </h2>

          <p className="mt-2 text-zinc-400">Newly joined members this week.</p>
        </div>

        <Link
          to="/admin/membership-registrations"
          className="flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="space-y-4">
        {registrations.map((member) => (
          <RegistrationItem key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default RecentRegistrations;

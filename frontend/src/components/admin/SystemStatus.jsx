import { ShieldCheck } from "lucide-react";
import { systemStatus } from "../../data/admin-dashboard/systemStatus";
import StatusItem from "./StatusItem";

const SystemStatus = () => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">System Status</h2>

          <p className="mt-2 text-zinc-400">
            Monitor the health of your gym management system.
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10">
          <ShieldCheck className="text-lime-400" size={28} />
        </div>
      </div>

      <div className="space-y-4">
        {systemStatus.map((item) => (
          <StatusItem key={item.id} {...item} />
        ))}
      </div>

      {/* Footer Summary */}

      <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">
        <p className="text-sm text-zinc-400">Overall System Health</p>

        <h3 className="mt-2 text-2xl font-bold text-lime-400">Excellent</h3>

        <p className="mt-2 text-sm text-zinc-400">
          All core services are operating normally.
        </p>
      </div>
    </section>
  );
};

export default SystemStatus;

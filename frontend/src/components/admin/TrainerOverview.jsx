import { ArrowRight } from "lucide-react";

import { trainerOverview, featuredTrainers } from "../../data/admin-dashboard/trainerOverview";

import TrainerOverviewCard from "./TrainerOverviewCard";

const TrainerOverview = () => {
  return (
    <section className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Trainer Overview</h2>

          <p className="mt-2 text-zinc-400">
            Monitor your coaching team at a glance.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Stats */}

      <div className="grid gap-5 md:grid-cols-2">
        {trainerOverview.map((item) => (
          <TrainerOverviewCard key={item.id} {...item} />
        ))}
      </div>

      {/* Trainer List */}

      <div className="mt-8 border-t border-zinc-800 pt-6">
        <h3 className="mb-5 text-lg font-semibold text-white">Top Trainers</h3>

        <div className="space-y-4">
          {featuredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
            >
              <div>
                <h4 className="font-semibold text-white">{trainer.name}</h4>

                <p className="text-sm text-zinc-400">{trainer.role}</p>
              </div>

              <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400">
                {trainer.experience}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerOverview;

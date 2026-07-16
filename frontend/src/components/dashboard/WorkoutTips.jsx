import { workoutTips } from "../../data/dashboard/workoutTips";

const WorkoutTips = () => {
  return (
    <div className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <h2 className="text-xl font-bold text-white">Workout Tips</h2>

      <div className="mt-6 space-y-5">
        {workoutTips.map((tip) => {
          const Icon = tip.icon;

          return (
            <div
              key={tip.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
                <Icon size={22} className="text-lime-400" />
              </div>

              <h3 className="font-semibold text-white">{tip.title}</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {tip.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutTips;

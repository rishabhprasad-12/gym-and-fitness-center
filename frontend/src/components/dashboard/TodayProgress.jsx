import { todaysProgress } from "../../data/dashboard/todaysProgress";

const TodayProgress = () => {
  return (
    <div className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Today's Progress</h2>

        <p className="mt-2 text-sm text-zinc-400">
          Keep pushing towards your daily fitness goals.
        </p>
      </div>

      <div className="space-y-4">
        {todaysProgress.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">{item.title}</p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {item.value}
                  </h3>
                </div>

                <div className="rounded-xl bg-lime-400/10 p-3">
                  <Icon size={22} className={item.color} />
                </div>
              </div>

              {item.title === "Goal Progress" && (
                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div className="h-full w-[78%] rounded-full bg-lime-400" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayProgress;

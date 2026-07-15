import { CalendarDays, Users, Clock3, Dumbbell } from "lucide-react";
import SectionDivider from "../common/SectionDivider";

const stats = [
  {
    icon: CalendarDays,
    value: "35+",
    label: "Weekly Classes",
  },
  {
    icon: Users,
    value: "18",
    label: "Certified Trainers",
  },
  {
    icon: Clock3,
    value: "7",
    label: "Days Open",
  },
  {
    icon: Dumbbell,
    value: "5+",
    label: "Workout Categories",
  },
];

const QuickStats = () => {
  return (
    <section className=" bg-gradient-to-b from-zinc-950 to-zinc-900 ">
      <div className="relative py-24">
        {/* Background Glow */}
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-lime-400/5 blur-3xl"></div>

        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
              Quick Overview
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Everything You Need
              <span className="text-lime-400"> At A Glance</span>
            </h2>

            <p className="mt-4 text-zinc-400">
              Stay informed with our weekly class schedule, experienced
              trainers, and diverse workout programs designed for every fitness
              level.
            </p>
          </div>

          {/* Stats */}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition group-hover:scale-110">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-5xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-lg text-zinc-400">{item.label}</p>

                  <div className="mt-8 h-1 w-14 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-24"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default QuickStats;

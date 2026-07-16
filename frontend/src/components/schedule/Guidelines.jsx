import { Clock3, Droplets, Footprints, HeartPulse } from "lucide-react";
import SectionDivider from "../common/SectionDivider";

const guidelines = [
  {
    icon: Clock3,
    title: "Arrive Early",
    description:
      "Please arrive at least 10 minutes before your class begins to complete your warm-up and prepare for training.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Bring a water bottle and drink enough water before, during, and after your workout session.",
  },
  {
    icon: Footprints,
    title: "Wear Proper Shoes",
    description:
      "Comfortable athletic shoes provide better support, stability, and help reduce the risk of injury.",
  },
  {
    icon: HeartPulse,
    title: "Inform Your Trainer",
    description:
      "Let your trainer know about any injuries or medical conditions so workouts can be adjusted safely.",
  },
];

const Guidelines = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      {/* Background Glow */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Before You Join
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Class
            <span className="text-lime-400"> Guidelines</span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Following these simple guidelines helps create a safe, enjoyable,
            and productive workout experience for everyone.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {guidelines.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 p-8 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-28"></div>
              </div>
            );
          })}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default Guidelines;

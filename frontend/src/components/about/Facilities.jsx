import {
  Dumbbell,
  Users,
  ShieldCheck,
  Coffee,
  WalletCards,
  ArrowUpRight,
} from "lucide-react";
import SectionDivider from "../common/SectionDivider";

const facilities = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "High-quality strength and cardio equipment for effective workouts.",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    description:
      "Experienced fitness professionals guiding members toward their goals.",
  },
  {
    icon: ShieldCheck,
    title: "Group Classes",
    description:
      "Yoga, cardio, strength training, and functional fitness sessions.",
  },
  {
    icon: ShieldCheck,
    title: "Locker Rooms",
    description:
      "Clean, secure, and spacious locker facilities for every member.",
  },
  {
    icon: Coffee,
    title: "Protein Bar",
    description:
      "Healthy shakes, snacks, and refreshments after every workout.",
  },
  {
    icon: WalletCards,
    title: "Flexible Memberships",
    description:
      "Affordable plans designed for different fitness goals and budgets.",
  },
];

const Facilities = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Our Facilities
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything You Need
            <span className="block text-lime-400">Under One Roof</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            FitForge combines premium facilities, experienced trainers, and
            modern amenities to create an enjoyable fitness journey.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30"
              >
                <div className="flex justify-between items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 transition group-hover:bg-lime-400/20">
                    <Icon size={32} className="text-lime-400" />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-400"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {facility.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default Facilities;

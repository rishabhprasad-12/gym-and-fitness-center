import { Target, Eye, Section } from "lucide-react";
import SectionDivider from "../common/SectionDivider";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To simplify gym management by providing an intuitive platform that helps members explore fitness services while enabling administrators to efficiently manage memberships, trainers, and schedules.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To showcase how modern web technologies can be used to build scalable, user-friendly, and responsive applications for the fitness industry.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Our Purpose
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Driven by Passion,
            <span className="block text-lime-400">Focused on Results</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Every feature in FitForge is designed with one goal in mind —
            creating a seamless and engaging fitness management experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-400/30"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-400/10 transition group-hover:bg-lime-400/20">
                  <Icon size={38} className="text-lime-400" />
                </div>

                <h3 className="text-3xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {card.description}
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

export default MissionVision;

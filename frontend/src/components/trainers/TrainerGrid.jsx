import SectionDivider from "../common/SectionDivider";
import TrainerCard from "./TrainerCard";

const TrainerGrid = ({ trainers }) => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Meet All
            <span className="text-lime-400"> Trainers</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Every trainer brings unique expertise to help you stay motivated,
            improve your performance, and achieve lasting fitness results.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default TrainerGrid;

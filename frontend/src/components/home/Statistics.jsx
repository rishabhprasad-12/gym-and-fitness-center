import StatsCard from "../cards/StatsCard";

const Statistics = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 ">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm uppercase tracking-[4px] text-lime-400">
            Our Achievements
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Trusted By Thousands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Every number reflects our commitment to helping members achieve
            healthier and stronger lives.
          </p>
        </div>

        {/* Stats Card */}
        <StatsCard />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

export default Statistics;

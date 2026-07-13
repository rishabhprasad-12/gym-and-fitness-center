const stats = [
  {
    value: "2500+",
    label: "Active Members",
  },
  {
    value: "18",
    label: "Expert Trainers",
  },
  {
    value: "35",
    label: "Weekly Classes",
  },
  {
    value: "12+",
    label: "Years Experience",
  },
];

const StatsCard = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-800/60 backdrop-blur-xl shadow-xl shadow-black/30">
      <div className="grid grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-y-0 md:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-6 py-10 transition duration-300 hover:bg-white/5"
          >
            <h3 className="text-4xl font-bold text-lime-400">{stat.value}</h3>

            <p className="mt-3 text-center text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;

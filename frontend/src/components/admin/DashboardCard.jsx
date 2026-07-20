const DashboardCard = ({
  icon: Icon,
  title,
  value,
  color = "text-lime-400",
  change,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">{value}</h2>

          {change && (
            <span className="mt-4 inline-flex rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400">
              {change} this month
            </span>
          )}
        </div>

        <div className="rounded-2xl bg-zinc-800 p-4 transition group-hover:bg-lime-400/10">
          <Icon size={28} className={color} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

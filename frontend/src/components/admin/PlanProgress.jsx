const PlanProgress = ({ plan, members, percentage, color }) => {
  return (
    <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-white">{plan}</h3>

        <span className="text-sm font-medium text-zinc-400">{percentage}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">Active Members</p>

        <p className="font-semibold text-white">{members}</p>
      </div>
    </div>
  );
};

export default PlanProgress;

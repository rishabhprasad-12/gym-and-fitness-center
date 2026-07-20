const StatusItem = ({ icon: Icon, title, status, color, bg }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-lime-400/20">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}
        >
          <Icon size={22} className={color} />
        </div>

        <div>
          <h3 className="font-semibold text-white">{title}</h3>

          <p className="text-sm text-zinc-400">{status}</p>
        </div>
      </div>

      <div className="h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_12px_#84cc16]" />
    </div>
  );
};

export default StatusItem;

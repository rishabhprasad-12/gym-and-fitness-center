const TrainerOverviewCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
        <Icon className={color} size={24} />
      </div>

      <h3 className="text-3xl font-bold text-white">{value}</h3>

      <p className="mt-2 text-sm text-zinc-400">{title}</p>
    </div>
  );
};

export default TrainerOverviewCard;

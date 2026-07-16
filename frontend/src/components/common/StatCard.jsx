const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="group rounded-[28px] border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 transition group-hover:bg-lime-400">
        <Icon
          size={28}
          className="text-lime-400 transition group-hover:text-black"
        />
      </div>

      <h3 className="text-3xl font-bold text-white">{value}</h3>

      <p className="mt-2 text-zinc-400">{label}</p>
    </div>
  );
};

export default StatCard;

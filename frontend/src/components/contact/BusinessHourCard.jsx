const BusinessHourCard = ({ icon: Icon, day, time, note, index }) => {
  return (
    <div
      className="group rounded-3xl border border-white/10 p-8 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">{day}</h3>

      <p className="mt-3 text-2xl font-semibold text-lime-400">{time}</p>

      <p className="mt-4 text-zinc-400 leading-7">{note}</p>

      <div className="mt-8 h-1 w-16 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-28"></div>
    </div>
  );
};

export default BusinessHourCard;

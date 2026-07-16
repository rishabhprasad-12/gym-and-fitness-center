const SectionCard = ({ title, action, children }) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:border-lime-400/40">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        {action}
      </div>

      {children}
    </div>
  );
};

export default SectionCard;

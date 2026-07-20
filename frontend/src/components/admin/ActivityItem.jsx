const ActivityItem = ({ icon: Icon, title, description, time, color, bg }) => {
  return (
    <div className="group flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:border-lime-400/20 hover:bg-zinc-900">
      {/* Icon */}

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg}`}
      >
        <Icon size={22} className={color} />
      </div>

      {/* Content */}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">{title}</h3>

            <p className="mt-1 text-sm leading-6 text-zinc-400">
              {description}
            </p>
          </div>

          <span className="whitespace-nowrap text-xs text-zinc-500">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;

const ActivityItem = ({ activity, last }) => {
  const Icon = activity.icon;

  return (
    <div
      className={`flex gap-5 ${
        !last ? "border-b border-zinc-800 pb-6" : ""
      }`}
    >
      {/* Icon */}

      <div className="relative">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.color}`}
        >
          <Icon size={24} className="text-white" />
        </div>

        {!last && (
          <div className="absolute left-1/2 top-14 h-10 w-px -translate-x-1/2 bg-zinc-800" />
        )}
      </div>

      {/* Content */}

      <div className="flex-1">

        <h3 className="text-lg font-semibold text-white">
          {activity.title}
        </h3>

        <p className="mt-1 text-zinc-400">
          {activity.description}
        </p>

        <span className="mt-3 inline-block text-sm text-zinc-500">
          {activity.date}
        </span>

      </div>
    </div>
  );
};

export default ActivityItem;
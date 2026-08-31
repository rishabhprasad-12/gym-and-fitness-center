import {
  CalendarPlus,
  CalendarDays,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Book a Class",
    description: "Reserve your spot in a class",
    icon: CalendarPlus,
    to: "/schedule",
  },
  {
    title: "View Schedule",
    description: "Check upcoming classes",
    icon: CalendarDays,
    to: "/schedule",
  },
  {
    title: "Contact Trainer",
    description: "Get in touch with a trainer",
    icon: MessageCircle,
    to: "/contact",
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:rounded-3xl sm:p-6 lg:p-7">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-white sm:text-xl">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Manage your fitness activities
        </p>
      </div>

      {/* Actions */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="group flex min-w-0 items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 transition duration-200 hover:border-lime-400/40 hover:bg-zinc-800/60 sm:rounded-2xl sm:p-4"
            >
              {/* Left */}
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 transition duration-200 group-hover:bg-lime-400 sm:h-11 sm:w-11">
                  <Icon
                    size={19}
                    className="text-lime-400 transition group-hover:text-black"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white sm:text-base">
                    {action.title}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-zinc-500">
                    {action.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={17}
                className="ml-3 shrink-0 text-zinc-600 transition duration-200 group-hover:translate-x-1 group-hover:text-lime-400"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;

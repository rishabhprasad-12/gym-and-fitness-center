import {
  CalendarPlus,
  CreditCard,
  CalendarDays,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Book a Class",
    icon: CalendarPlus,
    to: "/schedule",
  },
  {
    title: "View Schedule",
    icon: CalendarDays,
    to: "/schedule",
  },
  {
    title: "Contact Trainer",
    icon: MessageCircle,
    to: "/contact",
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-7">
      <h2 className="text-xl font-bold text-white">Quick Actions</h2>

      <div className="mt-6 space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 transition hover:border-lime-400/40 hover:bg-zinc-900"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-lime-400/10 p-3 transition group-hover:bg-lime-400">
                  <Icon
                    size={20}
                    className="text-lime-400 group-hover:text-black"
                  />
                </div>

                <span className="font-medium text-white">{action.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;

import { MessageCircle } from "lucide-react";

const statusStyles = {
  New: "bg-sky-400/10 text-sky-400",
  "In Progress": "bg-yellow-400/10 text-yellow-400",
  Resolved: "bg-lime-400/10 text-lime-400",
};

const EnquiryItem = ({ name, subject, date, status }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-lime-400/20">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
          <MessageCircle size={22} className="text-lime-400" />
        </div>

        <div>
          <h3 className="font-semibold text-white">{name}</h3>

          <p className="text-sm text-zinc-400">{subject}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xs text-zinc-500">{date}</p>

        <span
          className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default EnquiryItem;

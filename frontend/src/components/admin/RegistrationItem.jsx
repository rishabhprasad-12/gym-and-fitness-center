import { UserCircle2 } from "lucide-react";

const RegistrationItem = ({ name, plan, joined, status }) => {
  const statusStyles = {
    Active: "bg-lime-400/10 text-lime-400",
    Pending: "bg-yellow-400/10 text-yellow-400",
    Expired: "bg-red-400/10 text-red-400",
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-lime-400/20">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
          <UserCircle2 className="text-zinc-300" size={28} />
        </div>

        <div>
          <h3 className="font-semibold text-white">{name}</h3>

          <p className="text-sm text-zinc-400">{plan} Membership</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-zinc-500">Joined</p>

        <p className="text-sm text-white">{joined}</p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default RegistrationItem;

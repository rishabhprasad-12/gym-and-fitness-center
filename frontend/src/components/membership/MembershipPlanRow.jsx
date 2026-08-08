import { Pencil, Trash2 } from "lucide-react";

const MembershipPlanRow = ({ plan, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/40">
      {/* Plan Name */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-white">{plan.title}</h3>

          {plan.description && (
            <p className="mt-1 text-sm text-zinc-400 line-clamp-1">
              {plan.description}
            </p>
          )}
        </div>
      </td>

      {/* Duration */}
      <td className="px-6 py-5 text-zinc-300">
        <span>{plan.durationValue} </span>
        <span>{plan.durationUnit} </span>
      </td>

      {/* Price */}
      <td className="px-6 py-5">
        <span className="font-semibold text-lime-400">₹{plan.price}</span>
      </td>

      {/* Popular */}
      <td className="px-6 py-5">
        {plan.isPopular ? (
          <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400">
            Popular
          </span>
        ) : (
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400">
            Standard
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex justify-end gap-3">
          <button
            onClick={() => onEdit(plan)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 text-zinc-300 transition hover:border-lime-400 hover:text-lime-400"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(plan)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 text-red-400 transition hover:bg-red-500/10"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MembershipPlanRow;

import { Pencil, Trash2 } from "lucide-react";
import Badge from "../../components/common/Badge";

const TrainerRow = ({ trainer, mobile = false, onEdit, onDelete }) => {
  if (mobile) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="flex items-center gap-4">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="h-16 w-16 rounded-full border border-zinc-700 object-cover"
          />

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{trainer.name}</h3>

            <p className="text-sm text-zinc-400">{trainer.specialization}</p>
          </div>

          <Badge variant={trainer.isActive ? "success" : "danger"}>
            {trainer.isActive ? "Active" : "Inactive"}
          </Badge>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-zinc-500">Experience</p>

            <p className="text-white">{trainer.experience} Years</p>
          </div>

          <div>
            <p className="text-zinc-500">Qualification</p>

            <p className="text-white">{trainer.qualification}</p>
          </div>

          <div>
            <p className="text-zinc-500">Email</p>

            <p className="truncate text-white">{trainer.email}</p>
          </div>

          <div>
            <p className="text-zinc-500">Phone</p>

            <p className="text-white">{trainer.phone}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onEdit(trainer)}
            className="flex-1 rounded-xl bg-lime-400 py-2 font-medium text-black hover:bg-lime-500"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(trainer)}
            className="flex-1 rounded-xl border border-red-500 py-2 text-red-400 hover:bg-red-500/10"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className="border-b border-zinc-800 transition hover:bg-zinc-800/40">
      <td className="px-6 py-4">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-12 w-12 rounded-full border border-zinc-700 object-cover"
        />
      </td>

      <td className="px-6 py-4">
        <div>
          <h4 className="font-semibold text-white">{trainer.name}</h4>

          <p className="text-sm text-zinc-400">{trainer.email}</p>
        </div>
      </td>

      <td className="px-6 py-4 text-zinc-300">{trainer.specialization}</td>

      <td className="px-6 py-4 text-zinc-300">{trainer.experience} Years</td>

      <td className="px-6 py-4">
        <Badge variant={trainer.isActive ? "success" : "danger"}>
          {trainer.isActive ? "Active" : "Inactive"}
        </Badge>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(trainer)}
            className="rounded-lg border border-zinc-700 p-2 text-zinc-300 transition hover:bg-zinc-800"
          >
            <Pencil size={17} />
          </button>

          <button
            onClick={() => onDelete(trainer)}
            className="rounded-lg border border-zinc-700 p-2 text-red-400 transition hover:bg-zinc-800"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TrainerRow;

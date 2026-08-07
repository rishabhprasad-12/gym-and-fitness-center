import { Pencil, Trash2 } from "lucide-react";
import Badge from "../../components/common/Badge";

const ClassScheduleRow = ({ schedule, mobile = false, onEdit, onDelete }) => {
  const trainerName =
    typeof schedule.trainer === "object"
      ? schedule.trainer?.name
      : schedule.trainer;

  if (mobile) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {schedule.className}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">{trainerName}</p>
          </div>

          <Badge variant={schedule.isActive ? "success" : "danger"}>
            {schedule.isActive ? "Active" : "Inactive"}
          </Badge>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-zinc-500">Day</p>

            <p className="text-white">{schedule.day}</p>
          </div>

          <div>
            <p className="text-zinc-500">Time</p>

            <p className="text-white">{schedule.time}</p>
          </div>

          <div>
            <p className="text-zinc-500">Duration</p>

            <p className="text-white">{schedule.duration} Min</p>
          </div>

          <div>
            <p className="text-zinc-500">Capacity</p>

            <p className="text-white">{schedule.capacity}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onEdit(schedule)}
            className="flex-1 rounded-xl bg-lime-400 py-2 font-medium text-black transition hover:bg-lime-500"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(schedule)}
            className="flex-1 rounded-xl border border-red-500 py-2 text-red-400 transition hover:bg-red-500/10"
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
        <div>
          <h4 className="font-semibold text-white">{schedule.className}</h4>

          <p className="text-sm text-zinc-400">{trainerName}</p>
        </div>
      </td>

      <td className="px-6 py-4 text-zinc-300">{schedule.day}</td>

      <td className="px-6 py-4 text-zinc-300">{schedule.startTime}</td>

      <td className="px-6 py-4 text-zinc-300">{schedule.duration} Min</td>

      <td className="px-6 py-4 text-zinc-300">{schedule.capacity}</td>

      <td className="px-6 py-4">
        <Badge variant={schedule.isActive ? "success" : "danger"}>
          {schedule.isActive ? "Active" : "Inactive"}
        </Badge>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(schedule)}
            className="rounded-lg border border-zinc-700 p-2 text-zinc-300 transition hover:bg-zinc-800"
          >
            <Pencil size={17} />
          </button>

          <button
            onClick={() => onDelete(schedule)}
            className="rounded-lg border border-zinc-700 p-2 text-red-400 transition hover:bg-zinc-800"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ClassScheduleRow;

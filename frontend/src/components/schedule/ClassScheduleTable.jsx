import ClassScheduleRow from "./ClassScheduleRow";
import EmptyState from "../../components/common/EmptyState";

const ClassScheduleTable = ({ schedules, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
        <p className="text-zinc-400">Loading class schedules...</p>
      </div>
    );
  }

  if (schedules.length === 0) {
    return (
      <EmptyState
        title="No Classes Found"
        description="Click 'Add Class' to create your first class schedule."
      />
    );
  }

  return (
    <>
      {/* Desktop Table */}

      <div className="hidden overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 lg:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-zinc-800 bg-zinc-900">
              <tr className="text-left text-sm uppercase tracking-wide text-zinc-400">
                <th className="px-6 py-4">Class</th>

                <th className="px-6 py-4">Day</th>

                <th className="px-6 py-4">Time</th>

                <th className="px-6 py-4">Duration</th>

                <th className="px-6 py-4">Capacity</th>

                <th className="px-6 py-4">Status</th>

                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {schedules.map((schedule) => (
                <ClassScheduleRow
                  key={schedule._id}
                  schedule={schedule}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile */}

      <div className="space-y-5 lg:hidden">
        {schedules.map((schedule) => (
          <ClassScheduleRow
            key={schedule._id}
            schedule={schedule}
            mobile
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ClassScheduleTable;

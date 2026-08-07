import TrainerRow from "./TrainerRow";
import EmptyState from "../../components/common/EmptyState";

const TrainerTable = ({ trainers, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
        <p className="text-zinc-400">Loading trainers...</p>
      </div>
    );
  }

  if (trainers.length === 0) {
    return (
      <EmptyState
        title="No Trainers Found"
        description="Click 'Add Trainer' to create your first trainer."
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
                <th className="px-6 py-4">Photo</th>

                <th className="px-6 py-4">Trainer</th>

                <th className="px-6 py-4">Specialization</th>

                <th className="px-6 py-4">Experience</th>

                <th className="px-6 py-4">Status</th>

                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {trainers.map((trainer) => (
                <TrainerRow
                  key={trainer._id}
                  trainer={trainer}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}

      <div className="space-y-5 lg:hidden">
        {trainers.map((trainer) => (
          <TrainerRow
            key={trainer._id}
            trainer={trainer}
            mobile
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TrainerTable;

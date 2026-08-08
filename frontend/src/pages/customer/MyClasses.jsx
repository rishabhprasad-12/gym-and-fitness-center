import { useEffect, useState } from "react";
import { CalendarDays, Clock, UserRound, MapPin } from "lucide-react";
import toast from "react-hot-toast";

import { getClassSchedules } from "../../services/schedule.service";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClasses = async () => {
    try {
      setLoading(true);

      const response = await getClassSchedules();

      setClasses(response.data || []);
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Failed to load classes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const upcomingClasses = classes.filter((item) => item.isActive !== false);

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-zinc-500">Loading classes...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}

      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-lime-400">
          MY CLASSES
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">Classes</h1>

        <p className="mt-2 text-sm text-zinc-500">
          View upcoming classes and training sessions.
        </p>
      </div>

      {/* Upcoming Classes */}

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Upcoming Classes</h2>

          <span className="text-sm text-zinc-500">
            {upcomingClasses.length} classes
          </span>
        </div>

        {upcomingClasses.length === 0 ? (
          <EmptyClasses />
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {upcomingClasses.map((item) => (
              <ClassCard key={item._id} item={item} formatDate={formatDate} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const ClassCard = ({ item, formatDate }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700">
      {/* Top */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {item.title || item.name || "Fitness Class"}
          </h3>

          {item.description && (
            <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
              {item.description}
            </p>
          )}
        </div>

        <span className="shrink-0 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-400">
          Available
        </span>
      </div>

      {/* Details */}

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ClassInfo
          icon={CalendarDays}
          label="Date"
          value={formatDate(item.date)}
        />

        <ClassInfo
          icon={Clock}
          label="Time"
          value={
            item.startTime && item.endTime
              ? `${item.startTime} - ${item.endTime}`
              : item.time || "-"
          }
        />

        <ClassInfo
          icon={UserRound}
          label="Trainer"
          value={item.trainer?.name || item.trainerName || "FitForge Trainer"}
        />

        <ClassInfo
          icon={MapPin}
          label="Location"
          value={item.location || "FitForge Gym"}
        />
      </div>
    </div>
  );
};

const ClassInfo = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900">
        <Icon size={16} className="text-lime-400" />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-zinc-600">{label}</p>

        <p className="mt-0.5 truncate text-sm text-zinc-300">{value}</p>
      </div>
    </div>
  );
};

const EmptyClasses = () => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
        <CalendarDays size={22} className="text-zinc-500" />
      </div>

      <h3 className="mt-4 font-semibold text-white">No Classes Available</h3>

      <p className="mt-2 text-sm text-zinc-500">
        There are no upcoming classes at the moment.
      </p>
    </div>
  );
};

export default MyClasses;

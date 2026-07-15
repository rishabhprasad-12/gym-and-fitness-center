import ScheduleRow from "./ScheduleRow";
import ScheduleCard from "./ScheduleCard";
import SectionDivider from "../common/SectionDivider";

const ScheduleTable = ({ schedules }) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Weekly Schedule
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Plan Your
            <span className="text-lime-400"> Workout Week</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Browse our weekly fitness timetable and reserve your spot in the
            classes that best match your goals.
          </p>
        </div>

        {/* Desktop */}

        <div className="hidden lg:block">
          {/* Header */}

          <div className="mb-5 grid grid-cols-7 px-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            <span>Day</span>
            <span>Class</span>
            <span>Trainer</span>
            <span>Time</span>
            <span>Duration</span>
            <span>Seats</span>
            <span></span>
          </div>

          <div className="space-y-4">
            {schedules.map((schedule) => (
              <ScheduleRow key={schedule.id} schedule={schedule} />
            ))}
          </div>
        </div>

        {/* Mobile */}

        <div className="grid gap-6 lg:hidden">
          {schedules.map((schedule) => (
            <ScheduleCard key={schedule.id} schedule={schedule} />
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ScheduleTable;

import { CalendarDays, Clock3, User } from "lucide-react";
import { Link } from "react-router-dom";

const schedules = [
  {
    day: "Monday",
    className: "Strength Training",
    trainer: "Alex Morgan",
    time: "07:00 AM - 08:00 AM",
  },
  {
    day: "Tuesday",
    className: "Yoga Flow",
    trainer: "Sarah Lee",
    time: "06:00 PM - 07:00 PM",
  },
  {
    day: "Wednesday",
    className: "HIIT Workout",
    trainer: "John Carter",
    time: "07:30 AM - 08:30 AM",
  },
  {
    day: "Thursday",
    className: "CrossFit",
    trainer: "Emma Wilson",
    time: "05:00 PM - 06:00 PM",
  },
];

const SchedulePreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-7xl py-24 px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-lime-400">
            Weekly Schedule
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Find Your Perfect Class
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Explore our weekly fitness classes led by certified trainers. Choose
            the sessions that fit your schedule.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="space-y-5">
          {schedules.map((schedule) => (
            <div
              key={`${schedule.day}-${schedule.className}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:border-lime-400/40 hover:bg-zinc-900"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-2 text-lime-400">
                    <CalendarDays size={18} />
                    <span>{schedule.day}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {schedule.className}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-6 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      {schedule.trainer}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={18} />
                      {schedule.time}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 text-center">
          <Link
            to="/schedule"
            className="inline-flex rounded-xl border border-zinc-700 px-8 py-3 text-white transition hover:border-lime-400 hover:text-lime-400"
          >
            View Full Schedule
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </section>
  );
};

export default SchedulePreview;

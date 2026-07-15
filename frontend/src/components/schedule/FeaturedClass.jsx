import { Link } from "react-router-dom";
import { Flame, Clock3, Activity, Users, ArrowRight } from "lucide-react";

import featuredImage from "../../assets/images/schedule/featured-class.jpg";

const FeaturedClass = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
      <div className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
              Today's Highlight
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Featured
              <span className="text-lime-400"> Workout Class</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Push your limits with our most popular class of the day, guided by
              experienced trainers in a motivating group environment.
            </p>
          </div>

          {/* Main Card */}
          <div className="grid items-center gap-12 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 lg:grid-cols-2 lg:p-14">
            {/* Left */}
            <div className="relative flex justify-center">
              <div className="absolute h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

              <img
              src={featuredImage}
              alt="HIIT Training"
              className="relative z-10 w-full max-w-md object-contain rounded-4xl"
            />
            </div>

            {/* Right */}
            <div>
              <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black">
                🔥 Today's Featured Class
              </span>

              <h3 className="mt-6 text-5xl font-bold text-white">
                HIIT Training
              </h3>

              <p className="mt-4 text-lg text-zinc-300">
                High Intensity Interval Training designed to burn calories,
                improve endurance, and build strength.
              </p>

              {/* Info Grid */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <Clock3 className="mb-3 text-lime-400" />
                  <p className="text-sm text-zinc-400">Time</p>
                  <h4 className="text-xl font-semibold text-white">7:00 AM</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <Users className="mb-3 text-lime-400" />
                  <p className="text-sm text-zinc-400">Trainer</p>
                  <h4 className="text-xl font-semibold text-white">
                    Rahul Singh
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <Flame className="mb-3 text-lime-400" />
                  <p className="text-sm text-zinc-400">Calories Burn</p>
                  <h4 className="text-xl font-semibold text-white">
                    500–700 kcal
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <Activity className="mb-3 text-lime-400" />
                  <p className="text-sm text-zinc-400">Difficulty</p>
                  <h4 className="text-xl font-semibold text-white">
                    Intermediate
                  </h4>
                </div>
              </div>

              <Link
                to="/membership"
                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-500"
              >
                Join This Class
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClass;

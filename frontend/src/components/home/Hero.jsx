import { Link } from "react-router-dom";
import heroImage from "../../assets/images/home/hero.png";
import StatsCard from "../cards/StatsCard";
import SectionDivider from "../common/SectionDivider";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-900" />

      {/* Lime Glow */}
      <div className="absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[150px]" />

      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none">
        <h1 className="text-[70px] font-black uppercase tracking-[12px] text-white/[0.05] sm:text-[150px] md:text-[165px] lg:text-[180px] xl:text-[220px]">
          FIT
        </h1>

        <h1 className="mt-8 text-[70px] font-black uppercase tracking-[12px] text-lime-500/80 sm:text-[150px] md:text-[165px] lg:text-[180px] xl:text-[220px]">
          FORGE
        </h1>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-28 text-center">
        {/* Badge */}
        <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[3px] text-lime-400">
          Premium Fitness Club
        </span>

        {/* Heading */}
        <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-tight text-white md:text-7xl lg:text-8xl">
          Build Your
          <span className="block text-lime-400">Dream Body</span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          Train with certified coaches, modern equipment and personalized
          workout plans designed to help you become stronger every day.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/membership"
            className="rounded-xl bg-lime-400 px-8 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-lime-500"
          >
            Join Now
          </Link>

          <Link
            to="/schedule"
            className="rounded-xl border border-zinc-700 px-8 py-3 font-semibold text-white transition duration-300 hover:border-lime-400 hover:text-lime-400"
          >
            Explore Plans
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10">
          {/* Shadow Under Image */}
          <div className="absolute bottom-0 left-1/2 h-16 w-60 -translate-x-1/2 rounded-full bg-black/60 blur-3xl" />

          <img
            src={heroImage}
            alt="Fitness Athlete"
            className="
              relative
              z-10
              mx-auto
              w-[340px]
              sm:w-[530px]
              md:w-[630px]
              lg:w-[760px]
              xl:w-[860px]
              2xl:w-[930px]
              object-contain
              drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]
            "
          />

          {/* Floating Stats */}

          <div className="relative -mt-12 z-20 w-full max-w-5xl">
            <StatsCard />
          </div>

          <div className="mt-10 mb-6 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[5px] text-zinc-500">
              Scroll
            </span>

            <div className="mt-3 h-10 w-6 rounded-full border border-zinc-700 flex justify-center">
              <div className="mt-2 h-2 w-2 rounded-full bg-lime-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default Hero;

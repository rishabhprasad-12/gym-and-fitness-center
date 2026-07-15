import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";

import heroImage from "../../assets/images/schedule/schedule-hero.png";
import SectionDivider from "../common/SectionDivider";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/15 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center py-24">
        {/* Badge */}
        <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Weekly Classes
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-extrabold leading-tight uppercase text-white md:text-7xl lg:text-8xl">
          Find The Perfect Workout
        </h1>

        {/* CTA */}
        <Link
          to="/membership"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-500"
        >
          Become a Member
          <ArrowRight size={18} />
        </Link>

        {/* Image */}
        <div className="relative mt-10 flex justify-center">
          <img
            src={heroImage}
            alt="Workout Schedule"
            className="relative z-20 w-full max-w-sm object-contain drop-shadow-[0_35px_60px_rgba(132,204,22,0.30)] md:max-w-lg lg:max-w-xl"
          />

          {/* Desktop Floating Card */}

          <div className="absolute right-8 top-12 rounded-full border border-lime-400/30 bg-black/60 px-4 py-2 text-sm text-lime-400 backdrop-blur-xl lg:block">
            35+ Classes
          </div>

          <div className="absolute left-8 top-32 z-30 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-xl lg:block">
            7 Days Open
          </div>
          <div className="absolute bottom-10 left-0 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-2">
              <Flame className="text-lime-400" size={20} />
              <span className="text-sm font-semibold text-lime-400">
                Today's Class
              </span>
            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">
              HIIT Training
            </h3>

            <p className="mt-2 text-zinc-400">7:00 AM • Rahul Singh</p>
          </div>
        </div>

        {/* Bottom Text */}
        <h2 className="-mt-6 text-center text-5xl font-black uppercase leading-none text-lime-400 md:text-7xl lg:text-8xl">
          For Every Day
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Explore our weekly fitness schedule featuring strength training, yoga,
          cardio, HIIT, CrossFit, and more. Choose classes that fit your goals,
          routine, and fitness level.
        </p>
      </div>

      <SectionDivider />
    </section>
  );
};

export default Hero;

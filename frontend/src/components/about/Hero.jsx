import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroImage from "../../assets/images/about/about-hero.png";
import SectionDivider from "../common/SectionDivider";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 text-center  pt-20 pb-24">
        {/* Badge */}
        <span className="inline-block rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          About FitForge
        </span>

        {/* Heading Behind Image */}
        <h1 className="mt-8 text-5xl font-extrabold uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
          Building Stronger
        </h1>

        {/* Button */}
        <Link
          to="/membership"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-lime-500"
        >
          Explore Memberships
          <ArrowRight size={18} />
        </Link>

        {/* Image */}
        <div className="relative -mt-6 flex justify-center">
          <img
            src={heroImage}
            alt="FitForge Gym"
            className="relative z-10 h-[320px] md:h-[450px] lg:h-[550px] object-contain"
          />

          {/* Floating Card */}
          <div className="absolute bottom-10 left-1/2 z-20 -translate-x-[180px] rounded-2xl border border-white/10 bg-black/60 px-6 py-5 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-lime-400">2500+</h3>

            <p className="text-zinc-300">Happy Members</p>
          </div>
        </div>

        {/* Bottom Heading */}
        <h1 className="-mt-10 text-5xl font-extrabold uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
          <span className="text-lime-400">Healthier Lives.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          FitForge is a modern gym management platform designed to simplify
          fitness experiences for members and administrators through a clean,
          responsive, and user-friendly interface.
        </p>
      </div>
      <SectionDivider />
    </section>
  );
};

export default Hero;

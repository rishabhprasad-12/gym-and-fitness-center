import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroImage from "../../assets/images/trainers/rahul.png";
import SectionDivider from "../common/SectionDivider";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/15 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 text-center">
        {/* Badge */}
        <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Our Trainers
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
          Meet The Experts
        </h1>

        {/* CTA */}
        <Link
          to="/membership"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-500"
        >
          Join Our Community
          <ArrowRight size={18} />
        </Link>

        {/* Hero Image */}
        <div className="relative mt-8 flex justify-center">
          <img
            src={heroImage}
            alt="Trainer"
            className="relative z-10 w-full max-w-sm object-contain drop-shadow-[0_35px_60px_rgba(132,204,22,0.30)] md:max-w-lg lg:max-w-xl"
          />

          {/* Floating Card (Desktop) */}
          <div className="absolute bottom-10 left-0 z-20 rounded-3xl border border-white/10 bg-black/60 px-6 py-5 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-lime-400">8+</h3>

            <p className="mt-1 font-medium text-white">Years Experience</p>

            <p className="text-sm text-zinc-400">Head Fitness Coach</p>
          </div>
        </div>

        {/* Bottom Heading */}
        <h2 className="-mt-6 text-center z-30 text-5xl font-black uppercase leading-none text-lime-400 md:text-7xl lg:text-8xl">
          Behind Every Transformation
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Our certified trainers combine experience, passion, and personalized
          coaching to help you achieve your fitness goals. Whether you're a
          beginner or an experienced athlete, we're here to guide every step of
          your journey.
        </p>
      </div>

      <SectionDivider />
    </section>
  );
};

export default Hero;

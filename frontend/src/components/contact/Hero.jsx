import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

import heroImage from "../../assets/images/contact/contact-hero.png";
import SectionDivider from "../common/SectionDivider";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center py-24">
        <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Get In Touch
        </span>

        <div className="relative flex flex-col items-center">
          {/* Top Heading */}
          <h1 className="relative mt-6 text-5xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            We're Here to Help You
          </h1>

          <Link
            to="#contact-form"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-lime-500"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

          {/* Heading Behind */}
          <h1 className="absolute top-60 md:top-50 left-1/2 z-10 w-full -translate-x-1/2 text-5xl font-black uppercase leading-none text-white/10 md:text-7xl lg:text-8xl">
            Contact
            <br />
            FitForge
          </h1>

          <div className="relative">
            {/* PNG */}
            <img
              src={heroImage}
              alt="Contact"
              className="relative z-10 w-full max-w-sm object-contain drop-shadow-[0_40px_80px_rgba(132,204,22,0.25)] md:max-w-lg"
            />

            {/* Floating Card */}
            <div className="absolute bottom-10 -left-0 z-20 rounded-3xl border border-white/10 bg-black/60 px-6 py-5 backdrop-blur-xl">
              <p className="text-sm text-zinc-400">Need Assistance?</p>

              <div className="flex gap-2 items-center justify-center rounded-2xl bg-lime-400/10">
                <Phone className="text-lime-400 h-6 w-6" />

                <h3 className="text-xl font-bold text-white">
                  +91 98765 43210
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Heading */}
        <div className="mx-auto mt-8 max-w-3xl">
          <h2 className="-mt-10 text-5xl font-extrabold uppercase tracking-tight text-lime-400 md:text-6xl lg:text-7xl">
            Start Your Fitness Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Have questions about memberships, trainers, or class schedules?
            Reach out to our team and we'll be happy to assist you.
          </p>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default Hero;

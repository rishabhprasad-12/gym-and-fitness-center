import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroImage from "../../assets/images/dashboard/customer-banner.png";

const WelcomeBanner = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900 px-8 py-10">
      {/* Glow */}

      <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Customer Dashboard
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-white">
            Welcome Back,
            <span className="block text-lime-400">Rishabh</span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-zinc-400">
            Stay consistent with your workouts and keep moving toward your
            fitness goals. Every session brings you one step closer to a
            healthier and stronger version of yourself.
          </p>

          <Link
            to="/dashboard/membership"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-lime-500"
          >
            View Membership
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right */}

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt=""
            className="max-h-[420px] object-contain drop-shadow-[0_35px_60px_rgba(132,204,22,.25)]"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;

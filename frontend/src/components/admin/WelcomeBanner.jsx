import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// import adminImage from "../../assets/images/dashboard/admin-banner.png";

const WelcomeBanner = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900">
      {/* Background Glow */}
      <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-lime-400/5 to-transparent" />

      <div className="relative grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
        {/* Left */}
        <div>
          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Admin Dashboard
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Welcome Back,
            <span className="block text-lime-400">Administrator</span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-zinc-400">
            Manage memberships, trainers, class schedules and customer enquiries
            from one centralized dashboard. Stay organized and keep your fitness
            center running efficiently.
          </p>

          <Link
            to="/dashboard/admin/memberships"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500"
          >
            Manage Memberships
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          {/* <img
            src={adminImage}
            alt="Admin Dashboard"
            className="max-h-[340px] w-auto object-contain drop-shadow-[0_30px_50px_rgba(132,204,22,0.25)]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;

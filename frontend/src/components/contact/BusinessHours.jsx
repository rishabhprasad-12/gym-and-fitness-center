import BusinessHourCard from "./BusinessHourCard";
import { businessHours } from "../../data/contact/businessHours";
import SectionDivider from "../common/SectionDivider";

const BusinessHours = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-lime-400/5 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            Opening Hours
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Visit Us at the
            <span className="text-lime-400"> Right Time</span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Check our weekly schedule and choose a convenient time to visit
            FitForge. We're ready to welcome you throughout the week.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">
          {businessHours.map((item, index) => (
            <BusinessHourCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default BusinessHours;

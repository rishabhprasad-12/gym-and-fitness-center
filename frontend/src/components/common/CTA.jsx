import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-24 ">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-lime-400/80 via-lime-500 to-lime-400/80 px-8 py-16 text-center shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-black/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <span className="uppercase tracking-[4px] text-sm font-semibold text-black/70">
              Join FitForge Today
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-black">
              Ready To Transform
              <br />
              Your Fitness Journey?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-black/80">
              Join thousands of members training with expert coaches, premium
              equipment, and personalized fitness programs.
            </p>

            <Link
              to="/register"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-zinc-900"
            >
              Join Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

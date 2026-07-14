import { Link } from "react-router-dom";
import { Check, X, ArrowRight } from "lucide-react";

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
        plan.popular
          ? "border-lime-400 bg-gradient-to-b from-lime-400/10 to-zinc-900 shadow-lg shadow-lime-400/10 lg:scale-105"
          : "border-white/10 bg-zinc-900 hover:border-lime-400/30"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-black">
          Most Popular
        </span>
      )}

      {/* Plan */}
      <h3 className="text-2xl font-bold text-white">{plan.title}</h3>

      <p className="mt-4 text-5xl font-bold text-lime-400">₹{plan.price}</p>

      <p className="mt-2 text-zinc-400">{plan.duration}</p>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10"></div>

      {/* Features */}
      <ul className="flex-1 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {feature.available ? (
                <Check size={18} className="text-lime-400" />
              ) : (
                <X size={18} className="text-zinc-600" />
              )}

              <span
                className={
                  feature.available
                    ? "text-zinc-300"
                    : "text-zinc-500 line-through"
                }
              >
                {feature.name}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Link
        to="/register"
        className={`mt-10 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${
          plan.popular
            ? "bg-lime-400 text-black hover:bg-lime-500"
            : "border border-white/10 text-white hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Join Now
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default PricingCard;

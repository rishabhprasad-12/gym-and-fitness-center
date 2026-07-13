import { Check, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import SectionDivider from "../common/SectionDivider";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "/month",
    popular: false,
    features: [
      "Gym Access",
      "Locker Facility",
      "Basic Support",
      "Workout Guidance",
    ],
  },
  {
    name: "Premium",
    price: "₹1999",
    duration: "/month",
    popular: true,
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Nutrition Plan",
      "Unlimited Classes",
      "Body Assessment",
    ],
  },
  {
    name: "Elite",
    price: "₹2999",
    duration: "/month",
    popular: false,
    features: [
      "Everything in Premium",
      "VIP Lounge",
      "Priority Support",
      "Steam & Sauna",
    ],
  },
];

const MembershipPreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto  py-24 px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-lime-400 uppercase tracking-[4px] text-sm">
            Membership Plans
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Choose Your Perfect Plan
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-zinc-400">
            Flexible membership options designed for beginners, fitness
            enthusiasts, and professional athletes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-lime-400 bg-zinc-800 shadow-2xl shadow-lime-500/20 lg:scale-105"
                  : "border-zinc-700 bg-zinc-950 hover:border-lime-400/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-sm font-semibold text-black flex items-center gap-2">
                  <Crown size={16} />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>

              {/* Price */}
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>

                <span className="text-zinc-400">{plan.duration}</span>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-zinc-700"></div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <Check size={18} className="text-lime-400 flex-shrink-0" />

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                to="/membership"
                className={`mt-10 block rounded-xl py-3 text-center font-semibold transition ${
                  plan.popular
                    ? "bg-lime-400 text-black hover:bg-lime-500"
                    : "border border-zinc-600 text-white hover:border-lime-400 hover:text-lime-400"
                }`}
              >
                Join Now
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
          <span>✓ No Hidden Charges</span>

          <span>✓ Cancel Anytime</span>

          <span>✓ Certified Trainers</span>

          <span>✓ 7-Day Free Trial</span>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default MembershipPreview;

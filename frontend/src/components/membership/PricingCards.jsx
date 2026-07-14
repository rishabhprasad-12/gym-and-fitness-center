import { membershipPlans } from "../../data/membershipData";
import PricingCard from "../cards/PricingCard"
import SectionDivider from "../common/SectionDivider";

const PricingCards = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Membership Plans
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Flexible Plans For
            <span className="block text-lime-400">Every Fitness Journey</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Choose a membership that fits your goals, budget, and lifestyle.
            Upgrade anytime as your fitness journey grows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {membershipPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default PricingCards;

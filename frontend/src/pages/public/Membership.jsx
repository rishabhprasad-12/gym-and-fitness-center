import Benefits from "../../components/membership/Benefits";
import ComparisonTable from "../../components/membership/ComparisonTable";
import FAQ from "../../components/membership/FAQ";
import Hero from "../../components/membership/Hero";
import PricingCards from "../../components/membership/PricingCards";
import CTA from "../../components/common/CTA";

const Membership = () => {
  return (
    <div>
      <Hero />
      <PricingCards />
      <Benefits />
      <ComparisonTable />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Membership;

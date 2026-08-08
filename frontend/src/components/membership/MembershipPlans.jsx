import { membershipPlans } from "../../data/membership/membershipData";
import MembershipPlanCard from "../cards/MembershipPlanCard";
import SectionDivider from "../common/SectionDivider";
import toast from "react-hot-toast";

import { getMyMembershipRegistrations } from "../../services/membershipRegistration.service.js";

const MembershipPlans = ({ plans, setSelectedPlan, formOpen }) => {

  const handleJoinNow = async (plan) => {
    const token = localStorage.getItem("token");

    // USer is not logged in.
    if (!token) {
      toast.error("Please login to join a membership");

      navigate("/auth/login", {
        state: {
          from: "/membership",
        },
      });

      return;
    }

    try {
      // check user already has a pending or active membership
      const response = await getMyMembershipRegistrations(token);

      const registrations = response.data;

      const currentMembership = registrations.find(
        (registration) =>
          registration.membershipStatus === "Pending" ||
          registration.membershipStatus === "Active",
      );

      if (currentMembership) {
        toast.error("You already have a pending or active membership");

        return;
      }

      // No current membership
      setSelectedPlan(plan);
      formOpen();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Unable to check your membership.",
      );
    }
  };

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
          {plans.map((plan) => (
            <MembershipPlanCard
              key={plan._id}
              plan={plan}
              onJoin={() => handleJoinNow(plan)}
            />
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default MembershipPlans;

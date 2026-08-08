import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Benefits from "../../components/membership/Benefits";
import ComparisonTable from "../../components/membership/ComparisonTable";
import FAQ from "../../components/membership/FAQ";
import Hero from "../../components/membership/Hero";
import CTA from "../../components/common/CTA";

import { getMembershipPlans } from "../../services/membershipPlan.service";
import toast from "react-hot-toast";

import api from "../../api/axios.js";
import MembershipPlans from "../../components/membership/MembershipPlans.jsx";
import MembershipRegistrationForm from "../../components/form/MembershipRegistrationForm.jsx";

const Membership = () => {
  const navigation = useNavigate();

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const [user, setUser] = useState(null);

  const fetchPlans = async () => {
    try {
      setLoading(true);

      const response = await getMembershipPlans();
      setPlans(response.data);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Unable to load membership plans.",
      );
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        toast.error("Invalid user data");
      }
    }
  }, []);

  return (
    <div>
      <Hero />
      <MembershipPlans
        plans={plans}
        setSelectedPlan={setSelectedPlan}
        formOpen={() => setIsRegistrationOpen(true)}
      />
      <Benefits />
      <ComparisonTable />
      <FAQ />
      <CTA />

      <MembershipRegistrationForm
        plan={selectedPlan}
        user={user}
        isOpen={isRegistrationOpen}
        onClose={() => {
          setIsRegistrationOpen(false);
          setSelectedPlan(null);
        }}
        onSuccess={() => {
          setIsRegistrationOpen(false);
          setSelectedPlan(null);
        }}
      />
    </div>
  );
};

export default Membership;

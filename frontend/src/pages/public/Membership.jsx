import { useEffect, useState } from "react";

import Benefits from "../../components/membership/Benefits";
import ComparisonTable from "../../components/membership/ComparisonTable";
import FAQ from "../../components/membership/FAQ";
import Hero from "../../components/membership/Hero";
import CTA from "../../components/common/CTA";

import { getMembershipPlans } from "../../services/membershipPlan.service";
import toast from "react-hot-toast";

import api from "../../api/axios.js";
import MembershipPlans from "../../components/membership/MembershipPlans.jsx";

const Membership = () => {
  const [plans, setPlans] = useState([]);

  const fetchPlans = async (e) => {
    try {
      const response = await getMembershipPlans();
      setPlans(response.data);
      console.log(response.message);
    } catch (err) {
      console.error(err);
      // toast.error(err.response?.message?.data);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);
  
  return (
    <div>
      <Hero />
      <MembershipPlans plans={plans} />
      <Benefits />
      <ComparisonTable />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Membership;

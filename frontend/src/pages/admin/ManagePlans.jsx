import { useEffect, useState } from "react";

import {
  getMembershipPlans,
  getMembershipPlan,
  createMembershipPlan,
  updateMembershipPlan,
  deleteMembershipPlan,
} from "../../services/membershipPlan.service";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/common/SearchInput";
import MembershipPlanTable from "../../components/membership/MembershipPlanTable";
import MembershipPlanForm from "../../components/form/MembershipPlanForm";
import ConfirmModal from "../../components/common/ConfirmModel";

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await getMembershipPlans();
      setPlans(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const filterPlans = plans.filter((plan) => {
    plan.title.toLowerCase().includes(search.toLowerCase());
  });

  const handleAdd = () => {
    setSelectedPlan(null);
    setIsFormOpen(true);
  };

  const handleEdit = (plan) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
  };

  const handleDelete = (plan) => {
    setSelectedPlan(plan);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedPlan) return;

    try {
      setDeleteLoading(true);

      const token = localStorage.getItem("token");

      await deleteMembershipPlan(selectedPlan._id, token);

      await fetchPlans();

      closeModals();
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const closeModals = () => {
    setSelectedPlan(null);

    setIsFormOpen(false);

    setIsDeleteOpen(false);
  };

  return (
    <div>
      <PageHeader
        title="Membership Plans"
        description="Manage all gym membership plans."
        buttonText="Add Plan"
        onButtonClick={handleAdd}
      />

      <SearchInput
        placeholder="Search Membership Plans..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <MembershipPlanTable
        plans={plans}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <MembershipPlanForm
        key={selectedPlan?._id || "new"}
        plan={selectedPlan}
        isOpen={isFormOpen}
        onClose={closeModals}
        onSuccess={fetchPlans}
      />

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Delete Membership Plan"
        description={`Are you sure you want to delete "${selectedPlan?.title}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onClose={closeModals}
        loading={deleteLoading}
      />
    </div>
  );
};

export default ManagePlans;

import { useEffect, useState } from "react";

import {
  getMembershipRegistrations,
  deleteMembershipRegistration,
} from "../../services/membershipRegistration.service";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/common/SearchInput";
import MembershipRegistrationTable from "../../components/membership/MembershipRegistrationTable";
import RegistrationDetailsModal from "../../components/form/RegistrationDetailsModal";
import ConfirmModal from "../../components/common/ConfirmModal";

import toast from "react-hot-toast";

const ManageRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch registrations
  const fetchRegistrations = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await getMembershipRegistrations(token);

      setRegistrations(response.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to fetch registrations",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  // Search
  const filteredRegistrations = registrations.filter((registration) => {
    const searchValue = search.toLowerCase();

    const customerName = registration.user?.name?.toLowerCase() || "";

    const customerEmail = registration.user?.email?.toLowerCase() || "";

    const planTitle = registration.membershipPlan?.title?.toLowerCase() || "";

    return (
      customerName.includes(searchValue) ||
      customerEmail.includes(searchValue) ||
      planTitle.includes(searchValue)
    );
  });

  // View
  const handleView = (registration) => {
    setSelectedRegistration(registration);
    setIsDetailsOpen(true);
  };

  // Delete
  const handleDelete = (registration) => {
    setSelectedRegistration(registration);
    setIsDeleteOpen(true);
  };

  // Confirm delete
  const handleConfirmDelete = async () => {
    if (!selectedRegistration) return;

    try {
      setDeleteLoading(true);

      const token = localStorage.getItem("token");

      const response = await deleteMembershipRegistration(
        selectedRegistration._id,
        token,
      );

      await fetchRegistrations();

      closeModals();

      toast.success(response.message || "Registration deleted successfully");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to delete registration",
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  // Close
  const closeModals = () => {
    setSelectedRegistration(null);

    setIsDetailsOpen(false);
    setIsDeleteOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <PageHeader
        title="Membership Registrations"
        description="Manage customer membership registrations."
      />

      {/* Search */}

      <SearchInput
        placeholder="Search Customer or Membership..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}

      <MembershipRegistrationTable
        registrations={filteredRegistrations}
        loading={loading}
        onView={handleView}
        onDelete={handleDelete}
      />

      {/* Details Modal */}

      <RegistrationDetailsModal
        registration={selectedRegistration}
        isOpen={isDetailsOpen}
        onClose={closeModals}
        onSuccess={fetchRegistrations}
      />

      {/* Delete Modal */}

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Delete Membership Registration"
        description={`Are you sure you want to delete the registration of "${selectedRegistration?.user?.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onClose={closeModals}
        loading={deleteLoading}
      />
    </div>
  );
};

export default ManageRegistrations;

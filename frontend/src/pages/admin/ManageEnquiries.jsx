import { useEffect, useState } from "react";

import { getEnquiries, deleteEnquiry } from "../../services/enquiry.service";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/common/SearchInput";
import EnquiryTable from "../../components/enquiry/EnquiryTable";
import EnquiryDetailsModal from "../../components/form/EnquiryDetailsModal";
import ConfirmModal from "../../components/common/ConfirmModal";

import toast from "react-hot-toast";

const ManageEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const response = await getEnquiries();

      setEnquiries(response.data || []);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to fetch enquiries",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const filteredEnquiries = enquiries.filter((enquiry) => {
    const value = search.toLowerCase();

    const name = enquiry.name?.toLowerCase() || "";

    const email = enquiry.email?.toLowerCase() || "";

    const subject = enquiry.subject?.toLowerCase() || "";

    return (
      name.includes(value) || email.includes(value) || subject.includes(value)
    );
  });

  const handleView = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsDetailsOpen(true);
  };

  const handleDelete = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedEnquiry) return;

    try {
      setDeleteLoading(true);

      const token = localStorage.getItem("token");

      const response = await deleteEnquiry(selectedEnquiry._id, token);

      await fetchEnquiries();

      closeModals();

      toast.success(response.message || "Enquiry deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete enquiry");
    } finally {
      setDeleteLoading(false);
    }
  };

  const closeModals = () => {
    setSelectedEnquiry(null);
    setIsDetailsOpen(false);
    setIsDeleteOpen(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Enquiries"
        description="Manage customer enquiries and messages."
      />

      <SearchInput
        placeholder="Search enquiries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EnquiryTable
        enquiries={filteredEnquiries}
        loading={loading}
        onView={handleView}
        onDelete={handleDelete}
      />

      <EnquiryDetailsModal
        enquiry={selectedEnquiry}
        isOpen={isDetailsOpen}
        onClose={closeModals}
        onSuccess={fetchEnquiries}
      />

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Delete Enquiry"
        description={`Are you sure you want to delete the enquiry from "${selectedEnquiry?.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onClose={closeModals}
        loading={deleteLoading}
      />
    </div>
  );
};

export default ManageEnquiries;

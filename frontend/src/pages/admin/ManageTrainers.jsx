import { useEffect, useMemo, useState } from "react";

import { getTrainers, deleteTrainer } from "../../services/trainer.service";

import TrainerTable from "../../components/trainers/TrainerTable";
import TrainerForm from "../../components/form/TrainerForm";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/common/SearchInput";
import ConfirmModel from "../../components/common/ConfirmModal";

const ManageTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchTrainers = async () => {
    try {
      setLoading(true);

      const response = await getTrainers();

      setTrainers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const filteredTrainers = useMemo(() => {
    return trainers.filter((trainer) => {
      const value = search.toLowerCase();

      return (
        trainer.name?.toLowerCase().includes(value) ||
        trainer.email?.toLowerCase().includes(value) ||
        trainer.specialization?.toLowerCase().includes(value)
      );
    });
  }, [search, trainers]);

  const handleAdd = () => {
    setSelectedTrainer(null);
    setIsFormOpen(true);
  };

  const handleEdit = (trainer) => {
    setSelectedTrainer(trainer);
    setIsFormOpen(true);
  };

  const handleDelete = (trainer) => {
    setSelectedTrainer(trainer);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedTrainer) return;

    try {
      setDeleteLoading(true);

      const token = localStorage.getItem("token");

      await deleteTrainer(selectedTrainer._id, token);

      await fetchTrainers();

      closeModals();
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const closeModals = () => {
    setSelectedTrainer(null);

    setIsFormOpen(false);

    setIsDeleteOpen(false);
  };

  return (
    <>
      <PageHeader
        title="Trainers"
        description="Manage all gym trainers."
        buttonText="Add Trainer"
        onButtonClick={handleAdd}
      ></PageHeader>

      {/* Search */}

      <div className="mb-6">
        <SearchInput
          placeholder="Search trainer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}

      <TrainerTable
        trainers={filteredTrainers}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Form */}

      <TrainerForm
        trainer={selectedTrainer}
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedTrainer(null);
        }}
        onSuccess={fetchTrainers}
      />

      {/* Delete */}

      <ConfirmModel
        isOpen={isDeleteOpen}
        title="Delete Trainer"
        description={`Are you sure you want to delete ${
          selectedTrainer?.name || ""
        }? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onClose={closeModals}
        loading={deleteLoading}
      />
    </>
  );
};

export default ManageTrainers;

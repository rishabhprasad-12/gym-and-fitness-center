import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";

import {
  getClassSchedules,
  deleteClassSchedule,
} from "../../services/schedule.service";

import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/common/SearchInput";
import ConfirmModal from "../../components/common/ConfirmModal";
import ClassScheduleTable from "../../components/schedule/ClassScheduleTable";
import ClassScheduleForm from "../../components/form/ClassScheduleForm";

import toast from "react-hot-toast";

const ManageSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const response = await getClassSchedules();
      setSchedules(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const filteredSchedules = useMemo(() => {
    return schedules.filter((schedule) => {
      const keyword = search.toLowerCase();

      const trainerName =
        typeof schedule.trainer === "object"
          ? schedule.trainer?.name || ""
          : schedule.trainer || "";

      return (
        schedule.className.toLowerCase().includes(keyword) ||
        trainerName.toLowerCase().includes(keyword) ||
        schedule.day.toLowerCase().includes(keyword) ||
        schedule.startTime.toLowerCase().includes(keyword)
      );
    });
  }, [search, schedules]);


  const handleAdd = () => {
    setSelectedSchedule(null);
    setIsFormOpen(true);
  };

  const handleEdit = (schedule) => {
    setSelectedSchedule(schedule);
    setIsFormOpen(true);
  };

  const handleDelete = (schedule) => {
    setSelectedSchedule(schedule);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if(!selectedSchedule) return;

    try {
      setDeleteLoading(true);

      const token = localStorage.getItem("token");

       const response = await deleteClassSchedule(selectedSchedule._id, token);

      await fetchSchedules();
      closeModals();

      toast.success(response.message)
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setDeleteLoading(false);
    }
  }

  const closeModals = () => {
    setSelectedSchedule(null);

    setIsFormOpen(false);

    setIsDeleteOpen(false);
  }

  return (
    <>
      <PageHeader
        title="Class Schedule"
        description="Manage all gym class schedules."
        buttonText="Add Classes"
        onButtonClick={handleAdd}
      />

      {/* Search */}
      <div className="mb-6">
        <SearchInput
          placeholder="Search class..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}

      <ClassScheduleTable
        schedules={filteredSchedules}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Form */}

      <ClassScheduleForm
        key={selectedSchedule}
        schedule={selectedSchedule}
        isOpen={isFormOpen}
        onClose={closeModals}
        onSuccess={fetchSchedules}
      />

      {/* Delete */}

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Delete Class"
        description={`Are you sure you want to delete "${selectedSchedule?.className}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onClose={closeModals}
        loading={deleteLoading}
      />
    </>
  );
};

export default ManageSchedules;

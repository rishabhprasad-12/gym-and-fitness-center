import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";

import {
  createClassSchedule,
  updateClassSchedule,
} from "../../services/schedule.service";

import { getTrainers } from "../../services/trainer.service";
import toast from "react-hot-toast";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const initialState = {
  className: "",
  trainer: "",
  day: "",
  startTime: "",
  duration: "",
  capacity: "",
  description: "",
  isActive: true,
};

const ClassScheduleForm = ({ schedule, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState(initialState);

  const [trainers, setTrainers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTrainers();
  }, []);

  useEffect(() => {
    if (schedule) {
      setFormData({
        className: schedule.className || "",
        trainer: schedule.trainer?._id || "",
        day: schedule.day || "",
        startTime: schedule.startTime || "",
        duration: schedule.duration || "",
        capacity: schedule.capacity || "",
        description: schedule.description || "",
        isActive: schedule.isActive ?? true,
      });
    } else {
      setFormData(initialState);
    }
  }, [schedule]);

  const fetchTrainers = async () => {
    try {
      const response = await getTrainers();

      setTrainers(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let response;
      const token = localStorage.getItem("token");

      if (schedule) {
        response = await updateClassSchedule(schedule._id, formData, token);
      } else {
        response = await createClassSchedule(formData, token);
      }

      onSuccess();

      onClose();
      toast.success(response.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {schedule ? "Edit Class Schedule" : "Add Class Schedule"}
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Manage gym class schedules.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-zinc-800"
          >
            <X className="text-zinc-400" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-6"
        >
          {/* Class Name */}

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Class Name
            </label>

            <input
              required
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          {/* Trainer */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Trainer
              </label>

              <select
                required
                name="trainer"
                value={formData.trainer}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
              >
                <option value="">Select Trainer</option>

                {trainers.map((trainer) => (
                  <option key={trainer._id} value={trainer._id}>
                    {trainer.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Day</label>

              <select
                required
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
              >
                <option value="">Select Day</option>

                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Time, Duration */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Time</label>

              <input
                type="time"
                required
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Duration (Minutes)
              </label>

              <input
                type="number"
                required
                min="1"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
              />
            </div>
          </div>

          {/* Capacity */}

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Capacity</label>

            <input
              type="number"
              required
              min="1"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          {/* Description */}

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Description
            </label>

            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write class description..."
              className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          {/* Status */}

          <div>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                hidden
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />

              <div
                className={`flex h-5 w-5 items-center justify-center rounded border ${
                  formData.isActive
                    ? "border-lime-400 bg-lime-400"
                    : "border-zinc-600"
                }`}
              >
                {formData.isActive && (
                  <Check size={14} className="text-black" />
                )}
              </div>

              <span className="text-white">Active Class</span>
            </label>
          </div>
        </form>

        {/* Footer */}

        <div className="flex flex-col-reverse gap-3 border-t border-zinc-800 p-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Saving..." : schedule ? "Update Class" : "Save Class"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassScheduleForm;

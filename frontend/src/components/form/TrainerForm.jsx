import { useEffect, useState } from "react";
import { X, Upload, Check } from "lucide-react";

import {
  createTrainer,
  updateTrainer,
} from "../../services/trainer.service";

const specializations = [
  "Strength Training",
  "Yoga",
  "HIIT",
  "CrossFit",
  "Cardio",
  "Functional Training",
  "Zumba",
  "Pilates",
  "Personal Training",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  specialization: "",
  experience: "",
  qualification: "",
  bio: "",
  image: null,
  isActive: true,
};

const TrainerForm = ({ trainer, isOpen, onClose, onSuccess }) => {
    console.log(trainer);

  const [formData, setFormData] = useState(initialState);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (trainer) {
      setFormData({
        name: trainer.name || "",
        email: trainer.email || "",
        phone: trainer.phone || "",
        specialization: trainer.specialization || "",
        experience: trainer.experience || "",
        qualification: trainer.qualification || "",
        bio: trainer.bio || "",
        image: trainer.image || null,
        isActive: trainer.isActive ?? true,
      });

      setPreview(trainer.image || "");
    } else {
      setFormData(initialState);
      setPreview("");
    }
  }, [trainer]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("specialization", formData.specialization);
      payload.append("experience", formData.experience);
      payload.append("qualification", formData.qualification);
      payload.append("bio", formData.bio);
      payload.append("isActive", formData.isActive);

      if (formData.image instanceof File) {
        payload.append("image", formData.image);
      }

      console.log(payload);

      if (trainer) {
        await updateTrainer(trainer._id, payload, token);
      } else {
        await createTrainer(payload, token);
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {trainer ? "Edit Trainer" : "Add Trainer"}
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Manage trainer information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-zinc-800"
          >
            <X className="text-zinc-400" />
          </button>
        </div>

        {/* Body */}

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          {/* Image */}

          <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row">
            <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-950">
              {preview ? (
                <img
                  src={preview}
                  alt="Trainer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-500">
                  No Image
                </div>
              )}
            </div>

            <label className="cursor-pointer rounded-xl border border-zinc-700 px-5 py-3 text-white transition hover:border-lime-400 hover:bg-zinc-800">
              <div className="flex items-center gap-2">
                <Upload size={18} />
                Upload Image
              </div>

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Name Email */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              />
            </div>
          </div>

          {/* Phone Specialization */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Phone</label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Specialization
              </label>

              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              >
                <option value="">Select</option>

                {specializations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Experience Qualification */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Experience
              </label>

              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Qualification
              </label>

              <input
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
              />
            </div>
          </div>

          {/* Bio */}

          <div className="mt-6">
            <label className="mb-2 block text-sm text-zinc-300">Bio</label>

            <textarea
              rows={5}
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-lime-400"
            />
          </div>

          {/* Active */}

          <div className="mt-8">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="hidden"
              />

              <div
                className={`flex h-5 w-5 items-center justify-center rounded border ${
                  formData.isActive
                    ? "border-lime-400 bg-lime-400"
                    : "border-zinc-500"
                }`}
              >
                {formData.isActive && (
                  <Check size={14} className="text-black" />
                )}
              </div>

              <span className="text-white">Active Trainer</span>
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
            {loading
              ? "Saving..."
              : trainer
                ? "Update Trainer"
                : "Save Trainer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerForm;
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import {
  createMembershipPlan,
  updateMembershipPlan,
} from "../../services/membershipPlan.service";

const availableFeatures = [
  "Gym Access",
  "Cardio Area",
  "Locker Access",
  "Group Classes",
  "Personal Trainer",
  "Nutrition Plan",
  "Unlimited Access",
  "Priority Support",
];

const initialState = {
  title: "",
  price: "",
  duration: "",
  description: "",
  isPopular: false,
  features: [],
};

const MembershipPlanForm = ({ plan, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    if (plan) {
      setFormData({
        title: plan.title || "",
        price: plan.price || "",
        duration: plan.duration || "",
        description: plan.description || "",
        popular: plan.isPopular || false,

        features: plan.features
          ? plan.features.map((feature) => feature.name)
          : [],
      });
    } else {
      setFormData(initialState);
    }
  }, [plan, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && name === "popular" ? checked : value,
    }));
  };

  const handleFeature = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((item) => item !== feature)
        : [...prev.features, feature],
    }));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     setLoading(true);

     const token = localStorage.getItem("token");

     const payload = {
       title: formData.title,
       price: Number(formData.price),
       duration: Number(formData.duration),
       description: formData.description,
       isPopular: formData.popular,

       features: formData.features.map((feature) => ({
         name: feature,
         available: true,
       })),
     };

     let response;

     if (plan) {
       response = await updateMembershipPlan(plan._id, payload, token);
     } else {
       response = await createMembershipPlan(payload, token);
     }

     console.log(response);

     setFormData(initialState);

     onSuccess();
     onClose();
   } catch (error) {
     console.error(error.response?.data);
   } finally {
     setLoading(false);
   }
 };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 sm:p-4">
      <div className="flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4 sm:px-6">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {plan ? "Edit Membership Plan" : "Add Membership Plan"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-zinc-800"
          >
            <X size={20} className="text-zinc-400" />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto hide-scrollbar px-5 py-5 sm:px-6"
        >
          <div className="space-y-1">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Plan Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-lime-400"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Duration
                </label>

                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Description (Optional)
              </label>

              <textarea
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm text-zinc-300">
                Features
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {availableFeatures.map((feature) => (
                  <label
                    key={feature}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all
                    ${
                      formData.features.includes(feature)
                        ? "border-lime-400 bg-lime-400/10 text-lime-500"
                        : "border-zinc-700 text-white/70 bg-zinc-900 hover:border-zinc-500 hover:text-white/90"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeature(feature)}
                    />
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded border
                      ${
                        formData.features.includes(feature)
                          ? "border-lime-400 bg-lime-400"
                          : "border-zinc-500"
                      }`}
                    >
                      {formData.features.includes(feature) && (
                        <span className="text-xs font-bold text-black">✓</span>
                      )}
                    </div>
                    {feature}
                  </label>
                ))}
              </div>
            </div>

            <label className="flex justify-end items-center gap-3 text-white py-4">
              <input
                type="checkbox"
                className="hidden"
                name="popular"
                checked={formData.popular}
                onChange={handleChange}
              />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border
                      ${
                        formData.popular
                          ? "border-lime-400 bg-lime-400"
                          : "border-zinc-500"
                      }`}
              >
                {formData.popular && (
                  <span className="text-xs font-bold text-black">✓</span>
                )}
              </div>
              Mark as Popular
            </label>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-zinc-700 px-6 py-3 text-white"
              >
                Cancel
              </button>

              <button
                disabled={loading}
                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black hover:bg-lime-500"
              >
                {loading ? "Saving..." : plan ? "Update Plan" : "Save Plan"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipPlanForm;

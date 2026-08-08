import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { _id: false },
);

const membershipPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    durationValue: {
      type: Number,
      required: true,
      min: 1,
    },

    durationUnit: {
      type: String, 
      required: true,
    },

    features: [featureSchema],

    description: {
      type: String,
      trim: true,
      default: "",
    },

    isPopular: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("MembershipPlan", membershipPlanSchema);

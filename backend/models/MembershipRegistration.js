import mongoose from "mongoose";
import { PAYMENT_STATUS, MEMBERSHIP_STATUS } from "../utils/constants";

const membershipRegistrationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    membershipPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MembershipPlan",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    amountPaid: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentStatus: {
      type: String,
      enum: PAYMENT_STATUS,
      default: "pending",
    },

    membershipStatus: {
      type: String,
      enum: MEMBERSHIP_STATUS,
      default: "active",
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model(
  "MembershipRegistration",
  membershipRegistrationSchema,
);

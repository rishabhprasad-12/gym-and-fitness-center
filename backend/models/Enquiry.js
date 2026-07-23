import mongoose from "mongoose";
import { ENQUIRY_STATUS } from "../utils/constants";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ENQUIRY_STATUS,
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Enquiry", enquirySchema);

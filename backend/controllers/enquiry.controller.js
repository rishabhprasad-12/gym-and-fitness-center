import Enquiry from "../models/Enquiry.js";
import User from "../models/User.js";

import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// get all enquires
export const getAllEnquires = asyncHandler(async (req, res) => {
  const enquires = await Enquiry.find().sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(200, "Enquiries fetched successfully", enquires));
});

// get enquiry by Id
export const getEnquiryById = asyncHandler(async (req, res) => {
  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Enquiry fetched successfully", enquiry));
});

// get my enquiries
export const getMyEnquiries = asyncHandler(async (req, res) => {
  const enquires = await Enquiry.find({
    user: req.user.id,
  }).sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(200, "My enquires fetched successfully", enquires));
});

// create enquiry
export const createEnquiry = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    throw new ApiError(400, "Name, email, subject and message are required");
  }

  const enquiry = await Enquiry.create({
    name,
    email,
    phone,
    subject,
    message,
  });

  res
    .status(201)
    .json(new ApiResponse(201, "Enquiry submitted successfully", enquiry));
});

// create customer enquiry
export const createCustomerEnquiry = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;

  if (!subject || !message) {
    throw new ApiError(400, "Subject and message are required");
  }

  // authMiddleware already provides the logged-in user
  const user = await User.findById(req.user.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const fallbackName =
    user.fullName ||
    user.name ||
    (user.email ? user.email.split("@")[0] : "User");

  const enquiryData = {
    user: user._id,
    name: fallbackName,
    email: user.email,
    phone: user.phone || "",
    subject,
    message,
    status: "Pending",
  };

  console.log("FINAL ENQUIRY DATA:", enquiryData);

  const enquiry = await Enquiry.create(enquiryData);

  res
    .status(201)
    .json(new ApiResponse(201, "Enquiry submitted successfully", enquiry));
});

// update enquiry
export const updateEnquiry = asyncHandler(async (req, res) => {
  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found");
  }

  const { status, notes } = req.body;

  if (status !== undefined) {
    enquiry.status = status;
  }

  if (notes !== undefined) {
    enquiry.notes = notes;
  }

  await enquiry.save();

  res
    .status(200)
    .json(new ApiResponse(200, "Enquiry updated successfully", enquiry));
});

// delete enquiry
export const deleteEnquiry = asyncHandler(async (req, res) => {
  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found");
  }

  await enquiry.deleteOne();

  res.status(200).json(new ApiResponse(200, "Enquiry deleted successfully"));
});

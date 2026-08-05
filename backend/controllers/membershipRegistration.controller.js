import MembershipRegistration from "../models/MembershipRegistration.js";
import MembershipPlan from "../models/MembershipPlan.js";
import USer from "../models/User.js";

import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/User.js";

// get all registrations (admin)
export const getAllRegistrations = asyncHandler(async (req, res) => {
  const registrations = await MembershipRegistration.find()
    .sort({ createdAt: -1 })
    .populate("user", "name email")
    .populate("membershipPlan", "title duration price");

  res
    .status(200)
    .json(new ApiResponse(200, "Fetched successfully", registrations));
});

// get registration by Id (admin)
export const getRegistrationById = asyncHandler(async (req, res) => {
  const registration = await MembershipRegistration.findById(req.params.id)
    .populate("user", "name email")
    .populate("membershipPlan", "title duration price");

  if (!registration) {
    throw new ApiError(404, "Membership registration not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Fetched successfully", registration));
});

// get my registrations (customer)
export const getMyRegistrations = asyncHandler(async (req, res) => {
  const registrations = await MembershipRegistration.find({
    user: req.user.id,
  })
    .sort({ createdAt: -1 })
    .populate("membershipPlan", "title duration price");

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "My memberships fetched successfully",
        registrations,
      ),
    );
});

// create registration (customer)
export const createRegistration = asyncHandler(async (req, res) => {
  const { membershipPlan, startDate, endDate, notes } = req.body;

  if (!membershipPlan || !startDate || !endDate) {
    throw new ApiError(400, "All fields are required");
  }

  // logged in user
  const user = await User.findById(req.user.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Membership Plan
  const plan = await MembershipPlan.findById(membershipPlan);

  if (!plan) {
    throw new ApiError(404, "Membership plan not found");
  }

  // prevent duplicate active membership
  const existingRegistration = await MembershipRegistration.findOne({
    user: req.user.id,
    membershipStatus: "Active",
  });

  if (existingRegistration) {
    throw new APiError(409, "You already have an active membership plan");
  }

  const registration = await MembershipRegistration.create({
    user: req.user.id,
    membershipPlan,
    startDate,
    endDate,
    amountPaid: plan.price,
    paymentStatus: "Pending",
    membershipStatus: "Pending",
    notes,
  });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        "Registration successful! Welcome to the FitForge Family",
        registration,
      ),
    );
});

// update registration (admin)
export const updateRegistration = asyncHandler(async (req, res) => {
  const registration = await MembershipRegistration.findById(req.params.id);

  if (!registration) {
    throw new ApiError(404, "Membership registration not found");
  }

  const { paymentStatus, membershipStatus, notes } = req.body;

  if (paymentStatus !== undefined) {
    registration.paymentStatus = paymentStatus;
  }

  if (membershipStatus !== undefined) {
    registration.membershipStatus = membershipStatus;
  }

  if (notes !== undefined) {
    registration.notes = notes;
  }

  await registration.save();

  res
    .status(200)
    .json(
      new ApiResponse(200, "Registration updated successfully", registration),
    );
});

// delete registration (admin)
export const deleteRegistration = asyncHandler(async (req, res) => {
  const registration = await MembershipRegistration.findById(req.params.id);

  if (!registration) {
    throw new ApiError(404, "Membership registration not found");
  }

  await registration.deleteOne();

  res
    .status(200)
    .json(new ApiResponse(200, "Membership registration deleted successfully"));
});

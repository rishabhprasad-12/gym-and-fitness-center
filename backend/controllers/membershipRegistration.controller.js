import MembershipRegistration from "../models/MembershipRegistration.js";
import MembershipPlan from "../models/MembershipPlan.js";
import User from "../models/User.js";

import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// get all registrations (admin)
export const getAllMembershipRegistrations = asyncHandler(async (req, res) => {
  const registrations = await MembershipRegistration.find()
    .sort({ createdAt: -1 })
    .populate("user", "name email")
    .populate("membershipPlan", "title duration price");

  res
    .status(200)
    .json(new ApiResponse(200, "Fetched successfully", registrations));
});

// get registration by Id (admin)
export const getMembershipRegistrationById = asyncHandler(async (req, res) => {
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
export const getMyMembershipRegistrations = asyncHandler(async (req, res) => {
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

// get current registration
export const getCurrentMembershipRegistration = asyncHandler(
  async (req, res) => {
    const registration = await MembershipRegistration.findOne({
      user: req.user.id,

      membershipStatus: {
        $in: ["Pending", "Active"],
      },
    }).populate("membershipPlan", "title duration price");

    res
      .status(200)
      .json(new ApiResponse(200, "Current membership", registration));
  },
);

// create registration (customer)
export const createMembershipRegistration = asyncHandler(async (req, res) => {
  const { membershipPlan, paymentMethod, notes } = req.body;

  if (!membershipPlan) {
    throw new ApiError(400, "All fields are required");
  }

  // Membership Plan
  const plan = await MembershipPlan.findById(membershipPlan);

  if (!plan) {
    throw new ApiError(404, "Membership plan not found");
  }

  // logged in user
  const user = await User.findById(req.user.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // prevent duplicate active membership
  const existingRegistration = await MembershipRegistration.findOne({
    user: req.user.id,
    membershipStatus: {
      $in: ["Pending", "Active"],
    },
  });

  if (existingRegistration) {
    throw new ApiError(409, "You already have a pending or active membership.");
  }

  // auto date start and expire calculate
  const startDate = new Date();

  const endDate = new Date(startDate);

  switch (plan.durationUnit) {
    case "Day":
      endDate.setDate(endDate.getDate() + plan.durationValue);
      break;

    case "Week":
      endDate.setDate(endDate.getDate() + plan.durationValue * 7);
      break;

    case "Month":
      endDate.setMonth(endDate.getMonth() + plan.durationValue);
      break;

    case "Year":
      endDate.setFullYear(endDate.getFullYear() + plan.durationValue);
      break;

    default:
      throw new ApiError(400, "Invalid membership duration.");
  }

  const registration = await MembershipRegistration.create({
    user: req.user.id,
    membershipPlan,
    startDate,
    endDate,
    paymentMethod,
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
        "Registration successful! \n Welcome to the FitForge Family",
        registration,
      ),
    );
});

// update registration (admin)
export const updateMembershipRegistration = asyncHandler(async (req, res) => {
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
export const deleteMembershipRegistration = asyncHandler(async (req, res) => {
  const registration = await MembershipRegistration.findById(req.params.id);

  if (!registration) {
    throw new ApiError(404, "Membership registration not found");
  }

  await registration.deleteOne();

  res
    .status(200)
    .json(new ApiResponse(200, "Membership registration deleted successfully"));
});

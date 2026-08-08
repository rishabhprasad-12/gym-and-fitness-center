import MembershipPlan from "../models/MembershipPlan.js";
import MembershipRegistration from "../models/MembershipRegistration.js";

import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// get all membership plans
export const getAllMembershipPlans = asyncHandler(async (req, res) => {
  const plans = await MembershipPlan.find().sort({ ceratedAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(200, "Membership plan fetched successfully", plans));
});

// get membership plan by Id
export const getMembershipPlanById = asyncHandler(async (req, res) => {
  const plan = await MembershipPlan.findById(req.params.id);

  if (!plan) {
    throw new ApiError(404, "Membership plan not found!");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "MembershipPlan plan fetched successfully", plan),
    );
});

// create membership plan
export const createMembershipPlan = asyncHandler(async (req, res) => {
  const { title, durationValue, durationUnit, price, features, description, isPopular, isActive } =
    req.body;

  if (!title || !durationValue || !durationUnit || !price) {
    throw new ApiError(400, "Title, duration and price are required");
  }

  const existingPlan = await MembershipPlan.findOne({
    title: title.trim(),
  });

  if (existingPlan) {
    throw new ApiError(409, "Membership plan already exists");
  }

  const membershipPlan = await MembershipPlan.create({
    title,
    durationValue,
    durationUnit,
    price,
    features,
    description,
    isPopular,
    isActive,
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Membership plan created successfully",
        membershipPlan,
      ),
    );
});

// update membership plan 
export const updateMembershipPlan = asyncHandler(async (req, res) => {
  const membershipPlan = await MembershipPlan.findById(req.params.id);

  if (!membershipPlan) {
    throw new ApiError(404, "Membership plan not found");
  }

  Object.assign(membershipPlan, req.body);

  await membershipPlan.save();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Membership plan updated successfully",
        membershipPlan,
      ),
    );
});

// delete membership plan
export const deleteMembershipPlan = asyncHandler(async (req, res) => {
  const membershipPlan = await MembershipPlan.findById(req.params.id);

  if (!membershipPlan) {
    throw new ApiError(404, "Membership plan not found");
  }

  // check whether this plan is already assigned
  const registrationExists = await MembershipRegistration.exists({
    membershipPlan: req.params.id,
  })

  if(registrationExists) {
    throw new ApiError(400, "Cannot delete. Membership plan is already assigned to customer");
  }

  await membershipPlan.deleteOne();

  res
    .status(200)
    .json(new ApiResponse(200, "Membership plan deleted successful"));
});

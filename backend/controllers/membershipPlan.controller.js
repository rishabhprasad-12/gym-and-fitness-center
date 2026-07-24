import MembershipPlan from "../models/MembershipPlans.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getAllMembershipPlans = asyncHandler(async (req, res) => {
  const membershipPlan = await MembershipPlan.find();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "MembershipPlan fetched successfully",
        membershipPlan,
      ),
    );
});

export const getMembershipById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const membershipPlan = await MembershipPlan.findById(id);

  if (!membershipPlan) {
    throw new ApiError(404, "Membership not found!");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "MembershipPlan plan fetched successfully",
        membershipPlan,
      ),
    );
});

export const createMembershipPlan = asyncHandler(async (req, res) => {
  const { name, duration, price, features, description } = req.body;

  if (!name || !duration || !price) {
    throw new ApiError(400, "Name, duration and price are required");
  }

  const membershipPlan = await MembershipPlan.create({
    name,
    duration,
    price,
    features,
    description,
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

export const updateMembershipPlan = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const membershipPlan = await MembershipPlan.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!membershipPlan) {
    throw new ApiError(404, "Membership plan not found");
  }

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

export const deleteMembershipPlan = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const membershipPlan = await MembershipPlan.findByIdAndDelete(id);

  if (!membershipPlan) {
    throw new ApiError(404, "Membership plan not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Membership plan deleted successful"));
});

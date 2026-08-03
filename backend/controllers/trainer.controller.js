import Trainer from "../models/Trainer.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiResponse.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getAllTrainers = asyncHandler(async (req, res) => {
  const trainer = await Trainer.find();

  res
    .status(200)
    .json(new ApiResponse(200, "Trainers fetched successfully", trainer));
});

export const getTrainerById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const trainer = await Trainer.findById(id);

  if(!trainer) {
    throw new ApiError(404, "Trainer not found!");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Trainer fetched successfully", trainer));
});

export const createTrainer = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    specialization,
    experience,
    qualification,
    bio,
    image,
  } = req.body;

  if (!name || !specialization || !experience) {
    throw new ApiError(400, "Name, specialization and experience are required");
  }

  const trainer = await Trainer.create({
    name,
    email,
    phone,
    specialization,
    experience,
    qualification,
    bio,
    image,
  });

  res
    .status(200)
    .json(new ApiResponse(200, "New trainer added successfully", trainer));
});

export const updateTrainer = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const trainer = await Trainer.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!trainer) {
    throw new ApiError(404, "Trainer not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Trainer updated successfully", trainer));
});

export const deleteTrainer = asyncHandler(async (req, res) => {
    const {id} = req.params;

    const trainer = await Trainer.findByIdAndDelete(id);

    if(!trainer) {
        throw new ApiError(404, "Trainer not found");
    }

    res.status(200).json(new ApiResponse(200, "Trainer deleted successfully"))
});

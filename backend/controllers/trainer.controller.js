import Trainer from "../models/Trainer.js";
import ClassSchedule from "../models/ClassSchedule.js";

import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// get all trainers
export const getAllTrainers = asyncHandler(async (req, res) => {
  const trainers = await Trainer.find().sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(200, "Trainers fetched successfully", trainers));
});

// get trainers by Id
export const getTrainerById = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.params.id);

  if (!trainer) {
    throw new ApiError(404, "Trainer not found!");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Trainer fetched successfully", trainer));
});

// create trainer
export const createTrainer = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    specialization,
    experience,
    qualification,
    bio,
  } = req.body;

  const image = req.file;

  if (!name || !specialization || experience === undefined) {
    throw new ApiError(400, "Name, specialization and experience are required");
  }

  // duplicate email
  if (email) {
    const existingTrainer = await Trainer.findOne({
      email: email.toLowerCase(),
    });

    if (existingTrainer) {
      throw new ApiError(409, "Trainer already exists with this email");
    }
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
    .status(201)
    .json(new ApiResponse(201, "Trainer created successfully", trainer));
});

// update trainer
export const updateTrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findByIdAndUpdate(req.params.id);

  if (!trainer) {
    throw new ApiError(404, "Trainer not found");
  }

  // prevent duplicate email
  if (req.body.email && req.body.email !== trainer.email) {
    const existingTrainer = await Trainer.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (existingTrainer) {
      throw new ApiError(409, "Another trainer already uses this email");
    }
  }

  Object.assign(trainer, req.body);

  await trainer.save();

  res
    .status(200)
    .json(new ApiResponse(200, "Trainer updated successfully", trainer));
});

// delete trainer
export const deleteTrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.params.id);

  if (!trainer) {
    throw new ApiError(404, "Trainer not found");
  }

  // dependency check 
  const classExists = await ClassSchedule.exists({
    trainer: trainer._id
  });

  if(classExists) {
    throw new ApiError(400, "Cannot delete trainer. Trainer is assigned to a class schedule.")
  }

  await trainer.deleteOne();
  
  res.status(200).json(new ApiResponse(200, "Trainer deleted successfully"));
});

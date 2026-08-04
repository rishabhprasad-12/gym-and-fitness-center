import ClassSchedule from "../models/ClassSchedule.js";
import Trainer from "../models/Trainer.js"

import asyncHandler from "../middleware/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const getAllClasses = asyncHandler(async (req, res) => {
  const classSchedules = await ClassSchedule.find().populate(
    "trainer",
    "name specialization image",
  );

  res
    .status(200)
    .json(new ApiResponse(200, "Classes fetched successfully", classSchedules));
});

export const getClassesById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const classSchedule = await ClassSchedule.findById(id).populate("trainer", "name specialization image");

  if (!classSchedule) {
    throw new ApiError(404, "This class is not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Class fetched successfully", classSchedule));
});

export const createClassSchedule = asyncHandler(async (req, res) => {
  const {
    className,
    trainer,
    dayOfWeek,
    startTime,
    endTime,
    duration,
    capacity,
    location,
    description,
  } = req.body;

  if (
    !className ||
    !trainer ||
    !dayOfWeek ||
    !startTime ||
    !endTime ||
    !capacity
  ) {
    throw new ApiError(
      400,
      "Fields are required",
    );
  }

  const trainerExists = await Trainer.findById(trainer);

  if (!trainerExists) {
    throw new ApiError(404, "Trainer not found");
  }

  const classSchedule = await ClassSchedule.create({
    className,
    trainer,
    dayOfWeek,
    startTime,
    endTime,
    duration,
    capacity,
    location,
    description,
  });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        "Class schedule created successfully",
        classSchedule,
      ),
    );
});

export const updateClassSchedule = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const classSchedule = await ClassSchedule.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!classSchedule) {
    throw new ApiError(404, "Class schedule not found!");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Class schedule updated successfully",
        classSchedule,
      ),
    );
});

export const deleteClassSchedule = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const classSchedule = await ClassSchedule.findByIdAndDelete(id);

  if (!classSchedule) {
    throw new ApiError(404, "Class schedule not found!");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Class schedule deleted successfully"));
});

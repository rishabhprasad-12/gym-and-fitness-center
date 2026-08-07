import ClassSchedule from "../models/ClassSchedule.js";
import Trainer from "../models/Trainer.js";

import asyncHandler from "../middleware/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

// get all classes
export const getAllClasses = asyncHandler(async (req, res) => {
  const classes = await ClassSchedule.find()
    .populate("trainer", "name specialization image")
    .sort({ day: 1, startTime: 1 });

  res
    .status(200)
    .json(new ApiResponse(200, "Classes fetched successfully", classes));
});

// get classes by Id
export const getClassesById = asyncHandler(async (req, res) => {
  const classSchedule = await ClassSchedule.findById(req.params.id).populate(
    "trainer",
    "name specialization image",
  );

  if (!classSchedule) {
    throw new ApiError(404, "Class schedule not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Class schedule fetched successfully", classSchedule));
});


// create class
export const createClassSchedule = asyncHandler(async (req, res) => {
  const {
    className,
    trainer,
    day,
    startTime,
    duration,
    capacity,
    location,
    description,
  } = req.body;

  if (
    !className ||
    !trainer ||
    !day ||
    !startTime ||
    !capacity
  ) {
    throw new ApiError(400, "All required fields must be provided");
  }

  const trainerExists = await Trainer.findById(trainer);

  if (!trainerExists) {
    throw new ApiError(404, "Trainer not found");
  }

  const classSchedule = await ClassSchedule.create({
    className,
    trainer,
    day,
    startTime,
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

// update class
export const updateClassSchedule = asyncHandler(async (req, res) => {
  const classSchedule = await ClassSchedule.findById(req.params.id);

  if (!classSchedule) {
    throw new ApiError(404, "Class schedule not found!");
  }

  // validate trainer if changed
  if(req.body.trainer && req.body.trainer !== classSchedule.trainer.toString()) {
    const trainerExists = await Trainer.findById(req.body.trainer);

    if(!trainerExists) {
      throw new ApiError(404, "Trainer not found");
    }
  }

  Object.assign(classSchedule, req.body);

  await classSchedule.save();

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

// delete class
export const deleteClassSchedule = asyncHandler(async (req, res) => {
  const classSchedule = await ClassSchedule.findById(req.params.id);

  if (!classSchedule) {
    throw new ApiError(404, "Class schedule not found!");
  }

  await classSchedule.deleteOne();

  res
    .status(200)
    .json(new ApiResponse(200, "Class schedule deleted successfully"));
});

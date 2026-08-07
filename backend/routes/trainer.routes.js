import express from "express";
import upload from "../middleware/multer.middleware.js";

import {
  createTrainer,
  deleteTrainer,
  getAllTrainers,
  getTrainerById,
  updateTrainer,
} from "../controllers/trainer.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(getAllTrainers)
  .post(
    authMiddleware,
    authorize("admin"),
    upload.single("image"),
    createTrainer,
  );

router
  .route("/:id")
  .get(getTrainerById)
  .put(
    authMiddleware,
    authorize("admin"),
    upload.single("image"),
    updateTrainer,
  )
  .delete(authMiddleware, authorize("admin"), deleteTrainer);

export default router;

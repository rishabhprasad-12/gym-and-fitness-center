import express from "express";

import {
  createClassSchedule,
  deleteClassSchedule,
  getAllClasses,
  getClassesById,
  updateClassSchedule,
} from "../controllers/classSchedule.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(getAllClasses)
  .post(authMiddleware, authorize("admin"), createClassSchedule);
router
  .route("/:id")
  .get(getClassesById)
  .put(authMiddleware, authorize("admin"), updateClassSchedule)
  .delete(authMiddleware, authorize("admin"), deleteClassSchedule);

export default router;

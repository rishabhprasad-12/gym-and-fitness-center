import express from "express";

import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquires,
  updateEnquiry,
} from "../controllers/enquiry.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(authMiddleware, authorize("admin"), getAllEnquires)
  .post(createEnquiry);
router
  .route("/:id")
  .get(authMiddleware, authorize("admin"), createEnquiry)
  .put(authMiddleware, authorize("admin"), updateEnquiry)
  .delete(authMiddleware, authorize("admin"), deleteEnquiry);

export default router;

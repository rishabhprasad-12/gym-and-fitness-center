import express from "express";
import {
  createRegistration,
  deleteRegistration,
  getAllRegistrations,
  getMyRegistrations,
  getRegistrationById,
  updateRegistration,
} from "../controllers/membershipRegistration.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(authMiddleware, authorize("admin"), getAllRegistrations)
  .get(authMiddleware, authorize("customer"), getMyRegistrations)
  .post(authMiddleware, authorize("customer"), createRegistration);

router
  .route("/:id")
  .get(authMiddleware, authorize("admin"), getRegistrationById)
  .put(authMiddleware, authorize("admin"), updateRegistration)
  .delete(authMiddleware, authorize("admin"), deleteRegistration);

export default router;

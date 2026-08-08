import express from "express";
import {
  createMembershipRegistration,
  deleteMembershipRegistration,
  getAllMembershipRegistrations,
  getCurrentMembershipRegistration,
  getMyMembershipRegistrations,
  getMembershipRegistrationById,
  updateMembershipRegistration,
} from "../controllers/membershipRegistration.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(authMiddleware, authorize("admin"), getAllMembershipRegistrations)
  .post(authMiddleware, authorize("customer"), createMembershipRegistration);

router
  .route("/my")
  .get(authMiddleware, authorize("customer"), getMyMembershipRegistrations);

router
  .route("/current")
  .get(authMiddleware, authorize("customer"), getCurrentMembershipRegistration);

router
  .route("/:id")
  .get(authMiddleware, authorize("admin"), getMembershipRegistrationById)
  .put(authMiddleware, authorize("admin"), updateMembershipRegistration)
  .delete(authMiddleware, authorize("admin"), deleteMembershipRegistration);

export default router;

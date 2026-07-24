import express from "express";
import {
  createMembershipPlan,
  deleteMembershipPlan,
  getAllMembershipPlans,
  getMembershipById,
  updateMembershipPlan,
} from "../controllers/membershipPlan.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(getAllMembershipPlans)
  .post(authMiddleware, authorize("admin"), createMembershipPlan);
router
  .route("/:id")
  .get(getMembershipById)
  .put(authMiddleware, authorize("admin"), updateMembershipPlan)
  .delete(authMiddleware, authorize("admin"), deleteMembershipPlan);

export default router;

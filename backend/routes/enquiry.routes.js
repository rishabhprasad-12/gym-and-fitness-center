import express from "express";

import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquires,
  getEnquiryById,
  getMyEnquiries,
  updateEnquiry,
  createCustomerEnquiry,
} from "../controllers/enquiry.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

router.route("/").get(getAllEnquires).post(createEnquiry);
router
  .route("/my")
  .get(authMiddleware, authorize("customer"), getMyEnquiries)
  .post(authMiddleware, authorize("customer"), createCustomerEnquiry);
router
  .route("/:id")
  .get(authMiddleware, authorize("admin"), getEnquiryById)
  .put(authMiddleware, authorize("admin"), updateEnquiry)
  .delete(authMiddleware, authorize("admin"), deleteEnquiry);

export default router;

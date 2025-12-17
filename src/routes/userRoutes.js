import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = Router();

// Get user profile
router.get("/profile", auth, getUserProfile);

// Update user profile
router.put("/profile", auth, updateUserProfile);

export default router;

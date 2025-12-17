import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  saveStudySession,
  getTodayStudy,
  getWeeklyStudy,
} from "../controllers/studyController.js";

const router = Router();

// Save session
router.post("/", auth, saveStudySession);

// Get today's study stats
router.get("/today", auth, getTodayStudy);

// Get weekly study stats
router.get("/week", auth, getWeeklyStudy);

export default router;

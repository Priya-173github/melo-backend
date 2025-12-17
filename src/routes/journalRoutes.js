import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal,
} from "../controllers/journalController.js";

const router = Router();

// Create journal entry
router.post("/", auth, createJournal);

// Get all journal entries
router.get("/", auth, getJournals);

// Update journal entry
router.put("/:id", auth, updateJournal);

// Delete journal entry
router.delete("/:id", auth, deleteJournal);

export default router;

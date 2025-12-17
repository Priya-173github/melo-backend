import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = Router();

// Create todo
router.post("/", auth, createTodo);

// Get all todos
router.get("/", auth, getTodos);

// Update todo
router.put("/:id", auth, updateTodo);

// Delete todo
router.delete("/:id", auth, deleteTodo);

export default router;

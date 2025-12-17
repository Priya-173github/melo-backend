import express from "express";
import cors from "cors";

// ✅ Import routes (we will create these next)
import todoRoutes from "./routes/todoRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import studyRoutes from "./routes/studyRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/todos", todoRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/study", studyRoutes);
app.use("/api/user", userRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Melo Backend API is Running");
});

export default app;

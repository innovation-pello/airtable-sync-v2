import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// API route example
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Serve frontend files in production
if (process.env.NODE_ENV === "production") {
  // Serve static files
  app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

  // Catch-all route for frontend
  app.get("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      // Avoid overriding API routes
      res.status(404).json({ error: "API route not found" });
    } else {
      // Serve the frontend
      res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
    }
  });
}

// Export the app as a Vercel-compatible handler
export default app;
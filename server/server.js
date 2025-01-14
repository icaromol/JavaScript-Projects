import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import projectRoutes from "./routes/projectRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

console.log("Starting server...");

// Register /projects route first
app.use("/projects", projectRoutes);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res) => {
  console.log(`Unhandled route accessed: ${req.originalUrl}`);
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

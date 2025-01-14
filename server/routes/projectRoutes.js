import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Exclude static file requests (e.g., .css, .js)
router.get("/:name", (req, res, next) => {
  const projectName = req.params.name;

  // If the request is for a file, pass it to the next middleware
  if (projectName.includes(".")) {
    return next();
  }

  const templatePath = path.join(__dirname, "../../public/template/index.html");

  console.log(`Accessing project: ${projectName}`);
  console.log(`Serving template from: ${templatePath}`);

  res.sendFile(templatePath, {}, (err) => {
    if (err) {
      console.error("Error serving template:", err);
      res.status(404).send("Template not found");
    }
  });
});

export default router;

import express from "express";
import {
  addJob,
  getJobById,
  updateJob,
  deleteJob,
  getFilteredJob,
} from "../controller/jobController.js";
import verifyToken from "../middleware/verifyToken.js";
import validateUpdateJob from "../middleware/validateUpdateJob.js";

const router = express.Router();

router.get("/", getFilteredJob());
router.get("/:id", getJobById());
router.post("/add", verifyToken, addJob());
router.post("/update/:id", verifyToken, validateUpdateJob, updateJob());
router.delete("/delete/:id", verifyToken, deleteJob());

export default router;

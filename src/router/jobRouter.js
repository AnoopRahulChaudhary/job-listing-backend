import express from "express";
import { addJob, getJobById } from "../controller/jobController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/:id', getJobById());
router.post("/add", verifyToken, addJob());

export default router;

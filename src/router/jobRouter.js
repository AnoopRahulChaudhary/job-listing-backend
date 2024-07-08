import express from "express";
import { addJob } from "../controller/jobController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/add", verifyToken, addJob());

export default router;

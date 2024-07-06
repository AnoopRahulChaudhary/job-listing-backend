import express from "express";
import { registerUser } from "../controller/userController.js";
import validateUserRegistration from "../middleware/validateUserRegistration.js";

const router = express.Router();

router.post("/register", validateUserRegistration(), registerUser());

export default router;

import express from "express";
import { registerUser, loginUser } from "../controller/userController.js";
import validateUserRegistration from "../middleware/validateUserRegistration.js";
import validateUserLogin from "../middleware/validateUserLogin.js";

const router = express.Router();

router.post("/register", validateUserRegistration(), registerUser());

router.post("/login", validateUserLogin(), loginUser());

export default router;

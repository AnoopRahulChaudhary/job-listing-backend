import User from "../model/User.js";
import bcrypt from "bcrypt";
import { encodeSecret, matchSecret } from "../util/secretManagement.js";
import UserNotFoundError from "../error/userNotFound.js";
import InvalidCredentialsError from "../error/invalidCredential.js";

function registerUser() {
  return async (req, res, next) => {
    try {
      const encodedSecret = await encodeSecret(req.body.password);
      const user = new User({ ...req.body, password: encodedSecret });

      await user.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      next(error);
    }
  };
}

function loginUser() {
  return async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw new UserNotFoundError();
      }

      const isSecretMatch = await matchSecret(password, user.password);
      if (!isSecretMatch) {
        throw new InvalidCredentialsError();
      }

      res.status(200).json({
        message: "login successful",
      });
    } catch (error) {
      next(error);
    }
  };
}

export { registerUser, loginUser };

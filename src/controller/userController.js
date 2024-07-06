import User from "../model/User.js";

function registerUser() {
  return async (req, res, next) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      next(error);
    }
  };
}

export { registerUser };

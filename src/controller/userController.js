import User from "../model/User.js";

function registerUser() {
  return async (req, res, next) => {
    try {
      const user = new User(req.body);
      const existingUser = await User.findOne({ email: user.email });
      if (existingUser) {
        const error = new Error(
          "User already exist with same email, try with different email."
        );
        error.statusCode = 409;
        throw error;
      }

      await user.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      next(error);
    }
  };
}

export { registerUser };

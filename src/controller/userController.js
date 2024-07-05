import User from "../model/User.js";

function registerUser() {
  return async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send("user not registered due to some internal server issue.");
    }
  };
}

export { registerUser };

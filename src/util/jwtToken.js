import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign({ userID: user._id }, JWT_SECRET);
}

export { generateToken };

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const user = mongoose.model("User", userSchema);

export default user;

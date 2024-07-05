import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./src/router/userRouter.js";

const app = express();

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.json({
    message: "server running",
    time: new Date(),
  });
});

app.use("/user", userRouter);

app.listen(process.env.PORT, async function () {
  try {
    await mongoose.connect(process.env.mongo_uri);
    console.log(`Server started on port ${process.env.PORT}`);
  } catch (error) {
    console.error(`Server not started.`, error);
  }
});

import Job from "../model/Job.js";
import mongoose from "mongoose";

function getJobById() {
  return async (req, res, next) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        throw new JobNotFoundError(`Job not found.`);
      }

      res.status(200).json({ ...job });
    } catch (error) {
      next(error);
    }
  };
}

function addJob() {
  return async (req, res, next) => {
    try {
      const job = new Job({
        ...req.body,
        refUserId: req.userId,
      });
      console.debug(`new job to add - ${job}`);
      await job.save();

      res.status(201).json({
        message: "job created",
        jobId: job._id,
      });
    } catch (error) {
      next(error);
    }
  };
}

export { addJob, getJobById };

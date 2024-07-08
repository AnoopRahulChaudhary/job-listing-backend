import Job from "../model/Job.js";

function addJob() {
  return async (req, res, next) => {
    try {
      const job = new Job({ ...req.body, refUserId: req.userId });
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

export { addJob };

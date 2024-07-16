import Job from "../model/Job.js";
import JobNotFoundError from "../error/jobNotFound.js";

function getFilteredJob() {
  return async (req, res, next) => {
    try {
      const { title, skills } = req.query;
      const filter = {
        jobPosition: title || { $exists: true },
        skills: skills ? { $all: JSON.parse(skills) } : { $exists: true },
      };
      console.debug(`job filter : ${JSON.stringify(filter)}`);
      const jobs = await Job.find(filter);

      res.status(200).json({
        message: "filtered job api working",
        jobs: jobs,
      });
    } catch (error) {
      next(error);
    }
  };
}

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

function updateJob() {
  return async (req, res, next) => {
    try {
      const jobId = req.params.id;
      const jobDetailsToUpdate = {
        ...req.body,
        refUserId: req.userId,
      };
      console.debug(
        `jobDetailsToUpdate : ${JSON.stringify(jobDetailsToUpdate)}`
      );
      const updatedJob = await Job.findByIdAndUpdate(jobId, jobDetailsToUpdate);
      if (!updatedJob) {
        throw new JobNotFoundError(`Job not found, invalid id`);
      }

      res.status(200).json({
        message: "job updated successfully",
        job: updateJob,
      });
    } catch (error) {
      next(error);
    }
  };
}

function deleteJob() {
  return async (req, res, next) => {
    try {
      const jobId = req.params.id;
      const deletedJob = await Job.findByIdAndDelete(jobId);
      if (!deletedJob) {
        throw new JobNotFoundError(`Job not found, invalid id.`);
      }

      res.status(200).json({
        message: "Job deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  };
}

export { addJob, getJobById, updateJob, deleteJob, getFilteredJob };

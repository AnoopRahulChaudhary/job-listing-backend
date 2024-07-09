import URLParamaeterMissing from "../error/urlParameterMissing.js";

function validateUpdateJob(req, res, next) {
  try {
    const jobId = req.params.id;
    if (!jobId) {
      throw new URLParamaeterMissing(`Job id can't empty.`);
    }

    next();
  } catch (error) {
    next(error);
  }
}

export default validateUpdateJob;

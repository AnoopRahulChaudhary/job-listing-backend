function validateUpdateJob(req, res, next) {
  try {
    //todo - validate the fields which will be updated.
    next();
  } catch (error) {
    next(error);
  }
}

export default validateUpdateJob;

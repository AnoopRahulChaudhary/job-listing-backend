import EmptyRequestFieldError from "../error/emptyRequestField.js";

function checkForEmptyFields(req) {
  const {
    companyName,
    logoUrl,
    jobPosition,
    monthlySalary,
    jobType,
    isRemote,
    location,
    jobDescription,
    aboutCompany,
    skills,
  } = req.body;

  if (!companyName) {
    throw new EmptyRequestFieldError(`companyName can't empty.`);
  }

  if (!logoUrl) {
    throw new EmptyRequestFieldError(`logoUrl can't empty.`);
  }

  if (!jobPosition) {
    throw new EmptyRequestFieldError(`jobPosition can't empty.`);
  }

  if (!monthlySalary) {
    throw new EmptyRequestFieldError(`jobPosition can't empty.`);
  }

  if (!jobType) {
    throw new EmptyRequestFieldError(`jobType can't empty.`);
  }

  if (typeof isRemote == undefined) {
    throw new EmptyRequestFieldError(`isRemote can't empty.`);
  }

  if (!location) {
    throw new EmptyRequestFieldError(`location can't empty.`);
  }

  if (!jobDescription) {
    throw new EmptyRequestFieldError(`jobDescription can't empty.`);
  }

  if (!aboutCompany) {
    throw new EmptyRequestFieldError(`aboutCompany can't empty.`);
  }

  if (!skills) {
    throw new EmptyRequestFieldError(`skills can't empty.`);
  }
}

function validateNewJob(req, res, next) {
  try {
    checkForEmptyFields(req);
  } catch (error) {}
}

export default validateNewJob;

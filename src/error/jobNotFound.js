class JobNotFoundError extends Error {
  statusCode = 409;

  constructor(message) {
    super(message);
  }
}

export default JobNotFoundError;

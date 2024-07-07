class InvalidCredentialsError extends Error {
  statusCode = 400;

  constructor(message) {
    super("Invalid Credentials.");
  }
}

export default InvalidCredentialsError;

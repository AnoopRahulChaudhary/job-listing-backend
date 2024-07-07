class UserNotFoundError extends Error {
  statusCode = 404;

  constructor(message) {
    super("User not found");
  }
}

export default UserNotFoundError;

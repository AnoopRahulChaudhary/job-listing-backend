function createEmptyFieldError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function checkForEmptyFields(req) {
  const { email, password } = req.body;

  if (!email) {
    throw createEmptyFieldError(`email can't empty.`);
  }

  if (!password) {
    throw createEmptyFieldError(`password can't empty.`);
  }
}

function validateUserLogin() {
  return (req, res, next) => {
    try {
      checkForEmptyFields(req);
      next();
    } catch (error) {
      next(error);
    }
  };
}

export default validateUserLogin;

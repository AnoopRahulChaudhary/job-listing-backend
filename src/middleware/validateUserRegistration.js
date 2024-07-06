import User from "../model/User.js";

function createEmptyFieldError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function checkForEmptyFields(req) {
  const { name, email, mobile, password } = req.body;

  if (!name) {
    throw createEmptyFieldError(`name can't empty`);
  }

  if (!email) {
    throw createEmptyFieldError(`email can't empty`);
  }

  if (!mobile) {
    throw createEmptyFieldError(`mobile can't empty`);
  }

  if (!password) {
    throw createEmptyFieldError(`password can't empty`);
  }
}

async function checkForExistingUser(userEmail) {
  const existingUser = await User.findOne({ email: userEmail });
  if (existingUser) {
    const error = new Error(
      "User already exist with same email, try with different email."
    );
    error.statusCode = 409;
    throw error;
  }
}

function validateUserRegistration() {
  return async (req, res, next) => {
    try {
      const { name, email, mobile, password } = req.body;
      checkForEmptyFields(req);
      await checkForExistingUser(req.body.email);
      next();
    } catch (error) {
      next(error);
    }
  };
}

export default validateUserRegistration;

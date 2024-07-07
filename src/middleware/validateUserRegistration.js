import EmptyRequestFieldError from "../error/emptyRequestField.js";
import UserExistBeforeRegistrationError from "../error/userExistBeforeRegistration.js";
import User from "../model/User.js";

function checkForEmptyFields(req) {
  const { name, email, mobile, password } = req.body;

  if (!name) {
    throw new EmptyRequestFieldError(`name can't empty`);
  }

  if (!email) {
    throw new EmptyRequestFieldError(`email can't empty`);
  }

  if (!mobile) {
    throw new EmptyRequestFieldError(`mobile can't empty`);
  }

  if (!password) {
    throw new EmptyRequestFieldError(`password can't empty`);
  }
}

async function checkForExistingUser(userEmail) {
  const existingUser = await User.findOne({ email: userEmail });
  if (existingUser) {
    throw new UserExistBeforeRegistrationError(
      "User already exist with same email, try with different email."
    );
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

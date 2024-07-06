const handleError = (error, req, res, next) => {
  console.error(error);

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server error";

  res.status(statusCode).json({
    status: "fail",
    message: message,
  });
};

export { handleError };

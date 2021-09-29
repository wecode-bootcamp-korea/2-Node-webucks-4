const errorLogger = (err, req, res, next) => {
  console.log("PATH: ", req.path);
  console.error("\x1b[31m", err);
  next(err);
};

const errorResponder = (err, req, res, next) => {
  const { status, message } = err;
  res
    .status(status || 500)
    .json({ message: message || "UNHANDELD_SERVER_ERROR" });
};

const invalidPathHandler = (req, res, next) => {
  res.redirect("/not-found");
};

export { errorLogger, errorResponder, invalidPathHandler };

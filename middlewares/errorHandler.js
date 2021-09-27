const errorLogger = (err, req, res, next) => {
  console.log("PATH: ", req.path);
  console.error("\x1b[31m", err);
  next(err);
};

const errorResponder = (err, req, res, next) => {
  const { status, message } = err;
  res.status(status).json({ message });
};

const invalidPathHandler = (req, res, next) => {
  res.redirect("/not-found");
};

export { errorLogger, errorResponder, invalidPathHandler };

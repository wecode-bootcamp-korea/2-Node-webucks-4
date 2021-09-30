class NotFoundError extends Error {
  constructor() {
    super();
    this.status = 404;
    this.message = "NOT_FOUND";
    this.content = "not found URL or items";
  }
}

class RequestKeyError extends Error {
  constructor() {
    super();
    this.status = 400;
    this.message = "REQUEST_PARAMS_EMPTY";
    this.content = "some request params are undefined";
  }
}

class AuthError extends Error {
  constructor() {
    super();
    this.status = 401;
    this.message = "UNAUTHORIZED_USER";
  }
}

export { NotFoundError, RequestKeyError, AuthError };

// 회원가입 예외 및 에러
class RegisterFailed extends Error {
  constructor() {
    super();
    this.message = "USER_REGISTER_FAILED";

    if (this instanceof EmailDuplicateError) {
      this.status = 400;
      this.content = "inputted email already exist";
    }
    if (this instanceof BcryptHashError) {
      this.status = 500;
      this.content = "failed to hash password";
    }
  }
}

class EmailDuplicateError extends RegisterFailed {}
class BcryptHashError extends RegisterFailed {}

// 로그인 예외 및 에러
class LoginFailed extends Error {
  constructor() {
    super();
    this.status = 401;
    this.message = "USER_LOGIN_FAILED";

    if (this instanceof NonExistentEmailError)
      this.content = "non-existent email";
    if (this instanceof InvaildPasswordError)
      this.content = "invaild password input";
    if (this instanceof BcryptCompareError) {
      this.status = 500;
      this.content = "failed to compare passwords";
    }
    if (this instanceof TokenError) {
      this.status = 500;
      this.content = "failed to make a token";
    }
  }
}

class NonExistentEmailError extends LoginFailed {}
class InvaildPasswordError extends LoginFailed {}
class BcryptCompareError extends LoginFailed {}
class TokenError extends LoginFailed {}

export {
  RegisterFailed,
  EmailDuplicateError,
  BcryptHashError,
  LoginFailed,
  NonExistentEmailError,
  BcryptCompareError,
  InvaildPasswordError,
  TokenError,
};

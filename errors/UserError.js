// 회원가입 예외 및 에러
class RegisterFailed extends Error {
  constructor() {
    super();

    if (this instanceof EmailDuplicateError)
      this.content = "inputted email already exist";
    if (this instanceof BcryptHashError)
      this.content = "failed to hash password";

    this.status = 500;
    this.message = "회원가입 실패";
  }
}

class EmailDuplicateError extends RegisterFailed {}
class BcryptHashError extends RegisterFailed {}

// 로그인 예외 및 에러
class LoginFailed extends Error {
  constructor() {
    super();

    if (this instanceof NonExistentEmailError)
      this.content = "non-existent email";
    if (this instanceof BcryptCompareError)
      this.content = "failed to compare passwords";
    if (this instanceof InvaildPasswordError)
      this.content = "invaild password input";
    if (this instanceof TokenError) this.content = "failed to make a token";

    this.status = 401;
    this.message = "로그인 실패";
  }
}

class NonExistentEmailError extends LoginFailed {}
class BcryptCompareError extends LoginFailed {}
class InvaildPasswordError extends LoginFailed {}
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

class LoginFailedError extends Error {
  constructor() {
    super();
    this.status = 401;
    this.message = "로그인 실패";
  }
}

class RegisterFailedError extends Error {
  constructor() {
    super();
    this.status = 500;
    this.message = "회원가입 실패";
  }
}

export { LoginFailedError, RegisterFailedError };

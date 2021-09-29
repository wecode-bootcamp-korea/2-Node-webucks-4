// 아직 미사용

class ApiErrors {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new ApiErrors(400, msg);
  }

  static internal(msg) {
    return new ApiErrors(500, msg);
  }
}

export default ApiErrors;

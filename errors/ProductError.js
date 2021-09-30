class LikeFlagError extends Error {
  constructor() {
    super();
    this.status = 500;
    this.message = "FLAG_PRODUCT_LIKE_FAILED";
    this.content =
      "change flag of like data failed. check the Prisma Error logs.";

    if (this instanceof InvalidProductError) {
      this.status = 400;
      this.message = "INVALID_PRODUCT_REQUEST";
      this.content = "invalid productId in request body";
    }
  }
}

class InvalidProductError extends LikeFlagError {}

export { LikeFlagError, InvalidProductError };

class LikeFlagError extends Error {
  constructor() {
    super();
    this.status = 500;
    this.message = "FLAG_PRODUCT_LIKE_FAILED";
    this.content =
      "change flag of like data failed. check the Prisma Error logs.";
  }
}

export { LikeFlagError };

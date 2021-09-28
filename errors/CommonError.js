class ItemNotFoundError extends Error {
  constructor() {
    super();
    this.status = 404;
    this.message = "ITEM_NOT_FOUND";
    this.content = "cannot found an item or items";
  }
}

export { ItemNotFoundError };

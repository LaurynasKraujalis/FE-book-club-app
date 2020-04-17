export const storeNewBook = (id, author, title, imageUrl) => ({
  type: "STORE_NEW_BOOK",
  payload: { id, author, title, imageUrl },
});

export const clearNewBook = () => ({
  type: "CLEAR_NEW_BOOK",
});

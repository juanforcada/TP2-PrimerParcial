import { JsonHandler } from "../utils/JsonManager.js";
import { config } from "../config/config.js";

export const BookRepository = {
  deleteOne: async (id) => {
    const books = (await BookRepository.getJsonFile()) || [];
    if (!Array.isArray(books)) return false;
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return false;
    books.splice(index, 1);
    await JsonHandler.write(books, config.DB_BOOK_PATH);
    return true;
  },
  updateBook: async (id, bookData) => {
    const books = (await BookRepository.getJsonFile()) || [];
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return null;
    books[index] = { ...books[index], ...bookData, id };
    await JsonHandler.write(books, config.DB_BOOK_PATH);
    return books[index];
  },
  createOne: async (book) => {
    if (!book) return null;

    const books = (await BookRepository.getJsonFile()) || [];
    books.push(book);

    await JsonHandler.write(books, config.DB_BOOK_PATH);
    return book;
  },
  getJsonFile: async () => {
    return await JsonHandler.read(config.DB_BOOK_PATH);
  },
  getById: async (id) => {
    const books = await BookRepository.getJsonFile();
    return books.find((book) => book.id === id) || null;
  },
};

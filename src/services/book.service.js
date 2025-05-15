import { BookRepository } from "../repository/book.repository.js";

export const BookService = {
  deleteById: async (id) => {
    const book = BookService.getById(id);
    if (!book) return null;
    return await BookRepository.deleteOne(book);
  },
  deleteOne: async (id) => {
    return await BookRepository.deleteOne(id);
  },
  updateBook: async (id, bookData) => {
    return await BookRepository.updateBook(id, bookData);
  },
  createOne: async (book) => {
    if (!book) throw new Error("No data");
    const dataBook = {
      id: crypto.randomUUID(),
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      publishedDate: book.publishedDate,
      availableCopies: book.availableCopies,
    };
    await BookRepository.createOne(dataBook);
    return dataBook;
  },
  getJsonFile: async () => {
    const jsonFile = await BookRepository.getJsonFile();
    if (!jsonFile) return null;
    return jsonFile;
  },
  getById: async (id) => {
    return await BookRepository.getById(id);
  },
};

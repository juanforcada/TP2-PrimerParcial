import { BookService } from "../services/book.service.js";

export const BookController = {
  deleteOne: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await BookService.deleteOne(id);
      if (!deleted) {
        return res.status(404).json({
          payload: null,
          message: "No Book",
          ok: false,
        });
      }
      res.status(200).json({
        message: "Libro eliminado correctamente",
        ok: true,
      });
    } catch (error) {
      res.status(400).json({
        payload: null,
        message: error.message,
        ok: false,
      });
    }
  },
  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      if (!BookService.getById(id)) {
        res.status(404).json({
          payload: null,
          message: "No Book Found",
          ok: false,
        });
        return;
      }
      const updatedBook = await BookService.updateBook(id, req.body);
      if (!updatedBook) {
        res.status(404).json({
          payload: null,
          message: "No Book",
          ok: false,
        });
        return;
      }
      res.status(200).json({
        payload: updatedBook,
        message: "Libro actualizado correctamente",
        ok: true,
      });
    } catch (error) {
      res.status(400).json({
        payload: null,
        message: error.message,
        ok: false,
      });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await BookService.getById(id);
      if (!book) {
        return res.status(404).json({
          payload: null,
          message: "No Book",
          ok: false,
        });
      }
      res.status(200).json({
        payload: book,
        message: "Success",
        ok: true,
      });
    } catch (error) {
      res.status(500).json({
        payload: null,
        message: error.message,
        ok: false,
      });
    }
  },
  createOne: async (req, res) => {
    try {
      const book = await BookService.createOne(req.body);
      res.status(201).json({
        payload: book,
        message: "Libro creado correctamente",
        ok: true,
      });
    } catch (error) {
      res.status(400).json({
        payload: null,
        message: error.message,
        ok: false,
      });
    }
  },
  getJsonFile: async (req, res) => {
    const jsonFile = await BookService.getJsonFile();
    if (!jsonFile) {
      res.status(404).json({
        payload: null,
        message: "No Books",
        ok: false,
      });
      return;
    }
    res.status(200).json({
      json_file: jsonFile,
      message: "Success",
      ok: true,
    });
    return;
  },
};

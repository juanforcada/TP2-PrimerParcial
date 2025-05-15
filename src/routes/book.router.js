import { Router } from "express";
import { BookController } from "../controller/book.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const bookRouter = Router();

bookRouter.get("/json_file", authMiddleware, BookController.getJsonFile);
bookRouter.post("/book", authMiddleware, BookController.createOne);
bookRouter.get("/book/:id", authMiddleware, BookController.getById);
bookRouter.put("/book/:id", authMiddleware, BookController.updateBook);
bookRouter.delete("/book/:id", authMiddleware, BookController.deleteOne);

export { bookRouter };

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { config } from "./config/config.js";
import { bookRouter } from "./routes/book.router.js";
import { apiRouter } from "./routes/api.router.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
const DISPLAY_MSG = `Serving at http://${config.HOST}:${config.PORT}`;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", bookRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.json({ status: 200, msg: "Hola Mundo" });
});

app.listen(config.PORT, () => {
  console.log(DISPLAY_MSG);
});

app.use(errorMiddleware);

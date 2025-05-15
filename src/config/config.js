import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 3003,
  HOST: process.env.HOST || "127.0.0.1",
  DB_BOOK_PATH: process.env.DB_BOOK_PATH || "./src/db/book.db.json",
  EXTERNAL_API:
    process.env.EXTERNAL_API ||
    "https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv",
  DB_API_PATH: process.env.DB_API_PATH || "./src/db/external-data.csv",
};
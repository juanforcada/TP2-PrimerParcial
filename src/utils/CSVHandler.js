import fs from "node:fs/promises";

export const CSVHandler = {
  async write(dbPath, data) {
    if (!dbPath || typeof data !== "string")
      throw new Error("Error con el dbpath o el tipo de datos");
    await fs.writeFile(dbPath, data, { encoding: "utf8" });
  },
};

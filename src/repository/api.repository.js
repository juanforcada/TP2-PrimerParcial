import { CSVHandler } from "../utils/CSVHandler.js";
import { config } from "../config/config.js";

export const ApiRepository = {
  storeExternalData: async (res) => {
    try {
      const csvText = await res.text();
      await CSVHandler.write(config.DB_API_PATH, csvText);
      return true;
    } catch (error) {
      console.error("Error al guardar el archivo CSV:", error);
      return false;
    }
  },
};

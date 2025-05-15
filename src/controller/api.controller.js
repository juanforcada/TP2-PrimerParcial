import { ApiService } from "../services/api.service.js";

export const ApiController = {
  storeExternalData: async (req, res) => {
    try {
      const externalData = await ApiService.storeExternalData();
      if (externalData) {
        res.status(200).json({
          message: "Archivo CSV guardado correctamente",
          ok: true,
        });
        return;
      }
      res.status(404).json({
        payload: null,
        message: "No se pudo guardar el archivo CSV",
        ok: false,
      });
    } catch (error) {
      res.status(500).json({
        payload: null,
        message: "Error interno del servidor",
        ok: false,
        error: error.message,
      });
    }
  },
};

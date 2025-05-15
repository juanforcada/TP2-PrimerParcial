import { ApiRepository } from "../repository/api.repository.js";
import { config } from "../config/config.js";

export const ApiService = {
  storeExternalData: async () => {
    const res = await fetch(config.EXTERNAL_API, {
      method: "get",
      headers: {
        "content-type": "text/csv;charset=UTF-8",
      },
    });
    return await ApiRepository.storeExternalData(res);
  },
};

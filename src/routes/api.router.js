import { Router } from "express";
import { ApiController } from "../controller/api.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const apiRouter = Router();

apiRouter.get("/data_externa", authMiddleware, ApiController.storeExternalData);

export { apiRouter };

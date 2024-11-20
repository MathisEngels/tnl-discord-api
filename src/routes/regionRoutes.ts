import { idParamsSchema } from "./../schema/commonSchemas";
import { FastifyInstance } from "fastify";
import { createRegion, getAllRegions, removeRegion } from "../controllers/regionController";
import { getServerByRegionId } from "../controllers/serverController";
import { regionIdParams } from "../schema/serverSchemas";

function regionRoutes(app: FastifyInstance): void {
  app.get("/", getAllRegions);
  app.get("/:regionId/servers", { schema: { params: regionIdParams } }, getServerByRegionId);

  app.post("/", createRegion);

  app.delete("/:id", { schema: { params: idParamsSchema } }, removeRegion);
}

export default regionRoutes;

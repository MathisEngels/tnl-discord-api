import { FastifyInstance } from "fastify";
import { getSaurollSubscriber, getSaurollSubscribers, subscribeToSauroll, unsubscribeFromSauroll, updateSaurollSubscription } from "../controllers/saurollController";
import { idParamsSchema } from "../schema/commonSchemas";

function saurollRoutes(app: FastifyInstance): void {
  app.get("/", getSaurollSubscribers);
  app.get("/:id", { schema: { params: idParamsSchema } }, getSaurollSubscriber);

  app.post("/", subscribeToSauroll);
  app.put("/:id", { schema: { params: idParamsSchema } }, updateSaurollSubscription);

  app.delete("/:id", { schema: { params: idParamsSchema } }, unsubscribeFromSauroll);
}

export default saurollRoutes;

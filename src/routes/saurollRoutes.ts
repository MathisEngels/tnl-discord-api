import { FastifyInstance } from "fastify";
import { getSaurollSubscriptionsByGuildId, getSaurollSubscriptions, subscribeToSauroll, unsubscribeFromSauroll, updateSaurollSubscription } from "../controllers/saurollController";
import { idParamsSchema } from "../schema/commonSchemas";

function saurollRoutes(app: FastifyInstance): void {
  app.get("/", getSaurollSubscriptions);
  app.get("/:id", { schema: { params: idParamsSchema } }, getSaurollSubscriptionsByGuildId);

  app.post("/", subscribeToSauroll);
  app.put("/:id", { schema: { params: idParamsSchema } }, updateSaurollSubscription);

  app.delete("/:id", { schema: { params: idParamsSchema } }, unsubscribeFromSauroll);
}

export default saurollRoutes;

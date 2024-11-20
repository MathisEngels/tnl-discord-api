import { FastifyInstance } from "fastify";
import { getGuildWithSauroll } from "../controllers/guildController";

function saurollRoutes(app: FastifyInstance): void {
  app.get("/", getGuildWithSauroll);
}

export default saurollRoutes;

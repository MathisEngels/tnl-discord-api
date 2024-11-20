import { FastifyInstance } from "fastify";
import regionRoutes from "./regionRoutes";
import serverRoutes from "./serverRoutes";
import guildRoutes from "./guildRoutes";
import playerRoutes from "./playerRoutes";
import saurollRoutes from "./saurollRoutes";
import { getGuildWithSauroll } from "../controllers/guildController";

export function registerRoutes(app: FastifyInstance): void {
  app.register(regionRoutes, { prefix: "/regions" });
  app.register(serverRoutes, { prefix: "/servers" });
  app.register(guildRoutes, { prefix: "/guilds" });
  app.register(playerRoutes, { prefix: "/players" });
  
  app.register(saurollRoutes, { prefix: "/sauroll" });
}

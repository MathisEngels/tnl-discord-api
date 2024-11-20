import { FastifyInstance } from "fastify";
import { createServer, removeServer } from "../controllers/serverController";
import { getPlayersByServerId } from "../controllers/playerController";
import { getGuildsByServerId } from "../controllers/guildController";
import { serverIdParamsSchema } from "../schema/guildSchemas";
import { idParamsSchema } from "../schema/commonSchemas";

function serverRoutes(app: FastifyInstance): void {
  app.get("/:serverId/players", { schema: { params: serverIdParamsSchema } }, getPlayersByServerId);
  app.get("/:serverId/guilds", { schema: { params: serverIdParamsSchema } }, getGuildsByServerId);

  app.post("/", createServer);

  app.delete("/:id", { schema: { params: idParamsSchema } }, removeServer);
}

export default serverRoutes;

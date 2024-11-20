import { FastifyInstance } from "fastify";
import { createPlayer, getPlayerByDiscordId, getPlayerById, updatePlayer, updatePlayerDKP } from "../controllers/playerController";
import { discordIdSchema } from "../schema/playerSchemas";
import { idParamsSchema } from "../schema/commonSchemas";

function playerRoutes(app: FastifyInstance): void {
  app.get("/:id", { schema: { params: idParamsSchema } }, getPlayerById);
  app.get("/dc/:discordId", { schema: { params: discordIdSchema } }, getPlayerByDiscordId);

  app.post("/", createPlayer);

  app.put("/:discordId", { schema: { params: discordIdSchema } }, updatePlayer);
  app.put("/:discordId/dkp", { schema: { params: discordIdSchema } }, updatePlayerDKP);
}

export default playerRoutes;

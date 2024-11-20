import { FastifyInstance } from "fastify";
import { getPlayersByGuildId } from "../controllers/playerController";
import { createGuild, deleteGuild, getGuildsByDiscordId, updateGuild } from "../controllers/guildController";
import { discordIdSchema, guildIdParamsSchema } from "../schema/playerSchemas";
import { idParamsSchema } from "../schema/commonSchemas";

function guildRoutes(app: FastifyInstance): void {
  app.get("/:discordId", { schema: { params: discordIdSchema } }, getGuildsByDiscordId);
  app.get("/:guildId/players", { schema: { params: guildIdParamsSchema } }, getPlayersByGuildId);

  app.post("/", createGuild);

  app.put("/:id", { schema: { params: idParamsSchema } }, updateGuild);

  app.delete("/:id", { schema: { params: idParamsSchema } }, deleteGuild);
}

export default guildRoutes;

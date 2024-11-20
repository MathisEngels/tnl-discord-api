import { z } from "zod";

const playerFilterSchema = z.object({
  class: z.string().optional(),
});

export const discordIdSchema = z.object({
  discordId: z.coerce.string(),
});

export const guildIdParamsSchema = z.object({
  guildId: z.coerce.number(),
});

const createPlayerSchema = z.object({
  name: z.string(),
  discordId: z.string(),
  cp: z.number(),
  role: z.string(),
  class: z.string().optional(),
  guildId: z.number().optional(),
  serverId: z.number(),
});

const updatePlayerSchema = z.object({
  name: z.string().optional(),
  cp: z.number().optional(),
  role: z.string().optional(),
  class: z.string().optional(),
  dkp: z.number().optional(),
  guildId: z.number().optional(),
  serverId: z.number().optional(),
});

const updatePlayerDKPBodySchema = z.object({
  dkp: z.number(),
});

export type PlayerFilters = z.infer<typeof playerFilterSchema>;
export type GuildIdParams = z.infer<typeof guildIdParamsSchema>;
export type CreatePlayerInput = z.infer<typeof createPlayerSchema>;
export type DiscordIdParams = z.infer<typeof discordIdSchema>;
export type UpdatePlayerBody = z.infer<typeof updatePlayerSchema>;
export type UpdatePlayerInput = DiscordIdParams & UpdatePlayerBody;
export type UpdatePlayerDKPBody = z.infer<typeof updatePlayerDKPBodySchema>;
export type UpdatePlayerDKPInput = DiscordIdParams & UpdatePlayerDKPBody;

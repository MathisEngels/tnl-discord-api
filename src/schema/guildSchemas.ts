import { z } from "zod";
import { IdParams } from "./commonSchemas";

export const serverIdParamsSchema = z.object({
  serverId: z.coerce.number(),
});

const createGuild = z.object({
  name: z.string(),
  discordGuildId: z.string(),
  serverId: z.number(),
  discordLeaderId: z.string(),
  discordAdvisorIds: z.array(z.string()),
  discordMembersRoleId: z.string()
});

const updateGuild = z.object({
  name: z.string().optional(),
  discordGuildId: z.string().optional(),
  serverId: z.number().optional(),
  discordLeaderId: z.string().optional(),
  discordAdvisorIds: z.array(z.string()).optional(),
  discordMembersRoleId: z.string().optional(),
  discordSaurollChannelId: z.string().optional(),
  discordSaurollRoleId: z.string().optional(),
});

const removeGuild = z.object({
  id: z.number(),
});

export type ServerIdParams = z.infer<typeof serverIdParamsSchema>;
export type CreateGuildInput = z.infer<typeof createGuild>;
export type UpdateGuildBody = z.infer<typeof updateGuild>;
export type UpdateGuildInput = IdParams & UpdateGuildBody;
export type RemoveGuildInput = z.infer<typeof removeGuild>;

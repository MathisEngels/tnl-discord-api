import { z } from "zod";
import { IdParams } from "./commonSchemas";

const createSauroll = z.object({
  discordGuildId: z.string(),
  discordVoiceChannelId: z.string(),
  discordTextChannelId: z.string(),
  discordRoleId: z.string().optional(),
});

const updateSauroll = z.object({
  discordTextChannelId: z.string().optional(),
  discordRoleId: z.string().optional(),
});

const removeSauroll = z.object({
  discordVoiceChannelId: z.string(),
});

export type CreateSaurollInput = z.infer<typeof createSauroll>;
export type UpdateSaurollBody = z.infer<typeof updateSauroll>;
export type UpdateSaurollInput = IdParams & UpdateSaurollBody;
export type RemoveSaurollInput = z.infer<typeof removeSauroll>;

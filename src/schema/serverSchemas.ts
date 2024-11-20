import { z } from "zod";

export const regionIdParams = z.object({
  regionId: z.coerce.number(),
});

const createServerSchema = z.object({
  name: z.string(),
  regionId: z.number(),
});

const removeServerSchema = z.object({
  name: z.string(),
});

export type RegionIdParams = z.infer<typeof regionIdParams>;
export type CreateServerInput = z.infer<typeof createServerSchema>;
export type RemoveServerInput = z.infer<typeof removeServerSchema>;

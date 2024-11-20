import { z } from "zod";

export const idParamsSchema = z.object({
  id: z.coerce.number(),
});

export type IdParams = z.infer<typeof idParamsSchema>;

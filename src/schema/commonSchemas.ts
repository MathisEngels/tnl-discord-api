import { z } from "zod";

export const idParamsSchema = z.object({
  id: z.coerce.string(),
});

export type IdParams = z.infer<typeof idParamsSchema>;

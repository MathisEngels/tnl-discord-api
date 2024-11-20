import { z } from "zod";

const regionSchema = z.object({
  name: z.string(),
  shortname: z.string(),
});

export type RegionInput = z.infer<typeof regionSchema>;

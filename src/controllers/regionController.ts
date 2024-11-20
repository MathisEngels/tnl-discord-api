import { FastifyReply, FastifyRequest } from "fastify";
import regionService from "../services/regionService";
import { RegionInput } from "../schema/regionSchemas";
import { IdParams } from "../schema/commonSchemas";

export async function getAllRegions(_: FastifyRequest, reply: FastifyReply) {
  try {
    const regions = await regionService.getAll();

    return reply.status(200).send(regions);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch regions", message: error });
  }
}

export async function createRegion(req: FastifyRequest<{ Body: RegionInput }>, reply: FastifyReply) {
  try {
    const region = await regionService.create(req.body);

    return reply.status(201).send(region);
  } catch (error) {
    reply.status(500).send({ error: "Failed to create region" });
  }
}

export async function removeRegion(req: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply) {
  try {
    await regionService.remove(req.params);

    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send({ error: "Failed to delete region" });
  }
}
